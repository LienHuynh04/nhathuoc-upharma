import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for TransferOrderShopNew Module (4 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class TransferOrderShopNewApiService extends BaseApiService {
  /**
   * Lấy danh mục sản phẩm Order cho nhà mới - [POST] /TransferOrderShopNew/GetTransferOrderFirstLst
   */
  getTransferOrderFirstLst(body?: Models.NTGetTransferOrderFirstLstReq): Observable<Models.NTGetTransferOrderFirstLstRes> {
    return this.post<Models.NTGetTransferOrderFirstLstRes>('/TransferOrderShopNew/GetTransferOrderFirstLst', body);
  }
  /**
   * Tạo lại danh mục sản phẩm Order cho nhà mới - [POST] /TransferOrderShopNew/CreateTransferOrderFirstLst
   */
  createTransferOrderFirstLst(body?: Models.NTCreateTransferOrderFirstLstReq): Observable<Models.NTCreateTransferOrderFirstLstRes> {
    return this.post<Models.NTCreateTransferOrderFirstLstRes>('/TransferOrderShopNew/CreateTransferOrderFirstLst', body);
  }
  /**
   * Cập nhật lại số lượng trong danh mục sản phẩm Order - [POST] /TransferOrderShopNew/UpdateTransferOrderFirst
   */
  updateTransferOrderFirst(body?: Models.NTUpdateTransferOrderFirstReq): Observable<Models.NTUpdateTransferOrderFirstRes> {
    return this.post<Models.NTUpdateTransferOrderFirstRes>('/TransferOrderShopNew/UpdateTransferOrderFirst', body);
  }
  /**
   * Xác nhận danh mục sản phẩm Order - [POST] /TransferOrderShopNew/ApproveTransferOrderFirst
   */
  approveTransferOrderFirst(body?: Models.NTApproveTransferOrderFirstReq): Observable<Models.NTApproveTransferOrderFirstRes> {
    return this.post<Models.NTApproveTransferOrderFirstRes>('/TransferOrderShopNew/ApproveTransferOrderFirst', body);
  }
}
