import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for CustomerCard Module (5 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class CustomerCardApiService extends BaseApiService {
  /**
   * Lấy danh sách thẻ khách hàng - [POST] /CustomerCard/GetCustomerCardLst
   */
  getCustomerCardLst(body?: Models.NTGetCustomerCardLstReq): Observable<Models.NTGetCustomerCardLstRes> {
    return this.post<Models.NTGetCustomerCardLstRes>('/CustomerCard/GetCustomerCardLst', body);
  }
  /**
   * Bổ dung danh sách thẻ khách hàng - [POST] /CustomerCard/AddCustomerCard
   */
  addCustomerCard(body?: Models.NTAddCustomerCardReq): Observable<Models.NTAddCustomerCardRes> {
    return this.post<Models.NTAddCustomerCardRes>('/CustomerCard/AddCustomerCard', body);
  }
  /**
   * Khóa danh sách thẻ khách hàng - [POST] /CustomerCard/LockCustomerCard
   */
  lockCustomerCard(body?: Models.NTLockCustomerCardReq): Observable<Models.NTLockCustomerCardRes> {
    return this.post<Models.NTLockCustomerCardRes>('/CustomerCard/LockCustomerCard', body);
  }
  /**
   * Kích hoạt thẻ khách hàng - [POST] /CustomerCard/ActivateCustomerCard
   */
  activateCustomerCard(body?: Models.NTActivateCustomerCardReq): Observable<Models.NTActivateCustomerCardRes> {
    return this.post<Models.NTActivateCustomerCardRes>('/CustomerCard/ActivateCustomerCard', body);
  }
  /**
   * Kích hoạt thẻ khách hàng - [POST] /CustomerCard/GetCustomerPointDetailLst
   */
  getCustomerPointDetailLst(body?: Models.NTGetCustomerPointDetailLstReq): Observable<Models.NTGetCustomerPointDetailLstRes> {
    return this.post<Models.NTGetCustomerPointDetailLstRes>('/CustomerCard/GetCustomerPointDetailLst', body);
  }
}
