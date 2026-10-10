import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for OrderNew Module (9 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class OrderNewApiService extends BaseApiService {
  /**
   * POST OrderNew/CreateOrderProductNew - [POST] /OrderNew/CreateOrderProductNew
   */
  createOrderProductNew(body?: Models.NTCreateOrderProductNewReq): Observable<Models.NTCreateOrderProductNewRes> {
    return this.post<Models.NTCreateOrderProductNewRes>('/OrderNew/CreateOrderProductNew', body);
  }
  /**
   * POST OrderNew/UpdateOrderProductNew - [POST] /OrderNew/UpdateOrderProductNew
   */
  updateOrderProductNew(body?: Models.NTUpdateOrderProductNewReq): Observable<Models.NTUpdateOrderProductNewRes> {
    return this.post<Models.NTUpdateOrderProductNewRes>('/OrderNew/UpdateOrderProductNew', body);
  }
  /**
   * POST OrderNew/DelOrderProductNew - [POST] /OrderNew/DelOrderProductNew
   */
  delOrderProductNew(body?: Models.NTDelOrderProductNewReq): Observable<Models.NTDelOrderProductNewRes> {
    return this.post<Models.NTDelOrderProductNewRes>('/OrderNew/DelOrderProductNew', body);
  }
  /**
   * POST OrderNew/GetOrderProductNewByTime - [POST] /OrderNew/GetOrderProductNewByTime
   */
  getOrderProductNewByTime(body?: Models.NTGetOrderProductNewByTimeReq): Observable<Models.NTGetOrderProductNewByTimeRes> {
    return this.post<Models.NTGetOrderProductNewByTimeRes>('/OrderNew/GetOrderProductNewByTime', body);
  }
  /**
   * POST OrderNew/ApproveOrderProductNew - [POST] /OrderNew/ApproveOrderProductNew
   */
  approveOrderProductNew(body?: Models.NTApproveOrderProductNewReq): Observable<Models.NTApproveOrderProductNewRes> {
    return this.post<Models.NTApproveOrderProductNewRes>('/OrderNew/ApproveOrderProductNew', body);
  }
  /**
   * POST OrderNew/GetOrderProductNewLine - [POST] /OrderNew/GetOrderProductNewLine
   */
  getOrderProductNewLine(body?: Models.NTGetOrderProductNewLineReq): Observable<Models.NTGetOrderProductNewLineRes> {
    return this.post<Models.NTGetOrderProductNewLineRes>('/OrderNew/GetOrderProductNewLine', body);
  }
  /**
   * POST OrderNew/AddOrderProductNewLine - [POST] /OrderNew/AddOrderProductNewLine
   */
  addOrderProductNewLine(body?: Models.NTAddOrderProductNewLineReq): Observable<Models.NTAddOrderProductNewLineRes> {
    return this.post<Models.NTAddOrderProductNewLineRes>('/OrderNew/AddOrderProductNewLine', body);
  }
  /**
   * POST OrderNew/DelOrderProductNewLine - [POST] /OrderNew/DelOrderProductNewLine
   */
  delOrderProductNewLine(body?: Models.NTDelOrderProductNewLineReq): Observable<Models.NTDelOrderProductNewLineRes> {
    return this.post<Models.NTDelOrderProductNewLineRes>('/OrderNew/DelOrderProductNewLine', body);
  }
  /**
   * POST OrderNew/GetOrderProductNewLByTime - [POST] /OrderNew/GetOrderProductNewLByTime
   */
  getOrderProductNewLByTime(body?: Models.NTGetOrderProductNewLByTimeReq): Observable<Models.NTGetOrderProductNewLByTimeRes> {
    return this.post<Models.NTGetOrderProductNewLByTimeRes>('/OrderNew/GetOrderProductNewLByTime', body);
  }
}
