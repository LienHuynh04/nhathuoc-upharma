import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ImportSystem Module (14 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ImportSystemApiService extends BaseApiService {
  /**
   * Thêm mới đơn hàng - [POST] /ImportSystem/CreateImportSys
   */
  createImportSys(body?: Models.NTCreateImportSysReq): Observable<Models.NTCreateImportSysRes> {
    return this.post<Models.NTCreateImportSysRes>('/ImportSystem/CreateImportSys', body);
  }
  /**
   * Cập nhật đơn hàng - [POST] /ImportSystem/UpdateImportSys
   */
  updateImportSys(body?: Models.NTUpdateImportSysReq): Observable<Models.NTUpdateImportSysRes> {
    return this.post<Models.NTUpdateImportSysRes>('/ImportSystem/UpdateImportSys', body);
  }
  /**
   * Cập nhật đơn hàng - [POST] /ImportSystem/UpdateImportSysApprove
   */
  updateImportSysApprove(body?: Models.NTUpdateImportSysApproveReq): Observable<Models.NTUpdateImportSysApproveRes> {
    return this.post<Models.NTUpdateImportSysApproveRes>('/ImportSystem/UpdateImportSysApprove', body);
  }
  /**
   * Xóa đơn hàng - [POST] /ImportSystem/DelImportSys
   */
  delImportSys(body?: Models.NTDelImportSysReq): Observable<Models.NTDelImportSysRes> {
    return this.post<Models.NTDelImportSysRes>('/ImportSystem/DelImportSys', body);
  }
  /**
   * Phê duyệt phiếu nhập hàng - [POST] /ImportSystem/ApproveImportSys
   */
  approveImportSys(body?: Models.NTApproveImportSysReq): Observable<Models.NTApproveImportSysRes> {
    return this.post<Models.NTApproveImportSysRes>('/ImportSystem/ApproveImportSys', body);
  }
  /**
   * Phê duyệt phiếu nhập hàng - [POST] /ImportSystem/GetImportSysHeaderByID
   */
  getImportSysHeaderByID(body?: Models.NTGetImportSysHeaderByIDReq): Observable<Models.NTGetImportSysHeaderByIDRes> {
    return this.post<Models.NTGetImportSysHeaderByIDRes>('/ImportSystem/GetImportSysHeaderByID', body);
  }
  /**
   * Phê duyệt phiếu nhập hàng - [POST] /ImportSystem/GetImportSysHeaderLst
   */
  getImportSysHeaderLst(body?: Models.NTGetImportSysHeaderLstReq): Observable<Models.NTGetImportSysHeaderLstRes> {
    return this.post<Models.NTGetImportSysHeaderLstRes>('/ImportSystem/GetImportSysHeaderLst', body);
  }
  /**
   * Lấy danh sách số lô nhảy của sản phẩm - [POST] /ImportSystem/GetImportLotLineLst
   */
  getImportLotLineLst(body?: Models.NTGetImportLotLineLstReq): Observable<Models.NTGetImportLotLineLstRes> {
    return this.post<Models.NTGetImportLotLineLstRes>('/ImportSystem/GetImportLotLineLst', body);
  }
  /**
   * Lấy danh sách số lô nhảy của sản phẩm - [POST] /ImportSystem/GetLotCodeInfoBySys
   */
  getLotCodeInfoBySys(body?: Models.NTGetLotCodeInfoBySysReq): Observable<Models.NTGetLotCodeInfoBySysRes> {
    return this.post<Models.NTGetLotCodeInfoBySysRes>('/ImportSystem/GetLotCodeInfoBySys', body);
  }
  /**
   * Lấy danh sách số lô nhảy của sản phẩm - [POST] /ImportSystem/GetProductImportLast
   */
  getProductImportLast(body?: Models.NTGetProductImportLastReq): Observable<Models.NTGetProductImportLastRes> {
    return this.post<Models.NTGetProductImportLastRes>('/ImportSystem/GetProductImportLast', body);
  }
  /**
   * Lấy danh sách số lô nhảy của sản phẩm - [POST] /ImportSystem/CheckStampImportSys
   */
  checkStampImportSys(body?: Models.NTCheckStampImportSysReq): Observable<Models.NTCheckStampImportSysRes> {
    return this.post<Models.NTCheckStampImportSysRes>('/ImportSystem/CheckStampImportSys', body);
  }
  /**
   * Lấy thông tin đơn nhập trên Fast - [POST] /ImportSystem/FastGetImportSysHeaderLst
   */
  fastGetImportSysHeaderLst(body?: Models.FastGetImportSysHeaderLstReq): Observable<Models.FastGetImportSysHeaderLstRes> {
    return this.post<Models.FastGetImportSysHeaderLstRes>('/ImportSystem/FastGetImportSysHeaderLst', body);
  }
  /**
   * Lấy thông tin đơn nhập trên Fast - [POST] /ImportSystem/FastGetImportSysLineLst
   */
  fastGetImportSysLineLst(body?: Models.FastGetImportSysLineLstReq): Observable<Models.FastGetImportSysLineLstRes> {
    return this.post<Models.FastGetImportSysLineLstRes>('/ImportSystem/FastGetImportSysLineLst', body);
  }
  /**
   * Kiểm tra thông tin Lô - [POST] /ImportSystem/GetLotCode
   */
  getLotCode(body?: Models.NTGetLotCodeReq): Observable<Models.NTGetLotCodeRes> {
    return this.post<Models.NTGetLotCodeRes>('/ImportSystem/GetLotCode', body);
  }
}
