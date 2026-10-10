import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for TOOLCancelHeader Module (6 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class TOOLCancelHeaderApiService extends BaseApiService {
  /**
   * Tạo phiếu hủy CCDC - [POST] /TOOLCancelHeader/CreateCancelHeader
   */
  createCancelHeader(body?: Models.TOOLCreateCancelHeaderReq): Observable<Models.TOOLCreateCancelHeaderRes> {
    return this.post<Models.TOOLCreateCancelHeaderRes>('/TOOLCancelHeader/CreateCancelHeader', body);
  }
  /**
   * Cập nhật phiếu hủy CCDC - [POST] /TOOLCancelHeader/UpdateCancelHeader
   */
  updateCancelHeader(body?: Models.TOOLUpdateCancelHeaderReq): Observable<Models.TOOLUpdateCancelHeaderRes> {
    return this.post<Models.TOOLUpdateCancelHeaderRes>('/TOOLCancelHeader/UpdateCancelHeader', body);
  }
  /**
   * Xóa phiếu hủy CCDC - [POST] /TOOLCancelHeader/DelCancelHeader
   */
  delCancelHeader(body?: Models.TOOLDelCancelHeaderReq): Observable<Models.TOOLDelCancelHeaderRes> {
    return this.post<Models.TOOLDelCancelHeaderRes>('/TOOLCancelHeader/DelCancelHeader', body);
  }
  /**
   * Phê duyệt phiếu hủy CCDC - [POST] /TOOLCancelHeader/ApproveCancelHeader
   */
  approveCancelHeader(body?: Models.TOOLApproveCancelHeaderReq): Observable<Models.TOOLApproveCancelHeaderRes> {
    return this.post<Models.TOOLApproveCancelHeaderRes>('/TOOLCancelHeader/ApproveCancelHeader', body);
  }
  /**
   * Lấy danh sách phiếu hủy CCDC - [POST] /TOOLCancelHeader/GetCancelHeaderLst
   */
  getCancelHeaderLst(body?: Models.TOOLGetCancelHeaderLstReq): Observable<Models.TOOLGetCancelHeaderLstRes> {
    return this.post<Models.TOOLGetCancelHeaderLstRes>('/TOOLCancelHeader/GetCancelHeaderLst', body);
  }
  /**
   * Lấy chi tiết phiếu hủy CCDC - [POST] /TOOLCancelHeader/GetCancelHeaderByID
   */
  getCancelHeaderByID(body?: Models.TOOLGetCancelHeaderByIDReq): Observable<Models.TOOLGetCancelHeaderByIDRes> {
    return this.post<Models.TOOLGetCancelHeaderByIDRes>('/TOOLCancelHeader/GetCancelHeaderByID', body);
  }
}
