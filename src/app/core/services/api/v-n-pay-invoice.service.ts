import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for VNPayInvoice Module (5 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class VNPayInvoiceApiService extends BaseApiService {

  /**
   * Đẩy thông tin hóa đơn MTT - [POST] /VNPayInvoice/CreateInvoiceFAST
   */
  createinvoicefast(body?: any): Observable<any> {
    return this.post<any>('/VNPayInvoice/CreateInvoiceFAST', body);
  }

  /**
   * Đẩy thông tin hóa đơn MTT + FAST - [POST] /VNPayInvoice/UpSalesInvoiceFAST
   */
  upsalesinvoicefast(body?: any): Observable<any> {
    return this.post<any>('/VNPayInvoice/UpSalesInvoiceFAST', body);
  }

  /**
   * Đẩy thông tin hóa đơn MTT + FAST theo ID - [POST] /VNPayInvoice/UpSalesInvoiceByID
   */
  upsalesinvoicebyid(body?: any): Observable<any> {
    return this.post<any>('/VNPayInvoice/UpSalesInvoiceByID', body);
  }

  /**
   * Lấy thông tin cài đặt hóa đơn từ máy tính tiền - [POST] /VNPayInvoice/GetElectronicInvoiceInfo
   */
  getelectronicinvoiceinfo(body?: any): Observable<any> {
    return this.post<any>('/VNPayInvoice/GetElectronicInvoiceInfo', body);
  }

  /**
   * cài đặt hóa đơn từ máy tính tiền - [POST] /VNPayInvoice/SetElectronicInvoiceInfo
   */
  setelectronicinvoiceinfo(body?: any): Observable<any> {
    return this.post<any>('/VNPayInvoice/SetElectronicInvoiceInfo', body);
  }
}
