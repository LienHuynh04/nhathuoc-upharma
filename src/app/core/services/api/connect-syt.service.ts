import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ConnectSYT Module (11 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ConnectSYTApiService extends BaseApiService {
  /**
   * Lấy thông tin đơn hàng theo ID - [POST] /ConnectSYT/SYTGetSalesHeaderByID
   */
  sYTGetSalesHeaderByID(body?: Models.NTGetSalesHeaderByIDReq): Observable<Models.NTGetSalesHeaderByIDRes> {
    return this.post<Models.NTGetSalesHeaderByIDRes>('/ConnectSYT/SYTGetSalesHeaderByID', body);
  }
  /**
   * Lấy thông danh sách đơn hàng của Shop - [POST] /ConnectSYT/SYTGetSalesHeaderByShop
   */
  sYTGetSalesHeaderByShop(body?: Models.NTGetSalesHeaderByShopReq): Observable<Models.NTGetSalesHeaderByShopRes> {
    return this.post<Models.NTGetSalesHeaderByShopRes>('/ConnectSYT/SYTGetSalesHeaderByShop', body);
  }
  /**
   * Cập nhật thông tin kết nối SYT - [POST] /ConnectSYT/SYTUploadSalesInvoice
   */
  sYTUploadSalesInvoice(body?: Models.SYTUploadSalesInvoiceReq): Observable<Models.SYTUploadSalesInvoiceRes> {
    return this.post<Models.SYTUploadSalesInvoiceRes>('/ConnectSYT/SYTUploadSalesInvoice', body);
  }
  /**
   * Hủy thông tin kết nối SYT - [POST] /ConnectSYT/SYTDelSalesInvoice
   */
  sYTDelSalesInvoice(body?: Models.SYTDelSalesInvoiceReq): Observable<Models.SYTDelSalesInvoiceRes> {
    return this.post<Models.SYTDelSalesInvoiceRes>('/ConnectSYT/SYTDelSalesInvoice', body);
  }
  /**
   * Lấy thông tin nhập của nhà thuốc - [POST] /ConnectSYT/SYTGetImportStore
   */
  sYTGetImportStore(body?: Models.NTGetImportStoreReq): Observable<Models.NTGetImportStoreRes> {
    return this.post<Models.NTGetImportStoreRes>('/ConnectSYT/SYTGetImportStore', body);
  }
  /**
   * Lấy thông tin nhập chi tiết của nhà thuốc - [POST] /ConnectSYT/SYTGetImportStoreByHId
   */
  sYTGetImportStoreByHId(body?: Models.NTGetImportStoreByHIdReq): Observable<Models.NTGetImportStoreByHIdRes> {
    return this.post<Models.NTGetImportStoreByHIdRes>('/ConnectSYT/SYTGetImportStoreByHId', body);
  }
  /**
   * POST ConnectSYT/SYTUploadImportHeader - [POST] /ConnectSYT/SYTUploadImportHeader
   */
  sYTUploadImportHeader(body?: Models.SYTUploadImportHeaderReq): Observable<Models.SYTUploadImportHeaderRes> {
    return this.post<Models.SYTUploadImportHeaderRes>('/ConnectSYT/SYTUploadImportHeader', body);
  }
  /**
   * POST ConnectSYT/SYTDelImportHeader - [POST] /ConnectSYT/SYTDelImportHeader
   */
  sYTDelImportHeader(body?: Models.SYTDelImportHeaderReq): Observable<Models.SYTDelImportHeaderRes> {
    return this.post<Models.SYTDelImportHeaderRes>('/ConnectSYT/SYTDelImportHeader', body);
  }
  /**
   * POST ConnectSYT/SYTGetItemLst - [POST] /ConnectSYT/SYTGetItemLst
   */
  sYTGetItemLst(body?: Models.SYTGetItemLstReq): Observable<Models.SYTGetItemLstRes> {
    return this.post<Models.SYTGetItemLstRes>('/ConnectSYT/SYTGetItemLst', body);
  }
  /**
   * Tra cứu đơn dược quốc gia - [POST] /ConnectSYT/SearchInvoiceDQG
   */
  searchInvoiceDQG(body?: Models.SYTSearchInvoiceDQGReq): Observable<Models.SYTSearchInvoiceDQGRes> {
    return this.post<Models.SYTSearchInvoiceDQGRes>('/ConnectSYT/SearchInvoiceDQG', body);
  }
  /**
   * Cập nhật đơn quốc gia - [POST] /ConnectSYT/UpInvoiceDQG
   */
  upInvoiceDQG(body?: Models.SYTUpInvoiceDQGReq): Observable<Models.SYTUpInvoiceDQGRes> {
    return this.post<Models.SYTUpInvoiceDQGRes>('/ConnectSYT/UpInvoiceDQG', body);
  }
}
