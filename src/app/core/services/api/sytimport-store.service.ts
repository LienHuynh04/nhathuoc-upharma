import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for SYTImportStore Module (9 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class SYTImportStoreApiService extends BaseApiService {
  /**
   * Tạo phiếu nhập tồn - [POST] /SYTImportStore/CreateImportStoreDoc
   */
  createImportStoreDoc(body?: Models.SYTCreateImportStoreDocReq): Observable<Models.SYTCreateImportStoreDocRes> {
    return this.post<Models.SYTCreateImportStoreDocRes>('/SYTImportStore/CreateImportStoreDoc', body);
  }
  /**
   * Cập nhật phiếu nhập tồn - [POST] /SYTImportStore/UpdateImportStoreDoc
   */
  updateImportStoreDoc(body?: Models.SYTUpdateImportStoreDocReq): Observable<Models.SYTUpdateImportStoreDocRes> {
    return this.post<Models.SYTUpdateImportStoreDocRes>('/SYTImportStore/UpdateImportStoreDoc', body);
  }
  /**
   * Xóa phiếu nhập tồn - [POST] /SYTImportStore/DelImportStoreDoc
   */
  delImportStoreDoc(body?: Models.SYTDelImportStoreDocReq): Observable<Models.SYTDelImportStoreDocRes> {
    return this.post<Models.SYTDelImportStoreDocRes>('/SYTImportStore/DelImportStoreDoc', body);
  }
  /**
   * Lấy chi tiết phiếu nhập tồn - [POST] /SYTImportStore/GetImportStoreDocByID
   */
  getImportStoreDocByID(body?: Models.SYTGetImportStoreDocByIDReq): Observable<Models.SYTGetImportStoreDocByIDRes> {
    return this.post<Models.SYTGetImportStoreDocByIDRes>('/SYTImportStore/GetImportStoreDocByID', body);
  }
  /**
   * Lấy danh sách phiếu nhập tồn theo thời gian - [POST] /SYTImportStore/GetImportStoreDocByTime
   */
  getImportStoreDocByTime(body?: Models.SYTGetImportStoreDocByTimeReq): Observable<Models.SYTGetImportStoreDocByTimeRes> {
    return this.post<Models.SYTGetImportStoreDocByTimeRes>('/SYTImportStore/GetImportStoreDocByTime', body);
  }
  /**
   * Lấy danh sách phiếu nhập tồn theo thời gian - [POST] /SYTImportStore/UploadImportStoreDoc
   */
  uploadImportStoreDoc(body?: Models.SYTUploadImportStoreDocReq): Observable<Models.SYTUploadImportStoreDocRes> {
    return this.post<Models.SYTUploadImportStoreDocRes>('/SYTImportStore/UploadImportStoreDoc', body);
  }
  /**
   * POST SYTImportStore/DisconnectImportStoreDoc - [POST] /SYTImportStore/DisconnectImportStoreDoc
   */
  disconnectImportStoreDoc(body?: Models.SYTDisconnectImportStoreDocReq): Observable<Models.SYTDisconnectImportStoreDocRes> {
    return this.post<Models.SYTDisconnectImportStoreDocRes>('/SYTImportStore/DisconnectImportStoreDoc', body);
  }
  /**
   * Lấy tồn kho kết nối Sở y tế - [POST] /SYTImportStore/GetInventoryByShop
   */
  getInventoryByShop(body?: Models.SYTGetInventoryByShopReq): Observable<Models.SYTGetInventoryByShopRes> {
    return this.post<Models.SYTGetInventoryByShopRes>('/SYTImportStore/GetInventoryByShop', body);
  }
  /**
   * Lấy danh sách thông tin đơn bán đã kết nối lên sở y tế - [POST] /SYTImportStore/GetSalesLineByTime
   */
  getSalesLineByTime(body?: Models.SYTGetSalesLineByTimeReq): Observable<Models.SYTGetSalesLineByTimeRes> {
    return this.post<Models.SYTGetSalesLineByTimeRes>('/SYTImportStore/GetSalesLineByTime', body);
  }
}
