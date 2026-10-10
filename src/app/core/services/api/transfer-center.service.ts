import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for TransferCenter Module (9 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class TransferCenterApiService extends BaseApiService {
  /**
   * Tạo mới phiếu chuyển kho giữa các trung tâm - [POST] /TransferCenter/CreateTransferCenter
   */
  createTransferCenter(body?: Models.SysCreateTransferCenterReq): Observable<Models.SysCreateTransferCenterRes> {
    return this.post<Models.SysCreateTransferCenterRes>('/TransferCenter/CreateTransferCenter', body);
  }
  /**
   * Cập nhật phiếu chuyển kho giữa các trung tâm - [POST] /TransferCenter/UpdateTransferCenter
   */
  updateTransferCenter(body?: Models.SysUpdateTransferCenterReq): Observable<Models.SysUpdateTransferCenterRes> {
    return this.post<Models.SysUpdateTransferCenterRes>('/TransferCenter/UpdateTransferCenter', body);
  }
  /**
   * Lấy danh sách phiếu chuyển kho giữa các trung tâm - [POST] /TransferCenter/GetTransferCenterByTime
   */
  getTransferCenterByTime(body?: Models.SysGetTransferCenterByTimeReq): Observable<Models.SysGetTransferCenterByTimeRes> {
    return this.post<Models.SysGetTransferCenterByTimeRes>('/TransferCenter/GetTransferCenterByTime', body);
  }
  /**
   * Lấy thông tin phiếu chuyển kho giữa các trung tâm theo ID - [POST] /TransferCenter/GetTransferCenterByID
   */
  getTransferCenterByID(body?: Models.SysGetTransferCenterByIDReq): Observable<Models.SysGetTransferCenterByIDRes> {
    return this.post<Models.SysGetTransferCenterByIDRes>('/TransferCenter/GetTransferCenterByID', body);
  }
  /**
   * Xóa phiếu chuyển kho giữa các trung tâm theo ID - [POST] /TransferCenter/DelTransferCenter
   */
  delTransferCenter(body?: Models.SysDelTransferCenterReq): Observable<Models.SysDelTransferCenterRes> {
    return this.post<Models.SysDelTransferCenterRes>('/TransferCenter/DelTransferCenter', body);
  }
  /**
   * Phê duyệt phiếu chuyển kho giữa các trung tâm theo ID - [POST] /TransferCenter/ApproveTransferCenter
   */
  approveTransferCenter(body?: Models.SysApproveTransferCenterReq): Observable<Models.SysApproveTransferCenterRes> {
    return this.post<Models.SysApproveTransferCenterRes>('/TransferCenter/ApproveTransferCenter', body);
  }
  /**
   * Xác nhận đã đóng hàng - [POST] /TransferCenter/ConfirmPacking
   */
  confirmPacking(body?: Models.SysApproveTransferCenterReq): Observable<Models.SysApproveTransferCenterRes> {
    return this.post<Models.SysApproveTransferCenterRes>('/TransferCenter/ConfirmPacking', body);
  }
  /**
   * Phê duyệt phiếu chuyển kho giữa các trung tâm theo ID - [POST] /TransferCenter/ApproveTransferCenterLine
   */
  approveTransferCenterLine(body?: Models.SysApproveTransferCenterLineReq): Observable<Models.SysApproveTransferCenterLineRes> {
    return this.post<Models.SysApproveTransferCenterLineRes>('/TransferCenter/ApproveTransferCenterLine', body);
  }
  /**
   * Kiểm tra thông tin lô nhảy trong kho tổng - [POST] /TransferCenter/GetLotCodeExistByLotIndex
   */
  getLotCodeExistByLotIndex(body?: Models.SysGetLotCodeExistByLotIndexReq): Observable<Models.SysGetLotCodeExistByLotIndexRes> {
    return this.post<Models.SysGetLotCodeExistByLotIndexRes>('/TransferCenter/GetLotCodeExistByLotIndex', body);
  }
}
