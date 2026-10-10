import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for SupplierFollower Module (3 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class SupplierFollowerApiService extends BaseApiService {
  /**
   * Lấy thông tin phân quyền theo dõi khách hàng - [POST] /SupplierFollower/GetUserSupplier
   */
  getUserSupplier(body?: Models.NTGetUserSupplierReq): Observable<Models.NTGetUserSupplierRes> {
    return this.post<Models.NTGetUserSupplierRes>('/SupplierFollower/GetUserSupplier', body);
  }
  /**
   * Phân công theo dõi nhà cung cấp - [POST] /SupplierFollower/AddUserSupplier
   */
  addUserSupplier(body?: Models.NTAddUserSupplierReq): Observable<Models.NTAddUserSupplierRes> {
    return this.post<Models.NTAddUserSupplierRes>('/SupplierFollower/AddUserSupplier', body);
  }
  /**
   * Xóa phân công theo dõi nhà cung cấp - [POST] /SupplierFollower/DelUserSupplier
   */
  delUserSupplier(body?: Models.NTDelUserSupplierReq): Observable<Models.NTDelUserSupplierRes> {
    return this.post<Models.NTDelUserSupplierRes>('/SupplierFollower/DelUserSupplier', body);
  }
}
