import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import * as Models from '../../models/api-models';

/**
 * Service for Warehouse Module (8 endpoints)
 * Auto-generated from updated openapi_swagger.json
 */
@Injectable({
  providedIn: 'root'
})
export class WarehouseApiService extends BaseApiService {
  /**
   * POST Warehouse/GetLevel2Shelf - [POST] /Warehouse/GetLevel2Shelf
   */
  getLevel2Shelf(body?: Models.NTGetLevel2ShelfReq): Observable<Models.NTGetLevel2ShelfRes> {
    return this.post<Models.NTGetLevel2ShelfRes>('/Warehouse/GetLevel2Shelf', body);
  }
  /**
   * POST Warehouse/GetLevel1Shelf - [POST] /Warehouse/GetLevel1Shelf
   */
  getLevel1Shelf(body?: Models.NTGetLevel1ShelfReq): Observable<Models.NTGetLevel1ShelfRes> {
    return this.post<Models.NTGetLevel1ShelfRes>('/Warehouse/GetLevel1Shelf', body);
  }
  /**
   * POST Warehouse/UpdateNoteShelf - [POST] /Warehouse/UpdateNoteShelf
   */
  updateNoteShelf(body?: Models.NTUpdateNoteShelfReq): Observable<Models.NTUpdateNoteShelfRes> {
    return this.post<Models.NTUpdateNoteShelfRes>('/Warehouse/UpdateNoteShelf', body);
  }
  /**
   * POST Warehouse/CreateLevel1Shelf - [POST] /Warehouse/CreateLevel1Shelf
   */
  createLevel1Shelf(body?: Models.NTCreateLevel1ShelfReq): Observable<Models.NTCreateLevel1ShelfRes> {
    return this.post<Models.NTCreateLevel1ShelfRes>('/Warehouse/CreateLevel1Shelf', body);
  }
  /**
   * POST Warehouse/CreateLevel2Shelf - [POST] /Warehouse/CreateLevel2Shelf
   */
  createLevel2Shelf(body?: Models.NTCreateLevel2ShelfReq): Observable<Models.NTCreateLevel2ShelfRes> {
    return this.post<Models.NTCreateLevel2ShelfRes>('/Warehouse/CreateLevel2Shelf', body);
  }
  /**
   * POST Warehouse/GetProductShelf - [POST] /Warehouse/GetProductShelf
   */
  getProductShelf(body?: Models.NTGetProductShelfReq): Observable<Models.NTGetProductShelfRes> {
    return this.post<Models.NTGetProductShelfRes>('/Warehouse/GetProductShelf', body);
  }
  /**
   * POST Warehouse/AddProductShelf - [POST] /Warehouse/AddProductShelf
   */
  addProductShelf(body?: Models.NTAddProductShelfReq): Observable<Models.NTAddProductShelfRes> {
    return this.post<Models.NTAddProductShelfRes>('/Warehouse/AddProductShelf', body);
  }
  /**
   * POST Warehouse/DelProductShelf - [POST] /Warehouse/DelProductShelf
   */
  delProductShelf(body?: Models.NTDelProductShelfReq): Observable<Models.NTDelProductShelfRes> {
    return this.post<Models.NTDelProductShelfRes>('/Warehouse/DelProductShelf', body);
  }
}
