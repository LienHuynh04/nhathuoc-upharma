import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ShopGroup Module (4 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ShopGroupApiService extends BaseApiService {
  /**
   * Lấy danh sách nhóm cửa hàng - [POST] /ShopGroup/GetGShopLst
   */
  getGShopLst(body?: Models.NTGetGShopLstReq): Observable<Models.NTGetGShopLstRes> {
    return this.post<Models.NTGetGShopLstRes>('/ShopGroup/GetGShopLst', body);
  }
  /**
   * Lấy danh sách nhóm cửa hàng - [POST] /ShopGroup/GetGShopLineLst
   */
  getGShopLineLst(body?: Models.NTGetGShopLineLstReq): Observable<Models.NTGetGShopLineLstRes> {
    return this.post<Models.NTGetGShopLineLstRes>('/ShopGroup/GetGShopLineLst', body);
  }
  /**
   * Xóa nhóm cửa hàng - [POST] /ShopGroup/DelGShop
   */
  delGShop(body?: Models.NTDelGShopReq): Observable<Models.NTDelGShopRes> {
    return this.post<Models.NTDelGShopRes>('/ShopGroup/DelGShop', body);
  }
  /**
   * Xóa nhóm cửa hàng - [POST] /ShopGroup/UpdateGShop
   */
  updateGShop(body?: Models.NTUpdateGShopReq): Observable<Models.NTUpdateGShopRes> {
    return this.post<Models.NTUpdateGShopRes>('/ShopGroup/UpdateGShop', body);
  }
}
