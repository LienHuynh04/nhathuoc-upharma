import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ProductGroup Module (2 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ProductGroupApiService extends BaseApiService {
  /**
   * Lấy thông tin phân chia nhóm sản phẩm - [POST] /ProductGroup/GetUserProductGroup
   */
  getUserProductGroup(body?: Models.NTGetUserProductGroupReq): Observable<Models.NTGetUserProductGroupRes> {
    return this.post<Models.NTGetUserProductGroupRes>('/ProductGroup/GetUserProductGroup', body);
  }
  /**
   * Lấy thông tin phân chia nhóm sản phẩm - [POST] /ProductGroup/AddUserProductGroup
   */
  addUserProductGroup(body?: Models.NTAddUserProductGroupReq): Observable<Models.NTAddUserProductGroupRes> {
    return this.post<Models.NTAddUserProductGroupRes>('/ProductGroup/AddUserProductGroup', body);
  }
}
