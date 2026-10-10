import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ConnectFast2 Module (6 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ConnectFast2ApiService extends BaseApiService {
  /**
   * API lấy danh sách sản phẩm hủy - [POST] /ConnectFast/GetDataCancelProductByTime
   */
  getDataCancelProductByTime(body?: Models.RPGetDataCancelProductByTimeReq): Observable<Models.RPGetDataCancelProductByTimeRes> {
    return this.post<Models.RPGetDataCancelProductByTimeRes>('/ConnectFast/GetDataCancelProductByTime', body);
  }
  /**
   * API lấy danh sách sản phẩm trả lại - [POST] /ConnectFast/GetDataReturnShopByTime
   */
  getDataReturnShopByTime(body?: Models.RPGetDataReturnShopByTimeReq): Observable<Models.RPGetDataReturnShopByTimeRes> {
    return this.post<Models.RPGetDataReturnShopByTimeRes>('/ConnectFast/GetDataReturnShopByTime', body);
  }
  /**
   * API tạo phiếu báo có - [POST] /ConnectFast/CreateBankCredit
   */
  createBankCredit(body?: Models.FASTCreateBankCreditReq): Observable<Models.FASTCreateBankCreditRes> {
    return this.post<Models.FASTCreateBankCreditRes>('/ConnectFast/CreateBankCredit', body);
  }
  /**
   * Hủy phiếu báo có - [POST] /ConnectFast/DelBankCredit
   */
  delBankCredit(body?: Models.FASTDelBankCreditReq): Observable<Models.FASTDelBankCreditRes> {
    return this.post<Models.FASTDelBankCreditRes>('/ConnectFast/DelBankCredit', body);
  }
  /**
   * API tạo phiếu báo nợ - [POST] /ConnectFast/CreateBankDebit
   */
  createBankDebit(body?: Models.FASTCreateBankDebitReq): Observable<Models.FASTCreateBankDebitRes> {
    return this.post<Models.FASTCreateBankDebitRes>('/ConnectFast/CreateBankDebit', body);
  }
  /**
   * API Xóa phiếu báo nợ - [POST] /ConnectFast/DelBankDebit
   */
  delBankDebit(body?: Models.FASTDelBankDebitReq): Observable<Models.FASTDelBankDebitRes> {
    return this.post<Models.FASTDelBankDebitRes>('/ConnectFast/DelBankDebit', body);
  }
}
