import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for api Module (1 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class apiApiService extends BaseApiService {

  /**
   * API lấy danh sách sản phẩm hủy - [POST] /api/v1/notify-trans
   */
  notifyTrans(body?: any): Observable<any> {
    return this.post<any>('/api/v1/notify-trans', body);
  }
}
