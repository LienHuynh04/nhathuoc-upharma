import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for MHOrderLock Module (3 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class MHOrderLockApiService extends BaseApiService {
  /**
   * Thêm sản phẩm chặn đề xuất mua hàng - [POST] /MHOrderLock/AddOrderLock
   */
  addOrderLock(body?: Models.MHAddOrderLockReq): Observable<Models.MHAddOrderLockRes> {
    return this.post<Models.MHAddOrderLockRes>('/MHOrderLock/AddOrderLock', body);
  }
  /**
   * Xóa sản phẩm chặn đề xuất mua hàng - [POST] /MHOrderLock/DelOrderLock
   */
  delOrderLock(body?: Models.MHDelOrderLockReq): Observable<Models.MHDelOrderLockRes> {
    return this.post<Models.MHDelOrderLockRes>('/MHOrderLock/DelOrderLock', body);
  }
  /**
   * Lấy danh sách sản phẩm chặn đề xuất mua hàng - [POST] /MHOrderLock/GetOrderLockLst
   */
  getOrderLockLst(body?: Models.MHGetOrderLockLstReq): Observable<Models.MHGetOrderLockLstRes> {
    return this.post<Models.MHGetOrderLockLstRes>('/MHOrderLock/GetOrderLockLst', body);
  }
}
