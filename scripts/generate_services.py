import json
import re
import os
from collections import defaultdict

def to_kebab(name):
    s = re.sub(r'([a-z0-9])([A-Z])', r'\1-\2', name)
    s = s.replace('_', '-').lower()
    return re.sub(r'-+', '-', s)

def to_camel(name):
    # remove special chars
    name = re.sub(r'[^a-zA-Z0-9_]', '', name)
    if not name:
        return 'apiMethod'
    return name[0].lower() + name[1:]

with open('openapi_swagger.json', 'r', encoding='utf-8') as f:
    sw = json.load(f)

paths = sw.get('paths', {})
tags_map = defaultdict(list)

for path, methods in paths.items():
    for method, details in methods.items():
        tags = details.get('tags', [])
        tag = tags[0] if tags else path.strip('/').split('/')[0]
        tags_map[tag].append((path, method.lower(), details))

out_dir = 'nhathuoc-web/src/app/core/services/api'
os.makedirs(out_dir, exist_ok=True)

service_exports = []

for tag, endpoints in sorted(tags_map.items()):
    file_base = to_kebab(tag)
    file_name = f'{file_base}.service.ts'
    class_name = f'{tag}ApiService'
    
    methods_code = []
    seen_methods = set()
    
    for path, http_method, details in endpoints:
        summary = details.get('summary', '').replace('\n', ' ')
        raw_action = path.split('?')[0].strip('/').split('/')[-1]
        mname = to_camel(raw_action)
        
        # Disambiguate if needed
        base_mname = mname
        counter = 2
        while mname in seen_methods:
            mname = f'{base_mname}_{counter}'
            counter += 1
        seen_methods.add(mname)
        
        # Extract request body model
        req_type = 'any'
        rb = details.get('requestBody', {})
        schema = rb.get('content', {}).get('application/json', {}).get('schema', {})
        if '$ref' in schema:
            req_type = 'Models.' + schema['$ref'].split('/')[-1]
            
        # Extract response model
        res_type = 'any'
        res_200 = details.get('responses', {}).get('200', {})
        res_schema = res_200.get('content', {}).get('application/json', {}).get('schema', {})
        if '$ref' in res_schema:
            res_type = 'Models.' + res_schema['$ref'].split('/')[-1]
            
        endpoint_url = path.split('?')[0] # Clean base endpoint
        
        if http_method in ('post', 'put', 'patch'):
            method_str = f"""  /**
   * {summary} - [{http_method.upper()}] {path}
   */
  {mname}(body?: {req_type}): Observable<{res_type}> {{
    return this.{http_method}<{res_type}>('{endpoint_url}', body);
  }}"""
        else:
            method_str = f"""  /**
   * {summary} - [{http_method.upper()}] {path}
   */
  {mname}(params?: any): Observable<{res_type}> {{
    return this.{http_method}<{res_type}>('{endpoint_url}', params);
  }}"""
        methods_code.append(method_str)
        
    code_content = f"""import {{ Injectable }} from '@angular/core';
import {{ Observable }} from 'rxjs';
import {{ BaseApiService }} from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for {tag} Module ({len(endpoints)} endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({{
  providedIn: 'root'
}})
export class {class_name} extends BaseApiService {{
{chr(10).join(methods_code)}
}}
"""
    file_path = os.path.join(out_dir, file_name)
    with open(file_path, 'w', encoding='utf-8') as f_out:
        f_out.write(code_content)
        
    service_exports.append(f"export * from './{file_base}.service';")

# Export all in index.ts
index_path = os.path.join(out_dir, 'index.ts')
with open(index_path, 'w', encoding='utf-8') as f_idx:
    f_idx.write("export * from './base-api.service';\n" + '\n'.join(service_exports) + '\n')

print(f'Successfully generated {len(tags_map)} service classes and index.ts')
