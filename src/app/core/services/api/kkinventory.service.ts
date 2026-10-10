import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for KKInventory Module (12 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class KKInventoryApiService extends BaseApiService {
  /**
   * Tạo mới phiếu kiểm kê - [POST] /KKInventory/CreateInventoryInfo
   */
  createInventoryInfo(body?: Models.KKCreateInventoryInfoReq): Observable<Models.KKCreateInventoryInfoRes> {
    return this.post<Models.KKCreateInventoryInfoRes>('/KKInventory/CreateInventoryInfo', body);
  }
  /**
   * Tạo mới phiếu kiểm kê cho kế toán - [POST] /KKInventory/CreateInventoryByKT
   */
  createInventoryByKT(body?: Models.KKCreateInventoryByKTReq): Observable<Models.KKCreateInventoryByKTRes> {
    return this.post<Models.KKCreateInventoryByKTRes>('/KKInventory/CreateInventoryByKT', body);
  }
  /**
   * Phê duyệt phiếu kiểm kê - [POST] /KKInventory/ApproveInventoryInfo
   */
  approveInventoryInfo(body?: Models.KKApproveInventoryInfoReq): Observable<Models.KKApproveInventoryInfoRes> {
    return this.post<Models.KKApproveInventoryInfoRes>('/KKInventory/ApproveInventoryInfo', body);
  }
  /**
   * Hủy phiếu kiểm kê - [POST] /KKInventory/DelInventoryInfo
   */
  delInventoryInfo(body?: Models.KKDelInventoryInfoReq): Observable<Models.KKDelInventoryInfoRes> {
    return this.post<Models.KKDelInventoryInfoRes>('/KKInventory/DelInventoryInfo', body);
  }
  /**
   * Lấy danh sách phiếu kiểm kê theo thời gian - [POST] /KKInventory/GetInventoryLstByTime
   */
  getInventoryLstByTime(body?: Models.KKGetInventoryLstByTimeReq): Observable<Models.KKGetInventoryLstByTimeRes> {
    return this.post<Models.KKGetInventoryLstByTimeRes>('/KKInventory/GetInventoryLstByTime', body);
  }
  /**
   * check mã lô nhảy - [POST] /KKInventory/CheckLotCodeIndex
   */
  checkLotCodeIndex(body?: Models.KKCheckLotCodeIndexReq): Observable<Models.KKCheckLotCodeIndexRes> {
    return this.post<Models.KKCheckLotCodeIndexRes>('/KKInventory/CheckLotCodeIndex', body);
  }
  /**
   * POST KKInventory/GetInventoryInfo - [POST] /KKInventory/GetInventoryInfo
   */
  getInventoryInfo(body?: Models.KKGetInventoryInfoReq): Observable<Models.KKGetInventoryInfoRes> {
    return this.post<Models.KKGetInventoryInfoRes>('/KKInventory/GetInventoryInfo', body);
  }
  /**
   * Láy danh sách các sản phẩm kiểm kê lỗi - [POST] /KKInventory/GetProductError
   */
  getProductError(body?: Models.KKGetProductErrorReq): Observable<Models.KKGetProductErrorRes> {
    return this.post<Models.KKGetProductErrorRes>('/KKInventory/GetProductError', body);
  }
  /**
   * Lấy danh sách tần suất kiểm kê - [POST] /KKInventory/GetFrequencyProduct
   */
  getFrequencyProduct(body?: Models.KKGetFrequencyProductReq): Observable<Models.KKGetFrequencyProductRes> {
    return this.post<Models.KKGetFrequencyProductRes>('/KKInventory/GetFrequencyProduct', body);
  }
  /**
   * Lấy danh sách kiểm kê theo sản phẩm - [POST] /KKInventory/GetInventoryLstByPID
   */
  getInventoryLstByPID(body?: Models.KKGetInventoryLstByPIDReq): Observable<Models.KKGetInventoryLstByPIDRes> {
    return this.post<Models.KKGetInventoryLstByPIDRes>('/KKInventory/GetInventoryLstByPID', body);
  }
  /**
   * Lấy danh sách tem kiểm kê theo sản phẩm - [POST] /KKInventory/GetInventoryLotLstByPID
   */
  getInventoryLotLstByPID(body?: Models.KKGetInventoryLotLstByPIDReq): Observable<Models.KKGetInventoryLotLstByPIDRes> {
    return this.post<Models.KKGetInventoryLotLstByPIDRes>('/KKInventory/GetInventoryLotLstByPID', body);
  }
  /**
   * Lấy danh sách tem kiểm kê theo sản phẩm - [POST] /KKInventory/HandleProductError
   */
  handleProductError(body?: Models.KKHandleProductErrorReq): Observable<Models.KKHandleProductErrorRes> {
    return this.post<Models.KKHandleProductErrorRes>('/KKInventory/HandleProductError', body);
  }
}
