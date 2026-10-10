import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for VTB Module (1 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class VTBApiService extends BaseApiService {
  /**
   * API lấy danh sách sản phẩm hủy - [POST] /api/v1/notify-trans
   */
  notifytrans(body?: Models.VTBNotifyTransReq): Observable<Models.VTBNotifyTransRes> {
    return this.post<Models.VTBNotifyTransRes>('/api/v1/notify-trans', body);
  }
}
