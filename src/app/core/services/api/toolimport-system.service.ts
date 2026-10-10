import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for TOOLImportSystem Module (6 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class TOOLImportSystemApiService extends BaseApiService {
  /**
   * Tạo phiếu nhập CCDC - [POST] /TOOLImportSystem/CreateImportSysHeader
   */
  createImportSysHeader(body?: Models.TOOLCreateImportSysHeaderReq): Observable<Models.TOOLCreateImportSysHeaderRes> {
    return this.post<Models.TOOLCreateImportSysHeaderRes>('/TOOLImportSystem/CreateImportSysHeader', body);
  }
  /**
   * Cập nhật phiếu nhập CCDC - [POST] /TOOLImportSystem/UpdateImportSysHeader
   */
  updateImportSysHeader(body?: Models.TOOLUpdateImportSysHeaderReq): Observable<Models.TOOLUpdateImportSysHeaderRes> {
    return this.post<Models.TOOLUpdateImportSysHeaderRes>('/TOOLImportSystem/UpdateImportSysHeader', body);
  }
  /**
   * Xóa phiếu nhập CCDC - [POST] /TOOLImportSystem/DelImportSysHeader
   */
  delImportSysHeader(body?: Models.TOOLDelImportSysHeaderReq): Observable<Models.TOOLDelImportSysHeaderRes> {
    return this.post<Models.TOOLDelImportSysHeaderRes>('/TOOLImportSystem/DelImportSysHeader', body);
  }
  /**
   * Phê duyệt phiếu nhập CCDC - [POST] /TOOLImportSystem/ApproveImportSysHeader
   */
  approveImportSysHeader(body?: Models.TOOLApproveImportSysHeaderReq): Observable<Models.TOOLApproveImportSysHeaderRes> {
    return this.post<Models.TOOLApproveImportSysHeaderRes>('/TOOLImportSystem/ApproveImportSysHeader', body);
  }
  /**
   * Lấy danh sách duyệt phiếu nhập CCDC - [POST] /TOOLImportSystem/GetImportSysHeaderLst
   */
  getImportSysHeaderLst(body?: Models.TOOLGetImportSysHeaderLstReq): Observable<Models.TOOLGetImportSysHeaderLstRes> {
    return this.post<Models.TOOLGetImportSysHeaderLstRes>('/TOOLImportSystem/GetImportSysHeaderLst', body);
  }
  /**
   * Lấy chi tiết duyệt phiếu nhập CCDC - [POST] /TOOLImportSystem/GetImportSysHeaderByID
   */
  getImportSysHeaderByID(body?: Models.TOOLGetImportSysHeaderByIDReq): Observable<Models.TOOLGetImportSysHeaderByIDRes> {
    return this.post<Models.TOOLGetImportSysHeaderByIDRes>('/TOOLImportSystem/GetImportSysHeaderByID', body);
  }
}
