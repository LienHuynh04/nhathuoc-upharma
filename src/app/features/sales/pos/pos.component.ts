import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface CartItem {
  id: string;
  code: string;
  name: string;
  unit: string;
  quantity: number;
  price: number;
  discount: number;
  lotNumber: string;
  expiryDate: string;
}

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.scss'
})
export class PosComponent {
  // Barcode / Name search
  searchQuery = '';
  customerName = 'Khách lẻ';
  customerPhone = '';
  doctorName = '';
  paymentMethod = 'CASH'; // CASH, QR, CARD
  customerCash = 0;

  // Active cart items (Signals)
  cart = signal<CartItem[]>([
    {
      id: 'P001',
      code: 'PANADOL_EXTRA',
      name: 'Panadol Extra Đỏ (Hộp 15 vỉ x 12 viên)',
      unit: 'Hộp',
      quantity: 2,
      price: 245000,
      discount: 0,
      lotNumber: 'L240901',
      expiryDate: '12/2026'
    },
    {
      id: 'P002',
      code: 'AUGMENTIN_1G',
      name: 'Augmentin 1g Kháng sinh (Hộp 14 viên)',
      unit: 'Hộp',
      quantity: 1,
      price: 215000,
      discount: 10000,
      lotNumber: 'A241105',
      expiryDate: '08/2026'
    },
    {
      id: 'P003',
      code: 'EUGICA_XANH',
      name: 'Viên ngậm Eugica xanh trị ho',
      unit: 'Vỉ',
      quantity: 5,
      price: 18000,
      discount: 0,
      lotNumber: 'E240502',
      expiryDate: '04/2027'
    }
  ]);

  // Sample catalog for fast lookup
  sampleProducts = [
    { code: 'PARACETAMOL_500', name: 'Paracetamol 500mg', unit: 'Vỉ', price: 12000, lot: 'L2401', exp: '2027' },
    { code: 'BERBERIN_100', name: 'Berberin Mộc Hoa Trắng', unit: 'Lọ', price: 25000, lot: 'L2402', exp: '2026' },
    { code: 'SMETA_3G', name: 'Smecta 3g điều trị tiêu chảy', unit: 'Gói', price: 4500, lot: 'L2403', exp: '2027' },
    { code: 'CELEBREX_200', name: 'Celebrex 200mg chống viêm', unit: 'Vỉ', price: 95000, lot: 'L2404', exp: '2026' },
    { code: 'NEXIUM_40', name: 'Nexium 40mg dạ dày (Hộp 28 viên)', unit: 'Hộp', price: 420000, lot: 'L2405', exp: '2026' }
  ];

  // Computed totals
  subTotal = computed(() => {
    return this.cart().reduce((sum, item) => sum + (item.quantity * item.price), 0);
  });

  totalDiscount = computed(() => {
    return this.cart().reduce((sum, item) => sum + (item.discount || 0), 0);
  });

  grandTotal = computed(() => {
    return Math.max(0, this.subTotal() - this.totalDiscount());
  });

  changeAmount = computed(() => {
    if (this.customerCash <= 0) return 0;
    return Math.max(0, this.customerCash - this.grandTotal());
  });

  addProductToCart(prod: any): void {
    const existing = this.cart().find(i => i.code === prod.code);
    if (existing) {
      this.updateQuantity(existing.id, 1);
    } else {
      this.cart.update(items => [
        ...items,
        {
          id: 'P_' + Date.now(),
          code: prod.code,
          name: prod.name,
          unit: prod.unit,
          quantity: 1,
          price: prod.price,
          discount: 0,
          lotNumber: prod.lot,
          expiryDate: prod.exp
        }
      ]);
    }
  }

  updateQuantity(id: string, delta: number): void {
    this.cart.update(items =>
      items.map(item => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  }

  removeItem(id: string): void {
    this.cart.update(items => items.filter(i => i.id !== id));
  }

  clearCart(): void {
    if (confirm('Bạn có chắc chắn muốn hủy đơn hàng này?')) {
      this.cart.set([]);
      this.customerCash = 0;
    }
  }

  checkout(): void {
    if (this.cart().length === 0) {
      alert('Giỏ hàng đang trống!');
      return;
    }
    alert(`Thanh toán thành công đơn hàng: ${this.grandTotal().toLocaleString('vi-VN')} đ!\nĐang xuất hóa đơn điện tử & gửi dữ liệu Cổng Dược Quốc Gia...`);
    this.cart.set([]);
    this.customerCash = 0;
  }
}
