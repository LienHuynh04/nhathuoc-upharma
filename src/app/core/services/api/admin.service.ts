import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for Admin Module (9 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class AdminApiService extends BaseApiService {

  /**
   * POST Admin/GetReportImportProductLst - [POST] /Admin/GetReportImportProductLst
   */
  getreportimportproductlst(body?: any): Observable<any> {
    return this.post<any>('/Admin/GetReportImportProductLst', body);
  }

  /**
   * POST Admin/GetReportSalesLotIndexLst - [POST] /Admin/GetReportSalesLotIndexLst
   */
  getreportsaleslotindexlst(body?: any): Observable<any> {
    return this.post<any>('/Admin/GetReportSalesLotIndexLst', body);
  }

  /**
   * POST Admin/GetFunctionRoleLst - [POST] /Admin/GetFunctionRoleLst
   */
  getfunctionrolelst(body?: any): Observable<any> {
    return this.post<any>('/Admin/GetFunctionRoleLst', body);
  }

  /**
   * POST Admin/UpdateFunctionRoleLst - [POST] /Admin/UpdateFunctionRoleLst
   */
  updatefunctionrolelst(body?: any): Observable<any> {
    return this.post<any>('/Admin/UpdateFunctionRoleLst', body);
  }

  /**
   * POST Admin/GetFunctionRoleByUser - [POST] /Admin/GetFunctionRoleByUser
   */
  getfunctionrolebyuser(body?: any): Observable<any> {
    return this.post<any>('/Admin/GetFunctionRoleByUser', body);
  }

  /**
   * POST Admin/GetProductUnsoldLst - [POST] /Admin/GetProductUnsoldLst
   */
  getproductunsoldlst(body?: any): Observable<any> {
    return this.post<any>('/Admin/GetProductUnsoldLst', body);
  }

  /**
   * POST Admin/UnlockInvoice - [POST] /Admin/UnlockInvoice
   */
  unlockinvoice(body?: any): Observable<any> {
    return this.post<any>('/Admin/UnlockInvoice', body);
  }

  /**
   * POST Admin/GetTotalPriceShopLst - [POST] /Admin/GetTotalPriceShopLst
   */
  gettotalpriceshoplst(body?: any): Observable<any> {
    return this.post<any>('/Admin/GetTotalPriceShopLst', body);
  }

  /**
   * POST Admin/TestReq - [POST] /Admin/TestReq
   */
  testreq(body?: any): Observable<any> {
    return this.post<any>('/Admin/TestReq', body);
  }
}
