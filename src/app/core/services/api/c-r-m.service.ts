import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for CRM Module (1 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class CRMApiService extends BaseApiService {

  /**
   * Cập nhật thông tin khách hàng chăm sóc - [POST] /CRM/UpdateBuyerDiagnose
   */
  updatebuyerdiagnose(body?: any): Observable<any> {
    return this.post<any>('/CRM/UpdateBuyerDiagnose', body);
  }
}
