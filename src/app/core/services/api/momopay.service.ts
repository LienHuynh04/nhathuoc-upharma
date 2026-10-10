import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for MOMOPay Module (4 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class MOMOPayApiService extends BaseApiService {
  /**
   * Thanh toán qua QR - [POST] /MOMOPay/CreatePaymentQR
   */
  createPaymentQR(body?: Models.MMCreatePaymentQRReq): Observable<Models.MMCreatePaymentQRRes> {
    return this.post<Models.MMCreatePaymentQRRes>('/MOMOPay/CreatePaymentQR', body);
  }
  /**
   * IPN - [POST] /MOMOPay/CreateIPN
   */
  createIPN(body?: Models.MMCreateIPNReq): Observable<Models.MMCreateIPNRes> {
    return this.post<Models.MMCreateIPNRes>('/MOMOPay/CreateIPN', body);
  }
  /**
   * Thanh toán qua thiết bị EDC (Máy Pos) - [POST] /MOMOPay/CreatePaymentCard
   */
  createPaymentCard(body?: Models.MMCreatePaymentCardReq): Observable<Models.MMCreatePaymentCardRes> {
    return this.post<Models.MMCreatePaymentCardRes>('/MOMOPay/CreatePaymentCard', body);
  }
  /**
   * Lấy thông tin thanh toán - [POST] /MOMOPay/GetQRPaymentLst
   */
  getQRPaymentLst(body?: Models.MOMOGetQRPaymentLstReq): Observable<Models.MOMOGetQRPaymentLstRes> {
    return this.post<Models.MOMOGetQRPaymentLstRes>('/MOMOPay/GetQRPaymentLst', body);
  }
}
