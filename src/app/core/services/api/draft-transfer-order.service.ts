import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for DraftTransferOrder Module (2 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class DraftTransferOrderApiService extends BaseApiService {
  /**
   * POST DraftTransferOrder/GetTransferOrderLineByShop - [POST] /DraftTransferOrder/GetTransferOrderLineByShop
   */
  getTransferOrderLineByShop(body?: Models.DraftGetTransferOrderLineByShopReq): Observable<Models.DraftGetTransferOrderLineByShopRes> {
    return this.post<Models.DraftGetTransferOrderLineByShopRes>('/DraftTransferOrder/GetTransferOrderLineByShop', body);
  }
  /**
   * POST DraftTransferOrder/ModifyTransferOrderLine - [POST] /DraftTransferOrder/ModifyTransferOrderLine
   */
  modifyTransferOrderLine(body?: Models.DraftModifyTransferOrderLineReq): Observable<Models.DraftModifyTransferOrderLineRes> {
    return this.post<Models.DraftModifyTransferOrderLineRes>('/DraftTransferOrder/ModifyTransferOrderLine', body);
  }
}
