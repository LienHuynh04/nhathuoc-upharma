import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for KTChangeLot Module (3 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class KTChangeLotApiService extends BaseApiService {
  /**
   * Lấy danh sách đổi lô - [POST] /KTChangeLot/GetChangeLotLst
   */
  getChangeLotLst(body?: Models.KTGetChangeLotLstReq): Observable<Models.KTGetChangeLotLstRes> {
    return this.post<Models.KTGetChangeLotLstRes>('/KTChangeLot/GetChangeLotLst', body);
  }
  /**
   * Cập nhật đổi lô - [POST] /KTChangeLot/UpdateChangeLot
   */
  updateChangeLot(body?: Models.KTUpdateChangeLotReq): Observable<Models.KTUpdateChangeLotRes> {
    return this.post<Models.KTUpdateChangeLotRes>('/KTChangeLot/UpdateChangeLot', body);
  }
  /**
   * Xóa đổi lô - [POST] /KTChangeLot/DelChangeLot
   */
  delChangeLot(body?: Models.KTDelChangeLotReq): Observable<Models.KTDelChangeLotRes> {
    return this.post<Models.KTDelChangeLotRes>('/KTChangeLot/DelChangeLot', body);
  }
}
