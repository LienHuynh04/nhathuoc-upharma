import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for WEB Module (17 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class WEBApiService extends BaseApiService {
  /**
   * Lấy danh sách nhà thuốc - [POST] /WEB/GetShopLst
   */
  getShopLst(body?: Models.NTGetOrganizationLstReq): Observable<Models.NTGetOrganizationLstRes> {
    return this.post<Models.NTGetOrganizationLstRes>('/WEB/GetShopLst', body);
  }
  /**
   * Lấy danh sách phân nhóm nhà thuốc - [POST] /WEB/GetProductGroupLst
   */
  getProductGroupLst(body?: Models.NTGetProductGroupLstReq): Observable<Models.NTGetProductGroupLstRes> {
    return this.post<Models.NTGetProductGroupLstRes>('/WEB/GetProductGroupLst', body);
  }
  /**
   * Lấy thông tin chi tiết nhà thuốc - [POST] /WEB/GetProductInfo
   */
  getProductInfo(body?: Models.NTGetProductInfoReq): Observable<Models.NTGetProductInfoRes> {
    return this.post<Models.NTGetProductInfoRes>('/WEB/GetProductInfo', body);
  }
  /**
   * Lấy danh sách thuốc - [POST] /WEB/GetItemLst
   */
  getItemLst(body?: Models.WEBGetItemLstReq): Observable<Models.WEBGetItemLstRes> {
    return this.post<Models.WEBGetItemLstRes>('/WEB/GetItemLst', body);
  }
  /**
   * Lấy danh sách thuốc Hot - [POST] /WEB/GetItemHotLst
   */
  getItemHotLst(body?: Models.WEBGetItemLstWithOptionReq): Observable<Models.WEBGetItemLstWithOptionRes> {
    return this.post<Models.WEBGetItemLstWithOptionRes>('/WEB/GetItemHotLst', body);
  }
  /**
   * Lấy danh sách thuốc - [POST] /WEB/GetItemLstWithOption
   */
  getItemLstWithOption(body?: Models.WEBGetItemLstWithOptionReq): Observable<Models.WEBGetItemLstWithOptionRes> {
    return this.post<Models.WEBGetItemLstWithOptionRes>('/WEB/GetItemLstWithOption', body);
  }
  /**
   * Lấy danh sách thuốc - [POST] /WEB/GetDefaultValueWeb
   */
  getDefaultValueWeb(body?: Models.NTGetDefaultValueReq): Observable<Models.NTGetDefaultValueRes> {
    return this.post<Models.NTGetDefaultValueRes>('/WEB/GetDefaultValueWeb', body);
  }
  /**
   * Lấy danh sách thuốc - [POST] /WEB/UpdateProductInfo
   */
  updateProductInfo(body?: Models.NTUpdateProductInfoReq): Observable<Models.NTUpdateProductInfoRes> {
    return this.post<Models.NTUpdateProductInfoRes>('/WEB/UpdateProductInfo', body);
  }
  /**
   * Lấ danh sách tồn kho ở các shop - [POST] /WEB/CheckInventory
   */
  checkInventory(body?: Models.WEBCheckInventoryReq): Observable<Models.WEBCheckInventoryRes> {
    return this.post<Models.WEBCheckInventoryRes>('/WEB/CheckInventory', body);
  }
  /**
   * Upload ảnh của sản phẩm - [POST] /WEB/UploadImageProduct?ProductID={ProductID}&Token={Token}&UserName={UserName}&TimeStart={TimeStart}&TimeEnd={TimeEnd}&IsKM={IsKM}
   */
  uploadImageProduct(body?: any): Observable<Models.NTUploadFileRes> {
    return this.post<Models.NTUploadFileRes>('/WEB/UploadImageProduct', body);
  }
  /**
   * Upload ảnh của sản phẩm (nhiều ảnh) - [POST] /WEB/UploadImageProductMore?ProductID={ProductID}&Token={Token}&UserName={UserName}&TypeImage={TypeImage}
   */
  uploadImageProductMore(body?: any): Observable<Models.NTUploadFileRes> {
    return this.post<Models.NTUploadFileRes>('/WEB/UploadImageProductMore', body);
  }
  /**
   * Xóa ảnh KM - [POST] /WEB/DelImageProductKM?ProductID={ProductID}&Token={Token}&UserName={UserName}
   */
  delImageProductKM(body?: any): Observable<Models.NTUploadFileRes> {
    return this.post<Models.NTUploadFileRes>('/WEB/DelImageProductKM', body);
  }
  /**
   * Xóa ảnh chi tiết sản phẩm - [POST] /WEB/DelImageProductMore?ProductID={ProductID}&TypeImage={TypeImage}&Token={Token}&UserName={UserName}
   */
  delImageProductMore(body?: any): Observable<Models.NTUploadFileRes> {
    return this.post<Models.NTUploadFileRes>('/WEB/DelImageProductMore', body);
  }
  /**
   * Upload ảnh trong bài viết - [POST] /WEB/UploadImageDes?Token={Token}&UserName={UserName}
   */
  uploadImageDes(body?: any): Observable<Models.NTUploadImageDesRes> {
    return this.post<Models.NTUploadImageDesRes>('/WEB/UploadImageDes', body);
  }
  /**
   * Xóa ảnh trong bài viết - [POST] /WEB/DelImageDes?ImageName={ImageName}&Token={Token}&UserName={UserName}
   */
  delImageDes(body?: any): Observable<Models.NTUploadFileRes> {
    return this.post<Models.NTUploadFileRes>('/WEB/DelImageDes', body);
  }
  /**
   * Hàm lấy ảnh trong bài viết - [GET] /WEB/DownloadImageDes?ImageName={ImageName}
   */
  downloadImageDes(params?: any): Observable<any> {
    return this.get<any>('/WEB/DownloadImageDes', params);
  }
  /**
   * Hàm lấy ảnh trong bài viết - [GET] /WEB/DownloadImageMore?ProductID={ProductID}&TypeImage={TypeImage}&Ratio={Ratio}
   */
  downloadImageMore(params?: any): Observable<any> {
    return this.get<any>('/WEB/DownloadImageMore', params);
  }
}
