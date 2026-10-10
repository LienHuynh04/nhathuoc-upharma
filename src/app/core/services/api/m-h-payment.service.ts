import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for MHPayment Module (7 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class MHPaymentApiService extends BaseApiService {

  /**
   * Tạo phiếu đề xuất thanh toán - [POST] /MHPayment/CreatePaymentHeader
   */
  createpaymentheader(body?: any): Observable<any> {
    return this.post<any>('/MHPayment/CreatePaymentHeader', body);
  }

  /**
   * Cập nhật phiếu đề xuất thanh toán - [POST] /MHPayment/UpdatePaymentHeader
   */
  updatepaymentheader(body?: any): Observable<any> {
    return this.post<any>('/MHPayment/UpdatePaymentHeader', body);
  }

  /**
   * Xóa phiếu đề xuất thanh toán - [POST] /MHPayment/DelPaymentHeader
   */
  delpaymentheader(body?: any): Observable<any> {
    return this.post<any>('/MHPayment/DelPaymentHeader', body);
  }

  /**
   * Phê duyệt phiếu đề xuất thanh toán - [POST] /MHPayment/ApprovePaymentHeader
   */
  approvepaymentheader(body?: any): Observable<any> {
    return this.post<any>('/MHPayment/ApprovePaymentHeader', body);
  }

  /**
   * Lấy danh sách phiếu đề xuất thanh toán - [POST] /MHPayment/GetPaymentHeaderLst
   */
  getpaymentheaderlst(body?: any): Observable<any> {
    return this.post<any>('/MHPayment/GetPaymentHeaderLst', body);
  }

  /**
   * Lấy phiếu đề xuất thanh toán theo ID - [POST] /MHPayment/GetPaymentHeaderByID
   */
  getpaymentheaderbyid(body?: any): Observable<any> {
    return this.post<any>('/MHPayment/GetPaymentHeaderByID', body);
  }

  /**
   * Lấy thông tin phiếu công nợ - [POST] /MHPayment/GetDebtByTime
   */
  getdebtbytime(body?: any): Observable<any> {
    return this.post<any>('/MHPayment/GetDebtByTime', body);
  }
}
