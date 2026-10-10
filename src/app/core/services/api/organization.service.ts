import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for Organization Module (17 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class OrganizationApiService extends BaseApiService {
  /**
   * Thêm tổ chức - [POST] /Organization/AddOrganization
   */
  addOrganization(body?: Models.NTAddOrganizationReq): Observable<Models.NTAddOrganizationRes> {
    return this.post<Models.NTAddOrganizationRes>('/Organization/AddOrganization', body);
  }
  /**
   * Cập nhật tổ chức - [POST] /Organization/UpdateOrganization
   */
  updateOrganization(body?: Models.NTUpdateOrganizationReq): Observable<Models.NTUpdateOrganizationRes> {
    return this.post<Models.NTUpdateOrganizationRes>('/Organization/UpdateOrganization', body);
  }
  /**
   * Cập nhật chi tiết tổ chức - [POST] /Organization/UpdateOrganizationDetail
   */
  updateOrganizationDetail(body?: Models.NTUpdateOrganizationDetailReq): Observable<Models.NTUpdateOrganizationDetailRes> {
    return this.post<Models.NTUpdateOrganizationDetailRes>('/Organization/UpdateOrganizationDetail', body);
  }
  /**
   * Lấy thông tin tổ chức theo ID - [POST] /Organization/GetOrganizationByID
   */
  getOrganizationByID(body?: Models.NTGetOrganizationByIDReq): Observable<Models.NTGetOrganizationByIDRes> {
    return this.post<Models.NTGetOrganizationByIDRes>('/Organization/GetOrganizationByID', body);
  }
  /**
   * Lấy danh sách tổ chức - [POST] /Organization/GetOrganizationLst
   */
  getOrganizationLst(body?: Models.NTGetOrganizationLstReq): Observable<Models.NTGetOrganizationLstRes> {
    return this.post<Models.NTGetOrganizationLstRes>('/Organization/GetOrganizationLst', body);
  }
  /**
   * Lấy chi tiết danh sách tổ chức - [POST] /Organization/GetOrganizationDetailLst
   */
  getOrganizationDetailLst(body?: Models.NTGetOrganizationDetailLstReq): Observable<Models.NTGetOrganizationDetailLstRes> {
    return this.post<Models.NTGetOrganizationDetailLstRes>('/Organization/GetOrganizationDetailLst', body);
  }
  /**
   * Lấy danh sách tổ chức - [POST] /Organization/GetUserOrganizationLst
   */
  getUserOrganizationLst(body?: Models.NTGetUserOrganizationLstReq): Observable<Models.NTGetUserOrganizationLstRes> {
    return this.post<Models.NTGetUserOrganizationLstRes>('/Organization/GetUserOrganizationLst', body);
  }
  /**
   * Lấy danh sách tổ chức - [POST] /Organization/SetUserOrganization
   */
  setUserOrganization(body?: Models.NTSetUserOrganizationReq): Observable<Models.NTSetUserOrganizationRes> {
    return this.post<Models.NTSetUserOrganizationRes>('/Organization/SetUserOrganization', body);
  }
  /**
   * CHT: Thêm mới nhân viên bán hàng vào Shop - [POST] /Organization/AddSalesmanByShop
   */
  addSalesmanByShop(body?: Models.NTAddSalesmanByShopReq): Observable<Models.NTAddSalesmanByShopRes> {
    return this.post<Models.NTAddSalesmanByShopRes>('/Organization/AddSalesmanByShop', body);
  }
  /**
   * CHT: Lấy thông tin nhân viên bán hàng của Shop - [POST] /Organization/GetSalesmanByShop
   */
  getSalesmanByShop(body?: Models.NTGetSalesmanByShopReq): Observable<Models.NTGetSalesmanByShopRes> {
    return this.post<Models.NTGetSalesmanByShopRes>('/Organization/GetSalesmanByShop', body);
  }
  /**
   * CHT: Xóa nhân viên bán hàng khỏi Shop - [POST] /Organization/DelSalesmanByShop
   */
  delSalesmanByShop(body?: Models.NTDelSalesmanByShopReq): Observable<Models.NTDelSalesmanByShopRes> {
    return this.post<Models.NTDelSalesmanByShopRes>('/Organization/DelSalesmanByShop', body);
  }
  /**
   * Lấy danh sách File của Shop - [POST] /Organization/GetFileShopLst
   */
  getFileShopLst(body?: Models.NTGetFileShopLstReq): Observable<Models.NTGetFileShopLstRes> {
    return this.post<Models.NTGetFileShopLstRes>('/Organization/GetFileShopLst', body);
  }
  /**
   * Xóa File - [POST] /Organization/DelFileShop
   */
  delFileShop(body?: Models.NTDelFileShopReq): Observable<Models.NTDelFileShopRes> {
    return this.post<Models.NTDelFileShopRes>('/Organization/DelFileShop', body);
  }
  /**
   * Thêm thông tin nhiệt kế - [POST] /Organization/AddOrganizationTemp
   */
  addOrganizationTemp(body?: Models.NTAddOrganizationTempReq): Observable<Models.NTAddOrganizationTempRes> {
    return this.post<Models.NTAddOrganizationTempRes>('/Organization/AddOrganizationTemp', body);
  }
  /**
   * Cập nhật thông tin nhiệt kế - [POST] /Organization/UpdateOrganizationTemp
   */
  updateOrganizationTemp(body?: Models.NTUpdateOrganizationTempReq): Observable<Models.NTUpdateOrganizationTempRes> {
    return this.post<Models.NTUpdateOrganizationTempRes>('/Organization/UpdateOrganizationTemp', body);
  }
  /**
   * Xóa thông tin nhiệt kế - [POST] /Organization/DelOrganizationTemp
   */
  delOrganizationTemp(body?: Models.NTDelOrganizationTempReq): Observable<Models.NTDelOrganizationTempRes> {
    return this.post<Models.NTDelOrganizationTempRes>('/Organization/DelOrganizationTemp', body);
  }
  /**
   * Lấy thông tin nhiệt kế - [POST] /Organization/GetOrganizationTemp
   */
  getOrganizationTemp(body?: Models.NTGetOrganizationTempReq): Observable<Models.NTGetOrganizationTempRes> {
    return this.post<Models.NTGetOrganizationTempRes>('/Organization/GetOrganizationTemp', body);
  }
}
