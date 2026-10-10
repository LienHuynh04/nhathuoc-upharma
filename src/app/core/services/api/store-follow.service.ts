import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for StoreFollow Module (2 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class StoreFollowApiService extends BaseApiService {
  /**
   * Lấy thông tin phân loại kho - [POST] /StoreFollow/GetStoreFollowLst
   */
  getStoreFollowLst(body?: Models.NTGetStoreFollowLstReq): Observable<Models.NTGetStoreFollowLstRes> {
    return this.post<Models.NTGetStoreFollowLstRes>('/StoreFollow/GetStoreFollowLst', body);
  }
  /**
   * Lấy thông tin phân loại kho - [POST] /StoreFollow/UpdateStoreFollowLst
   */
  updateStoreFollowLst(body?: Models.NTUpdateStoreFollowLstReq): Observable<Models.NTUpdateStoreFollowLstRes> {
    return this.post<Models.NTUpdateStoreFollowLstRes>('/StoreFollow/UpdateStoreFollowLst', body);
  }
}
