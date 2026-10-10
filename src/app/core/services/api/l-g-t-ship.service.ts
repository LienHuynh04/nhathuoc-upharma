import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for LGTShip Module (14 endpoints)
 */
@Injectable({
  providedIn: 'root'
})
export class LGTShipApiService extends BaseApiService {

  /**
   * API cập nhật thông tin phí Ship - [POST] /LGTShip/UpdateFeeShip
   */
  updatefeeship(body?: any): Observable<any> {
    return this.post<any>('/LGTShip/UpdateFeeShip', body);
  }

  /**
   * API cập nhật thông tin phí Ship - [POST] /LGTShip/GetShipPartnerLst
   */
  getshippartnerlst(body?: any): Observable<any> {
    return this.post<any>('/LGTShip/GetShipPartnerLst', body);
  }

  /**
   * No documentation available. - [POST] /LGTShip/CreateShipPartner
   */
  createshippartner(body?: any): Observable<any> {
    return this.post<any>('/LGTShip/CreateShipPartner', body);
  }

  /**
   * No documentation available. - [POST] /LGTShip/UpdateShipPartner
   */
  updateshippartner(body?: any): Observable<any> {
    return this.post<any>('/LGTShip/UpdateShipPartner', body);
  }

  /**
   * No documentation available. - [POST] /LGTShip/DelShipPartner
   */
  delshippartner(body?: any): Observable<any> {
    return this.post<any>('/LGTShip/DelShipPartner', body);
  }

  /**
   * No documentation available. - [POST] /LGTShip/GetTransferDocLst
   */
  gettransferdoclst(body?: any): Observable<any> {
    return this.post<any>('/LGTShip/GetTransferDocLst', body);
  }

  /**
   * No documentation available. - [POST] /LGTShip/CreateBox
   */
  createbox(body?: any): Observable<any> {
    return this.post<any>('/LGTShip/CreateBox', body);
  }

  /**
   * No documentation available. - [POST] /LGTShip/UpdateBox
   */
  updatebox(body?: any): Observable<any> {
    return this.post<any>('/LGTShip/UpdateBox', body);
  }

  /**
   * No documentation available. - [POST] /LGTShip/DelBox
   */
  delbox(body?: any): Observable<any> {
    return this.post<any>('/LGTShip/DelBox', body);
  }

  /**
   * No documentation available. - [POST] /LGTShip/ComfirmBox
   */
  comfirmbox(body?: any): Observable<any> {
    return this.post<any>('/LGTShip/ComfirmBox', body);
  }

  /**
   * No documentation available. - [POST] /LGTShip/GetBoxByID
   */
  getboxbyid(body?: any): Observable<any> {
    return this.post<any>('/LGTShip/GetBoxByID', body);
  }

  /**
   * No documentation available. - [POST] /LGTShip/GetBoxByTime
   */
  getboxbytime(body?: any): Observable<any> {
    return this.post<any>('/LGTShip/GetBoxByTime', body);
  }

  /**
   * No documentation available. - [POST] /LGTShip/GetPartnerShopLst
   */
  getpartnershoplst(body?: any): Observable<any> {
    return this.post<any>('/LGTShip/GetPartnerShopLst', body);
  }

  /**
   * No documentation available. - [POST] /LGTShip/UpdatePartnerShop
   */
  updatepartnershop(body?: any): Observable<any> {
    return this.post<any>('/LGTShip/UpdatePartnerShop', body);
  }
}
