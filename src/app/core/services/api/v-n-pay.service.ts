import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for VNPay Module (7 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class VNPayApiService extends BaseApiService {

  /**
   * Tạo mới chính sách - [POST] /VNPay/VNPayIPN
   */
  vnpayipn(body?: any): Observable<any> {
    return this.post<any>('/VNPay/VNPayIPN', body);
  }

  /**
   * Tạo mới chính sách - [POST] /VNPay/CreateQRPayment
   */
  createqrpayment(body?: any): Observable<any> {
    return this.post<any>('/VNPay/CreateQRPayment', body);
  }

  /**
   * Tạo mới chính sách - [POST] /VNPay/CreateQRPayment2
   */
  createqrpayment2(body?: any): Observable<any> {
    return this.post<any>('/VNPay/CreateQRPayment2', body);
  }

  /**
   * Tạo với yêu cầu thanh toán bằng quẹt thẻ - [POST] /VNPay/CreateCardPayment
   */
  createcardpayment(body?: any): Observable<any> {
    return this.post<any>('/VNPay/CreateCardPayment', body);
  }

  /**
   * Kiểm tra tình trạng thanh toán VNpay - [POST] /VNPay/CheckCompleteQRPayment
   */
  checkcompleteqrpayment(body?: any): Observable<any> {
    return this.post<any>('/VNPay/CheckCompleteQRPayment', body);
  }

  /**
   * Lấy danh sách thanh toán VNPay theo nhà thuốc - [POST] /VNPay/GetQRPaymentLst
   */
  getqrpaymentlst(body?: any): Observable<any> {
    return this.post<any>('/VNPay/GetQRPaymentLst', body);
  }

  /**
   * Lấy ClientTransactionCode - [POST] /VNPay/GetQRTransactionCode
   */
  getqrtransactioncode(body?: any): Observable<any> {
    return this.post<any>('/VNPay/GetQRTransactionCode', body);
  }
}
