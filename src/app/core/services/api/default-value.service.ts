import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for DefaultValue Module (6 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class DefaultValueApiService extends BaseApiService {
  /**
   * Lấy giá trị default - [POST] /DefaultValue/GetDefaultValue
   */
  getDefaultValue(body?: Models.NTGetDefaultValueReq): Observable<Models.NTGetDefaultValueRes> {
    return this.post<Models.NTGetDefaultValueRes>('/DefaultValue/GetDefaultValue', body);
  }
  /**
   * Lấy giá trị default - [POST] /DefaultValue/GetLocation
   */
  getLocation(body?: Models.NTGetLocationReq): Observable<Models.NTGetLocationRes> {
    return this.post<Models.NTGetLocationRes>('/DefaultValue/GetLocation', body);
  }
  /**
   * Lấy giá trị default - [POST] /DefaultValue/GetDataLocation
   */
  getDataLocation(body?: Models.NTGetDataLocationReq): Observable<Models.NTGetDataLocationRes> {
    return this.post<Models.NTGetDataLocationRes>('/DefaultValue/GetDataLocation', body);
  }
  /**
   * Lấy giá trị default - [POST] /DefaultValue/GetUserDefineLst
   */
  getUserDefineLst(body?: Models.NTGetUserDefineLstReq): Observable<Models.NTGetUserDefineLstRes> {
    return this.post<Models.NTGetUserDefineLstRes>('/DefaultValue/GetUserDefineLst', body);
  }
  /**
   * Lấy giá trị default - [POST] /DefaultValue/GetStoreTypeLst
   */
  getStoreTypeLst(body?: Models.NTGetStoreTypeLstReq): Observable<Models.NTGetStoreTypeLstRes> {
    return this.post<Models.NTGetStoreTypeLstRes>('/DefaultValue/GetStoreTypeLst', body);
  }
  /**
   * Gửi báo cáo - [POST] /DefaultValue/SentMailReport
   */
  sentMailReport(body?: Models.NTSentMailReportReq): Observable<Models.NTSentMailReportRes> {
    return this.post<Models.NTSentMailReportRes>('/DefaultValue/SentMailReport', body);
  }
}
