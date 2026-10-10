import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for TransferOrder Module (24 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class TransferOrderApiService extends BaseApiService {
  /**
   * Tạo mới đơn đặt hàng nội bộ - [POST] /TransferOrder/CreateTransferOrder
   */
  createTransferOrder(body?: Models.NTCreateTransferOrderReq): Observable<Models.NTCreateTransferOrderRes> {
    return this.post<Models.NTCreateTransferOrderRes>('/TransferOrder/CreateTransferOrder', body);
  }
  /**
   * POST TransferOrder/CreateTransferOrderLst - [POST] /TransferOrder/CreateTransferOrderLst
   */
  createTransferOrderLst(body?: Models.NTCreateTransferOrderLstReq): Observable<Models.NTCreateTransferOrderLstRes> {
    return this.post<Models.NTCreateTransferOrderLstRes>('/TransferOrder/CreateTransferOrderLst', body);
  }
  /**
   * Cập nhật đơn đặt hàng nội bộ - [POST] /TransferOrder/UpdateTransferOrder
   */
  updateTransferOrder(body?: Models.NTUpdateTransferOrderReq): Observable<Models.NTUpdateTransferOrderRes> {
    return this.post<Models.NTUpdateTransferOrderRes>('/TransferOrder/UpdateTransferOrder', body);
  }
  /**
   * Hủy đơn đặt hàng nội bộ - [POST] /TransferOrder/DelTransferOrder
   */
  delTransferOrder(body?: Models.NTDelTransferOrderReq): Observable<Models.NTDelTransferOrderRes> {
    return this.post<Models.NTDelTransferOrderRes>('/TransferOrder/DelTransferOrder', body);
  }
  /**
   * Cập nhật ds lô đặt hàng nội bộ - [POST] /TransferOrder/UpdateTransferOrderLot
   */
  updateTransferOrderLot(body?: Models.NTUpdateTransferOrderLotReq): Observable<Models.NTUpdateTransferOrderLotRes> {
    return this.post<Models.NTUpdateTransferOrderLotRes>('/TransferOrder/UpdateTransferOrderLot', body);
  }
  /**
   * Cập nhật ds lô đặt hàng nội bộ V2 - [POST] /TransferOrder/UpdateTransferOrderLotV2
   */
  updateTransferOrderLotV2(body?: Models.NTUpdateTransferOrderLotV2Req): Observable<Models.NTUpdateTransferOrderLotRes> {
    return this.post<Models.NTUpdateTransferOrderLotRes>('/TransferOrder/UpdateTransferOrderLotV2', body);
  }
  /**
   * Cập nhật ds lô đặt hàng nội bộ - [POST] /TransferOrder/StopTransferOrderLot
   */
  stopTransferOrderLot(body?: Models.NTStopTransferOrderLotReq): Observable<Models.NTStopTransferOrderLotRes> {
    return this.post<Models.NTStopTransferOrderLotRes>('/TransferOrder/StopTransferOrderLot', body);
  }
  /**
   * Ghi chú mua hàng - [POST] /TransferOrder/NoteTransferOrderLot
   */
  noteTransferOrderLot(body?: Models.NTNoteTransferOrderLotReq): Observable<Models.NTNoteTransferOrderLotRes> {
    return this.post<Models.NTNoteTransferOrderLotRes>('/TransferOrder/NoteTransferOrderLot', body);
  }
  /**
   * Lấy thông tin lô đặt hàng nội bộ - [POST] /TransferOrder/GetTransferOrderLot
   */
  getTransferOrderLot(body?: Models.NTGetTransferOrderLotReq): Observable<Models.NTGetTransferOrderLotRes> {
    return this.post<Models.NTGetTransferOrderLotRes>('/TransferOrder/GetTransferOrderLot', body);
  }
  /**
   * Lấy thông tin lô đặt hàng nội bộ V2 - [POST] /TransferOrder/GetTransferOrderLotV2
   */
  getTransferOrderLotV2(body?: Models.NTGetTransferOrderLotV2Req): Observable<Models.NTGetTransferOrderLotV2Res> {
    return this.post<Models.NTGetTransferOrderLotV2Res>('/TransferOrder/GetTransferOrderLotV2', body);
  }
  /**
   * Lấy danh sách đơn nội bộ theo thời gian - [POST] /TransferOrder/GetTransferOrderByTime
   */
  getTransferOrderByTime(body?: Models.NTGetTransferOrderByTimeReq): Observable<Models.NTGetTransferOrderByTimeRes> {
    return this.post<Models.NTGetTransferOrderByTimeRes>('/TransferOrder/GetTransferOrderByTime', body);
  }
  /**
   * Lấy danh sách đơn nội bộ theo thời gian - [POST] /TransferOrder/GetTransferOrderHeaderInfo
   */
  getTransferOrderHeaderInfo(body?: Models.NTGetTransferOrderHeaderInfoReq): Observable<Models.NTGetTransferOrderHeaderInfoRes> {
    return this.post<Models.NTGetTransferOrderHeaderInfoRes>('/TransferOrder/GetTransferOrderHeaderInfo', body);
  }
  /**
   * Lấy danh sách đơn nội bộ theo thời gian - [POST] /TransferOrder/GetTransferOrderSysByTime
   */
  getTransferOrderSysByTime(body?: Models.NTGetTransferOrderSysByTimeReq): Observable<Models.NTGetTransferOrderSysByTimeRes> {
    return this.post<Models.NTGetTransferOrderSysByTimeRes>('/TransferOrder/GetTransferOrderSysByTime', body);
  }
  /**
   * Lấy danh sách đơn nội bộ theo thời gian - [POST] /TransferOrder/GetTransferOrderSysByTime2
   */
  getTransferOrderSysByTime2(body?: Models.NTGetTransferOrderSysByTime2Req): Observable<Models.NTGetTransferOrderSysByTime2Res> {
    return this.post<Models.NTGetTransferOrderSysByTime2Res>('/TransferOrder/GetTransferOrderSysByTime2', body);
  }
  /**
   * Lấy danh sách đã bốc lô sản phẩm - [POST] /TransferOrder/GetTransferOrderedQuaByDoc
   */
  getTransferOrderedQuaByDoc(body?: Models.NTGetTransferOrderedQuaByDocReq): Observable<Models.NTGetTransferOrderedQuaByDocRes> {
    return this.post<Models.NTGetTransferOrderedQuaByDocRes>('/TransferOrder/GetTransferOrderedQuaByDoc', body);
  }
  /**
   * Lấy danh sách sản phẩm đã gọi hàng trước đó của Shop - [POST] /TransferOrder/GetTransferOrderProcess
   */
  getTransferOrderProcess(body?: Models.NTGetTransferOrderProcessReq): Observable<Models.NTGetTransferOrderProcessRes> {
    return this.post<Models.NTGetTransferOrderProcessRes>('/TransferOrder/GetTransferOrderProcess', body);
  }
  /**
   * POST TransferOrder/ApproveTransferOrderHeader - [POST] /TransferOrder/ApproveTransferOrderHeader
   */
  approveTransferOrderHeader(body?: Models.NTApproveTransferOrderHeaderReq): Observable<Models.NTApproveTransferOrderHeaderRes> {
    return this.post<Models.NTApproveTransferOrderHeaderRes>('/TransferOrder/ApproveTransferOrderHeader', body);
  }
  /**
   * Lấy báo cáo kế hoạch bốc lô đơn gọi hàng - [POST] /TransferOrder/GetPlanTransferOrderLst
   */
  getPlanTransferOrderLst(body?: Models.NTGetPlanTransferOrderLstReq): Observable<Models.NTGetPlanTransferOrderLstRes> {
    return this.post<Models.NTGetPlanTransferOrderLstRes>('/TransferOrder/GetPlanTransferOrderLst', body);
  }
  /**
   * Lấy báo cáo kế hoạch bốc lô đơn gọi hàng - [POST] /TransferOrder/GetItemOrderByShop
   */
  getItemOrderByShop(body?: Models.NTGetItemOrderByShopReq): Observable<Models.NTGetItemOrderByShopRes> {
    return this.post<Models.NTGetItemOrderByShopRes>('/TransferOrder/GetItemOrderByShop', body);
  }
  /**
   * Lấy báo cáo kế hoạch bốc lô đơn gọi hàng - [POST] /TransferOrder/GetItemOrderByShopV2
   */
  getItemOrderByShopV2(body?: Models.NTGetItemOrderByShopReq): Observable<Models.NTGetItemOrderByShopRes> {
    return this.post<Models.NTGetItemOrderByShopRes>('/TransferOrder/GetItemOrderByShopV2', body);
  }
  /**
   * Báo cáo người follow hàng hóa gọi hàng - [POST] /TransferOrder/GetTransferOrderByFollower
   */
  getTransferOrderByFollower(body?: Models.RPGetTransferOrderByFollowerReq): Observable<Models.RPGetTransferOrderByFollowerRes> {
    return this.post<Models.RPGetTransferOrderByFollowerRes>('/TransferOrder/GetTransferOrderByFollower', body);
  }
  /**
   * Báo cáo người follow hàng hóa gọi hàng - [POST] /TransferOrder/GetTransferOrderByFollowerD
   */
  getTransferOrderByFollowerD(body?: Models.RPGetTransferOrderByFollowerDReq): Observable<Models.RPGetTransferOrderByFollowerDRes> {
    return this.post<Models.RPGetTransferOrderByFollowerDRes>('/TransferOrder/GetTransferOrderByFollowerD', body);
  }
  /**
   * Lấy thông tin gợi ý bốc hàng - [POST] /TransferOrder/GetSuggestTransferOrderLst
   */
  getSuggestTransferOrderLst(body?: Models.RPGetSuggestTransferOrderLstReq): Observable<Models.RPGetSuggestTransferOrderLstRes> {
    return this.post<Models.RPGetSuggestTransferOrderLstRes>('/TransferOrder/GetSuggestTransferOrderLst', body);
  }
  /**
   * Lấy báo cáo tốc độ xử lý hàng hóa - [POST] /TransferOrder/GetDeliverySpeedLst
   */
  getDeliverySpeedLst(body?: Models.RPGetDeliverySpeedLstReq): Observable<Models.RPGetDeliverySpeedLstRes> {
    return this.post<Models.RPGetDeliverySpeedLstRes>('/TransferOrder/GetDeliverySpeedLst', body);
  }
}
