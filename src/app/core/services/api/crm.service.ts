import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for CRM Module (3 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class CRMApiService extends BaseApiService {
  /**
   * Cập nhật thông tin khách hàng chăm sóc - [POST] /CRM/UpdateBuyerDiagnose
   */
  updateBuyerDiagnose(body?: Models.CRMUpdateBuyerDiagnoseReq): Observable<Models.CRMUpdateBuyerDiagnoseRes> {
    return this.post<Models.CRMUpdateBuyerDiagnoseRes>('/CRM/UpdateBuyerDiagnose', body);
  }
  /**
   * Upload ảnh chăm sóc khách hàng - [POST] /File/UploadImageCRM?Token={Token}&uPharmaID={uPharmaID}&RowID={RowID}
   */
  uploadImageCRM(body?: any): Observable<Models.NTUploadFileRes> {
    return this.post<Models.NTUploadFileRes>('/File/UploadImageCRM', body);
  }
  /**
   * Hàm lấy ảnh của chăm sóc khách hàng - [GET] /File/DownloadImageCRM?uPharmaID={uPharmaID}&Token={Token}&RowID={RowID}
   */
  downloadImageCRM(params?: any): Observable<any> {
    return this.get<any>('/File/DownloadImageCRM', params);
  }
}
