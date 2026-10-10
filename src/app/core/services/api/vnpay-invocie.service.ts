import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for VNPayInvocie Module (5 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class VNPayInvocieApiService extends BaseApiService {
  /**
   * Đẩy thông tin hóa đơn MTT - [POST] /VNPayInvoice/CreateInvoiceFAST
   */
  createInvoiceFAST(body?: Models.VNPayCreateInvoiceFASTReq): Observable<Models.VNPayCreateInvoiceFASTRes> {
    return this.post<Models.VNPayCreateInvoiceFASTRes>('/VNPayInvoice/CreateInvoiceFAST', body);
  }
  /**
   * Đẩy thông tin hóa đơn MTT + FAST - [POST] /VNPayInvoice/UpSalesInvoiceFAST
   */
  upSalesInvoiceFAST(body?: Models.FastUpSalesInvoiceReq): Observable<Models.FastUpSalesInvoiceRes> {
    return this.post<Models.FastUpSalesInvoiceRes>('/VNPayInvoice/UpSalesInvoiceFAST', body);
  }
  /**
   * Đẩy thông tin hóa đơn MTT + FAST theo ID - [POST] /VNPayInvoice/UpSalesInvoiceByID
   */
  upSalesInvoiceByID(body?: Models.FastUpSalesInvoiceByIDReq): Observable<Models.FastUpSalesInvoiceByIDRes> {
    return this.post<Models.FastUpSalesInvoiceByIDRes>('/VNPayInvoice/UpSalesInvoiceByID', body);
  }
  /**
   * Lấy thông tin cài đặt hóa đơn từ máy tính tiền - [POST] /VNPayInvoice/GetElectronicInvoiceInfo
   */
  getElectronicInvoiceInfo(body?: Models.VNPGetElectronicInvoiceInfoReq): Observable<Models.VNPGetElectronicInvoiceInfoRes> {
    return this.post<Models.VNPGetElectronicInvoiceInfoRes>('/VNPayInvoice/GetElectronicInvoiceInfo', body);
  }
  /**
   * cài đặt hóa đơn từ máy tính tiền - [POST] /VNPayInvoice/SetElectronicInvoiceInfo
   */
  setElectronicInvoiceInfo(body?: Models.VNPSetElectronicInvoiceInfoReq): Observable<Models.VNPSetElectronicInvoiceInfoRes> {
    return this.post<Models.VNPSetElectronicInvoiceInfoRes>('/VNPayInvoice/SetElectronicInvoiceInfo', body);
  }
}
