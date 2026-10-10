import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for CancelProduct Module (8 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class CancelProductApiService extends BaseApiService {
  /**
   * Lấy thông tin các phiếu hủy sản phẩm theo thời gian - [POST] /CancelProduct/GetCancelProductByTime
   */
  getCancelProductByTime(body?: Models.NTGetCancelProductByTimeReq): Observable<Models.NTGetCancelProductByTimeRes> {
    return this.post<Models.NTGetCancelProductByTimeRes>('/CancelProduct/GetCancelProductByTime', body);
  }
  /**
   * Lấy thông tin chi tiết phiếu hủy sản phẩm - [POST] /CancelProduct/GetCancelProductByID
   */
  getCancelProductByID(body?: Models.NTGetCancelProductByIDReq): Observable<Models.NTGetCancelProductByIDRes> {
    return this.post<Models.NTGetCancelProductByIDRes>('/CancelProduct/GetCancelProductByID', body);
  }
  /**
   * Xóa phiếu hủy sản phẩm - [POST] /CancelProduct/DelCancelProduct
   */
  delCancelProduct(body?: Models.NTDelCancelProductReq): Observable<Models.NTDelCancelProductRes> {
    return this.post<Models.NTDelCancelProductRes>('/CancelProduct/DelCancelProduct', body);
  }
  /**
   * Phê duyệt phiếu hủy sản phẩm - [POST] /CancelProduct/ApproveCancelProduct
   */
  approveCancelProduct(body?: Models.NTApproveCancelProductReq): Observable<Models.NTApproveCancelProductRes> {
    return this.post<Models.NTApproveCancelProductRes>('/CancelProduct/ApproveCancelProduct', body);
  }
  /**
   * Tạo phiếu hủy sản phẩm - [POST] /CancelProduct/CreateCancelProduct
   */
  createCancelProduct(body?: Models.NTCreateCancelProductReq): Observable<Models.NTCreateCancelProductRes> {
    return this.post<Models.NTCreateCancelProductRes>('/CancelProduct/CreateCancelProduct', body);
  }
  /**
   * Cập nhật phiếu hủy sản phẩm - [POST] /CancelProduct/UpdateCancelProduct
   */
  updateCancelProduct(body?: Models.NTUpdateCancelProductReq): Observable<Models.NTUpdateCancelProductRes> {
    return this.post<Models.NTUpdateCancelProductRes>('/CancelProduct/UpdateCancelProduct', body);
  }
  /**
   * Lấy danh sách theo dõi tình trạng hàng đổi trả - [POST] /CancelProduct/GetCancelProductFollowLst
   */
  getCancelProductFollowLst(body?: Models.NTGetCancelProductFollowLstReq): Observable<Models.NTGetCancelProductFollowLstRes> {
    return this.post<Models.NTGetCancelProductFollowLstRes>('/CancelProduct/GetCancelProductFollowLst', body);
  }
  /**
   * Cập nhật tình trạng hàng đổi trả - [POST] /CancelProduct/UpCancelProductFollow
   */
  upCancelProductFollow(body?: Models.NTUpCancelProductFollowReq): Observable<Models.NTUpCancelProductFollowRes> {
    return this.post<Models.NTUpCancelProductFollowRes>('/CancelProduct/UpCancelProductFollow', body);
  }
}
