import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for Promotion Module (8 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class PromotionApiService extends BaseApiService {
  /**
   * POST Promotion/CreatePromoHeader - [POST] /Promotion/CreatePromoHeader
   */
  createPromoHeader(body?: Models.NTCreatePromoHeaderReq): Observable<Models.NTCreatePromoHeaderRes> {
    return this.post<Models.NTCreatePromoHeaderRes>('/Promotion/CreatePromoHeader', body);
  }
  /**
   * POST Promotion/UpdatePromoHeader - [POST] /Promotion/UpdatePromoHeader
   */
  updatePromoHeader(body?: Models.NTUpdatePromoHeaderReq): Observable<Models.NTUpdatePromoHeaderRes> {
    return this.post<Models.NTUpdatePromoHeaderRes>('/Promotion/UpdatePromoHeader', body);
  }
  /**
   * POST Promotion/DelPromoHeader - [POST] /Promotion/DelPromoHeader
   */
  delPromoHeader(body?: Models.NTDelPromoHeaderReq): Observable<Models.NTDelPromoHeaderRes> {
    return this.post<Models.NTDelPromoHeaderRes>('/Promotion/DelPromoHeader', body);
  }
  /**
   * Lấy dánh sách khuyến mại toàn hệ thống - [POST] /Promotion/GetPromoHeaderLst
   */
  getPromoHeaderLst(body?: Models.NTGetPromoHeaderLstReq): Observable<Models.NTGetPromoHeaderLstRes> {
    return this.post<Models.NTGetPromoHeaderLstRes>('/Promotion/GetPromoHeaderLst', body);
  }
  /**
   * Lấy dánh sách khuyến mại theo Shop - [POST] /Promotion/GetPromoHeaderLstByShop
   */
  getPromoHeaderLstByShop(body?: Models.NTGetPromoHeaderLstByShopReq): Observable<Models.NTGetPromoHeaderLstByShopRes> {
    return this.post<Models.NTGetPromoHeaderLstByShopRes>('/Promotion/GetPromoHeaderLstByShop', body);
  }
  /**
   * Lấy CT khuyến mại theo ID - [POST] /Promotion/GetPromoHeaderByID
   */
  getPromoHeaderByID(body?: Models.NTGetPromoHeaderByIDReq): Observable<Models.NTGetPromoHeaderByIDRes> {
    return this.post<Models.NTGetPromoHeaderByIDRes>('/Promotion/GetPromoHeaderByID', body);
  }
  /**
   * Cập nhật chính sách KM theo Shop - [POST] /Promotion/UpdatePromoShop
   */
  updatePromoShop(body?: Models.NTUpdatePromoShopReq): Observable<Models.NTUpdatePromoShopRes> {
    return this.post<Models.NTUpdatePromoShopRes>('/Promotion/UpdatePromoShop', body);
  }
  /**
   * Lấy các shop có ct khuyến mại - [POST] /Promotion/GetPromoShopLst
   */
  getPromoShopLst(body?: Models.NTGetPromoShopLstReq): Observable<Models.NTGetPromoShopLstRes> {
    return this.post<Models.NTGetPromoShopLstRes>('/Promotion/GetPromoShopLst', body);
  }
}
