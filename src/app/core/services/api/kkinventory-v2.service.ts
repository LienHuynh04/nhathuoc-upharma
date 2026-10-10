import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for KKInventoryV2 Module (2 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class KKInventoryV2ApiService extends BaseApiService {
  /**
   * Lấy danh mục cần kiểm kê của SHOP trong ngày - [POST] /KKInventory/GetProductToCheck
   */
  getProductToCheck(body?: Models.KKGetProductToCheckReq): Observable<Models.KKGetProductToCheckRes> {
    return this.post<Models.KKGetProductToCheckRes>('/KKInventory/GetProductToCheck', body);
  }
  /**
   * Tạo phiếu kiểm kê nhà thuốc Ver2 - [POST] /KKInventory/CreateInventoryBySeller
   */
  createInventoryBySeller(body?: Models.KKCreateInventoryBySellerReq): Observable<Models.KKCreateInventoryBySellerRes> {
    return this.post<Models.KKCreateInventoryBySellerRes>('/KKInventory/CreateInventoryBySeller', body);
  }
}
