import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for TOOLProduct Module (4 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class TOOLProductApiService extends BaseApiService {
  /**
   * Tạo CCDC - [POST] /TOOLProduct/CreateProduct
   */
  createProduct(body?: Models.TOOLCreateProductReq): Observable<Models.TOOLCreateProductRes> {
    return this.post<Models.TOOLCreateProductRes>('/TOOLProduct/CreateProduct', body);
  }
  /**
   * Cập nhật CCDC - [POST] /TOOLProduct/UpdateProduct
   */
  updateProduct(body?: Models.TOOLUpdateProductReq): Observable<Models.TOOLUpdateProductRes> {
    return this.post<Models.TOOLUpdateProductRes>('/TOOLProduct/UpdateProduct', body);
  }
  /**
   * Xóa CCDC - [POST] /TOOLProduct/DelProduct
   */
  delProduct(body?: Models.TOOLDelProductReq): Observable<Models.TOOLDelProductRes> {
    return this.post<Models.TOOLDelProductRes>('/TOOLProduct/DelProduct', body);
  }
  /**
   * Láy danh sách CCDC - [POST] /TOOLProduct/GetProductLst
   */
  getProductLst(body?: Models.TOOLGetProductLstReq): Observable<Models.TOOLGetProductLstRes> {
    return this.post<Models.TOOLGetProductLstRes>('/TOOLProduct/GetProductLst', body);
  }
}
