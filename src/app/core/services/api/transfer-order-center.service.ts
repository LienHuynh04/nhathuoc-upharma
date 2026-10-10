import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for TransferOrderCenter Module (7 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class TransferOrderCenterApiService extends BaseApiService {
  /**
   * Tạo mới đơn đặt hàng nội bộ - [POST] /TransferOrderCenter/CreateTransferOrderCenter
   */
  createTransferOrderCenter(body?: Models.NTCreateTransferOrderCenterReq): Observable<Models.NTCreateTransferOrderCenterRes> {
    return this.post<Models.NTCreateTransferOrderCenterRes>('/TransferOrderCenter/CreateTransferOrderCenter', body);
  }
  /**
   * Cập nhật đơn đặt hàng nội bộ - [POST] /TransferOrderCenter/UpdateTransferOrderCenter
   */
  updateTransferOrderCenter(body?: Models.NTUpdateTransferOrderCenterReq): Observable<Models.NTUpdateTransferOrderCenterRes> {
    return this.post<Models.NTUpdateTransferOrderCenterRes>('/TransferOrderCenter/UpdateTransferOrderCenter', body);
  }
  /**
   * Xóa đơn đặt hàng nội bộ - [POST] /TransferOrderCenter/DelTransferOrderCenter
   */
  delTransferOrderCenter(body?: Models.NTDelTransferOrderCenterReq): Observable<Models.NTDelTransferOrderCenterRes> {
    return this.post<Models.NTDelTransferOrderCenterRes>('/TransferOrderCenter/DelTransferOrderCenter', body);
  }
  /**
   * Lấy thông tin đơn đặt hàng nội bộ - [POST] /TransferOrderCenter/GetTransferOrderCenterInfo
   */
  getTransferOrderCenterInfo(body?: Models.NTGetTransferOrderCenterInfoReq): Observable<Models.NTGetTransferOrderCenterInfoRes> {
    return this.post<Models.NTGetTransferOrderCenterInfoRes>('/TransferOrderCenter/GetTransferOrderCenterInfo', body);
  }
  /**
   * Lấy thông tin đơn đặt hàng nội bộ theo thời gian - [POST] /TransferOrderCenter/GetTransferOrderCenterByTime
   */
  getTransferOrderCenterByTime(body?: Models.NTGetTransferOrderCenterByTimeReq): Observable<Models.NTGetTransferOrderCenterByTimeRes> {
    return this.post<Models.NTGetTransferOrderCenterByTimeRes>('/TransferOrderCenter/GetTransferOrderCenterByTime', body);
  }
  /**
   * Lấy thông tin đơn đặt hàng nội bộ chi tiết theo thời gian - [POST] /TransferOrderCenter/GetTransferOrderCenterDetailByTime
   */
  getTransferOrderCenterDetailByTime(body?: Models.NTGetTransferOrderCenterDetailByTimeReq): Observable<Models.NTGetTransferOrderCenterDetailByTimeRes> {
    return this.post<Models.NTGetTransferOrderCenterDetailByTimeRes>('/TransferOrderCenter/GetTransferOrderCenterDetailByTime', body);
  }
  /**
   * Lấy thông tin đơn đặt hàng nội bộ chi tiết theo thời gian - [POST] /TransferOrderCenter/GetTransferOrderCenterDetailByID
   */
  getTransferOrderCenterDetailByID(body?: Models.NTGetTransferOrderCenterDetailByIDReq): Observable<Models.NTGetTransferOrderCenterDetailByIDRes> {
    return this.post<Models.NTGetTransferOrderCenterDetailByIDRes>('/TransferOrderCenter/GetTransferOrderCenterDetailByID', body);
  }
}
