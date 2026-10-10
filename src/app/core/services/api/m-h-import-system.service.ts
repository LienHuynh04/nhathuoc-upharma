import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for MHImportSystem Module (10 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class MHImportSystemApiService extends BaseApiService {

  /**
   * Tạo phiếu đề xuất mua hàng - [POST] /MHImportSystem/CreateImportSystem
   */
  createimportsystem(body?: any): Observable<any> {
    return this.post<any>('/MHImportSystem/CreateImportSystem', body);
  }

  /**
   * Cập nhật phiếu đề xuất mua hàng - [POST] /MHImportSystem/UpdateImportSystem
   */
  updateimportsystem(body?: any): Observable<any> {
    return this.post<any>('/MHImportSystem/UpdateImportSystem', body);
  }

  /**
   * Phê duyệt phiếu đề xuất mua hàng - [POST] /MHImportSystem/ApproveImportSystem
   */
  approveimportsystem(body?: any): Observable<any> {
    return this.post<any>('/MHImportSystem/ApproveImportSystem', body);
  }

  /**
   * Hủy phiếu đề xuất mua hàng - [POST] /MHImportSystem/DelImportSystem
   */
  delimportsystem(body?: any): Observable<any> {
    return this.post<any>('/MHImportSystem/DelImportSystem', body);
  }

  /**
   * Lấy danh sách phiếu đề xuất mua hàng - [POST] /MHImportSystem/GetImportSystemLst
   */
  getimportsystemlst(body?: any): Observable<any> {
    return this.post<any>('/MHImportSystem/GetImportSystemLst', body);
  }

  /**
   * POST MHImportSystem/GetImportSystemLstByShop - [POST] /MHImportSystem/GetImportSystemLstByShop
   */
  getimportsystemlstbyshop(body?: any): Observable<any> {
    return this.post<any>('/MHImportSystem/GetImportSystemLstByShop', body);
  }

  /**
   * Lấy thông tin chi tiết phiếu mua hàng - [POST] /MHImportSystem/GetImportSystemByID
   */
  getimportsystembyid(body?: any): Observable<any> {
    return this.post<any>('/MHImportSystem/GetImportSystemByID', body);
  }

  /**
   * Lấy thông tin báo cáo phiếu nhập hàng - [POST] /MHImportSystem/GetReportImportSystem
   */
  getreportimportsystem(body?: any): Observable<any> {
    return this.post<any>('/MHImportSystem/GetReportImportSystem', body);
  }

  /**
   * Lấy thông tin phiếu nhập hàng để tạo THT - [POST] /MHImportSystem/GetImportSysDetail
   */
  getimportsysdetail(body?: any): Observable<any> {
    return this.post<any>('/MHImportSystem/GetImportSysDetail', body);
  }

  /**
   * Lấy thông tin danh sách file mua hàng - [POST] /MHImportSystem/GetFileImportSys
   */
  getfileimportsys(body?: any): Observable<any> {
    return this.post<any>('/MHImportSystem/GetFileImportSys', body);
  }
}
