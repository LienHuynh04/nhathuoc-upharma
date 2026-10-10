import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for HandingOver Module (7 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class HandingOverApiService extends BaseApiService {
  /**
   * Tạo mới phiếu bàn giao - [POST] /HandingOver/CreateHandingOver
   */
  createHandingOver(body?: Models.KKCreateHandingOverReq): Observable<Models.KKCreateHandingOverRes> {
    return this.post<Models.KKCreateHandingOverRes>('/HandingOver/CreateHandingOver', body);
  }
  /**
   * Cập nhật phiếu bàn giao - [POST] /HandingOver/UpdateHandingOver
   */
  updateHandingOver(body?: Models.KKUpdateHandingOverReq): Observable<Models.KKUpdateHandingOverRes> {
    return this.post<Models.KKUpdateHandingOverRes>('/HandingOver/UpdateHandingOver', body);
  }
  /**
   * Phê duyệt phiếu bàn giao - [POST] /HandingOver/ApproveHandingOver
   */
  approveHandingOver(body?: Models.KKApproveHandingOverReq): Observable<Models.KKApproveHandingOverRes> {
    return this.post<Models.KKApproveHandingOverRes>('/HandingOver/ApproveHandingOver', body);
  }
  /**
   * Phê duyệt phiếu bàn giao - [POST] /HandingOver/DelHandingOver
   */
  delHandingOver(body?: Models.KKDelHandingOverReq): Observable<Models.KKDelHandingOverRes> {
    return this.post<Models.KKDelHandingOverRes>('/HandingOver/DelHandingOver', body);
  }
  /**
   * lấy danh sách phiếu bàn giao - [POST] /HandingOver/GetHandingOverLst
   */
  getHandingOverLst(body?: Models.KKGetHandingOverLstReq): Observable<Models.KKGetHandingOverLstRes> {
    return this.post<Models.KKGetHandingOverLstRes>('/HandingOver/GetHandingOverLst', body);
  }
  /**
   * Lấy phiếu bàn giao theo ID - [POST] /HandingOver/GetHandingOverByID
   */
  getHandingOverByID(body?: Models.KKGetHandingOverByIDReq): Observable<Models.KKGetHandingOverByIDRes> {
    return this.post<Models.KKGetHandingOverByIDRes>('/HandingOver/GetHandingOverByID', body);
  }
  /**
   * Lấy phiếu bàn giao theo ID - [POST] /HandingOver/GetHandingOverByReceipt
   */
  getHandingOverByReceipt(body?: Models.KKGetHandingOverByReceiptReq): Observable<Models.KKGetHandingOverByReceiptRes> {
    return this.post<Models.KKGetHandingOverByReceiptRes>('/HandingOver/GetHandingOverByReceipt', body);
  }
}
