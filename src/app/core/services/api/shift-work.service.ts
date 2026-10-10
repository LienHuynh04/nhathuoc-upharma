import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ShiftWork Module (7 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ShiftWorkApiService extends BaseApiService {
  /**
   * Danh sách các ca làm việc - [POST] /ShiftWork/GetShiftWorkDefine
   */
  getShiftWorkDefine(body?: Models.NTGetShiftWorkDefineReq): Observable<Models.NTGetShiftWorkDefineRes> {
    return this.post<Models.NTGetShiftWorkDefineRes>('/ShiftWork/GetShiftWorkDefine', body);
  }
  /**
   * Tạo ca làm việc - [POST] /ShiftWork/CreateShiftWork
   */
  createShiftWork(body?: Models.NTCreateShiftWorkReq): Observable<Models.NTCreateShiftWorkRes> {
    return this.post<Models.NTCreateShiftWorkRes>('/ShiftWork/CreateShiftWork', body);
  }
  /**
   * Xóa ca làm việc - [POST] /ShiftWork/DelShiftWork
   */
  delShiftWork(body?: Models.NTDelShiftWorkReq): Observable<Models.NTDelShiftWorkRes> {
    return this.post<Models.NTDelShiftWorkRes>('/ShiftWork/DelShiftWork', body);
  }
  /**
   * Phê duyệt ca làm việc - [POST] /ShiftWork/ApproveShiftWork
   */
  approveShiftWork(body?: Models.NTApproveShiftWorkReq): Observable<Models.NTApproveShiftWorkRes> {
    return this.post<Models.NTApproveShiftWorkRes>('/ShiftWork/ApproveShiftWork', body);
  }
  /**
   * Lấy danh sách ca làm việc - [POST] /ShiftWork/GetShiftWorkByTime
   */
  getShiftWorkByTime(body?: Models.NTGetShiftWorkByTimeReq): Observable<Models.NTGetShiftWorkByTimeRes> {
    return this.post<Models.NTGetShiftWorkByTimeRes>('/ShiftWork/GetShiftWorkByTime', body);
  }
  /**
   * Lấy thông tin chấm công - [POST] /ShiftWork/GetTimeKeepingLst
   */
  getTimeKeepingLst(body?: Models.NTGetTimeKeepingLstReq): Observable<Models.NTGetTimeKeepingLstRes> {
    return this.post<Models.NTGetTimeKeepingLstRes>('/ShiftWork/GetTimeKeepingLst', body);
  }
  /**
   * Lấy thông tin chấm công - [POST] /ShiftWork/GetDetailTimeKeepingByEm
   */
  getDetailTimeKeepingByEm(body?: Models.NTGetDetailTimeKeepingByEmReq): Observable<Models.NTGetDetailTimeKeepingByEmRes> {
    return this.post<Models.NTGetDetailTimeKeepingByEmRes>('/ShiftWork/GetDetailTimeKeepingByEm', body);
  }
}
