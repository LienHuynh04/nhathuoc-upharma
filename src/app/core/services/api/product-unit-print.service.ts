import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ProductUnitPrint Module (2 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ProductUnitPrintApiService extends BaseApiService {
  /**
   * POST ProductUnitPrint/GetProductUnitPrintByPID - [POST] /ProductUnitPrint/GetProductUnitPrintByPID
   */
  getProductUnitPrintByPID(body?: Models.NTGetProductUnitPrintByPIDReq): Observable<Models.NTGetProductUnitPrintByPIDRes> {
    return this.post<Models.NTGetProductUnitPrintByPIDRes>('/ProductUnitPrint/GetProductUnitPrintByPID', body);
  }
  /**
   * POST ProductUnitPrint/UpdateProductUnitPrint - [POST] /ProductUnitPrint/UpdateProductUnitPrint
   */
  updateProductUnitPrint(body?: Models.NTUpdateProductUnitPrintReq): Observable<Models.NTUpdateProductUnitPrintRes> {
    return this.post<Models.NTUpdateProductUnitPrintRes>('/ProductUnitPrint/UpdateProductUnitPrint', body);
  }
}
