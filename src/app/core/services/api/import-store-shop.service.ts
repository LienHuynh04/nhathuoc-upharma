import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for ImportStoreShop Module (8 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ImportStoreShopApiService extends BaseApiService {
  /**
   * Tạo phiếu điều chuyển kho Shop - shop - [POST] /ImportStore/CreateImportStoreShop
   */
  createImportStoreShop(body?: Models.NTCreateImportStoreReq): Observable<Models.NTCreateImportStoreRes> {
    return this.post<Models.NTCreateImportStoreRes>('/ImportStore/CreateImportStoreShop', body);
  }
  /**
   * Lấy danh sách biên bản giao nhận - [POST] /ImportStore/GetImportStoreShop
   */
  getImportStoreShop(body?: Models.NTGetImportStoreReq): Observable<Models.NTGetImportStoreRes> {
    return this.post<Models.NTGetImportStoreRes>('/ImportStore/GetImportStoreShop', body);
  }
  /**
   * Lấy thông tin biên bản giao nhận - [POST] /ImportStore/GetImportStoreShopByHId
   */
  getImportStoreShopByHId(body?: Models.NTGetImportStoreByHIdReq): Observable<Models.NTGetImportStoreByHIdRes> {
    return this.post<Models.NTGetImportStoreByHIdRes>('/ImportStore/GetImportStoreShopByHId', body);
  }
  /**
   * Cập nhật thông tin biên bản giao nhận - [POST] /ImportStore/UpdateImportStoreShop
   */
  updateImportStoreShop(body?: Models.NTUpdateImportStoreReq): Observable<Models.NTUpdateImportStoreRes> {
    return this.post<Models.NTUpdateImportStoreRes>('/ImportStore/UpdateImportStoreShop', body);
  }
  /**
   * Xóa biên bản giao nhận - [POST] /ImportStore/DelImportStoreShop
   */
  delImportStoreShop(body?: Models.NTDelImportStoreReq): Observable<Models.NTDelImportStoreRes> {
    return this.post<Models.NTDelImportStoreRes>('/ImportStore/DelImportStoreShop', body);
  }
  /**
   * Duyệt dòng hàng phiếu nhập kho - [POST] /ImportStore/ApproveImportLineShop
   */
  approveImportLineShop(body?: Models.NTApproveImportLineReq): Observable<Models.NTApproveImportLineRes> {
    return this.post<Models.NTApproveImportLineRes>('/ImportStore/ApproveImportLineShop', body);
  }
  /**
   * Duyệt dòng hàng phiếu nhập kho - [POST] /ImportStore/GetLotTransferShopLst
   */
  getLotTransferShopLst(body?: Models.NTGetLotTransferLstReq): Observable<Models.NTGetLotTransferLstRes> {
    return this.post<Models.NTGetLotTransferLstRes>('/ImportStore/GetLotTransferShopLst', body);
  }
  /**
   * Duyệt phiếu nhập kho - [POST] /ImportStore/ApproveImportStoreShop
   */
  approveImportStoreShop(body?: Models.NTApproveImportStoreReq): Observable<Models.NTApproveImportStoreRes> {
    return this.post<Models.NTApproveImportStoreRes>('/ImportStore/ApproveImportStoreShop', body);
  }
}
