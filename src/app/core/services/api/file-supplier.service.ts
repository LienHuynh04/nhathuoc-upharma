import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for FileSupplier Module (7 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class FileSupplierApiService extends BaseApiService {
  /**
   * POST FileSupplier/UploadFileSupplier?FileName={FileName}&FileType={FileType}&uPharmaID={uPharmaID}&Token={Token}&CustomerID={CustomerID}&ExpirationDate={ExpirationDate}&Note={Note} - [POST] /FileSupplier/UploadFileSupplier?FileName={FileName}&FileType={FileType}&uPharmaID={uPharmaID}&Token={Token}&CustomerID={CustomerID}&ExpirationDate={ExpirationDate}&Note={Note}
   */
  uploadFileSupplier(body?: any): Observable<Models.NTUploadFileRes> {
    return this.post<Models.NTUploadFileRes>('/FileSupplier/UploadFileSupplier', body);
  }
  /**
   * POST FileSupplier/UploadFileAuthorize?uPharmaID={uPharmaID}&Token={Token}&CustomerID={CustomerID}&FileID={FileID} - [POST] /FileSupplier/UploadFileAuthorize?uPharmaID={uPharmaID}&Token={Token}&CustomerID={CustomerID}&FileID={FileID}
   */
  uploadFileAuthorize(body?: any): Observable<Models.NTUploadFileRes> {
    return this.post<Models.NTUploadFileRes>('/FileSupplier/UploadFileAuthorize', body);
  }
  /**
   * No documentation available. - [POST] /FileSupplier/UploadSupplierProductFile?uPharmaID={uPharmaID}&Token={Token}&CustomerID={CustomerID}&ProductID={ProductID}&FileType={FileType}&TimeApply={TimeApply}&ExpirationDate={ExpirationDate}&FileCode={FileCode}
   */
  uploadSupplierProductFile(body?: any): Observable<Models.NTUploadFileRes> {
    return this.post<Models.NTUploadFileRes>('/FileSupplier/UploadSupplierProductFile', body);
  }
  /**
   * GET FileSupplier/DownloadSupplierProductFile?uPharmaID={uPharmaID}&Token={Token}&CustomerID={CustomerID}&ProductID={ProductID}&FileID={FileID} - [GET] /FileSupplier/DownloadSupplierProductFile?uPharmaID={uPharmaID}&Token={Token}&CustomerID={CustomerID}&ProductID={ProductID}&FileID={FileID}
   */
  downloadSupplierProductFile(params?: any): Observable<any> {
    return this.get<any>('/FileSupplier/DownloadSupplierProductFile', params);
  }
  /**
   * GET FileSupplier/DownloadFileAuthorize?uPharmaID={uPharmaID}&Token={Token}&CustomerID={CustomerID}&FileID={FileID} - [GET] /FileSupplier/DownloadFileAuthorize?uPharmaID={uPharmaID}&Token={Token}&CustomerID={CustomerID}&FileID={FileID}
   */
  downloadFileAuthorize(params?: any): Observable<any> {
    return this.get<any>('/FileSupplier/DownloadFileAuthorize', params);
  }
  /**
   * GET FileSupplier/DownloadFileSupplier?uPharmaID={uPharmaID}&Token={Token}&CustomerID={CustomerID}&FileID={FileID} - [GET] /FileSupplier/DownloadFileSupplier?uPharmaID={uPharmaID}&Token={Token}&CustomerID={CustomerID}&FileID={FileID}
   */
  downloadFileSupplier(params?: any): Observable<any> {
    return this.get<any>('/FileSupplier/DownloadFileSupplier', params);
  }
  /**
   * GET FileSupplier/DelFileSupplier?uPharmaID={uPharmaID}&Token={Token}&FileID={FileID} - [GET] /FileSupplier/DelFileSupplier?uPharmaID={uPharmaID}&Token={Token}&FileID={FileID}
   */
  delFileSupplier(params?: any): Observable<Models.NTUploadFileRes> {
    return this.get<Models.NTUploadFileRes>('/FileSupplier/DelFileSupplier', params);
  }
}
