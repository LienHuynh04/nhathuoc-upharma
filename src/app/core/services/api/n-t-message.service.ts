import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for NTMessage Module (6 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class NTMessageApiService extends BaseApiService {

  /**
   * Tạo mới thông báo - [POST] /NTMessage/CreateMessage
   */
  createmessage(body?: Models.NTCreateMessageReq): Observable<any> {
    return this.post<any>('/NTMessage/CreateMessage', body);
  }

  /**
   * Cập nhật thông báo - [POST] /NTMessage/UpdateMessage
   */
  updatemessage(body?: Models.NTUpdateMessageReq): Observable<any> {
    return this.post<any>('/NTMessage/UpdateMessage', body);
  }

  /**
   * Hủy thông báo - [POST] /NTMessage/DelMessage
   */
  delmessage(body?: Models.NTDelMessageReq): Observable<any> {
    return this.post<any>('/NTMessage/DelMessage', body);
  }

  /**
   * Lấy danh sách thông báo - [POST] /NTMessage/GetMessageByTime
   */
  getmessagebytime(body?: Models.NTGetMessageByTimeReq): Observable<any> {
    return this.post<any>('/NTMessage/GetMessageByTime', body);
  }

  /**
   * Lấy chi tiết thông báo - [POST] /NTMessage/GetMessageByID
   */
  getmessagebyid(body?: Models.NTGetMessageByIDReq): Observable<any> {
    return this.post<any>('/NTMessage/GetMessageByID', body);
  }

  /**
   * Xác nhận đọc thông báo - [POST] /NTMessage/ConfirmMessage
   */
  confirmmessage(body?: Models.NTConfirmMessageReq): Observable<any> {
    return this.post<any>('/NTMessage/ConfirmMessage', body);
  }
}
