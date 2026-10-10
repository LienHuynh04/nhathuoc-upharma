import { HttpInterceptorFn, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, throwError, tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  const uPharmaID = authService.getUPharmaID();
  const shopCode = authService.getShopCode();

  let modifiedReq = req;

  // 1. Luôn thêm Authorization Header
  if (token && !req.headers.has('Authorization')) {
    modifiedReq = modifiedReq.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  // 2. QUAN TRỌNG: Backend icpc1hn.work bắt buộc Token và uPharmaID phải nằm trong body payload!
  if (
    !req.url.includes('/User/UserLogin') &&
    ['POST', 'PUT', 'PATCH'].includes(req.method) &&
    req.body &&
    typeof req.body === 'object' &&
    !Array.isArray(req.body)
  ) {
    const updatedBody: any = { ...req.body };
    if (token && updatedBody.Token === undefined) {
      updatedBody.Token = token;
    }
    if (updatedBody.uPharmaID !== undefined) {
      updatedBody.uPharmaID = Number(updatedBody.uPharmaID) || 841;
    } else if (uPharmaID !== null && uPharmaID !== undefined) {
      updatedBody.uPharmaID = Number(uPharmaID) || 841;
    }
    if (shopCode && updatedBody.ShopCode === undefined) {
      updatedBody.ShopCode = shopCode;
    }
    modifiedReq = modifiedReq.clone({ body: updatedBody });
  }

  // 3. Với GET / DELETE: Bổ sung Token & uPharmaID vào query params
  if (['GET', 'DELETE'].includes(req.method) && !req.url.includes('/User/UserLogin')) {
    let params = req.params;
    if (token && !params.has('Token')) {
      params = params.set('Token', token);
    }
    if (uPharmaID !== null && uPharmaID !== undefined && !params.has('uPharmaID')) {
      params = params.set('uPharmaID', String(uPharmaID));
    }
    if (shopCode && !params.has('ShopCode')) {
      params = params.set('ShopCode', shopCode);
    }
    modifiedReq = modifiedReq.clone({ params });
  }

  return next(modifiedReq).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        const body: any = event.body;
        // Bắt lỗi Token không hợp lệ từ payload response của API (RespCode === -1)
        if (
          body &&
          typeof body === 'object' &&
          body.RespCode === -1 &&
          (body.RespText === 'Token không hợp lệ' ||
           String(body.RespText).toLowerCase().includes('token không hợp lệ') ||
           String(body.RespText).toLowerCase().includes('token het han') ||
           String(body.RespText).toLowerCase().includes('token hết hạn'))
        ) {
          authService.logout();
        }
      }
    }),
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        authService.logout();
      }
      return throwError(() => error);
    })
  );
};
