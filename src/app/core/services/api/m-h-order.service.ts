import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for MHOrder Module (16 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class MHOrderApiService extends BaseApiService {

  /**
   * Tạo phiếu đề xuất mua hàng - [POST] /MHOrder/CreateOrderHeader
   */
  createorderheader(body?: any): Observable<any> {
    return this.post<any>('/MHOrder/CreateOrderHeader', body);
  }

  /**
   * Cập nhật phiếu đề xuất mua hàng - [POST] /MHOrder/UpdateOrderHeader
   */
  updateorderheader(body?: any): Observable<any> {
    return this.post<any>('/MHOrder/UpdateOrderHeader', body);
  }

  /**
   * Xóa phiếu đề xuất mua hàng - [POST] /MHOrder/DelOrderHeader
   */
  delorderheader(body?: any): Observable<any> {
    return this.post<any>('/MHOrder/DelOrderHeader', body);
  }

  /**
   * Phê duyệt phiếu đề xuất mua hàng - [POST] /MHOrder/ApproveOrderHeader
   */
  approveorderheader(body?: any): Observable<any> {
    return this.post<any>('/MHOrder/ApproveOrderHeader', body);
  }

  /**
   * Lấy danh sách phiếu đề xuất mua hàng - [POST] /MHOrder/GetOrderHeaderByTime
   */
  getorderheaderbytime(body?: any): Observable<any> {
    return this.post<any>('/MHOrder/GetOrderHeaderByTime', body);
  }

  /**
   * Lấy chi tiết phiếu đề xuất mua hàng - [POST] /MHOrder/GetOrderHeaderByID
   */
  getorderheaderbyid(body?: any): Observable<any> {
    return this.post<any>('/MHOrder/GetOrderHeaderByID', body);
  }

  /**
   * Lấy gợi ý phiếu đề xuất mua hàng - [POST] /MHOrder/GetOrderSuggestLst
   */
  getordersuggestlst(body?: any): Observable<any> {
    return this.post<any>('/MHOrder/GetOrderSuggestLst', body);
  }

  /**
   * Lấy gợi ý phiếu đề xuất mua hàng V2 - [POST] /MHOrder/GetOrderSuggestLstV2
   */
  getordersuggestlstv2(body?: any): Observable<any> {
    return this.post<any>('/MHOrder/GetOrderSuggestLstV2', body);
  }

  /**
   * Lấy đề xuất mua hàng lựa chọn - [POST] /MHOrder/GetSuggestLst
   */
  getsuggestlst(body?: any): Observable<any> {
    return this.post<any>('/MHOrder/GetSuggestLst', body);
  }

  /**
   * Tạo đề xuất mua hàng lựa chọn - [POST] /MHOrder/CreateSuggestLst
   */
  createsuggestlst(body?: any): Observable<any> {
    return this.post<any>('/MHOrder/CreateSuggestLst', body);
  }

  /**
   * Xóa đề xuất mua hàng lựa chọn - [POST] /MHOrder/DelSuggestLst
   */
  delsuggestlst(body?: any): Observable<any> {
    return this.post<any>('/MHOrder/DelSuggestLst', body);
  }

  /**
   * Phê duyệt đề xuất mua hàng lựa chọn - [POST] /MHOrder/ApproveSuggestLst
   */
  approvesuggestlst(body?: any): Observable<any> {
    return this.post<any>('/MHOrder/ApproveSuggestLst', body);
  }

  /**
   * Phê duyệt đề xuất mua hàng lựa chọn - [POST] /MHOrder/GetReportOrderByTime
   */
  getreportorderbytime(body?: any): Observable<any> {
    return this.post<any>('/MHOrder/GetReportOrderByTime', body);
  }

  /**
   * POST MHOrder/GetReportOrderByShop - [POST] /MHOrder/GetReportOrderByShop
   */
  getreportorderbyshop(body?: any): Observable<any> {
    return this.post<any>('/MHOrder/GetReportOrderByShop', body);
  }

  /**
   * Phê duyệt dòng line DXM - [POST] /MHOrder/ApproveOrderLine
   */
  approveorderline(body?: any): Observable<any> {
    return this.post<any>('/MHOrder/ApproveOrderLine', body);
  }

  /**
   * Tách đơn - [POST] /MHOrder/SplitInvoiceOrder
   */
  splitinvoiceorder(body?: any): Observable<any> {
    return this.post<any>('/MHOrder/SplitInvoiceOrder', body);
  }
}
