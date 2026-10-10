import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ImportStore Module (9 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ImportStoreApiService extends BaseApiService {
  /**
   * Thêm biên bản nhập kho - [POST] /ImportStore/CreateImportStore
   */
  createImportStore(body?: Models.NTCreateImportStoreReq): Observable<Models.NTCreateImportStoreRes> {
    return this.post<Models.NTCreateImportStoreRes>('/ImportStore/CreateImportStore', body);
  }
  /**
   * Lấy danh sách biên bản giao nhận - [POST] /ImportStore/GetImportStore
   */
  getImportStore(body?: Models.NTGetImportStoreReq): Observable<Models.NTGetImportStoreRes> {
    return this.post<Models.NTGetImportStoreRes>('/ImportStore/GetImportStore', body);
  }
  /**
   * Lấy thông tin biên bản giao nhận - [POST] /ImportStore/GetImportStoreByHId
   */
  getImportStoreByHId(body?: Models.NTGetImportStoreByHIdReq): Observable<Models.NTGetImportStoreByHIdRes> {
    return this.post<Models.NTGetImportStoreByHIdRes>('/ImportStore/GetImportStoreByHId', body);
  }
  /**
   * Cập nhật thông tin biên bản giao nhận - [POST] /ImportStore/UpdateImportStore
   */
  updateImportStore(body?: Models.NTUpdateImportStoreReq): Observable<Models.NTUpdateImportStoreRes> {
    return this.post<Models.NTUpdateImportStoreRes>('/ImportStore/UpdateImportStore', body);
  }
  /**
   * Xóa biên bản giao nhận - [POST] /ImportStore/DelImportStore
   */
  delImportStore(body?: Models.NTDelImportStoreReq): Observable<Models.NTDelImportStoreRes> {
    return this.post<Models.NTDelImportStoreRes>('/ImportStore/DelImportStore', body);
  }
  /**
   * Duyệt dòng hàng phiếu nhập kho - [POST] /ImportStore/ApproveImportLine
   */
  approveImportLine(body?: Models.NTApproveImportLineReq): Observable<Models.NTApproveImportLineRes> {
    return this.post<Models.NTApproveImportLineRes>('/ImportStore/ApproveImportLine', body);
  }
  /**
   * Duyệt dòng hàng phiếu nhập kho - [POST] /ImportStore/GetLotTransferLst
   */
  getLotTransferLst(body?: Models.NTGetLotTransferLstReq): Observable<Models.NTGetLotTransferLstRes> {
    return this.post<Models.NTGetLotTransferLstRes>('/ImportStore/GetLotTransferLst', body);
  }
  /**
   * Duyệt phiếu nhập kho - [POST] /ImportStore/ApproveImportStore
   */
  approveImportStore(body?: Models.NTApproveImportStoreReq): Observable<Models.NTApproveImportStoreRes> {
    return this.post<Models.NTApproveImportStoreRes>('/ImportStore/ApproveImportStore', body);
  }
  /**
   * Xác nhận đã đóng kiểm hàng - [POST] /ImportStore/ConfirmPacking
   */
  confirmPacking(body?: Models.NTApproveImportStoreReq): Observable<Models.NTApproveImportStoreRes> {
    return this.post<Models.NTApproveImportStoreRes>('/ImportStore/ConfirmPacking', body);
  }
}
