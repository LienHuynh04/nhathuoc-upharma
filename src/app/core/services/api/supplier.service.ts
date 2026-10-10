import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for Supplier Module (25 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class SupplierApiService extends BaseApiService {
  /**
   * Thêm nhà cung cấp - [POST] /Supplier/CreateSupplier
   */
  createSupplier(body?: Models.NTCreateSupplierReq): Observable<Models.NTCreateSupplierRes> {
    return this.post<Models.NTCreateSupplierRes>('/Supplier/CreateSupplier', body);
  }
  /**
   * Cập nhật nhà cung cấp - [POST] /Supplier/UpdateSupplier
   */
  updateSupplier(body?: Models.NTUpdateSupplierReq): Observable<Models.NTUpdateSupplierRes> {
    return this.post<Models.NTUpdateSupplierRes>('/Supplier/UpdateSupplier', body);
  }
  /**
   * Xóa nhà cung cấp - [POST] /Supplier/DelSupplier
   */
  delSupplier(body?: Models.NTDelSupplierReq): Observable<Models.NTDelSupplierRes> {
    return this.post<Models.NTDelSupplierRes>('/Supplier/DelSupplier', body);
  }
  /**
   * Lấy danh sách nhà cung cấp - [POST] /Supplier/GetSupplierLst
   */
  getSupplierLst(body?: Models.NTGetSupplierLstReq): Observable<Models.NTGetSupplierLstRes> {
    return this.post<Models.NTGetSupplierLstRes>('/Supplier/GetSupplierLst', body);
  }
  /**
   * Lấy thông tin nhà cung cấp theo mã - [POST] /Supplier/GetSupplierByCode
   */
  getSupplierByCode(body?: Models.NTGetSupplierByCodeReq): Observable<Models.NTGetSupplierByCodeRes> {
    return this.post<Models.NTGetSupplierByCodeRes>('/Supplier/GetSupplierByCode', body);
  }
  /**
   * Lấy thông tin nhà cung cấp theo mã - [POST] /Supplier/GetSupplierByID
   */
  getSupplierByID(body?: Models.NTGetSupplierByCodeReq): Observable<Models.NTGetSupplierByCodeRes> {
    return this.post<Models.NTGetSupplierByCodeRes>('/Supplier/GetSupplierByID', body);
  }
  /**
   * POST Supplier/GetSupplierFromFast - [POST] /Supplier/GetSupplierFromFast
   */
  getSupplierFromFast(body?: Models.NTGetSupplierFromFastReq): Observable<Models.NTGetSupplierFromFastRes> {
    return this.post<Models.NTGetSupplierFromFastRes>('/Supplier/GetSupplierFromFast', body);
  }
  /**
   * POST Supplier/UpdateSupplierFile - [POST] /Supplier/UpdateSupplierFile
   */
  updateSupplierFile(body?: Models.NTUpdateSupplierFileReq): Observable<Models.NTUpdateSupplierFileRes> {
    return this.post<Models.NTUpdateSupplierFileRes>('/Supplier/UpdateSupplierFile', body);
  }
  /**
   * POST Supplier/DelSupplierFile - [POST] /Supplier/DelSupplierFile
   */
  delSupplierFile(body?: Models.NTDelSupplierFileReq): Observable<Models.NTDelSupplierFileRes> {
    return this.post<Models.NTDelSupplierFileRes>('/Supplier/DelSupplierFile', body);
  }
  /**
   * POST Supplier/GetSupplierFileLst - [POST] /Supplier/GetSupplierFileLst
   */
  getSupplierFileLst(body?: Models.NTGetSupplierFileLstReq): Observable<Models.NTGetSupplierFileLstRes> {
    return this.post<Models.NTGetSupplierFileLstRes>('/Supplier/GetSupplierFileLst', body);
  }
  /**
   * POST Supplier/GetSupplierFileOldLst - [POST] /Supplier/GetSupplierFileOldLst
   */
  getSupplierFileOldLst(body?: Models.NTGetSupplierFileOldLstReq): Observable<Models.NTGetSupplierFileOldLstRes> {
    return this.post<Models.NTGetSupplierFileOldLstRes>('/Supplier/GetSupplierFileOldLst', body);
  }
  /**
   * POST Supplier/RenameSupplierFile - [POST] /Supplier/RenameSupplierFile
   */
  renameSupplierFile(body?: Models.NTRenameSupplierFileReq): Observable<Models.NTRenameSupplierFileRes> {
    return this.post<Models.NTRenameSupplierFileRes>('/Supplier/RenameSupplierFile', body);
  }
  /**
   * POST Supplier/CreateSupplierContact - [POST] /Supplier/CreateSupplierContact
   */
  createSupplierContact(body?: Models.NTCreateSupplierContactReq): Observable<Models.NTCreateSupplierContactRes> {
    return this.post<Models.NTCreateSupplierContactRes>('/Supplier/CreateSupplierContact', body);
  }
  /**
   * POST Supplier/DelSupplierContact - [POST] /Supplier/DelSupplierContact
   */
  delSupplierContact(body?: Models.NTDelSupplierContactReq): Observable<Models.NTDelSupplierContactRes> {
    return this.post<Models.NTDelSupplierContactRes>('/Supplier/DelSupplierContact', body);
  }
  /**
   * POST Supplier/GetSupplierContactLst - [POST] /Supplier/GetSupplierContactLst
   */
  getSupplierContactLst(body?: Models.NTGetSupplierContactLstReq): Observable<Models.NTGetSupplierContactLstRes> {
    return this.post<Models.NTGetSupplierContactLstRes>('/Supplier/GetSupplierContactLst', body);
  }
  /**
   * POST Supplier/CreateSupplierBankAccount - [POST] /Supplier/CreateSupplierBankAccount
   */
  createSupplierBankAccount(body?: Models.NTCreateSupplierBankAccountReq): Observable<Models.NTCreateSupplierBankAccountRes> {
    return this.post<Models.NTCreateSupplierBankAccountRes>('/Supplier/CreateSupplierBankAccount', body);
  }
  /**
   * POST Supplier/DelSupplierBankAccount - [POST] /Supplier/DelSupplierBankAccount
   */
  delSupplierBankAccount(body?: Models.NTDelSupplierBankAccountReq): Observable<Models.NTDelSupplierBankAccountRes> {
    return this.post<Models.NTDelSupplierBankAccountRes>('/Supplier/DelSupplierBankAccount', body);
  }
  /**
   * POST Supplier/GetSupplierBankAccountLst - [POST] /Supplier/GetSupplierBankAccountLst
   */
  getSupplierBankAccountLst(body?: Models.NTGetSupplierBankAccountLstReq): Observable<Models.NTGetSupplierBankAccountLstRes> {
    return this.post<Models.NTGetSupplierBankAccountLstRes>('/Supplier/GetSupplierBankAccountLst', body);
  }
  /**
   * POST Supplier/AddSupplierCommit - [POST] /Supplier/AddSupplierCommit
   */
  addSupplierCommit(body?: Models.NTAddSupplierCommitReq): Observable<Models.NTAddSupplierCommitRes> {
    return this.post<Models.NTAddSupplierCommitRes>('/Supplier/AddSupplierCommit', body);
  }
  /**
   * POST Supplier/DelSupplierCommit - [POST] /Supplier/DelSupplierCommit
   */
  delSupplierCommit(body?: Models.NTDelSupplierCommitReq): Observable<Models.NTDelSupplierCommitRes> {
    return this.post<Models.NTDelSupplierCommitRes>('/Supplier/DelSupplierCommit', body);
  }
  /**
   * POST Supplier/GetSupplierCommitLst - [POST] /Supplier/GetSupplierCommitLst
   */
  getSupplierCommitLst(body?: Models.NTGetSupplierCommitLstReq): Observable<Models.NTGetSupplierCommitLstRes> {
    return this.post<Models.NTGetSupplierCommitLstRes>('/Supplier/GetSupplierCommitLst', body);
  }
  /**
   * POST Supplier/AddSupplierWork - [POST] /Supplier/AddSupplierWork
   */
  addSupplierWork(body?: Models.NTAddSupplierWorkReq): Observable<Models.NTAddSupplierWorkRes> {
    return this.post<Models.NTAddSupplierWorkRes>('/Supplier/AddSupplierWork', body);
  }
  /**
   * POST Supplier/DelSupplierWork - [POST] /Supplier/DelSupplierWork
   */
  delSupplierWork(body?: Models.NTDelSupplierWorkReq): Observable<Models.NTDelSupplierWorkRes> {
    return this.post<Models.NTDelSupplierWorkRes>('/Supplier/DelSupplierWork', body);
  }
  /**
   * POST Supplier/CompleteSupplierWork - [POST] /Supplier/CompleteSupplierWork
   */
  completeSupplierWork(body?: Models.NTCompleteSupplierWorkReq): Observable<Models.NTCompleteSupplierWorkRes> {
    return this.post<Models.NTCompleteSupplierWorkRes>('/Supplier/CompleteSupplierWork', body);
  }
  /**
   * POST Supplier/GetSupplierWorkLst - [POST] /Supplier/GetSupplierWorkLst
   */
  getSupplierWorkLst(body?: Models.NTGetSupplierWorkLstReq): Observable<Models.NTGetSupplierWorkLstRes> {
    return this.post<Models.NTGetSupplierWorkLstRes>('/Supplier/GetSupplierWorkLst', body);
  }
}
