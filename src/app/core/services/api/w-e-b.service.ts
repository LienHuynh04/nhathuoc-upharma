import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for WEB Module (17 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class WEBApiService extends BaseApiService {

  /**
   * Lấy danh sách nhà thuốc - [POST] /WEB/GetShopLst
   */
  getshoplst(body?: any): Observable<any> {
    return this.post<any>('/WEB/GetShopLst', body);
  }

  /**
   * Lấy danh sách phân nhóm nhà thuốc - [POST] /WEB/GetProductGroupLst
   */
  getproductgrouplst(body?: any): Observable<any> {
    return this.post<any>('/WEB/GetProductGroupLst', body);
  }

  /**
   * Lấy thông tin chi tiết nhà thuốc - [POST] /WEB/GetProductInfo
   */
  getproductinfo(body?: any): Observable<any> {
    return this.post<any>('/WEB/GetProductInfo', body);
  }

  /**
   * Lấy danh sách thuốc - [POST] /WEB/GetItemLst
   */
  getitemlst(body?: any): Observable<any> {
    return this.post<any>('/WEB/GetItemLst', body);
  }

  /**
   * Lấy danh sách thuốc Hot - [POST] /WEB/GetItemHotLst
   */
  getitemhotlst(body?: any): Observable<any> {
    return this.post<any>('/WEB/GetItemHotLst', body);
  }

  /**
   * Lấy danh sách thuốc - [POST] /WEB/GetItemLstWithOption
   */
  getitemlstwithoption(body?: any): Observable<any> {
    return this.post<any>('/WEB/GetItemLstWithOption', body);
  }

  /**
   * Lấy danh sách thuốc - [POST] /WEB/GetDefaultValueWeb
   */
  getdefaultvalueweb(body?: any): Observable<any> {
    return this.post<any>('/WEB/GetDefaultValueWeb', body);
  }

  /**
   * Lấy danh sách thuốc - [POST] /WEB/UpdateProductInfo
   */
  updateproductinfo(body?: any): Observable<any> {
    return this.post<any>('/WEB/UpdateProductInfo', body);
  }

  /**
   * Lấ danh sách tồn kho ở các shop - [POST] /WEB/CheckInventory
   */
  checkinventory(body?: any): Observable<any> {
    return this.post<any>('/WEB/CheckInventory', body);
  }

  /**
   * Upload ảnh của sản phẩm - [POST] /WEB/UploadImageProduct?ProductID={ProductID}&Token={Token}&UserName={UserName}&TimeStart={TimeStart}&TimeEnd={TimeEnd}&IsKM={IsKM}
   */
  uploadimageproduct(body?: any): Observable<any> {
    return this.post<any>('/WEB/UploadImageProduct?ProductID={ProductID}&Token={Token}&UserName={UserName}&TimeStart={TimeStart}&TimeEnd={TimeEnd}&IsKM={IsKM}', body);
  }

  /**
   * Upload ảnh của sản phẩm (nhiều ảnh) - [POST] /WEB/UploadImageProductMore?ProductID={ProductID}&Token={Token}&UserName={UserName}&TypeImage={TypeImage}
   */
  uploadimageproductmore(body?: any): Observable<any> {
    return this.post<any>('/WEB/UploadImageProductMore?ProductID={ProductID}&Token={Token}&UserName={UserName}&TypeImage={TypeImage}', body);
  }

  /**
   * Xóa ảnh KM - [POST] /WEB/DelImageProductKM?ProductID={ProductID}&Token={Token}&UserName={UserName}
   */
  delimageproductkm(body?: any): Observable<any> {
    return this.post<any>('/WEB/DelImageProductKM?ProductID={ProductID}&Token={Token}&UserName={UserName}', body);
  }

  /**
   * Xóa ảnh chi tiết sản phẩm - [POST] /WEB/DelImageProductMore?ProductID={ProductID}&TypeImage={TypeImage}&Token={Token}&UserName={UserName}
   */
  delimageproductmore(body?: any): Observable<any> {
    return this.post<any>('/WEB/DelImageProductMore?ProductID={ProductID}&TypeImage={TypeImage}&Token={Token}&UserName={UserName}', body);
  }

  /**
   * Upload ảnh trong bài viết - [POST] /WEB/UploadImageDes?Token={Token}&UserName={UserName}
   */
  uploadimagedes(body?: any): Observable<any> {
    return this.post<any>('/WEB/UploadImageDes?Token={Token}&UserName={UserName}', body);
  }

  /**
   * Xóa ảnh trong bài viết - [POST] /WEB/DelImageDes?ImageName={ImageName}&Token={Token}&UserName={UserName}
   */
  delimagedes(body?: any): Observable<any> {
    return this.post<any>('/WEB/DelImageDes?ImageName={ImageName}&Token={Token}&UserName={UserName}', body);
  }

  /**
   * Hàm lấy ảnh trong bài viết - [GET] /WEB/DownloadImageDes?ImageName={ImageName}
   */
  downloadimagedes(body?: any): Observable<any> {
    return this.get<any>('/WEB/DownloadImageDes?ImageName={ImageName}', body);
  }

  /**
   * Hàm lấy ảnh trong bài viết - [GET] /WEB/DownloadImageMore?ProductID={ProductID}&TypeImage={TypeImage}&Ratio={Ratio}
   */
  downloadimagemore(body?: any): Observable<any> {
    return this.get<any>('/WEB/DownloadImageMore?ProductID={ProductID}&TypeImage={TypeImage}&Ratio={Ratio}', body);
  }
}
