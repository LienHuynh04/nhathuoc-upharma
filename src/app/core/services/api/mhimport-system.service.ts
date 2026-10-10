import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for MHImportSystem Module (10 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class MHImportSystemApiService extends BaseApiService {
  /**
   * Tạo phiếu đề xuất mua hàng - [POST] /MHImportSystem/CreateImportSystem
   */
  createImportSystem(body?: Models.MHCreateImportSystemReq): Observable<Models.MHCreateImportSystemRes> {
    return this.post<Models.MHCreateImportSystemRes>('/MHImportSystem/CreateImportSystem', body);
  }
  /**
   * Cập nhật phiếu đề xuất mua hàng - [POST] /MHImportSystem/UpdateImportSystem
   */
  updateImportSystem(body?: Models.MHUpdateImportSystemReq): Observable<Models.MHUpdateImportSystemRes> {
    return this.post<Models.MHUpdateImportSystemRes>('/MHImportSystem/UpdateImportSystem', body);
  }
  /**
   * Phê duyệt phiếu đề xuất mua hàng - [POST] /MHImportSystem/ApproveImportSystem
   */
  approveImportSystem(body?: Models.MHApproveImportSystemReq): Observable<Models.MHApproveImportSystemRes> {
    return this.post<Models.MHApproveImportSystemRes>('/MHImportSystem/ApproveImportSystem', body);
  }
  /**
   * Hủy phiếu đề xuất mua hàng - [POST] /MHImportSystem/DelImportSystem
   */
  delImportSystem(body?: Models.MHDelImportSystemReq): Observable<Models.MHDelImportSystemRes> {
    return this.post<Models.MHDelImportSystemRes>('/MHImportSystem/DelImportSystem', body);
  }
  /**
   * Lấy danh sách phiếu đề xuất mua hàng - [POST] /MHImportSystem/GetImportSystemLst
   */
  getImportSystemLst(body?: Models.MHGetImportSystemLstReq): Observable<Models.MHGetImportSystemLstRes> {
    return this.post<Models.MHGetImportSystemLstRes>('/MHImportSystem/GetImportSystemLst', body);
  }
  /**
   * POST MHImportSystem/GetImportSystemLstByShop - [POST] /MHImportSystem/GetImportSystemLstByShop
   */
  getImportSystemLstByShop(body?: Models.MHGetImportSystemLstReq): Observable<Models.MHGetImportSystemLstRes> {
    return this.post<Models.MHGetImportSystemLstRes>('/MHImportSystem/GetImportSystemLstByShop', body);
  }
  /**
   * Lấy thông tin chi tiết phiếu mua hàng - [POST] /MHImportSystem/GetImportSystemByID
   */
  getImportSystemByID(body?: Models.MHGetImportSystemByIDReq): Observable<Models.MHGetImportSystemByIDRes> {
    return this.post<Models.MHGetImportSystemByIDRes>('/MHImportSystem/GetImportSystemByID', body);
  }
  /**
   * Lấy thông tin báo cáo phiếu nhập hàng - [POST] /MHImportSystem/GetReportImportSystem
   */
  getReportImportSystem(body?: Models.MHGetReportImportSystemReq): Observable<Models.MHGetReportImportSystemRes> {
    return this.post<Models.MHGetReportImportSystemRes>('/MHImportSystem/GetReportImportSystem', body);
  }
  /**
   * Lấy thông tin phiếu nhập hàng để tạo THT - [POST] /MHImportSystem/GetImportSysDetail
   */
  getImportSysDetail(body?: Models.MHGetImportSysDetailReq): Observable<Models.MHGetImportSysDetailRes> {
    return this.post<Models.MHGetImportSysDetailRes>('/MHImportSystem/GetImportSysDetail', body);
  }
  /**
   * Lấy thông tin danh sách file mua hàng - [POST] /MHImportSystem/GetFileImportSys
   */
  getFileImportSys(body?: Models.MHGetFileImportSysReq): Observable<Models.MHGetFileImportSysRes> {
    return this.post<Models.MHGetFileImportSysRes>('/MHImportSystem/GetFileImportSys', body);
  }
}
