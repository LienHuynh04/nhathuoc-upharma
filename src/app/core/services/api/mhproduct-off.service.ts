import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for MHProductOff Module (5 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class MHProductOffApiService extends BaseApiService {
  /**
   * Lấy danh sách sản phẩm dừng hết - [POST] /ProductOff/GetProductOff
   */
  getProductOff(body?: Models.MHGetProductOffReq): Observable<Models.MHGetProductOffRes> {
    return this.post<Models.MHGetProductOffRes>('/ProductOff/GetProductOff', body);
  }
  /**
   * Cập nhật thông tin sản phẩm - [POST] /ProductOff/UpProductOff
   */
  upProductOff(body?: Models.MHUpProductOffReq): Observable<Models.MHUpProductOffRes> {
    return this.post<Models.MHUpProductOffRes>('/ProductOff/UpProductOff', body);
  }
  /**
   * Xóa sản phẩm khỏi danh sách - [POST] /ProductOff/DelProductOff
   */
  delProductOff(body?: Models.MHDelProductOffReq): Observable<Models.MHDelProductOffRes> {
    return this.post<Models.MHDelProductOffRes>('/ProductOff/DelProductOff', body);
  }
  /**
   * POST ProductOff/GetProductOffShop - [POST] /ProductOff/GetProductOffShop
   */
  getProductOffShop(body?: Models.MHGetProductOffShopReq): Observable<Models.MHGetProductOffShopRes> {
    return this.post<Models.MHGetProductOffShopRes>('/ProductOff/GetProductOffShop', body);
  }
  /**
   * POST ProductOff/UpdateProductOffShop - [POST] /ProductOff/UpdateProductOffShop
   */
  updateProductOffShop(body?: Models.MHUpdateProductOffShopReq): Observable<Models.MHUpdateProductOffShopRes> {
    return this.post<Models.MHUpdateProductOffShopRes>('/ProductOff/UpdateProductOffShop', body);
  }
}
