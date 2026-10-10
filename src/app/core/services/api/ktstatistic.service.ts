import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for KTStatistic Module (1 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class KTStatisticApiService extends BaseApiService {
  /**
   * Lấy thông tin các phiếu hủy sản phẩm theo thời gian - [POST] /CancelProduct/GetStatisticsShop
   */
  getStatisticsShop(body?: Models.TKGetStatisticsShopReq): Observable<Models.TKGetStatisticsShopRes> {
    return this.post<Models.TKGetStatisticsShopRes>('/CancelProduct/GetStatisticsShop', body);
  }
}
