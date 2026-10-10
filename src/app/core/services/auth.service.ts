import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

export interface NTShopItem {
  ShopCode: string;
  ShopName: string;
}

export interface NTUserInfo {
  uPharmaID?: number | string;
  Token?: string;
  PhoneNumber?: string;
  Email?: string;
  FullName?: string;
  Sex?: number;
  Address?: string;
  Birthday?: string;
  UTypeTxt?: string;
  UType?: number;
  ShopCode?: string;
  ShopLst?: NTShopItem[];
  GroupLst?: any[];
}

export interface NTUserLoginRes {
  RespCode: number;
  RespText: string;
  Token?: string;
  UserInfo?: NTUserInfo;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  private readonly TOKEN_KEY = 'upharma_token';
  private readonly UPHARMA_ID_KEY = 'upharma_id';
  private readonly SHOP_CODE_KEY = 'upharma_shop_code';
  private readonly USER_INFO_KEY = 'upharma_user_info';
  private readonly BASE_URL = 'https://icpc1hn.work/NHATHUOC';

  // Signals for reactive session management
  readonly token = signal<string | null>(localStorage.getItem(this.TOKEN_KEY));
  readonly uPharmaID = signal<string | number | null>(localStorage.getItem(this.UPHARMA_ID_KEY));
  readonly shopCode = signal<string | null>(this.getInitialShopCode());
  readonly userInfo = signal<NTUserInfo | null>(this.getStoredUserInfo());

  readonly isAuthenticated = computed(() => !!this.token());

  readonly currentUserName = computed(() => {
    const info = this.userInfo();
    return info?.FullName || info?.PhoneNumber || (this.isAuthenticated() ? 'Người dùng' : 'Chưa đăng nhập');
  });

  readonly shopList = computed(() => {
    const info = this.userInfo();
    if (info?.ShopLst && Array.isArray(info.ShopLst) && info.ShopLst.length > 0) {
      return info.ShopLst;
    }
    return [
      { ShopCode: 'SHOP0097', ShopName: 'Nhà thuốc ICPC1HN - SHOP0097' },
      { ShopCode: 'SHOP0025', ShopName: 'Nhà thuốc số 25 - 170 Lê Đình Lý - Đà Nẵng' },
      { ShopCode: 'SHOP01', ShopName: 'Nhà thuốc uPharma - Điểm 1' },
      { ShopCode: 'KHO_TONG', ShopName: 'Kho Tổng Trung Tâm ICPC1HN' }
    ];
  });

  /**
   * Đăng nhập trực tiếp tới hệ thống ICPC1HN qua API POST User/UserLogin
   */
  login(username: string, password: string, returnUrl: string = '/'): Observable<NTUserLoginRes> {
    const payload = {
      UserName: username.trim(),
      Password: password.trim()
    };

    return this.http.post<NTUserLoginRes>(`${this.BASE_URL}/User/UserLogin`, payload).pipe(
      tap((res) => {
        if (res && (res.RespCode === 0 || res.RespCode === 200) && res.Token) {
          const token = res.Token;
          const info = res.UserInfo || {};
          const uId = info.uPharmaID ?? '';
          // ƯU TIÊN TUYỆT ĐỐI: Shop đầu tiên của user
          const firstShop = (info.ShopLst && Array.isArray(info.ShopLst) && info.ShopLst.length > 0)
            ? info.ShopLst[0].ShopCode
            : (info.ShopCode || 'SHOP0097');

          localStorage.setItem(this.TOKEN_KEY, token);
          localStorage.setItem(this.UPHARMA_ID_KEY, String(uId));
          localStorage.setItem(this.SHOP_CODE_KEY, firstShop);
          localStorage.setItem(this.USER_INFO_KEY, JSON.stringify(info));

          this.token.set(token);
          this.uPharmaID.set(uId);
          this.shopCode.set(firstShop);
          this.userInfo.set(info);

          this.router.navigateByUrl(returnUrl || '/');
        }
      })
    );
  }

  setShopCode(code: string): void {
    this.shopCode.set(code);
    localStorage.setItem(this.SHOP_CODE_KEY, code);
  }

  logout(): void {
    localStorage.clear();

    this.token.set(null);
    this.uPharmaID.set(null);
    this.shopCode.set(null);
    this.userInfo.set(null);

    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return this.token();
  }

  getUPharmaID(): number {
    const val = this.uPharmaID();
    const num = Number(val);
    return !isNaN(num) && num > 0 ? num : 841;
  }

  /**
   * Lấy mã shop hiện tại. Nếu chưa chọn hoặc không hợp lệ,
   * LUÔN trả về shop ĐẦU TIÊN của user.
   */
  getShopCode(): string {
    const list = this.shopList();
    const current = this.shopCode();

    if (current && list.some(s => s.ShopCode === current)) {
      return current;
    }
    if (list.length > 0) {
      return list[0].ShopCode;
    }
    return current || 'SHOP0097';
  }

  /**
   * Lấy mã shop đầu tiên của user
   */
  getFirstShopCode(): string {
    const list = this.shopList();
    return list.length > 0 ? list[0].ShopCode : 'SHOP0097';
  }

  private getInitialShopCode(): string {
    const info = this.getStoredUserInfo();
    if (info?.ShopLst && Array.isArray(info.ShopLst) && info.ShopLst.length > 0) {
      const stored = localStorage.getItem(this.SHOP_CODE_KEY);
      if (stored && info.ShopLst.some(s => s.ShopCode === stored)) {
        return stored;
      }
      return info.ShopLst[0].ShopCode;
    }
    if (info?.ShopCode) {
      return info.ShopCode;
    }
    return localStorage.getItem(this.SHOP_CODE_KEY) || 'SHOP0097';
  }

  private getStoredUserInfo(): NTUserInfo | null {
    const raw = localStorage.getItem(this.USER_INFO_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
}
