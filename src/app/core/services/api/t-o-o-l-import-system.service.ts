import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for TOOLImportSystem Module (6 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class TOOLImportSystemApiService extends BaseApiService {

  /**
   * Tạo phiếu nhập CCDC - [POST] /TOOLImportSystem/CreateImportSysHeader
   */
  createimportsysheader(body?: Models.TOOLCreateImportSysHeaderReq): Observable<any> {
    return this.post<any>('/TOOLImportSystem/CreateImportSysHeader', body);
  }

  /**
   * Cập nhật phiếu nhập CCDC - [POST] /TOOLImportSystem/UpdateImportSysHeader
   */
  updateimportsysheader(body?: Models.TOOLUpdateImportSysHeaderReq): Observable<any> {
    return this.post<any>('/TOOLImportSystem/UpdateImportSysHeader', body);
  }

  /**
   * Xóa phiếu nhập CCDC - [POST] /TOOLImportSystem/DelImportSysHeader
   */
  delimportsysheader(body?: Models.TOOLDelImportSysHeaderReq): Observable<any> {
    return this.post<any>('/TOOLImportSystem/DelImportSysHeader', body);
  }

  /**
   * Phê duyệt phiếu nhập CCDC - [POST] /TOOLImportSystem/ApproveImportSysHeader
   */
  approveimportsysheader(body?: Models.TOOLApproveImportSysHeaderReq): Observable<any> {
    return this.post<any>('/TOOLImportSystem/ApproveImportSysHeader', body);
  }

  /**
   * Lấy danh sách duyệt phiếu nhập CCDC - [POST] /TOOLImportSystem/GetImportSysHeaderLst
   */
  getimportsysheaderlst(body?: Models.TOOLGetImportSysHeaderLstReq): Observable<any> {
    return this.post<any>('/TOOLImportSystem/GetImportSysHeaderLst', body);
  }

  /**
   * Lấy chi tiết duyệt phiếu nhập CCDC - [POST] /TOOLImportSystem/GetImportSysHeaderByID
   */
  getimportsysheaderbyid(body?: Models.TOOLGetImportSysHeaderByIDReq): Observable<any> {
    return this.post<any>('/TOOLImportSystem/GetImportSysHeaderByID', body);
  }
}
