import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for TOOLLocalStore Module (4 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class TOOLLocalStoreApiService extends BaseApiService {

  /**
   * Lấy danh sách tồn kho - [POST] /TOOLLocalStore/GetInventoryByStore
   */
  getinventorybystore(body?: any): Observable<any> {
    return this.post<any>('/TOOLLocalStore/GetInventoryByStore', body);
  }

  /**
   * Lấy danh sách tồn kho các tem - [POST] /TOOLLocalStore/GetInventoryDetailByPID
   */
  getinventorydetailbypid(body?: any): Observable<any> {
    return this.post<any>('/TOOLLocalStore/GetInventoryDetailByPID', body);
  }

  /**
   * Lấy thông tin tem - [POST] /TOOLLocalStore/GetLotCodeIndex
   */
  getlotcodeindex(body?: any): Observable<any> {
    return this.post<any>('/TOOLLocalStore/GetLotCodeIndex', body);
  }

  /**
   * Cập nhật thông tin tem - [POST] /TOOLLocalStore/UpLotCodeIndexFast
   */
  uplotcodeindexfast(body?: any): Observable<any> {
    return this.post<any>('/TOOLLocalStore/UpLotCodeIndexFast', body);
  }
}
