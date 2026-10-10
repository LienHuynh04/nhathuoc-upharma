import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for KTChangeLot Module (3 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class KTChangeLotApiService extends BaseApiService {

  /**
   * Lấy danh sách đổi lô - [POST] /KTChangeLot/GetChangeLotLst
   */
  getchangelotlst(body?: any): Observable<any> {
    return this.post<any>('/KTChangeLot/GetChangeLotLst', body);
  }

  /**
   * Cập nhật đổi lô - [POST] /KTChangeLot/UpdateChangeLot
   */
  updatechangelot(body?: any): Observable<any> {
    return this.post<any>('/KTChangeLot/UpdateChangeLot', body);
  }

  /**
   * Xóa đổi lô - [POST] /KTChangeLot/DelChangeLot
   */
  delchangelot(body?: any): Observable<any> {
    return this.post<any>('/KTChangeLot/DelChangeLot', body);
  }
}
