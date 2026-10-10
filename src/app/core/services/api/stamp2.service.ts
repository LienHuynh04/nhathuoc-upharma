import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for Stamp2 Module (4 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class Stamp2ApiService extends BaseApiService {
  /**
   * POST Stamp2/GetImportSysLineDesLst - [POST] /Stamp2/GetImportSysLineDesLst
   */
  getImportSysLineDesLst(body?: Models.NTGetImportSysLineDesLstReq): Observable<Models.NTGetImportSysLineDesLstRes> {
    return this.post<Models.NTGetImportSysLineDesLstRes>('/Stamp2/GetImportSysLineDesLst', body);
  }
  /**
   * POST Stamp2/GetLotCodeIndexCLst - [POST] /Stamp2/GetLotCodeIndexCLst
   */
  getLotCodeIndexCLst(body?: Models.NTGetLotCodeIndexCLstReq): Observable<Models.NTGetLotCodeIndexCLstRes> {
    return this.post<Models.NTGetLotCodeIndexCLstRes>('/Stamp2/GetLotCodeIndexCLst', body);
  }
  /**
   * POST Stamp2/ConnectLotCodeIndexC - [POST] /Stamp2/ConnectLotCodeIndexC
   */
  connectLotCodeIndexC(body?: Models.NTConnectLotCodeIndexCReq): Observable<Models.NTConnectLotCodeIndexCRes> {
    return this.post<Models.NTConnectLotCodeIndexCRes>('/Stamp2/ConnectLotCodeIndexC', body);
  }
  /**
   * POST Stamp2/DelLotCodeIndexC - [POST] /Stamp2/DelLotCodeIndexC
   */
  delLotCodeIndexC(body?: Models.NTDelLotCodeIndexCReq): Observable<Models.NTDelLotCodeIndexCRes> {
    return this.post<Models.NTDelLotCodeIndexCRes>('/Stamp2/DelLotCodeIndexC', body);
  }
}
