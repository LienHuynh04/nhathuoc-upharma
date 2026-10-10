import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for PolicyPrice Module (4 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class PolicyPriceApiService extends BaseApiService {
  /**
   * Lấy danh sách giá vốn theo thời gian - [POST] /PolicyPrice/GetPriceBaseByTime
   */
  getPriceBaseByTime(body?: Models.NTGetPriceBaseByTimeReq): Observable<Models.NTGetPriceBaseByTimeRes> {
    return this.post<Models.NTGetPriceBaseByTimeRes>('/PolicyPrice/GetPriceBaseByTime', body);
  }
  /**
   * POST PolicyPrice/CreatePriceOrder - [POST] /PolicyPrice/CreatePriceOrder
   */
  createPriceOrder(body?: Models.NTCreatePriceOrderReq): Observable<Models.NTCreatePriceOrderRes> {
    return this.post<Models.NTCreatePriceOrderRes>('/PolicyPrice/CreatePriceOrder', body);
  }
  /**
   * POST PolicyPrice/UpdatePriceOrder - [POST] /PolicyPrice/UpdatePriceOrder
   */
  updatePriceOrder(body?: Models.NTUpdatePriceOrderReq): Observable<Models.NTUpdatePriceOrderRes> {
    return this.post<Models.NTUpdatePriceOrderRes>('/PolicyPrice/UpdatePriceOrder', body);
  }
  /**
   * POST PolicyPrice/GetPriceOrderByTime - [POST] /PolicyPrice/GetPriceOrderByTime
   */
  getPriceOrderByTime(body?: Models.NTGetPriceOrderByTimeReq): Observable<Models.NTGetPriceOrderByTimeRes> {
    return this.post<Models.NTGetPriceOrderByTimeRes>('/PolicyPrice/GetPriceOrderByTime', body);
  }
}
