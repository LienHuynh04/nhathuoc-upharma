import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for TOOLImportStore Module (6 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class TOOLImportStoreApiService extends BaseApiService {

  /**
   * Tạo phiếu điều chuyển CCDC - [POST] /TOOLImportStore/CreateImportStore
   */
  createimportstore(body?: any): Observable<any> {
    return this.post<any>('/TOOLImportStore/CreateImportStore', body);
  }

  /**
   * Cập nhật phiếu điều chuyển CCDC - [POST] /TOOLImportStore/UpdateImportStore
   */
  updateimportstore(body?: any): Observable<any> {
    return this.post<any>('/TOOLImportStore/UpdateImportStore', body);
  }

  /**
   * Xóa phiếu điều chuyển CCDC - [POST] /TOOLImportStore/DelImportStore
   */
  delimportstore(body?: any): Observable<any> {
    return this.post<any>('/TOOLImportStore/DelImportStore', body);
  }

  /**
   * Phê duyệt phiếu điều chuyển CCDC - [POST] /TOOLImportStore/ApproveImportStore
   */
  approveimportstore(body?: any): Observable<any> {
    return this.post<any>('/TOOLImportStore/ApproveImportStore', body);
  }

  /**
   * Lấy danh sách phiếu điều chuyển CCDC - [POST] /TOOLImportStore/GetImportStoreLst
   */
  getimportstorelst(body?: any): Observable<any> {
    return this.post<any>('/TOOLImportStore/GetImportStoreLst', body);
  }

  /**
   * Lấy chi tiết phiếu điều chuyển CCDC - [POST] /TOOLImportStore/GetImportStoreByID
   */
  getimportstorebyid(body?: any): Observable<any> {
    return this.post<any>('/TOOLImportStore/GetImportStoreByID', body);
  }
}
