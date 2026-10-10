import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for Product Module (20 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class ProductApiService extends BaseApiService {
  /**
   * Thêm mới sản phẩm - [POST] /Product/AddNewProduct
   */
  addNewProduct(body?: Models.NTAddNewProductReq): Observable<Models.NTAddNewProductRes> {
    return this.post<Models.NTAddNewProductRes>('/Product/AddNewProduct', body);
  }
  /**
   * Cập nhật sản phẩm - [POST] /Product/UpdateProductInfo
   */
  updateProductInfo(body?: Models.NTUpdateProductInfoReq): Observable<Models.NTUpdateProductInfoRes> {
    return this.post<Models.NTUpdateProductInfoRes>('/Product/UpdateProductInfo', body);
  }
  /**
   * Cập nhật sản phẩm - [POST] /Product/UpdateProductDose
   */
  updateProductDose(body?: Models.NTUpdateProductDoseReq): Observable<Models.NTUpdateProductDoseRes> {
    return this.post<Models.NTUpdateProductDoseRes>('/Product/UpdateProductDose', body);
  }
  /**
   * Cập nhật sản phẩm - [POST] /Product/UpdateProductContraindicated
   */
  updateProductContraindicated(body?: Models.NTUpdateProductContraindicatedReq): Observable<Models.NTUpdateProductContraindicatedRes> {
    return this.post<Models.NTUpdateProductContraindicatedRes>('/Product/UpdateProductContraindicated', body);
  }
  /**
   * Cập nhật sản phẩm - [POST] /Product/UpdateProductPackage
   */
  updateProductPackage(body?: Models.NTUpdateProductPackageReq): Observable<Models.NTUpdateProductPackageRes> {
    return this.post<Models.NTUpdateProductPackageRes>('/Product/UpdateProductPackage', body);
  }
  /**
   * Lấy thông tin các loại đóng gói - [POST] /Product/GetProductPackageLst
   */
  getProductPackageLst(body?: Models.NTGetProductPackageLstReq): Observable<Models.NTGetProductPackageLstRes> {
    return this.post<Models.NTGetProductPackageLstRes>('/Product/GetProductPackageLst', body);
  }
  /**
   * Lấy thông tin mã đóng gói của ds sản phẩm - [POST] /Product/GetProductPackageByPIDLst
   */
  getProductPackageByPIDLst(body?: Models.NTGetProductPackageByPIDLstReq): Observable<Models.NTGetProductPackageByPIDLstRes> {
    return this.post<Models.NTGetProductPackageByPIDLstRes>('/Product/GetProductPackageByPIDLst', body);
  }
  /**
   * Lấy thông tin liều dùng sản phẩm - [POST] /Product/GetProductDose
   */
  getProductDose(body?: Models.NTGetProductDoseReq): Observable<Models.NTGetProductDoseRes> {
    return this.post<Models.NTGetProductDoseRes>('/Product/GetProductDose', body);
  }
  /**
   * Cập nhật sản phẩm - [POST] /Product/UpdateProductRelationship
   */
  updateProductRelationship(body?: Models.NTUpdateProductRelationshipReq): Observable<Models.NTUpdateProductRelationshipRes> {
    return this.post<Models.NTUpdateProductRelationshipRes>('/Product/UpdateProductRelationship', body);
  }
  /**
   * Xóa sản phẩm tương tự - [POST] /Product/DelProductRelationship
   */
  delProductRelationship(body?: Models.NTDelProductRelationshipReq): Observable<Models.NTDelProductRelationshipRes> {
    return this.post<Models.NTDelProductRelationshipRes>('/Product/DelProductRelationship', body);
  }
  /**
   * Lấy danh sách sản phẩm tương tự - [POST] /Product/GetProductRelationship
   */
  getProductRelationship(body?: Models.NTGetProductRelationshipReq): Observable<Models.NTGetProductRelationshipRes> {
    return this.post<Models.NTGetProductRelationshipRes>('/Product/GetProductRelationship', body);
  }
  /**
   * Hủy sản phẩm - [POST] /Product/DelProductByID
   */
  delProductByID(body?: Models.NTDelProductByIDReq): Observable<Models.NTDelProductByIDRes> {
    return this.post<Models.NTDelProductByIDRes>('/Product/DelProductByID', body);
  }
  /**
   * Lấy thông tin chi tiết sản phẩm - [POST] /Product/GetProductInfo
   */
  getProductInfo(body?: Models.NTGetProductInfoReq): Observable<Models.NTGetProductInfoRes> {
    return this.post<Models.NTGetProductInfoRes>('/Product/GetProductInfo', body);
  }
  /**
   * Lấy thông tin chi tiết sản phẩm - [POST] /Product/GetSimplyProductInfo
   */
  getSimplyProductInfo(body?: Models.NTGetProductInfoReq): Observable<Models.NTGetProductInfoRes> {
    return this.post<Models.NTGetProductInfoRes>('/Product/GetSimplyProductInfo', body);
  }
  /**
   * Lấy thông tin chi tiết sản phẩm - [POST] /Product/GetProductActivatedLst
   */
  getProductActivatedLst(body?: Models.NTGetProductActivatedLstReq): Observable<Models.NTGetProductActivatedLstRes> {
    return this.post<Models.NTGetProductActivatedLstRes>('/Product/GetProductActivatedLst', body);
  }
  /**
   * Lấy danh sách sản phẩm - [POST] /Product/GetItemLst
   */
  getItemLst(body?: Models.NTGetItemLstReq): Observable<Models.NTGetItemLstRes> {
    return this.post<Models.NTGetItemLstRes>('/Product/GetItemLst', body);
  }
  /**
   * Lấy danh sách sản phẩm theo người Follower - [POST] /Product/GetItemLstWithFollower
   */
  getItemLstWithFollower(body?: Models.NTGetItemLstReq): Observable<Models.NTGetItemLstRes> {
    return this.post<Models.NTGetItemLstRes>('/Product/GetItemLstWithFollower', body);
  }
  /**
   * Lấy danh sách sản phẩm - [POST] /Product/GetProductPostLst
   */
  getProductPostLst(body?: Models.NTGetProductPostLstReq): Observable<Models.NTGetProductPostLstRes> {
    return this.post<Models.NTGetProductPostLstRes>('/Product/GetProductPostLst', body);
  }
  /**
   * Lấy danh sách sản phẩm gợi ý - [POST] /Product/GetItemModelLst
   */
  getItemModelLst(body?: Models.NTGetItemModelLstReq): Observable<Models.NTGetItemModelLstRes> {
    return this.post<Models.NTGetItemModelLstRes>('/Product/GetItemModelLst', body);
  }
  /**
   * Lấy danh sách vật tư - [POST] /Product/GetProductSupplies
   */
  getProductSupplies(body?: Models.NTGetProductSuppliesReq): Observable<Models.NTGetProductSuppliesRes> {
    return this.post<Models.NTGetProductSuppliesRes>('/Product/GetProductSupplies', body);
  }
}
