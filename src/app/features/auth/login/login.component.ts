import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private authService = inject(AuthService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  username = '0706147803';
  password = '';
  errorMessage = signal<string | null>(null);
  isLoading = signal<boolean>(false);
  private returnUrl: string = '/';

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl(this.returnUrl);
    }
  }

  onSubmit(): void {
    if (this.isLoading()) return;

    if (!this.username.trim()) {
      this.errorMessage.set('Vui lòng nhập tài khoản.');
      return;
    }
    if (!this.password.trim()) {
      this.errorMessage.set('Mật khẩu không hợp lệ');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.authService.login(this.username, this.password, this.returnUrl).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        if (res.RespCode !== 0 && res.RespCode !== 200) {
          this.errorMessage.set(res.RespText || 'Đăng nhập không thành công.');
        }
      },
      error: (err) => {
        this.isLoading.set(false);
        const msg = err?.error?.RespText || err?.message || 'Không thể kết nối đến máy chủ icpc1hn.work';
        this.errorMessage.set(msg);
      }
    });
  }

  onExit(): void {
    if (confirm('Bạn có chắc chắn muốn thoát khỏi ứng dụng?')) {
      window.close();
    }
  }

  changePassword(): void {
    alert('Chức năng Đổi mật khẩu: Vui lòng liên hệ Quản trị viên IT uPharma.');
  }
}
