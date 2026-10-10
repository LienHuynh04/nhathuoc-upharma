import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for MHPayment Module (7 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class MHPaymentApiService extends BaseApiService {
  /**
   * Tạo phiếu đề xuất thanh toán - [POST] /MHPayment/CreatePaymentHeader
   */
  createPaymentHeader(body?: Models.MHCreatePaymentHeaderReq): Observable<Models.MHCreatePaymentHeaderRes> {
    return this.post<Models.MHCreatePaymentHeaderRes>('/MHPayment/CreatePaymentHeader', body);
  }
  /**
   * Cập nhật phiếu đề xuất thanh toán - [POST] /MHPayment/UpdatePaymentHeader
   */
  updatePaymentHeader(body?: Models.MHUpdatePaymentHeaderReq): Observable<Models.MHUpdatePaymentHeaderRes> {
    return this.post<Models.MHUpdatePaymentHeaderRes>('/MHPayment/UpdatePaymentHeader', body);
  }
  /**
   * Xóa phiếu đề xuất thanh toán - [POST] /MHPayment/DelPaymentHeader
   */
  delPaymentHeader(body?: Models.MHDelPaymentHeaderReq): Observable<Models.MHDelPaymentHeaderRes> {
    return this.post<Models.MHDelPaymentHeaderRes>('/MHPayment/DelPaymentHeader', body);
  }
  /**
   * Phê duyệt phiếu đề xuất thanh toán - [POST] /MHPayment/ApprovePaymentHeader
   */
  approvePaymentHeader(body?: Models.MHApprovePaymentHeaderReq): Observable<Models.MHApprovePaymentHeaderRes> {
    return this.post<Models.MHApprovePaymentHeaderRes>('/MHPayment/ApprovePaymentHeader', body);
  }
  /**
   * Lấy danh sách phiếu đề xuất thanh toán - [POST] /MHPayment/GetPaymentHeaderLst
   */
  getPaymentHeaderLst(body?: Models.MHGetPaymentHeaderLstReq): Observable<Models.MHGetPaymentHeaderLstRes> {
    return this.post<Models.MHGetPaymentHeaderLstRes>('/MHPayment/GetPaymentHeaderLst', body);
  }
  /**
   * Lấy phiếu đề xuất thanh toán theo ID - [POST] /MHPayment/GetPaymentHeaderByID
   */
  getPaymentHeaderByID(body?: Models.MHGetPaymentHeaderByIDReq): Observable<Models.MHGetPaymentHeaderByIDRes> {
    return this.post<Models.MHGetPaymentHeaderByIDRes>('/MHPayment/GetPaymentHeaderByID', body);
  }
  /**
   * Lấy thông tin phiếu công nợ - [POST] /MHPayment/GetDebtByTime
   */
  getDebtByTime(body?: Models.MHGetDebtByTimeReq): Observable<Models.MHGetDebtByTimeRes> {
    return this.post<Models.MHGetDebtByTimeRes>('/MHPayment/GetDebtByTime', body);
  }
}
