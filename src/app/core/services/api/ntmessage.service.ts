import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for NTMessage Module (6 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class NTMessageApiService extends BaseApiService {
  /**
   * Tạo mới thông báo - [POST] /NTMessage/CreateMessage
   */
  createMessage(body?: Models.NTCreateMessageReq): Observable<Models.NTCreateMessageRes> {
    return this.post<Models.NTCreateMessageRes>('/NTMessage/CreateMessage', body);
  }
  /**
   * Cập nhật thông báo - [POST] /NTMessage/UpdateMessage
   */
  updateMessage(body?: Models.NTUpdateMessageReq): Observable<Models.NTUpdateMessageRes> {
    return this.post<Models.NTUpdateMessageRes>('/NTMessage/UpdateMessage', body);
  }
  /**
   * Hủy thông báo - [POST] /NTMessage/DelMessage
   */
  delMessage(body?: Models.NTDelMessageReq): Observable<Models.NTDelMessageRes> {
    return this.post<Models.NTDelMessageRes>('/NTMessage/DelMessage', body);
  }
  /**
   * Lấy danh sách thông báo - [POST] /NTMessage/GetMessageByTime
   */
  getMessageByTime(body?: Models.NTGetMessageByTimeReq): Observable<Models.NTGetMessageByTimeRes> {
    return this.post<Models.NTGetMessageByTimeRes>('/NTMessage/GetMessageByTime', body);
  }
  /**
   * Lấy chi tiết thông báo - [POST] /NTMessage/GetMessageByID
   */
  getMessageByID(body?: Models.NTGetMessageByIDReq): Observable<Models.NTGetMessageByIDRes> {
    return this.post<Models.NTGetMessageByIDRes>('/NTMessage/GetMessageByID', body);
  }
  /**
   * Xác nhận đọc thông báo - [POST] /NTMessage/ConfirmMessage
   */
  confirmMessage(body?: Models.NTConfirmMessageReq): Observable<Models.NTConfirmMessageRes> {
    return this.post<Models.NTConfirmMessageRes>('/NTMessage/ConfirmMessage', body);
  }
}
