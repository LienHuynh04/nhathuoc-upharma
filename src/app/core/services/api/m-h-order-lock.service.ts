import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for MHOrderLock Module (3 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class MHOrderLockApiService extends BaseApiService {

  /**
   * Thêm sản phẩm chặn đề xuất mua hàng - [POST] /MHOrderLock/AddOrderLock
   */
  addorderlock(body?: any): Observable<any> {
    return this.post<any>('/MHOrderLock/AddOrderLock', body);
  }

  /**
   * Xóa sản phẩm chặn đề xuất mua hàng - [POST] /MHOrderLock/DelOrderLock
   */
  delorderlock(body?: any): Observable<any> {
    return this.post<any>('/MHOrderLock/DelOrderLock', body);
  }

  /**
   * Lấy danh sách sản phẩm chặn đề xuất mua hàng - [POST] /MHOrderLock/GetOrderLockLst
   */
  getorderlocklst(body?: any): Observable<any> {
    return this.post<any>('/MHOrderLock/GetOrderLockLst', body);
  }
}
