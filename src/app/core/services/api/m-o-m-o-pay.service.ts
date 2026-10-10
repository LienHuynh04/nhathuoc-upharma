import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for MOMOPay Module (4 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class MOMOPayApiService extends BaseApiService {

  /**
   * Thanh toán qua QR - [POST] /MOMOPay/CreatePaymentQR
   */
  createpaymentqr(body?: Models.MMCreatePaymentQRReq): Observable<any> {
    return this.post<any>('/MOMOPay/CreatePaymentQR', body);
  }

  /**
   * IPN - [POST] /MOMOPay/CreateIPN
   */
  createipn(body?: Models.MMCreateIPNReq): Observable<any> {
    return this.post<any>('/MOMOPay/CreateIPN', body);
  }

  /**
   * Thanh toán qua thiết bị EDC (Máy Pos) - [POST] /MOMOPay/CreatePaymentCard
   */
  createpaymentcard(body?: Models.MMCreatePaymentCardReq): Observable<any> {
    return this.post<any>('/MOMOPay/CreatePaymentCard', body);
  }

  /**
   * Lấy thông tin thanh toán - [POST] /MOMOPay/GetQRPaymentLst
   */
  getqrpaymentlst(body?: Models.MOMOGetQRPaymentLstReq): Observable<any> {
    return this.post<any>('/MOMOPay/GetQRPaymentLst', body);
  }
}
