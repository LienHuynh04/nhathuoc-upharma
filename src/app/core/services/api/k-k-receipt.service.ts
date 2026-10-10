import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for KKReceipt Module (8 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class KKReceiptApiService extends BaseApiService {

  /**
   * Tạo mới phiếu thu tiền - [POST] /KKReceipt/CreateReceiptHeader
   */
  createreceiptheader(body?: any): Observable<any> {
    return this.post<any>('/KKReceipt/CreateReceiptHeader', body);
  }

  /**
   * Tạo mới phiếu thu tiền - [POST] /KKReceipt/UpdateReceiptHeader
   */
  updatereceiptheader(body?: any): Observable<any> {
    return this.post<any>('/KKReceipt/UpdateReceiptHeader', body);
  }

  /**
   * Xóa phiếu thu tiền - [POST] /KKReceipt/DelReceiptHeader
   */
  delreceiptheader(body?: any): Observable<any> {
    return this.post<any>('/KKReceipt/DelReceiptHeader', body);
  }

  /**
   * Phê duyệt phiếu thu tiền - [POST] /KKReceipt/ApproveReceiptHeader
   */
  approvereceiptheader(body?: any): Observable<any> {
    return this.post<any>('/KKReceipt/ApproveReceiptHeader', body);
  }

  /**
   * Phê duyệt phiếu thu tiền - [POST] /KKReceipt/GetReceiptHeaderLst
   */
  getreceiptheaderlst(body?: any): Observable<any> {
    return this.post<any>('/KKReceipt/GetReceiptHeaderLst', body);
  }

  /**
   * Phê duyệt phiếu thu tiền - [POST] /KKReceipt/GetReceiptHeaderByID
   */
  getreceiptheaderbyid(body?: any): Observable<any> {
    return this.post<any>('/KKReceipt/GetReceiptHeaderByID', body);
  }

  /**
   * Lấy danh sách Kế toán nhận tiền - [POST] /KKReceipt/GetEmployeeForReceipt
   */
  getemployeeforreceipt(body?: any): Observable<any> {
    return this.post<any>('/KKReceipt/GetEmployeeForReceipt', body);
  }

  /**
   * Lấy danh sách sao kê - [POST] /KKReceipt/GetBankStatementByTime
   */
  getbankstatementbytime(body?: any): Observable<any> {
    return this.post<any>('/KKReceipt/GetBankStatementByTime', body);
  }
}
