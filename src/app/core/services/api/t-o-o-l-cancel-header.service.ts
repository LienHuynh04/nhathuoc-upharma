import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for TOOLCancelHeader Module (6 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class TOOLCancelHeaderApiService extends BaseApiService {

  /**
   * Tạo phiếu hủy CCDC - [POST] /TOOLCancelHeader/CreateCancelHeader
   */
  createcancelheader(body?: any): Observable<any> {
    return this.post<any>('/TOOLCancelHeader/CreateCancelHeader', body);
  }

  /**
   * Cập nhật phiếu hủy CCDC - [POST] /TOOLCancelHeader/UpdateCancelHeader
   */
  updatecancelheader(body?: any): Observable<any> {
    return this.post<any>('/TOOLCancelHeader/UpdateCancelHeader', body);
  }

  /**
   * Xóa phiếu hủy CCDC - [POST] /TOOLCancelHeader/DelCancelHeader
   */
  delcancelheader(body?: any): Observable<any> {
    return this.post<any>('/TOOLCancelHeader/DelCancelHeader', body);
  }

  /**
   * Phê duyệt phiếu hủy CCDC - [POST] /TOOLCancelHeader/ApproveCancelHeader
   */
  approvecancelheader(body?: any): Observable<any> {
    return this.post<any>('/TOOLCancelHeader/ApproveCancelHeader', body);
  }

  /**
   * Lấy danh sách phiếu hủy CCDC - [POST] /TOOLCancelHeader/GetCancelHeaderLst
   */
  getcancelheaderlst(body?: any): Observable<any> {
    return this.post<any>('/TOOLCancelHeader/GetCancelHeaderLst', body);
  }

  /**
   * Lấy chi tiết phiếu hủy CCDC - [POST] /TOOLCancelHeader/GetCancelHeaderByID
   */
  getcancelheaderbyid(body?: any): Observable<any> {
    return this.post<any>('/TOOLCancelHeader/GetCancelHeaderByID', body);
  }
}
