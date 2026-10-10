import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  stats = [
    { title: 'Doanh thu hôm nay', value: '45,820,000 đ', icon: 'payments', trend: '+14.5%', trendType: 'up' },
    { title: 'Số hóa đơn bán', value: '186 đơn', icon: 'receipt', trend: '+8 đơn', trendType: 'up' },
    { title: 'Đơn Online chờ duyệt', value: '12 đơn', icon: 'shopping_cart_checkout', trend: 'Cần xử lý', trendType: 'warn' },
    { title: 'Thuốc cận hạn (< 90 ngày)', value: '24 sản phẩm', icon: 'alarm', trend: 'Cần lưu ý', trendType: 'danger' }
  ];

  recentInvoices = [
    { id: 'HD12480', time: '10:15', customer: 'Khách lẻ', total: 478000, status: 'Đã thanh toán', method: 'Tiền mặt' },
    { id: 'HD12479', time: '10:02', customer: 'Nguyễn Văn Minh (0912***)', total: 1250000, status: 'Đã thanh toán', method: 'Chuyển khoản QR' },
    { id: 'HD12478', time: '09:45', customer: 'Trần Thị Thu (0988***)', total: 310000, status: 'Đã thanh toán', method: 'Tiền mặt' },
    { id: 'HD12477', time: '09:30', customer: 'Đơn Online #ON982', total: 680000, status: 'Đang giao', method: 'COD' }
  ];

  expiringMedicines = [
    { name: 'Kháng sinh Zithromax 250mg', lot: 'L231001', exp: '15/11/2026', stock: '45 Hộp', daysLeft: 35 },
    { name: 'Siro Ho Astex 90ml', lot: 'L231105', exp: '28/11/2026', stock: '20 Lọ', daysLeft: 48 },
    { name: 'Nhỏ mắt Tobrex 5ml', lot: 'L231201', exp: '10/12/2026', stock: '60 Lọ', daysLeft: 60 }
  ];
}
