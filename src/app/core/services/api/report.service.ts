import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for Report Module (6 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ReportApiService extends BaseApiService {
  /**
   * Lấy tồn kho hệ thống theo sản phẩm theo sản phẩm - [POST] /Report/GetExistProductLst
   */
  getExistProductLst(body?: Models.NTGetExistProductLstReq): Observable<Models.NTGetExistProductLstRes> {
    return this.post<Models.NTGetExistProductLstRes>('/Report/GetExistProductLst', body);
  }
  /**
   * Lấy tồn kho hệ thống theo sản phẩm theo shop - [POST] /Report/GetExistProductByShop
   */
  getExistProductByShop(body?: Models.NTGetExistProductByShopReq): Observable<Models.NTGetExistProductByShopRes> {
    return this.post<Models.NTGetExistProductByShopRes>('/Report/GetExistProductByShop', body);
  }
  /**
   * Danh sách điểm thưởng bán hàng - [POST] /Report/GetRewardNearExpirationLst
   */
  getRewardNearExpirationLst(body?: Models.RPGetRewardNearExpirationLstReq): Observable<Models.RPGetRewardNearExpirationLstRes> {
    return this.post<Models.RPGetRewardNearExpirationLstRes>('/Report/GetRewardNearExpirationLst', body);
  }
  /**
   * Danh sách điểm thưởng bán hàng - [POST] /Report/GetSuggestPlanToBuyLst
   */
  getSuggestPlanToBuyLst(body?: Models.MHGetSuggestPlanToBuyLstReq): Observable<Models.MHGetSuggestPlanToBuyLstRes> {
    return this.post<Models.MHGetSuggestPlanToBuyLstRes>('/Report/GetSuggestPlanToBuyLst', body);
  }
  /**
   * Danh sách báo cáo - [POST] /Report/GetReportGeneralByType
   */
  getReportGeneralByType(body?: Models.RPGetReportGeneralByTypeReq): Observable<Models.RPGetReportGeneralByTypeRes> {
    return this.post<Models.RPGetReportGeneralByTypeRes>('/Report/GetReportGeneralByType', body);
  }
  /**
   * Danh sách báo cáo nhập hàng cận date trong tháng - [POST] /Report/GetImportNearExpiration
   */
  getImportNearExpiration(body?: Models.RPGetImportNearExpirationReq): Observable<Models.RPGetImportNearExpirationRes> {
    return this.post<Models.RPGetImportNearExpirationRes>('/Report/GetImportNearExpiration', body);
  }
}
