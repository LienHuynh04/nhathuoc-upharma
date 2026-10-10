import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for LocalStore Module (12 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStoreApiService extends BaseApiService {
  /**
   * Lấy thông tin đơn hàng - [POST] /LocalStore/GetLocalStoreLst
   */
  getLocalStoreLst(body?: Models.NTGetLocalStoreLstReq): Observable<Models.NTGetLocalStoreLstRes> {
    return this.post<Models.NTGetLocalStoreLstRes>('/LocalStore/GetLocalStoreLst', body);
  }
  /**
   * Lấy thông tin tồn kho - [POST] /LocalStore/GetInventoryByShopID
   */
  getInventoryByShopID(body?: Models.NTGetInventoryByShopIDReq): Observable<Models.NTGetInventoryByShopIDRes> {
    return this.post<Models.NTGetInventoryByShopIDRes>('/LocalStore/GetInventoryByShopID', body);
  }
  /**
   * Lấy thông tin tồn kho cho gọi hàng - [POST] /LocalStore/GetInventoryByPickLot
   */
  getInventoryByPickLot(body?: Models.NTGetInventoryByShopIDReq): Observable<Models.NTGetInventoryByShopIDRes> {
    return this.post<Models.NTGetInventoryByShopIDRes>('/LocalStore/GetInventoryByPickLot', body);
  }
  /**
   * Lấy thông tin tồn kho nhiều trung tâm - [POST] /LocalStore/GetInventorySystem
   */
  getInventorySystem(body?: Models.NTGetInventorySystemReq): Observable<Models.NTGetInventorySystemRes> {
    return this.post<Models.NTGetInventorySystemRes>('/LocalStore/GetInventorySystem', body);
  }
  /**
   * Lấy thông tin tồn kho nhiều Shop - [POST] /LocalStore/GetInventoryShop
   */
  getInventoryShop(body?: Models.NTGetInventoryShopReq): Observable<Models.NTGetInventoryShopRes> {
    return this.post<Models.NTGetInventoryShopRes>('/LocalStore/GetInventoryShop', body);
  }
  /**
   * Lấy thông tin tồn kho các hàng cận date - [POST] /LocalStore/GetInventoryExpiration
   */
  getInventoryExpiration(body?: Models.NTGetInventoryShopReq): Observable<Models.NTGetInventoryShopRes> {
    return this.post<Models.NTGetInventoryShopRes>('/LocalStore/GetInventoryExpiration', body);
  }
  /**
   * Lấy thông tin tồn kho các hàng cận date - [POST] /LocalStore/GetInventoryExpirationForPromo
   */
  getInventoryExpirationForPromo(body?: Models.NTGetInventoryShopReq): Observable<Models.NTGetInventoryShopRes> {
    return this.post<Models.NTGetInventoryShopRes>('/LocalStore/GetInventoryExpirationForPromo', body);
  }
  /**
   * Lấy thông tin về tồn lô nhảy - [POST] /LocalStore/GetLotCodeIndexExistByShop
   */
  getLotCodeIndexExistByShop(body?: Models.NTGetLotCodeIndexExistByShopReq): Observable<Models.NTGetLotCodeIndexExistByShopRes> {
    return this.post<Models.NTGetLotCodeIndexExistByShopRes>('/LocalStore/GetLotCodeIndexExistByShop', body);
  }
  /**
   * Lấy thông tin về tồn lô nhảy - [POST] /LocalStore/GetLotCodeIndexExistByCenter
   */
  getLotCodeIndexExistByCenter(body?: Models.NTGetLotCodeIndexExistByShopReq): Observable<Models.NTGetLotCodeIndexExistByShopRes> {
    return this.post<Models.NTGetLotCodeIndexExistByShopRes>('/LocalStore/GetLotCodeIndexExistByCenter', body);
  }
  /**
   * Lấy thông tin về tồn lô nhảy - [POST] /LocalStore/GetLotCodeIndexExist
   */
  getLotCodeIndexExist(body?: Models.NTGetLotCodeIndexExistByShopReq): Observable<Models.NTGetLotCodeIndexExistByShopRes> {
    return this.post<Models.NTGetLotCodeIndexExistByShopRes>('/LocalStore/GetLotCodeIndexExist', body);
  }
  /**
   * Lấy thông tin thẻ kho - [POST] /LocalStore/GetStoreCardByProductID
   */
  getStoreCardByProductID(body?: Models.NTGetStoreCardByProductIDReq): Observable<Models.NTGetStoreCardByProductIDRes> {
    return this.post<Models.NTGetStoreCardByProductIDRes>('/LocalStore/GetStoreCardByProductID', body);
  }
  /**
   * Lấy thông tin hàng chậm luân chuyển - [POST] /LocalStore/GetProductUnTransferLst
   */
  getProductUnTransferLst(body?: Models.ADGetProductUnsoldLstReq): Observable<Models.ADGetProductUnsoldLstRes> {
    return this.post<Models.ADGetProductUnsoldLstRes>('/LocalStore/GetProductUnTransferLst', body);
  }
}
