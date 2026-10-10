import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for InvoiceOnline Module (8 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class InvoiceOnlineApiService extends BaseApiService {
  /**
   * Lấy danh sách đơn hàng trên WEB theo thời gian Online - [POST] /InvoiceOnline/GetInvoiceOrderOnByTime
   */
  getInvoiceOrderOnByTime(body?: Models.NTGetInvoiceOrderOnByTimeReq): Observable<Models.NTGetInvoiceOrderOnByTimeRes> {
    return this.post<Models.NTGetInvoiceOrderOnByTimeRes>('/InvoiceOnline/GetInvoiceOrderOnByTime', body);
  }
  /**
   * Lấy danh sách đơn hàng trên WEB theo thời gian Online - [POST] /InvoiceOnline/GetInvoiceOrderOnByID
   */
  getInvoiceOrderOnByID(body?: Models.NTGetInvoiceOrderOnByIDReq): Observable<Models.NTGetInvoiceOrderOnByIDRes> {
    return this.post<Models.NTGetInvoiceOrderOnByIDRes>('/InvoiceOnline/GetInvoiceOrderOnByID', body);
  }
  /**
   * Kiểm tra thông tin lô nhảy trong kho Online - [POST] /InvoiceOnline/GetLotCodeInfoBySys
   */
  getLotCodeInfoBySys(body?: Models.NTGetLotCodeInfoBySysReq): Observable<Models.NTGetLotCodeInfoBySysRes> {
    return this.post<Models.NTGetLotCodeInfoBySysRes>('/InvoiceOnline/GetLotCodeInfoBySys', body);
  }
  /**
   * Tạo đơn đặt Online - [POST] /InvoiceOnline/CreateOrderOnline
   */
  createOrderOnline(body?: Models.NTCreateOrderHeaderReq): Observable<Models.NTCreateOrderHeaderRes> {
    return this.post<Models.NTCreateOrderHeaderRes>('/InvoiceOnline/CreateOrderOnline', body);
  }
  /**
   * Cập nhật trạng thái dơn hàng - [POST] /InvoiceOnline/UpdateSttOrderHeader
   */
  updateSttOrderHeader(body?: Models.NTUpdateSttOrderHeaderReq): Observable<Models.NTUpdateSttOrderHeaderRes> {
    return this.post<Models.NTUpdateSttOrderHeaderRes>('/InvoiceOnline/UpdateSttOrderHeader', body);
  }
  /**
   * Xác nhận hoàn thành đơn hàng - [POST] /InvoiceOnline/ConfirmOrderHeaderByID
   */
  confirmOrderHeaderByID(body?: Models.NTConfirmOrderHeaderByIDReq): Observable<Models.NTConfirmOrderHeaderByIDRes> {
    return this.post<Models.NTConfirmOrderHeaderByIDRes>('/InvoiceOnline/ConfirmOrderHeaderByID', body);
  }
  /**
   * Hủy đơn hàng - [POST] /InvoiceOnline/DelOrderHeader
   */
  delOrderHeader(body?: Models.NTDelOrderHeaderReq): Observable<Models.NTDelOrderHeaderRes> {
    return this.post<Models.NTDelOrderHeaderRes>('/InvoiceOnline/DelOrderHeader', body);
  }
  /**
   * Nhà thuốc từ chối xử lý đơn - [POST] /InvoiceOnline/RejectOrderOnline
   */
  rejectOrderOnline(body?: Models.NTRejectOrderOnlineReq): Observable<Models.NTRejectOrderOnlineRes> {
    return this.post<Models.NTRejectOrderOnlineRes>('/InvoiceOnline/RejectOrderOnline', body);
  }
}
