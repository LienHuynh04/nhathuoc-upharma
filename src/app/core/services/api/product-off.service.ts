import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ProductOff Module (5 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class ProductOffApiService extends BaseApiService {

  /**
   * Lấy danh sách sản phẩm dừng hết - [POST] /ProductOff/GetProductOff
   */
  getproductoff(body?: any): Observable<any> {
    return this.post<any>('/ProductOff/GetProductOff', body);
  }

  /**
   * Cập nhật thông tin sản phẩm - [POST] /ProductOff/UpProductOff
   */
  upproductoff(body?: any): Observable<any> {
    return this.post<any>('/ProductOff/UpProductOff', body);
  }

  /**
   * Xóa sản phẩm khỏi danh sách - [POST] /ProductOff/DelProductOff
   */
  delproductoff(body?: any): Observable<any> {
    return this.post<any>('/ProductOff/DelProductOff', body);
  }

  /**
   * POST ProductOff/GetProductOffShop - [POST] /ProductOff/GetProductOffShop
   */
  getproductoffshop(body?: any): Observable<any> {
    return this.post<any>('/ProductOff/GetProductOffShop', body);
  }

  /**
   * POST ProductOff/UpdateProductOffShop - [POST] /ProductOff/UpdateProductOffShop
   */
  updateproductoffshop(body?: any): Observable<any> {
    return this.post<any>('/ProductOff/UpdateProductOffShop', body);
  }
}
