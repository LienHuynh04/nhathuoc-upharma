import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for SupplierProduct Module (13 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class SupplierProductApiService extends BaseApiService {
  /**
   * Lấy sản phẩm của nhà cung cấp - [POST] /SupplierProduct/GetProductOfSupplier
   */
  getProductOfSupplier(body?: Models.NTGetProductOfSupplierReq): Observable<Models.NTGetProductOfSupplierRes> {
    return this.post<Models.NTGetProductOfSupplierRes>('/SupplierProduct/GetProductOfSupplier', body);
  }
  /**
   * Lấy sản phẩm của nhà cung cấp - [POST] /SupplierProduct/GetProductSupplierLst
   */
  getProductSupplierLst(body?: Models.NTGetProductSupplierLstReq): Observable<Models.NTGetProductSupplierLstRes> {
    return this.post<Models.NTGetProductSupplierLstRes>('/SupplierProduct/GetProductSupplierLst', body);
  }
  /**
   * Thêm mới sản phẩm nhà cung cấp - [POST] /SupplierProduct/AddProductSupplier
   */
  addProductSupplier(body?: Models.NTAddProductSupplierReq): Observable<Models.NTAddProductSupplierRes> {
    return this.post<Models.NTAddProductSupplierRes>('/SupplierProduct/AddProductSupplier', body);
  }
  /**
   * Xóa sản phẩm nhà cung cấp - [POST] /SupplierProduct/DelProductSupplier
   */
  delProductSupplier(body?: Models.NTDelProductSupplierReq): Observable<Models.NTDelProductSupplierRes> {
    return this.post<Models.NTDelProductSupplierRes>('/SupplierProduct/DelProductSupplier', body);
  }
  /**
   * Cập nhật sản phẩm nhà cung cấp - [POST] /SupplierProduct/UpdateProductSupplier
   */
  updateProductSupplier(body?: Models.NTUpdateProductSupplierReq): Observable<Models.NTUpdateProductSupplierRes> {
    return this.post<Models.NTUpdateProductSupplierRes>('/SupplierProduct/UpdateProductSupplier', body);
  }
  /**
   * Xóa sản phẩm nhà cung cấp - [POST] /SupplierProduct/GetSupplierProductFile
   */
  getSupplierProductFile(body?: Models.NTGetSupplierProductFileReq): Observable<Models.NTGetSupplierProductFileRes> {
    return this.post<Models.NTGetSupplierProductFileRes>('/SupplierProduct/GetSupplierProductFile', body);
  }
  /**
   * Xóa File sản phẩm nhà cung cấp - [POST] /SupplierProduct/DelSupplierProductFile
   */
  delSupplierProductFile(body?: Models.NTDelSupplierProductFileReq): Observable<Models.NTDelSupplierProductFileRes> {
    return this.post<Models.NTDelSupplierProductFileRes>('/SupplierProduct/DelSupplierProductFile', body);
  }
  /**
   * Tao mới thông tin chính sách sản phẩm - [POST] /SupplierProduct/CreateSupplierPolicy
   */
  createSupplierPolicy(body?: Models.NTCreateSupplierPolicyReq): Observable<Models.NTCreateSupplierPolicyRes> {
    return this.post<Models.NTCreateSupplierPolicyRes>('/SupplierProduct/CreateSupplierPolicy', body);
  }
  /**
   * Xóa thông tin chính sách sản phẩm - [POST] /SupplierProduct/DelSupplierPolicy
   */
  delSupplierPolicy(body?: Models.NTDelSupplierPolicyReq): Observable<Models.NTDelSupplierPolicyRes> {
    return this.post<Models.NTDelSupplierPolicyRes>('/SupplierProduct/DelSupplierPolicy', body);
  }
  /**
   * Lấy thông tin chính sách sản phẩm - [POST] /SupplierProduct/GetSupplierPolicy
   */
  getSupplierPolicy(body?: Models.NTGetSupplierPolicyReq): Observable<Models.NTGetSupplierPolicyRes> {
    return this.post<Models.NTGetSupplierPolicyRes>('/SupplierProduct/GetSupplierPolicy', body);
  }
  /**
   * Tao mới thông tin khảo sát sản phẩm - [POST] /SupplierProduct/CreateSupplierSurvey
   */
  createSupplierSurvey(body?: Models.NTCreateSupplierSurveyReq): Observable<Models.NTCreateSupplierSurveyRes> {
    return this.post<Models.NTCreateSupplierSurveyRes>('/SupplierProduct/CreateSupplierSurvey', body);
  }
  /**
   * Xóa thông tin khảo sát sản phẩm - [POST] /SupplierProduct/DelSupplierSurvey
   */
  delSupplierSurvey(body?: Models.NTDelSupplierSurveyReq): Observable<Models.NTDelSupplierSurveyRes> {
    return this.post<Models.NTDelSupplierSurveyRes>('/SupplierProduct/DelSupplierSurvey', body);
  }
  /**
   * Lấy thông tin khảo sát sản phẩm - [POST] /SupplierProduct/GetSupplierSurvey
   */
  getSupplierSurvey(body?: Models.NTGetSupplierSurveyReq): Observable<Models.NTGetSupplierSurveyRes> {
    return this.post<Models.NTGetSupplierSurveyRes>('/SupplierProduct/GetSupplierSurvey', body);
  }
}
