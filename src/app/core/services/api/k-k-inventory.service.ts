import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for KKInventory Module (17 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class KKInventoryApiService extends BaseApiService {

  /**
   * Tạo mới phiếu kiểm kê - [POST] /KKInventory/CreateInventoryByStore
   */
  createinventorybystore(body?: any): Observable<any> {
    return this.post<any>('/KKInventory/CreateInventoryByStore', body);
  }

  /**
   * Cập nhật phiếu kiểm kê - [POST] /KKInventory/CreateInventoryLineByStore
   */
  createinventorylinebystore(body?: any): Observable<any> {
    return this.post<any>('/KKInventory/CreateInventoryLineByStore', body);
  }

  /**
   * Duyệt phiếu kiểm kê - [POST] /KKInventory/ApproveInventoryByStore
   */
  approveinventorybystore(body?: any): Observable<any> {
    return this.post<any>('/KKInventory/ApproveInventoryByStore', body);
  }

  /**
   * Lấy danh mục cần kiểm kê của SHOP trong ngày - [POST] /KKInventory/GetProductToCheck
   */
  getproducttocheck(body?: any): Observable<any> {
    return this.post<any>('/KKInventory/GetProductToCheck', body);
  }

  /**
   * Tạo phiếu kiểm kê nhà thuốc Ver2 - [POST] /KKInventory/CreateInventoryBySeller
   */
  createinventorybyseller(body?: any): Observable<any> {
    return this.post<any>('/KKInventory/CreateInventoryBySeller', body);
  }

  /**
   * Tạo mới phiếu kiểm kê - [POST] /KKInventory/CreateInventoryInfo
   */
  createinventoryinfo(body?: any): Observable<any> {
    return this.post<any>('/KKInventory/CreateInventoryInfo', body);
  }

  /**
   * Tạo mới phiếu kiểm kê cho kế toán - [POST] /KKInventory/CreateInventoryByKT
   */
  createinventorybykt(body?: any): Observable<any> {
    return this.post<any>('/KKInventory/CreateInventoryByKT', body);
  }

  /**
   * Phê duyệt phiếu kiểm kê - [POST] /KKInventory/ApproveInventoryInfo
   */
  approveinventoryinfo(body?: any): Observable<any> {
    return this.post<any>('/KKInventory/ApproveInventoryInfo', body);
  }

  /**
   * Hủy phiếu kiểm kê - [POST] /KKInventory/DelInventoryInfo
   */
  delinventoryinfo(body?: any): Observable<any> {
    return this.post<any>('/KKInventory/DelInventoryInfo', body);
  }

  /**
   * Lấy danh sách phiếu kiểm kê theo thời gian - [POST] /KKInventory/GetInventoryLstByTime
   */
  getinventorylstbytime(body?: any): Observable<any> {
    return this.post<any>('/KKInventory/GetInventoryLstByTime', body);
  }

  /**
   * check mã lô nhảy - [POST] /KKInventory/CheckLotCodeIndex
   */
  checklotcodeindex(body?: any): Observable<any> {
    return this.post<any>('/KKInventory/CheckLotCodeIndex', body);
  }

  /**
   * POST KKInventory/GetInventoryInfo - [POST] /KKInventory/GetInventoryInfo
   */
  getinventoryinfo(body?: any): Observable<any> {
    return this.post<any>('/KKInventory/GetInventoryInfo', body);
  }

  /**
   * Láy danh sách các sản phẩm kiểm kê lỗi - [POST] /KKInventory/GetProductError
   */
  getproducterror(body?: any): Observable<any> {
    return this.post<any>('/KKInventory/GetProductError', body);
  }

  /**
   * Lấy danh sách tần suất kiểm kê - [POST] /KKInventory/GetFrequencyProduct
   */
  getfrequencyproduct(body?: any): Observable<any> {
    return this.post<any>('/KKInventory/GetFrequencyProduct', body);
  }

  /**
   * Lấy danh sách kiểm kê theo sản phẩm - [POST] /KKInventory/GetInventoryLstByPID
   */
  getinventorylstbypid(body?: any): Observable<any> {
    return this.post<any>('/KKInventory/GetInventoryLstByPID', body);
  }

  /**
   * Lấy danh sách tem kiểm kê theo sản phẩm - [POST] /KKInventory/GetInventoryLotLstByPID
   */
  getinventorylotlstbypid(body?: any): Observable<any> {
    return this.post<any>('/KKInventory/GetInventoryLotLstByPID', body);
  }

  /**
   * Lấy danh sách tem kiểm kê theo sản phẩm - [POST] /KKInventory/HandleProductError
   */
  handleproducterror(body?: any): Observable<any> {
    return this.post<any>('/KKInventory/HandleProductError', body);
  }
}
