import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for TOOLProduct Module (4 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class TOOLProductApiService extends BaseApiService {

  /**
   * Tạo CCDC - [POST] /TOOLProduct/CreateProduct
   */
  createproduct(body?: Models.TOOLCreateProductReq): Observable<any> {
    return this.post<any>('/TOOLProduct/CreateProduct', body);
  }

  /**
   * Cập nhật CCDC - [POST] /TOOLProduct/UpdateProduct
   */
  updateproduct(body?: Models.TOOLUpdateProductReq): Observable<any> {
    return this.post<any>('/TOOLProduct/UpdateProduct', body);
  }

  /**
   * Xóa CCDC - [POST] /TOOLProduct/DelProduct
   */
  delproduct(body?: Models.TOOLDelProductReq): Observable<any> {
    return this.post<any>('/TOOLProduct/DelProduct', body);
  }

  /**
   * Láy danh sách CCDC - [POST] /TOOLProduct/GetProductLst
   */
  getproductlst(body?: Models.TOOLGetProductLstReq): Observable<any> {
    return this.post<any>('/TOOLProduct/GetProductLst', body);
  }
}
