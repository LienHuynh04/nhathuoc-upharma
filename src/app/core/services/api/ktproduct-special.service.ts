import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for KTProductSpecial Module (3 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class KTProductSpecialApiService extends BaseApiService {
  /**
   * Lấy danh sách sản phẩm điều chuyển đặc biệt - [POST] /KTProductSpecial/GetProductSpecialLst
   */
  getProductSpecialLst(body?: Models.KTGetProductSpecialLstReq): Observable<Models.KTGetProductSpecialLstRes> {
    return this.post<Models.KTGetProductSpecialLstRes>('/KTProductSpecial/GetProductSpecialLst', body);
  }
  /**
   * Tạo mới sản phẩm điều chuyển đặc biệt - [POST] /KTProductSpecial/AddProductSpecial
   */
  addProductSpecial(body?: Models.KTAddProductSpecialReq): Observable<Models.KTAddProductSpecialRes> {
    return this.post<Models.KTAddProductSpecialRes>('/KTProductSpecial/AddProductSpecial', body);
  }
  /**
   * Xóa sản phẩm điều chuyển đặc biệt - [POST] /KTProductSpecial/DelProductSpecial
   */
  delProductSpecial(body?: Models.KTDelProductSpecialReq): Observable<Models.KTDelProductSpecialRes> {
    return this.post<Models.KTDelProductSpecialRes>('/KTProductSpecial/DelProductSpecial', body);
  }
}
