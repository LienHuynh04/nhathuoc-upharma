import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ProductClass Module (3 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ProductClassApiService extends BaseApiService {
  /**
   * Tạo nhóm sản phẩm - [POST] /ProductClass/AddProductClass
   */
  addProductClass(body?: Models.NTAddProductClassReq): Observable<Models.NTAddProductClassRes> {
    return this.post<Models.NTAddProductClassRes>('/ProductClass/AddProductClass', body);
  }
  /**
   * Xóa nhóm sản phẩm - [POST] /ProductClass/DelProductClass
   */
  delProductClass(body?: Models.NTDelProductClassReq): Observable<Models.NTDelProductClassRes> {
    return this.post<Models.NTDelProductClassRes>('/ProductClass/DelProductClass', body);
  }
  /**
   * Lấy danh sách nhóm sản phẩm - [POST] /ProductClass/GetProductClassLst
   */
  getProductClassLst(body?: Models.NTGetProductClassLstReq): Observable<Models.NTGetProductClassLstRes> {
    return this.post<Models.NTGetProductClassLstRes>('/ProductClass/GetProductClassLst', body);
  }
}
