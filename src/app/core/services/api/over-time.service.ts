import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for OverTime Module (4 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class OverTimeApiService extends BaseApiService {
  /**
   * Đăng ký làm thêm giờ - [POST] /OverTime/CreateOverTime
   */
  createOverTime(body?: Models.NTCreateOverTimeReq): Observable<Models.NTCreateOverTimeRes> {
    return this.post<Models.NTCreateOverTimeRes>('/OverTime/CreateOverTime', body);
  }
  /**
   * Hủy làm thêm giờ - [POST] /OverTime/DelOverTime
   */
  delOverTime(body?: Models.NTDelOverTimeReq): Observable<Models.NTDelOverTimeRes> {
    return this.post<Models.NTDelOverTimeRes>('/OverTime/DelOverTime', body);
  }
  /**
   * Phê duyệt làm thêm giờ - [POST] /OverTime/ApproveOverTime
   */
  approveOverTime(body?: Models.NTApproveOverTimeReq): Observable<Models.NTApproveOverTimeRes> {
    return this.post<Models.NTApproveOverTimeRes>('/OverTime/ApproveOverTime', body);
  }
  /**
   * Lấy danh sách làm thêm giờ - [POST] /OverTime/GetOverTimeByTime
   */
  getOverTimeByTime(body?: Models.NTGetOverTimeByTimeReq): Observable<Models.NTGetOverTimeByTimeRes> {
    return this.post<Models.NTGetOverTimeByTimeRes>('/OverTime/GetOverTimeByTime', body);
  }
}
