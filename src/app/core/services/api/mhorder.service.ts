import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for MHOrder Module (16 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class MHOrderApiService extends BaseApiService {
  /**
   * Tạo phiếu đề xuất mua hàng - [POST] /MHOrder/CreateOrderHeader
   */
  createOrderHeader(body?: Models.MHCreateOrderHeaderReq): Observable<Models.MHCreateOrderHeaderRes> {
    return this.post<Models.MHCreateOrderHeaderRes>('/MHOrder/CreateOrderHeader', body);
  }
  /**
   * Cập nhật phiếu đề xuất mua hàng - [POST] /MHOrder/UpdateOrderHeader
   */
  updateOrderHeader(body?: Models.MHUpdateOrderHeaderReq): Observable<Models.MHUpdateOrderHeaderRes> {
    return this.post<Models.MHUpdateOrderHeaderRes>('/MHOrder/UpdateOrderHeader', body);
  }
  /**
   * Xóa phiếu đề xuất mua hàng - [POST] /MHOrder/DelOrderHeader
   */
  delOrderHeader(body?: Models.MHDelOrderHeaderReq): Observable<Models.MHDelOrderHeaderRes> {
    return this.post<Models.MHDelOrderHeaderRes>('/MHOrder/DelOrderHeader', body);
  }
  /**
   * Phê duyệt phiếu đề xuất mua hàng - [POST] /MHOrder/ApproveOrderHeader
   */
  approveOrderHeader(body?: Models.MHApproveOrderHeaderReq): Observable<Models.MHApproveOrderHeaderRes> {
    return this.post<Models.MHApproveOrderHeaderRes>('/MHOrder/ApproveOrderHeader', body);
  }
  /**
   * Lấy danh sách phiếu đề xuất mua hàng - [POST] /MHOrder/GetOrderHeaderByTime
   */
  getOrderHeaderByTime(body?: Models.MHGetOrderHeaderByTimeReq): Observable<Models.MHGetOrderHeaderByTimeRes> {
    return this.post<Models.MHGetOrderHeaderByTimeRes>('/MHOrder/GetOrderHeaderByTime', body);
  }
  /**
   * Lấy chi tiết phiếu đề xuất mua hàng - [POST] /MHOrder/GetOrderHeaderByID
   */
  getOrderHeaderByID(body?: Models.MHGetOrderHeaderByIDReq): Observable<Models.MHGetOrderHeaderByIDRes> {
    return this.post<Models.MHGetOrderHeaderByIDRes>('/MHOrder/GetOrderHeaderByID', body);
  }
  /**
   * Lấy gợi ý phiếu đề xuất mua hàng - [POST] /MHOrder/GetOrderSuggestLst
   */
  getOrderSuggestLst(body?: Models.MHGetOrderSuggestLstReq): Observable<Models.MHGetOrderSuggestLstRes> {
    return this.post<Models.MHGetOrderSuggestLstRes>('/MHOrder/GetOrderSuggestLst', body);
  }
  /**
   * Lấy gợi ý phiếu đề xuất mua hàng V2 - [POST] /MHOrder/GetOrderSuggestLstV2
   */
  getOrderSuggestLstV2(body?: Models.MHGetOrderSuggestLstReq): Observable<Models.MHGetOrderSuggestLstRes> {
    return this.post<Models.MHGetOrderSuggestLstRes>('/MHOrder/GetOrderSuggestLstV2', body);
  }
  /**
   * Lấy đề xuất mua hàng lựa chọn - [POST] /MHOrder/GetSuggestLst
   */
  getSuggestLst(body?: Models.MHGetSuggestLstReq): Observable<Models.MHGetSuggestLstRes> {
    return this.post<Models.MHGetSuggestLstRes>('/MHOrder/GetSuggestLst', body);
  }
  /**
   * Tạo đề xuất mua hàng lựa chọn - [POST] /MHOrder/CreateSuggestLst
   */
  createSuggestLst(body?: Models.MHCreateSuggestLstReq): Observable<Models.MHCreateSuggestLstRes> {
    return this.post<Models.MHCreateSuggestLstRes>('/MHOrder/CreateSuggestLst', body);
  }
  /**
   * Xóa đề xuất mua hàng lựa chọn - [POST] /MHOrder/DelSuggestLst
   */
  delSuggestLst(body?: Models.MHDelSuggestLstReq): Observable<Models.MHDelSuggestLstRes> {
    return this.post<Models.MHDelSuggestLstRes>('/MHOrder/DelSuggestLst', body);
  }
  /**
   * Phê duyệt đề xuất mua hàng lựa chọn - [POST] /MHOrder/ApproveSuggestLst
   */
  approveSuggestLst(body?: Models.MHApproveSuggestLstReq): Observable<Models.MHApproveSuggestLstRes> {
    return this.post<Models.MHApproveSuggestLstRes>('/MHOrder/ApproveSuggestLst', body);
  }
  /**
   * Phê duyệt đề xuất mua hàng lựa chọn - [POST] /MHOrder/GetReportOrderByTime
   */
  getReportOrderByTime(body?: Models.MHGetReportOrderByTimeReq): Observable<Models.MHGetReportOrderByTimeRes> {
    return this.post<Models.MHGetReportOrderByTimeRes>('/MHOrder/GetReportOrderByTime', body);
  }
  /**
   * POST MHOrder/GetReportOrderByShop - [POST] /MHOrder/GetReportOrderByShop
   */
  getReportOrderByShop(body?: Models.MHGetReportOrderByTimeReq): Observable<Models.MHGetReportOrderByTimeRes> {
    return this.post<Models.MHGetReportOrderByTimeRes>('/MHOrder/GetReportOrderByShop', body);
  }
  /**
   * Phê duyệt dòng line DXM - [POST] /MHOrder/ApproveOrderLine
   */
  approveOrderLine(body?: Models.MHApproveOrderLineReq): Observable<Models.MHApproveOrderLineRes> {
    return this.post<Models.MHApproveOrderLineRes>('/MHOrder/ApproveOrderLine', body);
  }
  /**
   * Tách đơn - [POST] /MHOrder/SplitInvoiceOrder
   */
  splitInvoiceOrder(body?: Models.MHSplitInvoiceOrderReq): Observable<Models.MHSplitInvoiceOrderRes> {
    return this.post<Models.MHSplitInvoiceOrderRes>('/MHOrder/SplitInvoiceOrder', body);
  }
}
