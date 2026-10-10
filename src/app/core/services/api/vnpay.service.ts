import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for VNPay Module (7 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class VNPayApiService extends BaseApiService {
  /**
   * Tạo mới chính sách - [POST] /VNPay/VNPayIPN
   */
  vNPayIPN(body?: Models.NTVNPayIPNReq): Observable<Models.NTVNPayIPNRes> {
    return this.post<Models.NTVNPayIPNRes>('/VNPay/VNPayIPN', body);
  }
  /**
   * Tạo mới chính sách - [POST] /VNPay/CreateQRPayment
   */
  createQRPayment(body?: Models.VNPCreateQRPaymentReq): Observable<Models.VNPCreateQRPaymentRes> {
    return this.post<Models.VNPCreateQRPaymentRes>('/VNPay/CreateQRPayment', body);
  }
  /**
   * Tạo mới chính sách - [POST] /VNPay/CreateQRPayment2
   */
  createQRPayment2(body?: Models.VNPCreateQRPaymentReq): Observable<Models.VNPCreateQRPaymentRes> {
    return this.post<Models.VNPCreateQRPaymentRes>('/VNPay/CreateQRPayment2', body);
  }
  /**
   * Tạo với yêu cầu thanh toán bằng quẹt thẻ - [POST] /VNPay/CreateCardPayment
   */
  createCardPayment(body?: Models.VNPCreateCardPaymentReq): Observable<Models.VNPCreateCardPaymentRes> {
    return this.post<Models.VNPCreateCardPaymentRes>('/VNPay/CreateCardPayment', body);
  }
  /**
   * Kiểm tra tình trạng thanh toán VNpay - [POST] /VNPay/CheckCompleteQRPayment
   */
  checkCompleteQRPayment(body?: Models.VNPCheckCompleteQRPaymentReq): Observable<Models.VNPCheckCompleteQRPaymentRes> {
    return this.post<Models.VNPCheckCompleteQRPaymentRes>('/VNPay/CheckCompleteQRPayment', body);
  }
  /**
   * Lấy danh sách thanh toán VNPay theo nhà thuốc - [POST] /VNPay/GetQRPaymentLst
   */
  getQRPaymentLst(body?: Models.VNPGetQRPaymentLstReq): Observable<Models.VNPGetQRPaymentLstRes> {
    return this.post<Models.VNPGetQRPaymentLstRes>('/VNPay/GetQRPaymentLst', body);
  }
  /**
   * Lấy ClientTransactionCode - [POST] /VNPay/GetQRTransactionCode
   */
  getQRTransactionCode(body?: Models.VNPGetQRTransactionCodeReq): Observable<Models.VNPGetQRTransactionCodeRes> {
    return this.post<Models.VNPGetQRTransactionCodeRes>('/VNPay/GetQRTransactionCode', body);
  }
}
