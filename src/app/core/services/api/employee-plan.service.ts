import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for EmployeePlan Module (4 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class EmployeePlanApiService extends BaseApiService {
  /**
   * Cập nhật kế hoạch nhân viên - [POST] /EmployeePlan/UpdateEmployeePlan
   */
  updateEmployeePlan(body?: Models.NTUpdateEmployeePlanReq): Observable<Models.NTUpdateEmployeePlanRes> {
    return this.post<Models.NTUpdateEmployeePlanRes>('/EmployeePlan/UpdateEmployeePlan', body);
  }
  /**
   * Phê duyệt kế hoạch nhân viên - [POST] /EmployeePlan/ApproveEmployeePlan
   */
  approveEmployeePlan(body?: Models.NTApproveEmployeePlanReq): Observable<Models.NTApproveEmployeePlanRes> {
    return this.post<Models.NTApproveEmployeePlanRes>('/EmployeePlan/ApproveEmployeePlan', body);
  }
  /**
   * Lấy danh sách kế hoạch nhân viên - [POST] /EmployeePlan/GetEmployeePlanLst
   */
  getEmployeePlanLst(body?: Models.NTGetEmployeePlanLstReq): Observable<Models.NTGetEmployeePlanLstRes> {
    return this.post<Models.NTGetEmployeePlanLstRes>('/EmployeePlan/GetEmployeePlanLst', body);
  }
  /**
   * Lấy danh sách kế hoạch nhân viên - [POST] /EmployeePlan/GetEmployeePlanDetailByEm
   */
  getEmployeePlanDetailByEm(body?: Models.NTGetEmployeePlanDetailByEmReq): Observable<Models.NTGetEmployeePlanDetailByEmRes> {
    return this.post<Models.NTGetEmployeePlanDetailByEmRes>('/EmployeePlan/GetEmployeePlanDetailByEm', body);
  }
}
