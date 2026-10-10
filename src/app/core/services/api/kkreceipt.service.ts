import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for KKReceipt Module (8 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class KKReceiptApiService extends BaseApiService {
  /**
   * Tạo mới phiếu thu tiền - [POST] /KKReceipt/CreateReceiptHeader
   */
  createReceiptHeader(body?: Models.KKCreateReceiptHeaderReq): Observable<Models.KKCreateReceiptHeaderRes> {
    return this.post<Models.KKCreateReceiptHeaderRes>('/KKReceipt/CreateReceiptHeader', body);
  }
  /**
   * Tạo mới phiếu thu tiền - [POST] /KKReceipt/UpdateReceiptHeader
   */
  updateReceiptHeader(body?: Models.KKUpdateReceiptHeaderReq): Observable<Models.KKUpdateReceiptHeaderRes> {
    return this.post<Models.KKUpdateReceiptHeaderRes>('/KKReceipt/UpdateReceiptHeader', body);
  }
  /**
   * Xóa phiếu thu tiền - [POST] /KKReceipt/DelReceiptHeader
   */
  delReceiptHeader(body?: Models.KKDelReceiptHeaderReq): Observable<Models.KKDelReceiptHeaderRes> {
    return this.post<Models.KKDelReceiptHeaderRes>('/KKReceipt/DelReceiptHeader', body);
  }
  /**
   * Phê duyệt phiếu thu tiền - [POST] /KKReceipt/ApproveReceiptHeader
   */
  approveReceiptHeader(body?: Models.KKApproveReceiptHeaderReq): Observable<Models.KKApproveReceiptHeaderRes> {
    return this.post<Models.KKApproveReceiptHeaderRes>('/KKReceipt/ApproveReceiptHeader', body);
  }
  /**
   * Phê duyệt phiếu thu tiền - [POST] /KKReceipt/GetReceiptHeaderLst
   */
  getReceiptHeaderLst(body?: Models.KKGetReceiptHeaderLstReq): Observable<Models.KKGetReceiptHeaderLstRes> {
    return this.post<Models.KKGetReceiptHeaderLstRes>('/KKReceipt/GetReceiptHeaderLst', body);
  }
  /**
   * Phê duyệt phiếu thu tiền - [POST] /KKReceipt/GetReceiptHeaderByID
   */
  getReceiptHeaderByID(body?: Models.KKGetReceiptHeaderByIDReq): Observable<Models.KKGetReceiptHeaderByIDRes> {
    return this.post<Models.KKGetReceiptHeaderByIDRes>('/KKReceipt/GetReceiptHeaderByID', body);
  }
  /**
   * Lấy danh sách Kế toán nhận tiền - [POST] /KKReceipt/GetEmployeeForReceipt
   */
  getEmployeeForReceipt(body?: Models.KKGetEmployeeForReceiptReq): Observable<Models.KKGetEmployeeForReceiptRes> {
    return this.post<Models.KKGetEmployeeForReceiptRes>('/KKReceipt/GetEmployeeForReceipt', body);
  }
  /**
   * Lấy danh sách sao kê - [POST] /KKReceipt/GetBankStatementByTime
   */
  getBankStatementByTime(body?: Models.KKGetBankStatementByTimeReq): Observable<Models.KKGetBankStatementByTimeRes> {
    return this.post<Models.KKGetBankStatementByTimeRes>('/KKReceipt/GetBankStatementByTime', body);
  }
}
