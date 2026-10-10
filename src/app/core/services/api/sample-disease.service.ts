import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for SampleDisease Module (3 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class SampleDiseaseApiService extends BaseApiService {
  /**
   * Tìm kiếm đơn mẫu theo triệu trứng bệnh - [POST] /SampleDisease/SearchSampleDisease
   */
  searchSampleDisease(body?: Models.NTSearchSampleDiseaseReq): Observable<Models.NTSearchSampleDiseaseRes> {
    return this.post<Models.NTSearchSampleDiseaseRes>('/SampleDisease/SearchSampleDisease', body);
  }
  /**
   * Lấy thông tin đơn mẫu - [POST] /SampleDisease/GetSampleDisease
   */
  getSampleDisease(body?: Models.NTGetSampleDiseaseReq): Observable<Models.NTGetSampleDiseaseRes> {
    return this.post<Models.NTGetSampleDiseaseRes>('/SampleDisease/GetSampleDisease', body);
  }
  /**
   * Lấy thông tin đơn mẫu - [POST] /SampleDisease/SearchInvoiceImage
   */
  searchInvoiceImage(body?: Models.NTSearchInvoiceImageReq): Observable<Models.NTSearchInvoiceImageRes> {
    return this.post<Models.NTSearchInvoiceImageRes>('/SampleDisease/SearchInvoiceImage', body);
  }
}
