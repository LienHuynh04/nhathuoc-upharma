import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ConnectFast Module (28 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ConnectFastApiService extends BaseApiService {
  /**
   * POST ConnectFast/GetDataProductImport - [POST] /ConnectFast/GetDataProductImport
   */
  getDataProductImport(body?: Models.RPGetDataProductImportReq): Observable<Models.RPGetDataProductImportRes> {
    return this.post<Models.RPGetDataProductImportRes>('/ConnectFast/GetDataProductImport', body);
  }
  /**
   * POST ConnectFast/GetDataLotImport - [POST] /ConnectFast/GetDataLotImport
   */
  getDataLotImport(body?: Models.RPGetDataLotImportReq): Observable<Models.RPGetDataLotImportRes> {
    return this.post<Models.RPGetDataLotImportRes>('/ConnectFast/GetDataLotImport', body);
  }
  /**
   * Lấy thông tin đơn hàng theo mẫu Fast - [POST] /ConnectFast/GetDataProductSales
   */
  getDataProductSales(body?: Models.RPGetDataProductSalesReq): Observable<Models.RPGetDataProductSalesRes> {
    return this.post<Models.RPGetDataProductSalesRes>('/ConnectFast/GetDataProductSales', body);
  }
  /**
   * Lấy thông tin đơn đặt theo mẫu Fast - [POST] /ConnectFast/GetDataProductOrder
   */
  getDataProductOrder(body?: Models.RPGetDataProductSalesReq): Observable<Models.RPGetDataProductSalesRes> {
    return this.post<Models.RPGetDataProductSalesRes>('/ConnectFast/GetDataProductOrder', body);
  }
  /**
   * POST ConnectFast/GetProductPackageFast - [POST] /ConnectFast/GetProductPackageFast
   */
  getProductPackageFast(body?: Models.NTGetProductPackageFastReq): Observable<Models.NTGetProductPackageFastRes> {
    return this.post<Models.NTGetProductPackageFastRes>('/ConnectFast/GetProductPackageFast', body);
  }
  /**
   * POST ConnectFast/GetDataProductTransfer - [POST] /ConnectFast/GetDataProductTransfer
   */
  getDataProductTransfer(body?: Models.RPGetDataProductTransferReq): Observable<Models.RPGetDataProductTransferRes> {
    return this.post<Models.RPGetDataProductTransferRes>('/ConnectFast/GetDataProductTransfer', body);
  }
  /**
   * Chuyển kho trung tâm - [POST] /ConnectFast/GetDataProductTransferCenter
   */
  getDataProductTransferCenter(body?: Models.RPGetDataProductTransferReq): Observable<Models.RPGetDataProductTransferRes> {
    return this.post<Models.RPGetDataProductTransferRes>('/ConnectFast/GetDataProductTransferCenter', body);
  }
  /**
   * POST ConnectFast/GetDataProductReturn - [POST] /ConnectFast/GetDataProductReturn
   */
  getDataProductReturn(body?: Models.RPGetDataProductReturnReq): Observable<Models.RPGetDataProductReturnRes> {
    return this.post<Models.RPGetDataProductReturnRes>('/ConnectFast/GetDataProductReturn', body);
  }
  /**
   * POST ConnectFast/GetDataSuppliesImport - [POST] /ConnectFast/GetDataSuppliesImport
   */
  getDataSuppliesImport(body?: Models.RPGetDataSuppliesImportReq): Observable<Models.RPGetDataSuppliesImportRes> {
    return this.post<Models.RPGetDataSuppliesImportRes>('/ConnectFast/GetDataSuppliesImport', body);
  }
  /**
   * POST ConnectFast/GetInventoryByShop - [POST] /ConnectFast/GetInventoryByShop
   */
  getInventoryByShop(body?: Models.FastGetInventoryByShopReq): Observable<Models.FastGetInventoryByShopRes> {
    return this.post<Models.FastGetInventoryByShopRes>('/ConnectFast/GetInventoryByShop', body);
  }
  /**
   * Lấy thông tin tồn kho theo cách tính Fast - [POST] /ConnectFast/GetInventoryByCenter
   */
  getInventoryByCenter(body?: Models.FastGetInventoryByCenterReq): Observable<Models.FastGetInventoryByCenterRes> {
    return this.post<Models.FastGetInventoryByCenterRes>('/ConnectFast/GetInventoryByCenter', body);
  }
  /**
   * Lấy danh sách đơn hàng đẩy lên Fast - [POST] /ConnectFast/GetSalesHeader
   */
  getSalesHeader(body?: Models.FastGetSalesHeaderReq): Observable<Models.FastGetSalesHeaderRes> {
    return this.post<Models.FastGetSalesHeaderRes>('/ConnectFast/GetSalesHeader', body);
  }
  /**
   * Lấy danh sách khách hàng bán trên Fast - [POST] /ConnectFast/GetCustomerSales
   */
  getCustomerSales(body?: Models.FastGetCustomerSalesReq): Observable<Models.FastGetCustomerSalesRes> {
    return this.post<Models.FastGetCustomerSalesRes>('/ConnectFast/GetCustomerSales', body);
  }
  /**
   * Lấy chi tiết đơn hàng bán trên Fast - [POST] /ConnectFast/GetProductSaleByDocs
   */
  getProductSaleByDocs(body?: Models.FastGetProductSaleByDocsReq): Observable<Models.FastGetProductSaleByDocsRes> {
    return this.post<Models.FastGetProductSaleByDocsRes>('/ConnectFast/GetProductSaleByDocs', body);
  }
  /**
   * Lấy chi tiết đơn hàng bán trên Fast theo DMSID - [POST] /ConnectFast/GetProductSaleByDMSID
   */
  getProductSaleByDMSID(body?: Models.FastGetProductSaleByDMSIDReq): Observable<Models.FastGetProductSaleByDMSIDRes> {
    return this.post<Models.FastGetProductSaleByDMSIDRes>('/ConnectFast/GetProductSaleByDMSID', body);
  }
  /**
   * Lấy chi tiết đơn hàng bán trên Fast - [POST] /ConnectFast/UpSalesInvoice
   */
  upSalesInvoice(body?: Models.FastUpSalesInvoiceReq): Observable<Models.FastUpSalesInvoiceRes> {
    return this.post<Models.FastUpSalesInvoiceRes>('/ConnectFast/UpSalesInvoice', body);
  }
  /**
   * Xóa thông tin đẩy đơn hàng bán trên Fast - [POST] /ConnectFast/DelUpSalesInvoice
   */
  delUpSalesInvoice(body?: Models.FastDelUpSalesInvoiceReq): Observable<Models.FastDelUpSalesInvoiceRes> {
    return this.post<Models.FastDelUpSalesInvoiceRes>('/ConnectFast/DelUpSalesInvoice', body);
  }
  /**
   * Lấy thông tin các phiếu điều chuyển - [POST] /ConnectFast/GetImportStore
   */
  getImportStore(body?: Models.FastGetImportStoreReq): Observable<Models.FastGetImportStoreRes> {
    return this.post<Models.FastGetImportStoreRes>('/ConnectFast/GetImportStore', body);
  }
  /**
   * Lấy thông tin chi tiết các phiếu điều chuyển theo Model Fast - [POST] /ConnectFast/GetProductTransferByID
   */
  getProductTransferByID(body?: Models.FastGetProductTransferByIDReq): Observable<Models.FastGetProductTransferByIDRes> {
    return this.post<Models.FastGetProductTransferByIDRes>('/ConnectFast/GetProductTransferByID', body);
  }
  /**
   * Đẩy thông tin phiếu  điều lên Fast - [POST] /ConnectFast/UpImportStore
   */
  upImportStore(body?: Models.FastUpImportStoreReq): Observable<Models.FastUpImportStoreRes> {
    return this.post<Models.FastUpImportStoreRes>('/ConnectFast/UpImportStore', body);
  }
  /**
   * Xóa thông tin phiếu  điều lên Fast - [POST] /ConnectFast/DelUpImportStore
   */
  delUpImportStore(body?: Models.FastDelUpImportStoreReq): Observable<Models.FastDelUpImportStoreRes> {
    return this.post<Models.FastDelUpImportStoreRes>('/ConnectFast/DelUpImportStore', body);
  }
  /**
   * lấy thông tin phiếu  điều lên Fast - [POST] /ConnectFast/GetHisUpInvoiceDoc
   */
  getHisUpInvoiceDoc(body?: Models.FastGetHisUpInvoiceDocReq): Observable<Models.FastGetHisUpInvoiceDocRes> {
    return this.post<Models.FastGetHisUpInvoiceDocRes>('/ConnectFast/GetHisUpInvoiceDoc', body);
  }
  /**
   * lấy thông tin line phiếu  điều lên Fast - [POST] /ConnectFast/GetHisUpInvoiceLine
   */
  getHisUpInvoiceLine(body?: Models.FastGetHisUpInvoiceLineReq): Observable<Models.FastGetHisUpInvoiceLineRes> {
    return this.post<Models.FastGetHisUpInvoiceLineRes>('/ConnectFast/GetHisUpInvoiceLine', body);
  }
  /**
   * lấy thông tin danh sách đơn nhập kho hệ thống - [POST] /ConnectFast/GetImportSystem
   */
  getImportSystem(body?: Models.FastGetImportSystemReq): Observable<Models.FastGetImportSystemRes> {
    return this.post<Models.FastGetImportSystemRes>('/ConnectFast/GetImportSystem', body);
  }
  /**
   * lấy thông tin dòng hàng đơn nhập kho hệ thống - [POST] /ConnectFast/GetProductImportByID
   */
  getProductImportByID(body?: Models.FastGetProductImportByIDReq): Observable<Models.FastGetProductImportByIDRes> {
    return this.post<Models.FastGetProductImportByIDRes>('/ConnectFast/GetProductImportByID', body);
  }
  /**
   * Đẩy đơn nhập kho lên hệ thống - [POST] /ConnectFast/UpImportSystem
   */
  upImportSystem(body?: Models.FastUpImportSystemReq): Observable<Models.FastUpImportSystemRes> {
    return this.post<Models.FastUpImportSystemRes>('/ConnectFast/UpImportSystem', body);
  }
  /**
   * Xóa đơn đẩy nhập kho lên hệ thống - [POST] /ConnectFast/DelUpImportSystem
   */
  delUpImportSystem(body?: Models.FastDelUpImportSystemReq): Observable<Models.FastDelUpImportSystemRes> {
    return this.post<Models.FastDelUpImportSystemRes>('/ConnectFast/DelUpImportSystem', body);
  }
  /**
   * Lấy danh sách hủy đơn nhập tồn - [POST] /ConnectFast/GetHistoryUpImportDoc
   */
  getHistoryUpImportDoc(body?: Models.FASTGetHistoryUpImportDocReq): Observable<Models.FASTGetHistoryUpImportDocRes> {
    return this.post<Models.FASTGetHistoryUpImportDocRes>('/ConnectFast/GetHistoryUpImportDoc', body);
  }
}
