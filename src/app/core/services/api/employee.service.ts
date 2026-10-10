import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for Employee Module (7 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService extends BaseApiService {
  /**
   * Lây thông tin nhân viên theo ID - [POST] /Employee/GetEmployeeInfoByID
   */
  getEmployeeInfoByID(body?: Models.NTGetEmployeeInfoByIDReq): Observable<Models.NTGetEmployeeInfoByIDRes> {
    return this.post<Models.NTGetEmployeeInfoByIDRes>('/Employee/GetEmployeeInfoByID', body);
  }
  /**
   * Lây thông tin người dẫn đơn - [POST] /Employee/GetInstructorByID
   */
  getInstructorByID(body?: Models.NTGetInstructorByIDReq): Observable<Models.NTGetInstructorByIDRes> {
    return this.post<Models.NTGetInstructorByIDRes>('/Employee/GetInstructorByID', body);
  }
  /**
   * Lây danh sách nhân viên - [POST] /Employee/GetEmployeeInfoLst
   */
  getEmployeeInfoLst(body?: Models.NTGetEmployeeInfoLstReq): Observable<Models.NTGetEmployeeInfoLstRes> {
    return this.post<Models.NTGetEmployeeInfoLstRes>('/Employee/GetEmployeeInfoLst', body);
  }
  /**
   * Cập nhật thông tin nhân viên - [POST] /Employee/UpdateEmployeeInfo
   */
  updateEmployeeInfo(body?: Models.NTUpdateEmployeeInfoReq): Observable<Models.NTUpdateEmployeeInfoRes> {
    return this.post<Models.NTUpdateEmployeeInfoRes>('/Employee/UpdateEmployeeInfo', body);
  }
  /**
   * Thêm mới nhân viên - [POST] /Employee/AddEmployeeInfo
   */
  addEmployeeInfo(body?: Models.NTAddEmployeeInfoReq): Observable<Models.NTAddEmployeeInfoRes> {
    return this.post<Models.NTAddEmployeeInfoRes>('/Employee/AddEmployeeInfo', body);
  }
  /**
   * Kiểm tra nhân viên mới - [POST] /Employee/CheckNewEmployee
   */
  checkNewEmployee(body?: Models.NTCheckNewEmployeeReq): Observable<Models.NTCheckNewEmployeeRes> {
    return this.post<Models.NTCheckNewEmployeeRes>('/Employee/CheckNewEmployee', body);
  }
  /**
   * POST Employee/GetEmployeeOfShop - [POST] /Employee/GetEmployeeOfShop
   */
  getEmployeeOfShop(body?: Models.NTGetEmployeeOfShopReq): Observable<Models.NTGetEmployeeOfShopRes> {
    return this.post<Models.NTGetEmployeeOfShopRes>('/Employee/GetEmployeeOfShop', body);
  }
}
