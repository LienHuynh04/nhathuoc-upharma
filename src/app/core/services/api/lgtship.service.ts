import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for LGTShip Module (14 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class LGTShipApiService extends BaseApiService {
  /**
   * API cập nhật thông tin phí Ship - [POST] /LGTShip/UpdateFeeShip
   */
  updateFeeShip(body?: Models.NTUpdateFeeShipReq): Observable<Models.NTUpdateFeeShipRes> {
    return this.post<Models.NTUpdateFeeShipRes>('/LGTShip/UpdateFeeShip', body);
  }
  /**
   * API cập nhật thông tin phí Ship - [POST] /LGTShip/GetShipPartnerLst
   */
  getShipPartnerLst(body?: Models.LGTGetShipPartnerLstReq): Observable<Models.LGTGetShipPartnerLstRes> {
    return this.post<Models.LGTGetShipPartnerLstRes>('/LGTShip/GetShipPartnerLst', body);
  }
  /**
   * No documentation available. - [POST] /LGTShip/CreateShipPartner
   */
  createShipPartner(body?: Models.LGTCreateShipPartnerReq): Observable<Models.LGTCreateShipPartnerRes> {
    return this.post<Models.LGTCreateShipPartnerRes>('/LGTShip/CreateShipPartner', body);
  }
  /**
   * No documentation available. - [POST] /LGTShip/UpdateShipPartner
   */
  updateShipPartner(body?: Models.LGTUpdateShipPartnerReq): Observable<Models.LGTUpdateShipPartnerRes> {
    return this.post<Models.LGTUpdateShipPartnerRes>('/LGTShip/UpdateShipPartner', body);
  }
  /**
   * No documentation available. - [POST] /LGTShip/DelShipPartner
   */
  delShipPartner(body?: Models.LGTDelShipPartnerReq): Observable<Models.LGTDelShipPartnerRes> {
    return this.post<Models.LGTDelShipPartnerRes>('/LGTShip/DelShipPartner', body);
  }
  /**
   * No documentation available. - [POST] /LGTShip/GetTransferDocLst
   */
  getTransferDocLst(body?: Models.LGTGetTransferDocLstReq): Observable<Models.LGTGetTransferDocLstRes> {
    return this.post<Models.LGTGetTransferDocLstRes>('/LGTShip/GetTransferDocLst', body);
  }
  /**
   * No documentation available. - [POST] /LGTShip/CreateBox
   */
  createBox(body?: Models.LGTCreateBoxReq): Observable<Models.LGTCreateBoxRes> {
    return this.post<Models.LGTCreateBoxRes>('/LGTShip/CreateBox', body);
  }
  /**
   * No documentation available. - [POST] /LGTShip/UpdateBox
   */
  updateBox(body?: Models.LGTUpdateBoxReq): Observable<Models.LGTUpdateBoxRes> {
    return this.post<Models.LGTUpdateBoxRes>('/LGTShip/UpdateBox', body);
  }
  /**
   * No documentation available. - [POST] /LGTShip/DelBox
   */
  delBox(body?: Models.LGTDelBoxReq): Observable<Models.LGTDelBoxRes> {
    return this.post<Models.LGTDelBoxRes>('/LGTShip/DelBox', body);
  }
  /**
   * No documentation available. - [POST] /LGTShip/ComfirmBox
   */
  comfirmBox(body?: Models.LGTComfirmBoxReq): Observable<Models.LGTComfirmBoxRes> {
    return this.post<Models.LGTComfirmBoxRes>('/LGTShip/ComfirmBox', body);
  }
  /**
   * No documentation available. - [POST] /LGTShip/GetBoxByID
   */
  getBoxByID(body?: Models.LGTGetBoxByIDReq): Observable<Models.LGTGetBoxByIDRes> {
    return this.post<Models.LGTGetBoxByIDRes>('/LGTShip/GetBoxByID', body);
  }
  /**
   * No documentation available. - [POST] /LGTShip/GetBoxByTime
   */
  getBoxByTime(body?: Models.LGTGetBoxByTimeReq): Observable<Models.LGTGetBoxByTimeRes> {
    return this.post<Models.LGTGetBoxByTimeRes>('/LGTShip/GetBoxByTime', body);
  }
  /**
   * No documentation available. - [POST] /LGTShip/GetPartnerShopLst
   */
  getPartnerShopLst(body?: Models.LGTGetPartnerShopLstReq): Observable<Models.LGTGetPartnerShopLstRes> {
    return this.post<Models.LGTGetPartnerShopLstRes>('/LGTShip/GetPartnerShopLst', body);
  }
  /**
   * No documentation available. - [POST] /LGTShip/UpdatePartnerShop
   */
  updatePartnerShop(body?: Models.LGTUpdatePartnerShopReq): Observable<Models.LGTUpdatePartnerShopRes> {
    return this.post<Models.LGTUpdatePartnerShopRes>('/LGTShip/UpdatePartnerShop', body);
  }
}
