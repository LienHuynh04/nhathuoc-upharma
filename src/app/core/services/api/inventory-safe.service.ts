import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for InventorySafe Module (6 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class InventorySafeApiService extends BaseApiService {
  /**
   * Tạo mới phiếu kiểm kê - [POST] /InventorySafe/GetInventorySystemSafe
   */
  getInventorySystemSafe(body?: Models.NTGetInventorySystemSafeReq): Observable<Models.NTGetInventorySystemSafeRes> {
    return this.post<Models.NTGetInventorySystemSafeRes>('/InventorySafe/GetInventorySystemSafe', body);
  }
  /**
   * Tạo mới phiếu kiểm kê - [POST] /InventorySafe/SetInventorySystemSafe
   */
  setInventorySystemSafe(body?: Models.NTSetInventorySystemSafeReq): Observable<Models.NTSetInventorySystemSafeRes> {
    return this.post<Models.NTSetInventorySystemSafeRes>('/InventorySafe/SetInventorySystemSafe', body);
  }
  /**
   * Tạo mới phiếu kiểm kê - [POST] /InventorySafe/GetInventoryShopSafe
   */
  getInventoryShopSafe(body?: Models.NTGetInventoryShopSafeReq): Observable<Models.NTGetInventoryShopSafeRes> {
    return this.post<Models.NTGetInventoryShopSafeRes>('/InventorySafe/GetInventoryShopSafe', body);
  }
  /**
   * Tạo mới phiếu kiểm kê - [POST] /InventorySafe/SetInventoryShopSafe
   */
  setInventoryShopSafe(body?: Models.NTSetInventoryShopSafeReq): Observable<Models.NTSetInventoryShopSafeRes> {
    return this.post<Models.NTSetInventoryShopSafeRes>('/InventorySafe/SetInventoryShopSafe', body);
  }
  /**
   * Xóa tồn kho an toàn - [POST] /InventorySafe/DelInventoryShopSafe
   */
  delInventoryShopSafe(body?: Models.NTDelInventoryShopSafeReq): Observable<Models.NTDelInventoryShopSafeRes> {
    return this.post<Models.NTDelInventoryShopSafeRes>('/InventorySafe/DelInventoryShopSafe', body);
  }
  /**
   * Xóa tồn kho an toàn mặc định - [POST] /InventorySafe/DelInventorySystemSafe
   */
  delInventorySystemSafe(body?: Models.NTDelInventorySystemSafeReq): Observable<Models.NTDelInventorySystemSafeRes> {
    return this.post<Models.NTDelInventorySystemSafeRes>('/InventorySafe/DelInventorySystemSafe', body);
  }
}
