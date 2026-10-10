import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for File Module (12 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class FileApiService extends BaseApiService {
  /**
   * Upload ảnh của sản phẩm - [POST] /File/UploadImageProduct?ProductID={ProductID}&Token={Token}&uPharmaID={uPharmaID}&TypeIm={TypeIm}
   */
  uploadImageProduct(body?: any): Observable<Models.NTUploadFileRes> {
    return this.post<Models.NTUploadFileRes>('/File/UploadImageProduct', body);
  }
  /**
   * Hàm lấy ảnh của sản phẩm - [GET] /File/DownloadImageProduct?uPharmaID={uPharmaID}&Token={Token}&ProductID={ProductID}&TypeIm={TypeIm}&Ratio={Ratio}
   */
  downloadImageProduct(params?: any): Observable<any> {
    return this.get<any>('/File/DownloadImageProduct', params);
  }
  /**
   * Upload ảnh của sản phẩm yêu cầu - [POST] /File/UploadImageProductOrder?Token={Token}&uPharmaID={uPharmaID}&DocumentID={DocumentID}
   */
  uploadImageProductOrder(body?: any): Observable<Models.NTUploadFileRes> {
    return this.post<Models.NTUploadFileRes>('/File/UploadImageProductOrder', body);
  }
  /**
   * Hàm lấy ảnh của sản phẩm - [GET] /File/DownloadImageProductOrder?uPharmaID={uPharmaID}&Token={Token}&DocumentID={DocumentID}
   */
  downloadImageProductOrder(params?: any): Observable<any> {
    return this.get<any>('/File/DownloadImageProductOrder', params);
  }
  /**
   * Hàm lấy ảnh của sản phẩm Km - [GET] /File/DownloadImageProductKM?uPharmaID={uPharmaID}&Token={Token}&ProductID={ProductID}&Ratio={Ratio}
   */
  downloadImageProductKM(params?: any): Observable<any> {
    return this.get<any>('/File/DownloadImageProductKM', params);
  }
  /**
   * No documentation available. - [POST] /File/UploadImageInvoiceDoc?HeaderID={HeaderID}&Token={Token}&uPharmaID={uPharmaID}&ProductLst={ProductLst}
   */
  uploadImageInvoiceDoc(body?: any): Observable<Models.NTUploadFileRes> {
    return this.post<Models.NTUploadFileRes>('/File/UploadImageInvoiceDoc', body);
  }
  /**
   * Hàm lấy ảnh của đơn hàng - [GET] /File/DownloadImageInvoiceDoc?uPharmaID={uPharmaID}&Token={Token}&HeaderID={HeaderID}
   */
  downloadImageInvoiceDoc(params?: any): Observable<any> {
    return this.get<any>('/File/DownloadImageInvoiceDoc', params);
  }
  /**
   * Upload ảnh trả lại hàng - [POST] /File/UploadImageReturnShop?DocumentID={DocumentID}&Token={Token}&uPharmaID={uPharmaID}
   */
  uploadImageReturnShop(body?: any): Observable<Models.NTUploadFileRes> {
    return this.post<Models.NTUploadFileRes>('/File/UploadImageReturnShop', body);
  }
  /**
   * Hàm lấy ảnh của đơn hàng - [GET] /File/DownloadImageReturnShop?uPharmaID={uPharmaID}&Token={Token}&DocumentID={DocumentID}
   */
  downloadImageReturnShop(params?: any): Observable<any> {
    return this.get<any>('/File/DownloadImageReturnShop', params);
  }
  /**
   * Upload File phiếu nhập kho - [POST] /File/UpFileImportStore?DocumentID={DocumentID}&Token={Token}&uPharmaID={uPharmaID}&TypeDoc={TypeDoc}&Note={Note}
   */
  upFileImportStore(body?: any): Observable<Models.NTUploadFileRes> {
    return this.post<Models.NTUploadFileRes>('/File/UpFileImportStore', body);
  }
  /**
   * Hàm lấy ảnh của đơn hàng - [GET] /File/DownloadFileImportStore?uPharmaID={uPharmaID}&Token={Token}&FileID={FileID}
   */
  downloadFileImportStore(params?: any): Observable<any> {
    return this.get<any>('/File/DownloadFileImportStore', params);
  }
  /**
   * Hàm lấy ảnh của đơn hàng - [GET] /File/DelFileImportStore?uPharmaID={uPharmaID}&Token={Token}&FileID={FileID}
   */
  delFileImportStore(params?: any): Observable<Models.NTUploadFileRes> {
    return this.get<Models.NTUploadFileRes>('/File/DelFileImportStore', params);
  }
}
