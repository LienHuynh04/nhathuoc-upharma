import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ChangeGenuine Module (7 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ChangeGenuineApiService extends BaseApiService {
  /**
   * Lấy tồn tem cho đổi nguồn gốc - [POST] /ChangeGenuine/GetLotForChangeGenuine
   */
  getLotForChangeGenuine(body?: Models.KTGetLotForChangeGenuineReq): Observable<Models.KTGetLotForChangeGenuineRes> {
    return this.post<Models.KTGetLotForChangeGenuineRes>('/ChangeGenuine/GetLotForChangeGenuine', body);
  }
  /**
   * Tạo phiếu thay đổi nguồn gốc - [POST] /ChangeGenuine/CreateChangeGenuineDoc
   */
  createChangeGenuineDoc(body?: Models.KTCreateChangeGenuineDocReq): Observable<Models.KTCreateChangeGenuineDocRes> {
    return this.post<Models.KTCreateChangeGenuineDocRes>('/ChangeGenuine/CreateChangeGenuineDoc', body);
  }
  /**
   * Cập nhật phiếu thay đổi nguồn gốc - [POST] /ChangeGenuine/UpdateChangeGenuineDoc
   */
  updateChangeGenuineDoc(body?: Models.KTUpdateChangeGenuineDocReq): Observable<Models.KTUpdateChangeGenuineDocRes> {
    return this.post<Models.KTUpdateChangeGenuineDocRes>('/ChangeGenuine/UpdateChangeGenuineDoc', body);
  }
  /**
   * Xóa phiếu thay đổi nguồn gốc - [POST] /ChangeGenuine/DelChangeGenuineDoc
   */
  delChangeGenuineDoc(body?: Models.KTDelChangeGenuineDocReq): Observable<Models.KTDelChangeGenuineDocRes> {
    return this.post<Models.KTDelChangeGenuineDocRes>('/ChangeGenuine/DelChangeGenuineDoc', body);
  }
  /**
   * Lấy danh sách phiếu - [POST] /ChangeGenuine/GetChangeGenuineLst
   */
  getChangeGenuineLst(body?: Models.KTGetChangeGenuineLstReq): Observable<Models.KTGetChangeGenuineLstRes> {
    return this.post<Models.KTGetChangeGenuineLstRes>('/ChangeGenuine/GetChangeGenuineLst', body);
  }
  /**
   * Lấy chi tiết phiếu - [POST] /ChangeGenuine/GetChangeGenuineDocByID
   */
  getChangeGenuineDocByID(body?: Models.KTGetChangeGenuineDocByIDReq): Observable<Models.KTGetChangeGenuineDocByIDRes> {
    return this.post<Models.KTGetChangeGenuineDocByIDRes>('/ChangeGenuine/GetChangeGenuineDocByID', body);
  }
  /**
   * Phê duyệt phiếu - [POST] /ChangeGenuine/AppproveChangeGenuineDoc
   */
  appproveChangeGenuineDoc(body?: Models.KTAppproveChangeGenuineDocReq): Observable<Models.KTAppproveChangeGenuineDocRes> {
    return this.post<Models.KTAppproveChangeGenuineDocRes>('/ChangeGenuine/AppproveChangeGenuineDoc', body);
  }
}
