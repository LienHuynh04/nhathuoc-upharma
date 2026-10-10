import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ReturnStore Module (7 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ReturnStoreApiService extends BaseApiService {
  /**
   * Tạo phiếu trả hàng - [POST] /ReturnStore/CreateReturnDoc
   */
  createReturnDoc(body?: Models.NTCreateReturnDocReq): Observable<Models.NTCreateReturnDocRes> {
    return this.post<Models.NTCreateReturnDocRes>('/ReturnStore/CreateReturnDoc', body);
  }
  /**
   * Cập nhật phiếu trả hàng - [POST] /ReturnStore/UpdateReturnDoc
   */
  updateReturnDoc(body?: Models.NTUpdateReturnDocReq): Observable<Models.NTUpdateReturnDocRes> {
    return this.post<Models.NTUpdateReturnDocRes>('/ReturnStore/UpdateReturnDoc', body);
  }
  /**
   * Hủy phiếu trả hàng - [POST] /ReturnStore/DelReturnDoc
   */
  delReturnDoc(body?: Models.NTDelReturnDocReq): Observable<Models.NTDelReturnDocRes> {
    return this.post<Models.NTDelReturnDocRes>('/ReturnStore/DelReturnDoc', body);
  }
  /**
   * Kiếm tra hàng trả về - [POST] /ReturnStore/CheckStampForReturnDoc
   */
  checkStampForReturnDoc(body?: Models.NTCheckStampForReturnDocReq): Observable<Models.NTCheckStampForReturnDocRes> {
    return this.post<Models.NTCheckStampForReturnDocRes>('/ReturnStore/CheckStampForReturnDoc', body);
  }
  /**
   * Lấy danh sách hàng trả về - [POST] /ReturnStore/GetReturnDocByTime
   */
  getReturnDocByTime(body?: Models.NTGetReturnDocByTimeReq): Observable<Models.NTGetReturnDocByTimeRes> {
    return this.post<Models.NTGetReturnDocByTimeRes>('/ReturnStore/GetReturnDocByTime', body);
  }
  /**
   * Lấy chi tiết hàng trả về - [POST] /ReturnStore/GetReturnDocByID
   */
  getReturnDocByID(body?: Models.NTGetReturnDocByIDReq): Observable<Models.NTGetReturnDocByIDRes> {
    return this.post<Models.NTGetReturnDocByIDRes>('/ReturnStore/GetReturnDocByID', body);
  }
  /**
   * Lấy chi tiết hàng trả về - [POST] /ReturnStore/ApproveReturnDocLine
   */
  approveReturnDocLine(body?: Models.NTApproveReturnDocLineReq): Observable<Models.NTApproveReturnDocLineRes> {
    return this.post<Models.NTApproveReturnDocLineRes>('/ReturnStore/ApproveReturnDocLine', body);
  }
}
