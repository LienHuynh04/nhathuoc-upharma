import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ShopPlan Module (3 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ShopPlanApiService extends BaseApiService {
  /**
   * Tạo mới kế hoạch - [POST] /ShopPlan/UpdateShopPlan
   */
  updateShopPlan(body?: Models.UPUpdateShopPlanReq): Observable<Models.UPUpdateShopPlanRes> {
    return this.post<Models.UPUpdateShopPlanRes>('/ShopPlan/UpdateShopPlan', body);
  }
  /**
   * Phê duyệt kế hoạch - [POST] /ShopPlan/ApproveShopPlan
   */
  approveShopPlan(body?: Models.UPApproveShopPlanReq): Observable<Models.UPApproveShopPlanRes> {
    return this.post<Models.UPApproveShopPlanRes>('/ShopPlan/ApproveShopPlan', body);
  }
  /**
   * Lấy danh sách kế hoạch - [POST] /ShopPlan/GetShopPlanByTime
   */
  getShopPlanByTime(body?: Models.UPGetShopPlanByTimeReq): Observable<Models.UPGetShopPlanByTimeRes> {
    return this.post<Models.UPGetShopPlanByTimeRes>('/ShopPlan/GetShopPlanByTime', body);
  }
}
