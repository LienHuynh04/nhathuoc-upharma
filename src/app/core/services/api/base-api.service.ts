import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  protected http = inject(HttpClient);
  protected authService = inject(AuthService);
  // Base URL chính xác của hệ thống Nhà thuốc ICPC1HN
  protected baseUrl = 'https://icpc1hn.work/NHATHUOC';

  /**
   * Tự động bổ sung Token, uPharmaID, ShopCode vào body nếu backend yêu cầu
   */
  private prepareBody(body?: any): any {
    const payload = body ? { ...body } : {};
    const token = this.authService.getToken();
    const uPharmaID = this.authService.getUPharmaID();
    const shopCode = this.authService.getShopCode();

    if (token && payload.Token === undefined) {
      payload.Token = token;
    }
    if (payload.uPharmaID !== undefined) {
      payload.uPharmaID = Number(payload.uPharmaID) || 841;
    } else if (uPharmaID !== null && uPharmaID !== undefined) {
      payload.uPharmaID = Number(uPharmaID) || 841;
    }
    if (shopCode && payload.ShopCode === undefined) {
      payload.ShopCode = shopCode;
    }
    return payload;
  }

  protected get<T>(endpoint: string, params?: any): Observable<T> {
    let httpParams = new HttpParams();
    const token = this.authService.getToken();
    const uPharmaID = this.authService.getUPharmaID();
    const shopCode = this.authService.getShopCode();

    const mergedParams: any = {
      ...(token ? { Token: token } : {}),
      ...(uPharmaID ? { uPharmaID: String(uPharmaID) } : {}),
      ...(shopCode ? { ShopCode: shopCode } : {}),
      ...(params || {})
    };

    Object.keys(mergedParams).forEach(key => {
      if (mergedParams[key] !== undefined && mergedParams[key] !== null) {
        httpParams = httpParams.set(key, mergedParams[key].toString());
      }
    });

    return this.http.get<T>(`${this.baseUrl}${endpoint}`, { params: httpParams });
  }

  protected post<T>(endpoint: string, body?: any): Observable<T> {
    const finalBody = endpoint.includes('/User/UserLogin') ? (body || {}) : this.prepareBody(body);
    return this.http.post<T>(`${this.baseUrl}${endpoint}`, finalBody);
  }

  protected put<T>(endpoint: string, body?: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${endpoint}`, this.prepareBody(body));
  }

  protected delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${endpoint}`);
  }
}
