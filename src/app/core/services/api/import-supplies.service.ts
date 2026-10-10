import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ImportSupplies Module (6 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ImportSuppliesApiService extends BaseApiService {
  /**
   * Tạo đơn nhập vật tư - [POST] /ImportSupplies/CreateImportSupp
   */
  createImportSupp(body?: Models.NTCreateImportSuppReq): Observable<Models.NTCreateImportSuppRes> {
    return this.post<Models.NTCreateImportSuppRes>('/ImportSupplies/CreateImportSupp', body);
  }
  /**
   * Cập nhật phiếu nhập vật tư - [POST] /ImportSupplies/UpdateImportSupp
   */
  updateImportSupp(body?: Models.NTUpdateImportSuppReq): Observable<Models.NTUpdateImportSuppRes> {
    return this.post<Models.NTUpdateImportSuppRes>('/ImportSupplies/UpdateImportSupp', body);
  }
  /**
   * POST ImportSupplies/DelImportSupp - [POST] /ImportSupplies/DelImportSupp
   */
  delImportSupp(body?: Models.NTDelImportSuppReq): Observable<Models.NTDelImportSuppRes> {
    return this.post<Models.NTDelImportSuppRes>('/ImportSupplies/DelImportSupp', body);
  }
  /**
   * Cập nhật phiếu nhập vật tư - [POST] /ImportSupplies/ApproveImportSupp
   */
  approveImportSupp(body?: Models.NTApproveImportSuppReq): Observable<Models.NTApproveImportSuppRes> {
    return this.post<Models.NTApproveImportSuppRes>('/ImportSupplies/ApproveImportSupp', body);
  }
  /**
   * danh sách phiếu nhập vật tư - [POST] /ImportSupplies/GetImportSuppHeaderLst
   */
  getImportSuppHeaderLst(body?: Models.NTGetImportSuppHeaderLstReq): Observable<Models.NTGetImportSuppHeaderLstRes> {
    return this.post<Models.NTGetImportSuppHeaderLstRes>('/ImportSupplies/GetImportSuppHeaderLst', body);
  }
  /**
   * danh sách phiếu nhập vật tư - [POST] /ImportSupplies/GetImportSuppHeaderByID
   */
  getImportSuppHeaderByID(body?: Models.NTGetImportSuppHeaderByIDReq): Observable<Models.NTGetImportSuppHeaderByIDRes> {
    return this.post<Models.NTGetImportSuppHeaderByIDRes>('/ImportSupplies/GetImportSuppHeaderByID', body);
  }
}
