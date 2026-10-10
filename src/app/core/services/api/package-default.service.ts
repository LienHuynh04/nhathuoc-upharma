import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for PackageDefault Module (3 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class PackageDefaultApiService extends BaseApiService {
  /**
   * Lấy danh sách quy cách - [POST] /PackageDefault/GetPackageDefaultLst
   */
  getPackageDefaultLst(body?: Models.NTGetPackageDefaultLstReq): Observable<Models.NTGetPackageDefaultLstRes> {
    return this.post<Models.NTGetPackageDefaultLstRes>('/PackageDefault/GetPackageDefaultLst', body);
  }
  /**
   * Cập nhật quy cách mặc định - [POST] /PackageDefault/UpdatePackageDefault
   */
  updatePackageDefault(body?: Models.NTUpdatePackageDefaultReq): Observable<Models.NTUpdatePackageDefaultRes> {
    return this.post<Models.NTUpdatePackageDefaultRes>('/PackageDefault/UpdatePackageDefault', body);
  }
  /**
   * Cập nhật quy cách mặc định - [POST] /PackageDefault/DelPackageDefault
   */
  delPackageDefault(body?: Models.NTDelPackageDefaultReq): Observable<Models.NTDelPackageDefaultRes> {
    return this.post<Models.NTDelPackageDefaultRes>('/PackageDefault/DelPackageDefault', body);
  }
}
