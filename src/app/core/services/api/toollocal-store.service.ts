import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for TOOLLocalStore Module (4 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class TOOLLocalStoreApiService extends BaseApiService {
  /**
   * Lấy danh sách tồn kho - [POST] /TOOLLocalStore/GetInventoryByStore
   */
  getInventoryByStore(body?: Models.TOOLGetInventoryByStoreReq): Observable<Models.TOOLGetInventoryByStoreRes> {
    return this.post<Models.TOOLGetInventoryByStoreRes>('/TOOLLocalStore/GetInventoryByStore', body);
  }
  /**
   * Lấy danh sách tồn kho các tem - [POST] /TOOLLocalStore/GetInventoryDetailByPID
   */
  getInventoryDetailByPID(body?: Models.TOOLGetInventoryDetailByPIDReq): Observable<Models.TOOLGetInventoryDetailByPIDRes> {
    return this.post<Models.TOOLGetInventoryDetailByPIDRes>('/TOOLLocalStore/GetInventoryDetailByPID', body);
  }
  /**
   * Lấy thông tin tem - [POST] /TOOLLocalStore/GetLotCodeIndex
   */
  getLotCodeIndex(body?: Models.TOOLGetLotCodeIndexReq): Observable<Models.TOOLGetLotCodeIndexRes> {
    return this.post<Models.TOOLGetLotCodeIndexRes>('/TOOLLocalStore/GetLotCodeIndex', body);
  }
  /**
   * Cập nhật thông tin tem - [POST] /TOOLLocalStore/UpLotCodeIndexFast
   */
  upLotCodeIndexFast(body?: Models.TOOLUpLotCodeIndexFastReq): Observable<Models.TOOLUpLotCodeIndexFastRes> {
    return this.post<Models.TOOLUpLotCodeIndexFastRes>('/TOOLLocalStore/UpLotCodeIndexFast', body);
  }
}
