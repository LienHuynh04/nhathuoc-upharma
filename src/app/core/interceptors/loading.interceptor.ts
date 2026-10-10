import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

/**
 * Tự động bật spinner khi bắt đầu gọi bất kỳ API nào,
 * và tắt spinner khi nhận được response hoặc xảy ra lỗi.
 * Ngăn chặn người dùng spam gọi API nhiều lần.
 */
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.show();

  return next(req).pipe(
    finalize(() => {
      loadingService.hide();
    })
  );
};
