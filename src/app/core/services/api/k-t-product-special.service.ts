import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for KTProductSpecial Module (3 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class KTProductSpecialApiService extends BaseApiService {

  /**
   * Lấy danh sách sản phẩm điều chuyển đặc biệt - [POST] /KTProductSpecial/GetProductSpecialLst
   */
  getproductspeciallst(body?: any): Observable<any> {
    return this.post<any>('/KTProductSpecial/GetProductSpecialLst', body);
  }

  /**
   * Tạo mới sản phẩm điều chuyển đặc biệt - [POST] /KTProductSpecial/AddProductSpecial
   */
  addproductspecial(body?: any): Observable<any> {
    return this.post<any>('/KTProductSpecial/AddProductSpecial', body);
  }

  /**
   * Xóa sản phẩm điều chuyển đặc biệt - [POST] /KTProductSpecial/DelProductSpecial
   */
  delproductspecial(body?: any): Observable<any> {
    return this.post<any>('/KTProductSpecial/DelProductSpecial', body);
  }
}
