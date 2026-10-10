import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ConnectSYT Module (11 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class ConnectSYTApiService extends BaseApiService {

  /**
   * Lấy thông tin đơn hàng theo ID - [POST] /ConnectSYT/SYTGetSalesHeaderByID
   */
  sytgetsalesheaderbyid(body?: any): Observable<any> {
    return this.post<any>('/ConnectSYT/SYTGetSalesHeaderByID', body);
  }

  /**
   * Lấy thông danh sách đơn hàng của Shop - [POST] /ConnectSYT/SYTGetSalesHeaderByShop
   */
  sytgetsalesheaderbyshop(body?: any): Observable<any> {
    return this.post<any>('/ConnectSYT/SYTGetSalesHeaderByShop', body);
  }

  /**
   * Cập nhật thông tin kết nối SYT - [POST] /ConnectSYT/SYTUploadSalesInvoice
   */
  sytuploadsalesinvoice(body?: any): Observable<any> {
    return this.post<any>('/ConnectSYT/SYTUploadSalesInvoice', body);
  }

  /**
   * Hủy thông tin kết nối SYT - [POST] /ConnectSYT/SYTDelSalesInvoice
   */
  sytdelsalesinvoice(body?: any): Observable<any> {
    return this.post<any>('/ConnectSYT/SYTDelSalesInvoice', body);
  }

  /**
   * Lấy thông tin nhập của nhà thuốc - [POST] /ConnectSYT/SYTGetImportStore
   */
  sytgetimportstore(body?: any): Observable<any> {
    return this.post<any>('/ConnectSYT/SYTGetImportStore', body);
  }

  /**
   * Lấy thông tin nhập chi tiết của nhà thuốc - [POST] /ConnectSYT/SYTGetImportStoreByHId
   */
  sytgetimportstorebyhid(body?: any): Observable<any> {
    return this.post<any>('/ConnectSYT/SYTGetImportStoreByHId', body);
  }

  /**
   * POST ConnectSYT/SYTUploadImportHeader - [POST] /ConnectSYT/SYTUploadImportHeader
   */
  sytuploadimportheader(body?: any): Observable<any> {
    return this.post<any>('/ConnectSYT/SYTUploadImportHeader', body);
  }

  /**
   * POST ConnectSYT/SYTDelImportHeader - [POST] /ConnectSYT/SYTDelImportHeader
   */
  sytdelimportheader(body?: any): Observable<any> {
    return this.post<any>('/ConnectSYT/SYTDelImportHeader', body);
  }

  /**
   * POST ConnectSYT/SYTGetItemLst - [POST] /ConnectSYT/SYTGetItemLst
   */
  sytgetitemlst(body?: any): Observable<any> {
    return this.post<any>('/ConnectSYT/SYTGetItemLst', body);
  }

  /**
   * Tra cứu đơn dược quốc gia - [POST] /ConnectSYT/SearchInvoiceDQG
   */
  searchinvoicedqg(body?: any): Observable<any> {
    return this.post<any>('/ConnectSYT/SearchInvoiceDQG', body);
  }

  /**
   * Cập nhật đơn quốc gia - [POST] /ConnectSYT/UpInvoiceDQG
   */
  upinvoicedqg(body?: any): Observable<any> {
    return this.post<any>('/ConnectSYT/UpInvoiceDQG', body);
  }
}
