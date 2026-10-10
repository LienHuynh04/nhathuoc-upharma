import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for FileShop Module (2 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class FileShopApiService extends BaseApiService {
  /**
   * Upload File shop - [POST] /FileShop/UploadFileShop?uPharmaID={uPharmaID}&Token={Token}&FileName={FileName}&ShopCode={ShopCode}
   */
  uploadFileShop(body?: any): Observable<Models.NTUploadFileRes> {
    return this.post<Models.NTUploadFileRes>('/FileShop/UploadFileShop', body);
  }
  /**
   * DownloadFileShop - [GET] /FileShop/DownloadFileShop?uPharmaID={uPharmaID}&Token={Token}&FileCode={FileCode}&ShopCode={ShopCode}
   */
  downloadFileShop(params?: any): Observable<any> {
    return this.get<any>('/FileShop/DownloadFileShop', params);
  }
}
