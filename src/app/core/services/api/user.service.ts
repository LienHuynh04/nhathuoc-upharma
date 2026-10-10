import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for User Module (7 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class UserApiService extends BaseApiService {
  /**
   * Đăng nhập hệ thống - [POST] /User/UserLogin
   */
  userLogin(body?: Models.NTUserLoginReq): Observable<Models.NTUserLoginRes> {
    return this.post<Models.NTUserLoginRes>('/User/UserLogin', body);
  }
  /**
   * Cập nhật thông tin User - [POST] /User/UpdateUserInfo
   */
  updateUserInfo(body?: Models.NTUpdateUserInfoReq): Observable<Models.NTUpdateUserInfoRes> {
    return this.post<Models.NTUpdateUserInfoRes>('/User/UpdateUserInfo', body);
  }
  /**
   * Lấy thông tin User - [POST] /User/GetUserInfoByID
   */
  getUserInfoByID(body?: Models.NTGetUserInfoByIDReq): Observable<Models.NTGetUserInfoByIDRes> {
    return this.post<Models.NTGetUserInfoByIDRes>('/User/GetUserInfoByID', body);
  }
  /**
   * Cập nhật thông tin User - [POST] /User/ChangePassword
   */
  changePassword(body?: Models.NTChangePasswordReq): Observable<Models.NTChangePasswordRes> {
    return this.post<Models.NTChangePasswordRes>('/User/ChangePassword', body);
  }
  /**
   * Quên mật khẩu - [POST] /User/LotPassword
   */
  lotPassword(body?: Models.NTLotPasswordReq): Observable<Models.NTLotPasswordRes> {
    return this.post<Models.NTLotPasswordRes>('/User/LotPassword', body);
  }
  /**
   * Check OTP quên mật khẩu - [POST] /User/CheckOTPLostPassword
   */
  checkOTPLostPassword(body?: Models.NTCheckOTPLostPasswordReq): Observable<Models.NTCheckOTPLostPasswordRes> {
    return this.post<Models.NTCheckOTPLostPasswordRes>('/User/CheckOTPLostPassword', body);
  }
  /**
   * Đăng ký tài khoản - [POST] /User/UserRegister
   */
  userRegister(body?: Models.NTUserRegisterReq): Observable<Models.NTUserRegisterRes> {
    return this.post<Models.NTUserRegisterRes>('/User/UserRegister', body);
  }
}
