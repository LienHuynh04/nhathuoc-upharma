import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ReturnShop Module (8 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ReturnShopApiService extends BaseApiService {
  /**
   * Tạo lại phiếu trả lại hàng - [POST] /ReturnShop/CreateReturnShop
   */
  createReturnShop(body?: Models.NTCreateReturnShopReq): Observable<Models.NTCreateReturnShopRes> {
    return this.post<Models.NTCreateReturnShopRes>('/ReturnShop/CreateReturnShop', body);
  }
  /**
   * Xóa phiếu trả lại hàng - [POST] /ReturnShop/DelReturnShop
   */
  delReturnShop(body?: Models.NTDelReturnShopReq): Observable<Models.NTDelReturnShopRes> {
    return this.post<Models.NTDelReturnShopRes>('/ReturnShop/DelReturnShop', body);
  }
  /**
   * Lấy phiếu trả lại hàng - [POST] /ReturnShop/GetReturnShopByTime
   */
  getReturnShopByTime(body?: Models.NTGetReturnShopByTimeReq): Observable<Models.NTGetReturnShopByTimeRes> {
    return this.post<Models.NTGetReturnShopByTimeRes>('/ReturnShop/GetReturnShopByTime', body);
  }
  /**
   * Lấy phiếu trả lại hàng - [POST] /ReturnShop/GetReturnShopByApprove
   */
  getReturnShopByApprove(body?: Models.NTGetReturnShopByTimeReq): Observable<Models.NTGetReturnShopByTimeRes> {
    return this.post<Models.NTGetReturnShopByTimeRes>('/ReturnShop/GetReturnShopByApprove', body);
  }
  /**
   * Lấy phiếu trả lại hàng theo ID - [POST] /ReturnShop/GetReturnShopByID
   */
  getReturnShopByID(body?: Models.NTGetReturnShopByIDReq): Observable<Models.NTGetReturnShopByIDRes> {
    return this.post<Models.NTGetReturnShopByIDRes>('/ReturnShop/GetReturnShopByID', body);
  }
  /**
   * Phê duyệt phiếu trả lại hàng theo ID - [POST] /ReturnShop/ApproveReturnShop
   */
  approveReturnShop(body?: Models.NTApproveReturnShopReq): Observable<Models.NTApproveReturnShopRes> {
    return this.post<Models.NTApproveReturnShopRes>('/ReturnShop/ApproveReturnShop', body);
  }
  /**
   * Lấy danh sách đơn hàng theo mã nhảy - [POST] /ReturnShop/GetInvoiceSalesByLotIndex
   */
  getInvoiceSalesByLotIndex(body?: Models.NTGetInvoiceSalesByLotIndexReq): Observable<Models.NTGetInvoiceSalesByLotIndexRes> {
    return this.post<Models.NTGetInvoiceSalesByLotIndexRes>('/ReturnShop/GetInvoiceSalesByLotIndex', body);
  }
  /**
   * Lấy danh sách đơn hàng theo mã nhảy - [POST] /ReturnShop/GetLotIndexBySalesH
   */
  getLotIndexBySalesH(body?: Models.NTGetLotIndexBySalesHReq): Observable<Models.NTGetLotIndexBySalesHRes> {
    return this.post<Models.NTGetLotIndexBySalesHRes>('/ReturnShop/GetLotIndexBySalesH', body);
  }
}
