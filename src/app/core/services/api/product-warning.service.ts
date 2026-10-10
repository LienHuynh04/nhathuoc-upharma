import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ProductWarning Module (2 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ProductWarningApiService extends BaseApiService {
  /**
   * Lấy danh sách sản phẩm cảnh báo - [POST] /ProductWarning/GetProductWarning
   */
  getProductWarning(body?: Models.NTGetProductWarningReq): Observable<Models.NTGetProductWarningRes> {
    return this.post<Models.NTGetProductWarningRes>('/ProductWarning/GetProductWarning', body);
  }
  /**
   * Cập nhật lại danh sách sản phẩm cảnh báo - [POST] /ProductWarning/UpdateProductWarning
   */
  updateProductWarning(body?: Models.NTUpdateProductWarningReq): Observable<Models.NTUpdateProductWarningRes> {
    return this.post<Models.NTUpdateProductWarningRes>('/ProductWarning/UpdateProductWarning', body);
  }
}
