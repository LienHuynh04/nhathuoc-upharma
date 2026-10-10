import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for TOOLImportStore Module (6 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class TOOLImportStoreApiService extends BaseApiService {
  /**
   * Tạo phiếu điều chuyển CCDC - [POST] /TOOLImportStore/CreateImportStore
   */
  createImportStore(body?: Models.TOOLCreateImportStoreReq): Observable<Models.TOOLCreateImportStoreRes> {
    return this.post<Models.TOOLCreateImportStoreRes>('/TOOLImportStore/CreateImportStore', body);
  }
  /**
   * Cập nhật phiếu điều chuyển CCDC - [POST] /TOOLImportStore/UpdateImportStore
   */
  updateImportStore(body?: Models.TOOLUpdateImportStoreReq): Observable<Models.TOOLUpdateImportStoreRes> {
    return this.post<Models.TOOLUpdateImportStoreRes>('/TOOLImportStore/UpdateImportStore', body);
  }
  /**
   * Xóa phiếu điều chuyển CCDC - [POST] /TOOLImportStore/DelImportStore
   */
  delImportStore(body?: Models.TOOLDelImportStoreReq): Observable<Models.TOOLDelImportStoreRes> {
    return this.post<Models.TOOLDelImportStoreRes>('/TOOLImportStore/DelImportStore', body);
  }
  /**
   * Phê duyệt phiếu điều chuyển CCDC - [POST] /TOOLImportStore/ApproveImportStore
   */
  approveImportStore(body?: Models.TOOLApproveImportStoreReq): Observable<Models.TOOLApproveImportStoreRes> {
    return this.post<Models.TOOLApproveImportStoreRes>('/TOOLImportStore/ApproveImportStore', body);
  }
  /**
   * Lấy danh sách phiếu điều chuyển CCDC - [POST] /TOOLImportStore/GetImportStoreLst
   */
  getImportStoreLst(body?: Models.TOOLGetImportStoreLstReq): Observable<Models.TOOLGetImportStoreLstRes> {
    return this.post<Models.TOOLGetImportStoreLstRes>('/TOOLImportStore/GetImportStoreLst', body);
  }
  /**
   * Lấy chi tiết phiếu điều chuyển CCDC - [POST] /TOOLImportStore/GetImportStoreByID
   */
  getImportStoreByID(body?: Models.TOOLGetImportStoreByIDReq): Observable<Models.TOOLGetImportStoreByIDRes> {
    return this.post<Models.TOOLGetImportStoreByIDRes>('/TOOLImportStore/GetImportStoreByID', body);
  }
}
