import { inject } from '@angular/core';
import { CanActivateFn, CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Route guard chặn mọi trang nếu người dùng chưa đăng nhập
 */
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  // Chưa đăng nhập -> Chặn truy cập và chuyển hướng về /login
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url }
  });
};

export const authChildGuard: CanActivateChildFn = (childRoute, state) => {
  return authGuard(childRoute, state);
};
