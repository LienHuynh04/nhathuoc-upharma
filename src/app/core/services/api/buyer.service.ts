import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for Buyer Module (14 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class BuyerApiService extends BaseApiService {
  /**
   * POST Buyer/SearchBuyer - [POST] /Buyer/SearchBuyer
   */
  searchBuyer(body?: Models.NTSearchBuyerReq): Observable<Models.NTSearchBuyerRes> {
    return this.post<Models.NTSearchBuyerRes>('/Buyer/SearchBuyer', body);
  }
  /**
   * POST Buyer/GetBuyerByCardID - [POST] /Buyer/GetBuyerByCardID
   */
  getBuyerByCardID(body?: Models.NTSearchBuyerReq): Observable<Models.NTSearchBuyerRes> {
    return this.post<Models.NTSearchBuyerRes>('/Buyer/GetBuyerByCardID', body);
  }
  /**
   * POST Buyer/GetBuyerByID - [POST] /Buyer/GetBuyerByID
   */
  getBuyerByID(body?: Models.NTGetBuyerByIDReq): Observable<Models.NTGetBuyerByIDRes> {
    return this.post<Models.NTGetBuyerByIDRes>('/Buyer/GetBuyerByID', body);
  }
  /**
   * POST Buyer/GetBuyerLst - [POST] /Buyer/GetBuyerLst
   */
  getBuyerLst(body?: Models.NTGetBuyerLstReq): Observable<Models.NTGetBuyerLstRes> {
    return this.post<Models.NTGetBuyerLstRes>('/Buyer/GetBuyerLst', body);
  }
  /**
   * lấy danh sách khách hàng theo thời gian - [POST] /Buyer/GetBuyerLstByTime
   */
  getBuyerLstByTime(body?: Models.NTGetBuyerLstByTimeReq): Observable<Models.NTGetBuyerLstByTimeRes> {
    return this.post<Models.NTGetBuyerLstByTimeRes>('/Buyer/GetBuyerLstByTime', body);
  }
  /**
   * POST Buyer/GetBuyerLstWithLevel - [POST] /Buyer/GetBuyerLstWithLevel
   */
  getBuyerLstWithLevel(body?: Models.NTGetBuyerLstByTimeReq): Observable<Models.NTGetBuyerLstByTimeRes> {
    return this.post<Models.NTGetBuyerLstByTimeRes>('/Buyer/GetBuyerLstWithLevel', body);
  }
  /**
   * POST Buyer/GetDetailBuyerLst - [POST] /Buyer/GetDetailBuyerLst
   */
  getDetailBuyerLst(body?: Models.NTGetDetailBuyerLstReq): Observable<Models.NTGetDetailBuyerLstRes> {
    return this.post<Models.NTGetDetailBuyerLstRes>('/Buyer/GetDetailBuyerLst', body);
  }
  /**
   * POST Buyer/GetBuyerDiagnoseByBID - [POST] /Buyer/GetBuyerDiagnoseByBID
   */
  getBuyerDiagnoseByBID(body?: Models.NTGetBuyerDiagnoseByBIDReq): Observable<Models.NTGetBuyerDiagnoseByBIDRes> {
    return this.post<Models.NTGetBuyerDiagnoseByBIDRes>('/Buyer/GetBuyerDiagnoseByBID', body);
  }
  /**
   * POST Buyer/GetSalesHeaderLastByBID - [POST] /Buyer/GetSalesHeaderLastByBID
   */
  getSalesHeaderLastByBID(body?: Models.NTGetSalesHeaderLastByBIDReq): Observable<Models.NTGetSalesHeaderLastByBIDRes> {
    return this.post<Models.NTGetSalesHeaderLastByBIDRes>('/Buyer/GetSalesHeaderLastByBID', body);
  }
  /**
   * POST Buyer/GetCustomerNewLst - [POST] /Buyer/GetCustomerNewLst
   */
  getCustomerNewLst(body?: Models.RPGetCustomerNewLstReq): Observable<Models.RPGetCustomerNewLstRes> {
    return this.post<Models.RPGetCustomerNewLstRes>('/Buyer/GetCustomerNewLst', body);
  }
  /**
   * Tìm khách hàng thân quen - [POST] /Buyer/SearchBuyerFamiliar
   */
  searchBuyerFamiliar(body?: Models.NTSearchBuyerFamiliarReq): Observable<Models.NTSearchBuyerFamiliarRes> {
    return this.post<Models.NTSearchBuyerFamiliarRes>('/Buyer/SearchBuyerFamiliar', body);
  }
  /**
   * Cập nhật khách hàng thân quen - [POST] /Buyer/UpdateBuyerFamiliar
   */
  updateBuyerFamiliar(body?: Models.NTUpdateBuyerFamiliarReq): Observable<Models.NTUpdateBuyerFamiliarRes> {
    return this.post<Models.NTUpdateBuyerFamiliarRes>('/Buyer/UpdateBuyerFamiliar', body);
  }
  /**
   * POST Buyer/GetBuyerCall - [POST] /Buyer/GetBuyerCall
   */
  getBuyerCall(body?: Models.NTGetBuyerCallReq): Observable<Models.NTGetBuyerCallRes> {
    return this.post<Models.NTGetBuyerCallRes>('/Buyer/GetBuyerCall', body);
  }
  /**
   * Ghi chú thông tin cuộc gọi - [POST] /Buyer/NoteBuyerCall
   */
  noteBuyerCall(body?: Models.NTNoteBuyerCallReq): Observable<Models.NTNoteBuyerCallRes> {
    return this.post<Models.NTNoteBuyerCallRes>('/Buyer/NoteBuyerCall', body);
  }
}
