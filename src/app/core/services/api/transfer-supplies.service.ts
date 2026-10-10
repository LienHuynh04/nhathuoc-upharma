import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for TransferSupplies Module (12 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class TransferSuppliesApiService extends BaseApiService {
  /**
   * POST TransferSupplies/ApproveTransferSuppLine - [POST] /TransferSupplies/ApproveTransferSuppLine
   */
  approveTransferSuppLine(body?: Models.NTApproveTransferSuppLineReq): Observable<Models.NTApproveTransferSuppLineRes> {
    return this.post<Models.NTApproveTransferSuppLineRes>('/TransferSupplies/ApproveTransferSuppLine', body);
  }
  /**
   * POST TransferSupplies/GetTransferSuppByHId - [POST] /TransferSupplies/GetTransferSuppByHId
   */
  getTransferSuppByHId(body?: Models.NTGetTransferSuppByHIdReq): Observable<Models.NTGetTransferSuppByHIdRes> {
    return this.post<Models.NTGetTransferSuppByHIdRes>('/TransferSupplies/GetTransferSuppByHId', body);
  }
  /**
   * POST TransferSupplies/GetTransferSupp - [POST] /TransferSupplies/GetTransferSupp
   */
  getTransferSupp(body?: Models.NTGetTransferSuppReq): Observable<Models.NTGetTransferSuppRes> {
    return this.post<Models.NTGetTransferSuppRes>('/TransferSupplies/GetTransferSupp', body);
  }
  /**
   * POST TransferSupplies/CreateTransferSupp - [POST] /TransferSupplies/CreateTransferSupp
   */
  createTransferSupp(body?: Models.NTCreateTransferSuppReq): Observable<Models.NTCreateTransferSuppRes> {
    return this.post<Models.NTCreateTransferSuppRes>('/TransferSupplies/CreateTransferSupp', body);
  }
  /**
   * POST TransferSupplies/UpdateTransferSupp - [POST] /TransferSupplies/UpdateTransferSupp
   */
  updateTransferSupp(body?: Models.NTUpdateTransferSuppReq): Observable<Models.NTUpdateTransferSuppRes> {
    return this.post<Models.NTUpdateTransferSuppRes>('/TransferSupplies/UpdateTransferSupp', body);
  }
  /**
   * POST TransferSupplies/DelTransferSupp - [POST] /TransferSupplies/DelTransferSupp
   */
  delTransferSupp(body?: Models.NTDelTransferSuppReq): Observable<Models.NTDelTransferSuppRes> {
    return this.post<Models.NTDelTransferSuppRes>('/TransferSupplies/DelTransferSupp', body);
  }
  /**
   * POST TransferSupplies/ApproveTransferSupp - [POST] /TransferSupplies/ApproveTransferSupp
   */
  approveTransferSupp(body?: Models.NTApproveTransferSuppReq): Observable<Models.NTApproveTransferSuppRes> {
    return this.post<Models.NTApproveTransferSuppRes>('/TransferSupplies/ApproveTransferSupp', body);
  }
  /**
   * Lấy tồn kho vật tư - [POST] /TransferSupplies/GetInventorySupplies
   */
  getInventorySupplies(body?: Models.NTGetInventorySuppliesReq): Observable<Models.NTGetInventorySuppliesRes> {
    return this.post<Models.NTGetInventorySuppliesRes>('/TransferSupplies/GetInventorySupplies', body);
  }
  /**
   * Lấy tồn kho vật tư - [POST] /TransferSupplies/GetLocalSuppStoreLst
   */
  getLocalSuppStoreLst(body?: Models.NTGetLocalSuppStoreLstReq): Observable<Models.NTGetLocalSuppStoreLstRes> {
    return this.post<Models.NTGetLocalSuppStoreLstRes>('/TransferSupplies/GetLocalSuppStoreLst', body);
  }
  /**
   * Lấy tồn kho vật tư - [POST] /TransferSupplies/GetInventorySuppByStoreID
   */
  getInventorySuppByStoreID(body?: Models.NTGetInventorySuppByStoreIDReq): Observable<Models.NTGetInventorySuppByStoreIDRes> {
    return this.post<Models.NTGetInventorySuppByStoreIDRes>('/TransferSupplies/GetInventorySuppByStoreID', body);
  }
  /**
   * Lấy sử dụng tồn kho - [POST] /TransferSupplies/GetSuppUserLstByTime
   */
  getSuppUserLstByTime(body?: Models.NTGetSuppUserLstByTimeReq): Observable<Models.NTGetSuppUserLstByTimeRes> {
    return this.post<Models.NTGetSuppUserLstByTimeRes>('/TransferSupplies/GetSuppUserLstByTime', body);
  }
  /**
   * Lấy tốc độ tiêu thụ vật tư - [POST] /TransferSupplies/GetSpeedSupplies
   */
  getSpeedSupplies(body?: Models.NTGetSpeedSuppliesReq): Observable<Models.NTGetSpeedSuppliesRes> {
    return this.post<Models.NTGetSpeedSuppliesRes>('/TransferSupplies/GetSpeedSupplies', body);
  }
}
