import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for SalesInvoice Module (24 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class SalesInvoiceApiService extends BaseApiService {
  /**
   * Quyét lô nhảy - [POST] /SalesInvoice/GetLotCodeIndexBySales
   */
  getLotCodeIndexBySales(body?: Models.NTGetLotCodeIndexBySalesReq): Observable<Models.NTGetLotCodeIndexBySalesRes> {
    return this.post<Models.NTGetLotCodeIndexBySalesRes>('/SalesInvoice/GetLotCodeIndexBySales', body);
  }
  /**
   * Kiểm tra lô nhảy của đơn hàng - [POST] /SalesInvoice/GetLotCodeIndexOfSales
   */
  getLotCodeIndexOfSales(body?: Models.NTGetLotCodeIndexOfSalesReq): Observable<Models.NTGetLotCodeIndexOfSalesRes> {
    return this.post<Models.NTGetLotCodeIndexOfSalesRes>('/SalesInvoice/GetLotCodeIndexOfSales', body);
  }
  /**
   * Thêm mới đơn hàng 2 - [POST] /SalesInvoice/CreateOrderHeader2
   */
  createOrderHeader2(body?: Models.NTCreateOrderHeaderReq): Observable<Models.NTCreateOrderHeaderRes> {
    return this.post<Models.NTCreateOrderHeaderRes>('/SalesInvoice/CreateOrderHeader2', body);
  }
  /**
   * Kiểm tra trước đơn đặt - [POST] /SalesInvoice/CheckAchievePromo
   */
  checkAchievePromo(body?: Models.NTCreateOrderHeaderReq): Observable<Models.NTCreateOrderHeaderRes> {
    return this.post<Models.NTCreateOrderHeaderRes>('/SalesInvoice/CheckAchievePromo', body);
  }
  /**
   * Check chương trình khuyến mại dựa vào đơn bán - [POST] /SalesInvoice/CheckPromoOrder
   */
  checkPromoOrder(body?: Models.NTCheckPromoOrderReq): Observable<Models.NTCheckPromoOrderRes> {
    return this.post<Models.NTCheckPromoOrderRes>('/SalesInvoice/CheckPromoOrder', body);
  }
  /**
   * Xác nhận thanh toán - [POST] /SalesInvoice/ConfirmOrderHeaderByID
   */
  confirmOrderHeaderByID(body?: Models.NTConfirmOrderHeaderByIDReq): Observable<Models.NTConfirmOrderHeaderByIDRes> {
    return this.post<Models.NTConfirmOrderHeaderByIDRes>('/SalesInvoice/ConfirmOrderHeaderByID', body);
  }
  /**
   * Xác nhận thanh toán kèm công nợ - [POST] /SalesInvoice/ConfirmDebtOrderHeaderByID
   */
  confirmDebtOrderHeaderByID(body?: Models.NTConfirmDebtOrderHeaderByIDReq): Observable<Models.NTConfirmDebtOrderHeaderByIDRes> {
    return this.post<Models.NTConfirmDebtOrderHeaderByIDRes>('/SalesInvoice/ConfirmDebtOrderHeaderByID', body);
  }
  /**
   * Xác nhận thanh toán hết công nợ - [POST] /SalesInvoice/PaymentDebtOrderHeaderByID
   */
  paymentDebtOrderHeaderByID(body?: Models.NTPaymentDebtOrderHeaderByIDReq): Observable<Models.NTPaymentDebtOrderHeaderByIDRes> {
    return this.post<Models.NTPaymentDebtOrderHeaderByIDRes>('/SalesInvoice/PaymentDebtOrderHeaderByID', body);
  }
  /**
   * Hủy đơn hàng - [POST] /SalesInvoice/DelOrderHeader
   */
  delOrderHeader(body?: Models.NTDelOrderHeaderReq): Observable<Models.NTDelOrderHeaderRes> {
    return this.post<Models.NTDelOrderHeaderRes>('/SalesInvoice/DelOrderHeader', body);
  }
  /**
   * Câp nhật đơn hàng 2 - [POST] /SalesInvoice/UpdateOrderHeader2
   */
  updateOrderHeader2(body?: Models.NTUpdateOrderHeaderReq): Observable<Models.NTUpdateOrderHeaderRes> {
    return this.post<Models.NTUpdateOrderHeaderRes>('/SalesInvoice/UpdateOrderHeader2', body);
  }
  /**
   * Lấy thông tin người đặt đơn trên Sổ tay - [POST] /SalesInvoice/GetOrderInfoST
   */
  getOrderInfoST(body?: Models.NTGetOrderInfoSTReq): Observable<Models.NTGetOrderInfoSTRes> {
    return this.post<Models.NTGetOrderInfoSTRes>('/SalesInvoice/GetOrderInfoST', body);
  }
  /**
   * Lấy thông tin đơn đặt theo ID - [POST] /SalesInvoice/GetOrderHeaderByID
   */
  getOrderHeaderByID(body?: Models.NTGetOrderHeaderByIDReq): Observable<Models.NTGetOrderHeaderByIDRes> {
    return this.post<Models.NTGetOrderHeaderByIDRes>('/SalesInvoice/GetOrderHeaderByID', body);
  }
  /**
   * Lấy thông tin đơn đặt theo QRCode - [POST] /SalesInvoice/GetOrderHeaderByQRCode
   */
  getOrderHeaderByQRCode(body?: Models.NTGetOrderHeaderByIDReq): Observable<Models.NTGetOrderHeaderByIDRes> {
    return this.post<Models.NTGetOrderHeaderByIDRes>('/SalesInvoice/GetOrderHeaderByQRCode', body);
  }
  /**
   * Lấy thông tin đơn hàng theo Shop - [POST] /SalesInvoice/GetOrderHeaderByShop
   */
  getOrderHeaderByShop(body?: Models.NTGetOrderHeaderByShopReq): Observable<Models.NTGetOrderHeaderByShopRes> {
    return this.post<Models.NTGetOrderHeaderByShopRes>('/SalesInvoice/GetOrderHeaderByShop', body);
  }
  /**
   * Lấy thông tin đơn hàng theo ID - [POST] /SalesInvoice/GetSalesHeaderByID
   */
  getSalesHeaderByID(body?: Models.NTGetSalesHeaderByIDReq): Observable<Models.NTGetSalesHeaderByIDRes> {
    return this.post<Models.NTGetSalesHeaderByIDRes>('/SalesInvoice/GetSalesHeaderByID', body);
  }
  /**
   * Lấy thông tin đơn hàng theo Shop - [POST] /SalesInvoice/GetSalesHeaderByShop
   */
  getSalesHeaderByShop(body?: Models.NTGetSalesHeaderByShopReq): Observable<Models.NTGetSalesHeaderByShopRes> {
    return this.post<Models.NTGetSalesHeaderByShopRes>('/SalesInvoice/GetSalesHeaderByShop', body);
  }
  /**
   * Lấy báo cáo đơn hàng theo Shop - [POST] /SalesInvoice/GetReportSalesByShop
   */
  getReportSalesByShop(body?: Models.NTGetReportSalesByShopReq): Observable<Models.NTGetReportSalesByShopRes> {
    return this.post<Models.NTGetReportSalesByShopRes>('/SalesInvoice/GetReportSalesByShop', body);
  }
  /**
   * POST SalesInvoice/GetReportSalesSpeed - [POST] /SalesInvoice/GetReportSalesSpeed
   */
  getReportSalesSpeed(body?: Models.NTGetReportSalesSpeedReq): Observable<Models.NTGetReportSalesSpeedRes> {
    return this.post<Models.NTGetReportSalesSpeedRes>('/SalesInvoice/GetReportSalesSpeed', body);
  }
  /**
   * POST SalesInvoice/GetSalesLstByHandingOver - [POST] /SalesInvoice/GetSalesLstByHandingOver
   */
  getSalesLstByHandingOver(body?: Models.NTGetSalesLstByHandingOverReq): Observable<Models.NTGetSalesLstByHandingOverRes> {
    return this.post<Models.NTGetSalesLstByHandingOverRes>('/SalesInvoice/GetSalesLstByHandingOver', body);
  }
  /**
   * Tìm kiếm nhân viên CPC1HN - [POST] /SalesInvoice/SearchEmployeeCPC1HN
   */
  searchEmployeeCPC1HN(body?: Models.NTSearchEmployeeCPC1HNReq): Observable<Models.NTSearchEmployeeCPC1HNRes> {
    return this.post<Models.NTSearchEmployeeCPC1HNRes>('/SalesInvoice/SearchEmployeeCPC1HN', body);
  }
  /**
   * Cập nhật thông tin ghi chú - [POST] /SalesInvoice/UpdateNoteInvoice
   */
  updateNoteInvoice(body?: Models.NTUpdateNoteInvoiceReq): Observable<Models.NTUpdateNoteInvoiceRes> {
    return this.post<Models.NTUpdateNoteInvoiceRes>('/SalesInvoice/UpdateNoteInvoice', body);
  }
  /**
   * Cập nhật thông tin bệnh lý khách hàng - [POST] /SalesInvoice/UpdateNoteInvoice2
   */
  updateNoteInvoice2(body?: Models.NTUpdateNoteInvoiceReq): Observable<Models.NTUpdateNoteInvoiceRes> {
    return this.post<Models.NTUpdateNoteInvoiceRes>('/SalesInvoice/UpdateNoteInvoice2', body);
  }
  /**
   * Cập nhật thông tin VNPay - [POST] /SalesInvoice/UpdateVNPayInvoice
   */
  updateVNPayInvoice(body?: Models.NTUpdateVNPayInvoiceReq): Observable<Models.NTUpdateVNPayInvoiceRes> {
    return this.post<Models.NTUpdateVNPayInvoiceRes>('/SalesInvoice/UpdateVNPayInvoice', body);
  }
  /**
   * Cập nhật thông tin loại hóa đơn - [POST] /SalesInvoice/UpdateTypeInvoice
   */
  updateTypeInvoice(body?: Models.NTUpdateTypeInvoiceReq): Observable<Models.NTUpdateTypeInvoiceRes> {
    return this.post<Models.NTUpdateTypeInvoiceRes>('/SalesInvoice/UpdateTypeInvoice', body);
  }
}
