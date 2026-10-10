import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for Stamp Module (19 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class StampApiService extends BaseApiService {
  /**
   * POST Stamp/GetQuantityStampSys - [POST] /Stamp/GetQuantityStampSys
   */
  getQuantityStampSys(body?: Models.NTGetQuantityStampSysReq): Observable<Models.NTGetQuantityStampSysRes> {
    return this.post<Models.NTGetQuantityStampSysRes>('/Stamp/GetQuantityStampSys', body);
  }
  /**
   * Lấy lịch sử sử dụng tem - [POST] /Stamp/GetStampHistoryByLotIndex
   */
  getStampHistoryByLotIndex(body?: Models.NTGetStampHistoryByLotIndexReq): Observable<Models.NTGetStampHistoryByLotIndexRes> {
    return this.post<Models.NTGetStampHistoryByLotIndexRes>('/Stamp/GetStampHistoryByLotIndex', body);
  }
  /**
   * Lấy danh sách tem theo phiếu nhập - [POST] /Stamp/GetStampSysByDocID
   */
  getStampSysByDocID(body?: Models.NTGetStampSysByDocIDReq): Observable<Models.NTGetStampSysByDocIDRes> {
    return this.post<Models.NTGetStampSysByDocIDRes>('/Stamp/GetStampSysByDocID', body);
  }
  /**
   * POST Stamp/GetLotCodeChangePrice - [POST] /Stamp/GetLotCodeChangePrice
   */
  getLotCodeChangePrice(body?: Models.NTGetLotCodeChangePriceReq): Observable<Models.NTGetLotCodeChangePriceRes> {
    return this.post<Models.NTGetLotCodeChangePriceRes>('/Stamp/GetLotCodeChangePrice', body);
  }
  /**
   * POST Stamp/GetLotCodeChangePackageID - [POST] /Stamp/GetLotCodeChangePackageID
   */
  getLotCodeChangePackageID(body?: Models.NTGetLotCodeChangePackageIDReq): Observable<Models.NTGetLotCodeChangePackageIDRes> {
    return this.post<Models.NTGetLotCodeChangePackageIDRes>('/Stamp/GetLotCodeChangePackageID', body);
  }
  /**
   * POST Stamp/GetLotCodeChangePriceDetail - [POST] /Stamp/GetLotCodeChangePriceDetail
   */
  getLotCodeChangePriceDetail(body?: Models.NTGetLotCodeChangePriceDetailReq): Observable<Models.NTGetLotCodeChangePriceDetailRes> {
    return this.post<Models.NTGetLotCodeChangePriceDetailRes>('/Stamp/GetLotCodeChangePriceDetail', body);
  }
  /**
   * POST Stamp/GetLotCodeChangePackageIDDetail - [POST] /Stamp/GetLotCodeChangePackageIDDetail
   */
  getLotCodeChangePackageIDDetail(body?: Models.NTGetLotCodeChangePackageIDDetailReq): Observable<Models.NTGetLotCodeChangePackageIDDetailRes> {
    return this.post<Models.NTGetLotCodeChangePackageIDDetailRes>('/Stamp/GetLotCodeChangePackageIDDetail', body);
  }
  /**
   * POST Stamp/CreateDocChangePrice - [POST] /Stamp/CreateDocChangePrice
   */
  createDocChangePrice(body?: Models.NTCreateDocChangePriceReq): Observable<Models.NTCreateDocChangePriceRes> {
    return this.post<Models.NTCreateDocChangePriceRes>('/Stamp/CreateDocChangePrice', body);
  }
  /**
   * POST Stamp/UpdateDocChangePrice - [POST] /Stamp/UpdateDocChangePrice
   */
  updateDocChangePrice(body?: Models.NTUpdateDocChangePriceReq): Observable<Models.NTUpdateDocChangePriceRes> {
    return this.post<Models.NTUpdateDocChangePriceRes>('/Stamp/UpdateDocChangePrice', body);
  }
  /**
   * POST Stamp/CreateDocChangePackageID - [POST] /Stamp/CreateDocChangePackageID
   */
  createDocChangePackageID(body?: Models.NTCreateDocChangePackageIDReq): Observable<Models.NTCreateDocChangePackageIDRes> {
    return this.post<Models.NTCreateDocChangePackageIDRes>('/Stamp/CreateDocChangePackageID', body);
  }
  /**
   * POST Stamp/UpdateDocChangePackageID - [POST] /Stamp/UpdateDocChangePackageID
   */
  updateDocChangePackageID(body?: Models.NTUpdateDocChangePackageIDReq): Observable<Models.NTUpdateDocChangePackageIDRes> {
    return this.post<Models.NTUpdateDocChangePackageIDRes>('/Stamp/UpdateDocChangePackageID', body);
  }
  /**
   * POST Stamp/GetLotCodeChangeByID - [POST] /Stamp/GetLotCodeChangeByID
   */
  getLotCodeChangeByID(body?: Models.NTGetLotCodeChangeByIDReq): Observable<Models.NTGetLotCodeChangeByIDRes> {
    return this.post<Models.NTGetLotCodeChangeByIDRes>('/Stamp/GetLotCodeChangeByID', body);
  }
  /**
   * POST Stamp/GetLotCodeChangeHeaderLst - [POST] /Stamp/GetLotCodeChangeHeaderLst
   */
  getLotCodeChangeHeaderLst(body?: Models.NTGetLotCodeChangeHeaderLstReq): Observable<Models.NTGetLotCodeChangeHeaderLstRes> {
    return this.post<Models.NTGetLotCodeChangeHeaderLstRes>('/Stamp/GetLotCodeChangeHeaderLst', body);
  }
  /**
   * POST Stamp/ApproveDocChangePrice - [POST] /Stamp/ApproveDocChangePrice
   */
  approveDocChangePrice(body?: Models.NTApproveDocChangePriceReq): Observable<Models.NTApproveDocChangePriceRes> {
    return this.post<Models.NTApproveDocChangePriceRes>('/Stamp/ApproveDocChangePrice', body);
  }
  /**
   * POST Stamp/DelDocChangePrice - [POST] /Stamp/DelDocChangePrice
   */
  delDocChangePrice(body?: Models.NTDelDocChangePriceReq): Observable<Models.NTDelDocChangePriceRes> {
    return this.post<Models.NTDelDocChangePriceRes>('/Stamp/DelDocChangePrice', body);
  }
  /**
   * POST Stamp/CreateCDocChangePrice - [POST] /Stamp/CreateCDocChangePrice
   */
  createCDocChangePrice(body?: Models.NTCreateCDocChangePriceReq): Observable<Models.NTCreateCDocChangePriceRes> {
    return this.post<Models.NTCreateCDocChangePriceRes>('/Stamp/CreateCDocChangePrice', body);
  }
  /**
   * POST Stamp/GetCDocChangePriceLst - [POST] /Stamp/GetCDocChangePriceLst
   */
  getCDocChangePriceLst(body?: Models.NTGetCDocChangePriceLstReq): Observable<Models.NTGetCDocChangePriceLstRes> {
    return this.post<Models.NTGetCDocChangePriceLstRes>('/Stamp/GetCDocChangePriceLst', body);
  }
  /**
   * POST Stamp/DelCDocChangePrice - [POST] /Stamp/DelCDocChangePrice
   */
  delCDocChangePrice(body?: Models.NTDelCDocChangePriceReq): Observable<Models.NTDelCDocChangePriceRes> {
    return this.post<Models.NTDelCDocChangePriceRes>('/Stamp/DelCDocChangePrice', body);
  }
  /**
   * POST Stamp/ApproveCDocChangePrice - [POST] /Stamp/ApproveCDocChangePrice
   */
  approveCDocChangePrice(body?: Models.NTApproveCDocChangePriceReq): Observable<Models.NTApproveCDocChangePriceRes> {
    return this.post<Models.NTApproveCDocChangePriceRes>('/Stamp/ApproveCDocChangePrice', body);
  }
}
