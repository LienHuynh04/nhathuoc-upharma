import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for SYTImportStore Module (9 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class SYTImportStoreApiService extends BaseApiService {

  /**
   * Tạo phiếu nhập tồn - [POST] /SYTImportStore/CreateImportStoreDoc
   */
  createimportstoredoc(body?: any): Observable<any> {
    return this.post<any>('/SYTImportStore/CreateImportStoreDoc', body);
  }

  /**
   * Cập nhật phiếu nhập tồn - [POST] /SYTImportStore/UpdateImportStoreDoc
   */
  updateimportstoredoc(body?: any): Observable<any> {
    return this.post<any>('/SYTImportStore/UpdateImportStoreDoc', body);
  }

  /**
   * Xóa phiếu nhập tồn - [POST] /SYTImportStore/DelImportStoreDoc
   */
  delimportstoredoc(body?: any): Observable<any> {
    return this.post<any>('/SYTImportStore/DelImportStoreDoc', body);
  }

  /**
   * Lấy chi tiết phiếu nhập tồn - [POST] /SYTImportStore/GetImportStoreDocByID
   */
  getimportstoredocbyid(body?: any): Observable<any> {
    return this.post<any>('/SYTImportStore/GetImportStoreDocByID', body);
  }

  /**
   * Lấy danh sách phiếu nhập tồn theo thời gian - [POST] /SYTImportStore/GetImportStoreDocByTime
   */
  getimportstoredocbytime(body?: any): Observable<any> {
    return this.post<any>('/SYTImportStore/GetImportStoreDocByTime', body);
  }

  /**
   * Lấy danh sách phiếu nhập tồn theo thời gian - [POST] /SYTImportStore/UploadImportStoreDoc
   */
  uploadimportstoredoc(body?: any): Observable<any> {
    return this.post<any>('/SYTImportStore/UploadImportStoreDoc', body);
  }

  /**
   * POST SYTImportStore/DisconnectImportStoreDoc - [POST] /SYTImportStore/DisconnectImportStoreDoc
   */
  disconnectimportstoredoc(body?: any): Observable<any> {
    return this.post<any>('/SYTImportStore/DisconnectImportStoreDoc', body);
  }

  /**
   * Lấy tồn kho kết nối Sở y tế - [POST] /SYTImportStore/GetInventoryByShop
   */
  getinventorybyshop(body?: any): Observable<any> {
    return this.post<any>('/SYTImportStore/GetInventoryByShop', body);
  }

  /**
   * Lấy danh sách thông tin đơn bán đã kết nối lên sở y tế - [POST] /SYTImportStore/GetSalesLineByTime
   */
  getsaleslinebytime(body?: any): Observable<any> {
    return this.post<any>('/SYTImportStore/GetSalesLineByTime', body);
  }
}
