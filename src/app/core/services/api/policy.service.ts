import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for Policy Module (13 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class PolicyApiService extends BaseApiService {
  /**
   * Tạo mới chính sách - [POST] /Policy/SetPriceSales
   */
  setPriceSales(body?: Models.NTSetPriceSalesReq): Observable<Models.NTSetPriceSalesRes> {
    return this.post<Models.NTSetPriceSalesRes>('/Policy/SetPriceSales', body);
  }
  /**
   * Lấy danh sách chính sách - [POST] /Policy/GetPriceSalesLst
   */
  getPriceSalesLst(body?: Models.NTGetPriceSalesLstReq): Observable<Models.NTGetPriceSalesLstRes> {
    return this.post<Models.NTGetPriceSalesLstRes>('/Policy/GetPriceSalesLst', body);
  }
  /**
   * Lấy danh sách sản phẩm mới đổi giá - [POST] /Policy/GetPriceNewLst
   */
  getPriceNewLst(body?: Models.NTGetPriceNewLstReq): Observable<Models.NTGetPriceNewLstRes> {
    return this.post<Models.NTGetPriceNewLstRes>('/Policy/GetPriceNewLst', body);
  }
  /**
   * Lấy danh sách chính sách - [POST] /Policy/GetPriceSalesByProductID
   */
  getPriceSalesByProductID(body?: Models.NTGetPriceSalesByProductIDReq): Observable<Models.NTGetPriceSalesByProductIDRes> {
    return this.post<Models.NTGetPriceSalesByProductIDRes>('/Policy/GetPriceSalesByProductID', body);
  }
  /**
   * Lấy thông tin giá bán của 1 sản phẩm - [POST] /Policy/GetPriceSalesApByProductID
   */
  getPriceSalesApByProductID(body?: Models.NTGetPriceSalesByProductIDReq): Observable<Models.NTGetPriceSalesByProductIDRes> {
    return this.post<Models.NTGetPriceSalesByProductIDRes>('/Policy/GetPriceSalesApByProductID', body);
  }
  /**
   * Xóa chính sách bán - [POST] /Policy/DelPriceSales
   */
  delPriceSales(body?: Models.NTDelPriceSalesReq): Observable<Models.NTDelPriceSalesRes> {
    return this.post<Models.NTDelPriceSalesRes>('/Policy/DelPriceSales', body);
  }
  /**
   * POST Policy/GetPointSalesDefineLst - [POST] /Policy/GetPointSalesDefineLst
   */
  getPointSalesDefineLst(body?: Models.NTGetPointSalesDefineLstReq): Observable<Models.NTGetPointSalesDefineLstRes> {
    return this.post<Models.NTGetPointSalesDefineLstRes>('/Policy/GetPointSalesDefineLst', body);
  }
  /**
   * POST Policy/UpdatePointSalesDefine - [POST] /Policy/UpdatePointSalesDefine
   */
  updatePointSalesDefine(body?: Models.NTUpdatePointSalesDefineReq): Observable<Models.NTUpdatePointSalesDefineRes> {
    return this.post<Models.NTUpdatePointSalesDefineRes>('/Policy/UpdatePointSalesDefine', body);
  }
  /**
   * POST Policy/GetPointSalesEmLst - [POST] /Policy/GetPointSalesEmLst
   */
  getPointSalesEmLst(body?: Models.NTGetPointSalesEmLstReq): Observable<Models.NTGetPointSalesEmLstRes> {
    return this.post<Models.NTGetPointSalesEmLstRes>('/Policy/GetPointSalesEmLst', body);
  }
  /**
   * POST Policy/GetPointSalesEmDetailLst - [POST] /Policy/GetPointSalesEmDetailLst
   */
  getPointSalesEmDetailLst(body?: Models.NTGetPointSalesEmDetailLstReq): Observable<Models.NTGetPointSalesEmDetailLstRes> {
    return this.post<Models.NTGetPointSalesEmDetailLstRes>('/Policy/GetPointSalesEmDetailLst', body);
  }
  /**
   * Lấy thông tin đào tạo sản phẩm hệ số - [POST] /Policy/GetPointSalesMore
   */
  getPointSalesMore(body?: Models.NTGetPointSalesMoreReq): Observable<Models.NTGetPointSalesMoreRes> {
    return this.post<Models.NTGetPointSalesMoreRes>('/Policy/GetPointSalesMore', body);
  }
  /**
   * Cập nhật thông tin đào tạo sản phẩm hệ số - [POST] /Policy/UpdatePointSalesMore
   */
  updatePointSalesMore(body?: Models.NTUpdatePointSalesMoreReq): Observable<Models.NTUpdatePointSalesMoreRes> {
    return this.post<Models.NTUpdatePointSalesMoreRes>('/Policy/UpdatePointSalesMore', body);
  }
  /**
   * Cập nhật thông tin đào tạo sản phẩm hệ số - [POST] /Policy/CheckProductPrint
   */
  checkProductPrint(body?: Models.NTCheckProductPrintReq): Observable<Models.NTCheckProductPrintRes> {
    return this.post<Models.NTCheckProductPrintRes>('/Policy/CheckProductPrint', body);
  }
}
