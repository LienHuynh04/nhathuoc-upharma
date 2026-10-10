import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for Admins Module (10 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class AdminsApiService extends BaseApiService {
  /**
   * Thêm mới các giá trị default - [POST] /Product/AddDefaultValue
   */
  addDefaultValue(body?: Models.NTAddDefaultValueReq): Observable<Models.NTAddDefaultValueRes> {
    return this.post<Models.NTAddDefaultValueRes>('/Product/AddDefaultValue', body);
  }
  /**
   * POST Admin/GetReportImportProductLst - [POST] /Admin/GetReportImportProductLst
   */
  getReportImportProductLst(body?: Models.ADGetReportImportProductLstReq): Observable<Models.ADGetReportImportProductLstRes> {
    return this.post<Models.ADGetReportImportProductLstRes>('/Admin/GetReportImportProductLst', body);
  }
  /**
   * POST Admin/GetReportSalesLotIndexLst - [POST] /Admin/GetReportSalesLotIndexLst
   */
  getReportSalesLotIndexLst(body?: Models.ADGetReportSalesLotIndexLstReq): Observable<Models.ADGetReportSalesLotIndexLstRes> {
    return this.post<Models.ADGetReportSalesLotIndexLstRes>('/Admin/GetReportSalesLotIndexLst', body);
  }
  /**
   * POST Admin/GetFunctionRoleLst - [POST] /Admin/GetFunctionRoleLst
   */
  getFunctionRoleLst(body?: Models.ADGetFunctionRoleLstReq): Observable<Models.ADGetFunctionRoleLstRes> {
    return this.post<Models.ADGetFunctionRoleLstRes>('/Admin/GetFunctionRoleLst', body);
  }
  /**
   * POST Admin/UpdateFunctionRoleLst - [POST] /Admin/UpdateFunctionRoleLst
   */
  updateFunctionRoleLst(body?: Models.ADUpdateFunctionRoleLstReq): Observable<Models.ADUpdateFunctionRoleLstRes> {
    return this.post<Models.ADUpdateFunctionRoleLstRes>('/Admin/UpdateFunctionRoleLst', body);
  }
  /**
   * POST Admin/GetFunctionRoleByUser - [POST] /Admin/GetFunctionRoleByUser
   */
  getFunctionRoleByUser(body?: Models.ADGetFunctionRoleByUserReq): Observable<Models.ADGetFunctionRoleByUserRes> {
    return this.post<Models.ADGetFunctionRoleByUserRes>('/Admin/GetFunctionRoleByUser', body);
  }
  /**
   * POST Admin/GetProductUnsoldLst - [POST] /Admin/GetProductUnsoldLst
   */
  getProductUnsoldLst(body?: Models.ADGetProductUnsoldLstReq): Observable<Models.ADGetProductUnsoldLstRes> {
    return this.post<Models.ADGetProductUnsoldLstRes>('/Admin/GetProductUnsoldLst', body);
  }
  /**
   * POST Admin/UnlockInvoice - [POST] /Admin/UnlockInvoice
   */
  unlockInvoice(body?: Models.ADUnlockInvoiceReq): Observable<Models.ADUnlockInvoiceRes> {
    return this.post<Models.ADUnlockInvoiceRes>('/Admin/UnlockInvoice', body);
  }
  /**
   * POST Admin/GetTotalPriceShopLst - [POST] /Admin/GetTotalPriceShopLst
   */
  getTotalPriceShopLst(body?: Models.RPGetTotalPriceShopLstReq): Observable<Models.RPGetTotalPriceShopLstRes> {
    return this.post<Models.RPGetTotalPriceShopLstRes>('/Admin/GetTotalPriceShopLst', body);
  }
  /**
   * POST Admin/TestReq - [POST] /Admin/TestReq
   */
  testReq(body?: Models.NTAddDefaultValueReq): Observable<Models.NTAddDefaultValueRes> {
    return this.post<Models.NTAddDefaultValueRes>('/Admin/TestReq', body);
  }
}
