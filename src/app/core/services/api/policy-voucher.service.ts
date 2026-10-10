import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for PolicyVoucher Module (7 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class PolicyVoucherApiService extends BaseApiService {
  /**
   * Lây danh sách cài đặt Voucher - [POST] /PolicyVoucher/GetPolicyVoucherLst
   */
  getPolicyVoucherLst(body?: Models.NTGetPolicyVoucherLstReq): Observable<Models.NTGetPolicyVoucherLstRes> {
    return this.post<Models.NTGetPolicyVoucherLstRes>('/PolicyVoucher/GetPolicyVoucherLst', body);
  }
  /**
   * Thêm Voucher vào hệ thống - [POST] /PolicyVoucher/AddPolicyVoucher
   */
  addPolicyVoucher(body?: Models.NTAddPolicyVoucherReq): Observable<Models.NTAddPolicyVoucherRes> {
    return this.post<Models.NTAddPolicyVoucherRes>('/PolicyVoucher/AddPolicyVoucher', body);
  }
  /**
   * Cập nhật trạng thái voucher - [POST] /PolicyVoucher/UpdateSttVoucher
   */
  updateSttVoucher(body?: Models.NTUpdateSttVoucherReq): Observable<Models.NTUpdateSttVoucherRes> {
    return this.post<Models.NTUpdateSttVoucherRes>('/PolicyVoucher/UpdateSttVoucher', body);
  }
  /**
   * Thêm danh sách Voucher vào hệ thống - [POST] /PolicyVoucher/AddPolicyVoucherLst
   */
  addPolicyVoucherLst(body?: Models.NTAddPolicyVoucherLstReq): Observable<Models.NTAddPolicyVoucherLstRes> {
    return this.post<Models.NTAddPolicyVoucherLstRes>('/PolicyVoucher/AddPolicyVoucherLst', body);
  }
  /**
   * Xóa Voucher vào hệ thống - [POST] /PolicyVoucher/DelPolicyVoucher
   */
  delPolicyVoucher(body?: Models.NTDelPolicyVoucherReq): Observable<Models.NTDelPolicyVoucherRes> {
    return this.post<Models.NTDelPolicyVoucherRes>('/PolicyVoucher/DelPolicyVoucher', body);
  }
  /**
   * Lấy thông tin Voucher - [POST] /PolicyVoucher/GetPolicyVoucherInfo
   */
  getPolicyVoucherInfo(body?: Models.NTGetPolicyVoucherInfoReq): Observable<Models.NTGetPolicyVoucherInfoRes> {
    return this.post<Models.NTGetPolicyVoucherInfoRes>('/PolicyVoucher/GetPolicyVoucherInfo', body);
  }
  /**
   * Lấy thông tin Voucher của khách hàng - [POST] /PolicyVoucher/GetVoucherOfCustomer
   */
  getVoucherOfCustomer(body?: Models.NTGetVoucherOfCustomerReq): Observable<Models.NTGetVoucherOfCustomerRes> {
    return this.post<Models.NTGetVoucherOfCustomerRes>('/PolicyVoucher/GetVoucherOfCustomer', body);
  }
}
