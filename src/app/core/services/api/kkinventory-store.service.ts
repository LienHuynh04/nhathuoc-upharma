import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for KKInventoryStore Module (3 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class KKInventoryStoreApiService extends BaseApiService {
  /**
   * Tạo mới phiếu kiểm kê - [POST] /KKInventory/CreateInventoryByStore
   */
  createInventoryByStore(body?: Models.KKCreateInventoryByStoreReq): Observable<Models.KKCreateInventoryByStoreRes> {
    return this.post<Models.KKCreateInventoryByStoreRes>('/KKInventory/CreateInventoryByStore', body);
  }
  /**
   * Cập nhật phiếu kiểm kê - [POST] /KKInventory/CreateInventoryLineByStore
   */
  createInventoryLineByStore(body?: Models.KKCreateInventoryLineByStoreReq): Observable<Models.KKCreateInventoryLineByStoreRes> {
    return this.post<Models.KKCreateInventoryLineByStoreRes>('/KKInventory/CreateInventoryLineByStore', body);
  }
  /**
   * Duyệt phiếu kiểm kê - [POST] /KKInventory/ApproveInventoryByStore
   */
  approveInventoryByStore(body?: Models.KKApproveInventoryByStoreReq): Observable<Models.KKApproveInventoryByStoreRes> {
    return this.post<Models.KKApproveInventoryByStoreRes>('/KKInventory/ApproveInventoryByStore', body);
  }
}
