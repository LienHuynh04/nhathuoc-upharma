import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PolicyPriceApiService } from '../../../core/services/api/policy-price.service';
import { ExcelExportService } from '../../../core/services/excel-export.service';

export interface PriceRecord {
  id: string;
  productCode: string;
  productName: string;
  groupName: string;
  unit: string;
  costPrice: number;       // Giá vốn
  wholesalePrice: number;  // Giá buôn
  retailPrice: number;     // Giá lẻ
  marginPercent: number;   // % Lợi nhuận
  effectiveDate: string;   // Ngày áp dụng
  status: 'ACTIVE' | 'LOCKED';
}

@Component({
  selector: 'app-price-setup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './price-setup.component.html',
  styleUrl: './price-setup.component.scss'
})
export class PriceSetupComponent implements OnInit {
  private policyPriceApi = inject(PolicyPriceApiService);
  private excelExportService = inject(ExcelExportService);

  selectedShop = 'CH001';
  selectedGroup = 'ALL';
  searchFilter = '';

  priceList = signal<PriceRecord[]>([
    {
      id: 'PR01',
      productCode: 'PANADOL_EXTRA',
      productName: 'Panadol Extra Đỏ (Hộp 15 vỉ x 12 viên)',
      groupName: 'Thuốc Giảm Đau Hạ Sốt',
      unit: 'Hộp',
      costPrice: 195000,
      wholesalePrice: 220000,
      retailPrice: 245000,
      marginPercent: 25.6,
      effectiveDate: '01/10/2026',
      status: 'ACTIVE'
    },
    {
      id: 'PR02',
      productCode: 'AUGMENTIN_1G',
      productName: 'Augmentin 1g Kháng sinh (Hộp 14 viên)',
      groupName: 'Thuốc Kháng Sinh',
      unit: 'Hộp',
      costPrice: 180000,
      wholesalePrice: 200000,
      retailPrice: 215000,
      marginPercent: 19.4,
      effectiveDate: '15/09/2026',
      status: 'ACTIVE'
    },
    {
      id: 'PR03',
      productCode: 'EUGICA_XANH',
      productName: 'Viên ngậm Eugica xanh trị ho',
      groupName: 'Thuốc Hô Hấp',
      unit: 'Vỉ',
      costPrice: 13000,
      wholesalePrice: 15500,
      retailPrice: 18000,
      marginPercent: 38.5,
      effectiveDate: '01/08/2026',
      status: 'ACTIVE'
    },
    {
      id: 'PR04',
      productCode: 'NEXIUM_40',
      productName: 'Nexium Mups 40mg Dạ dày (Hộp 28 viên)',
      groupName: 'Thuốc Tiêu Hóa',
      unit: 'Hộp',
      costPrice: 350000,
      wholesalePrice: 385000,
      retailPrice: 420000,
      marginPercent: 20.0,
      effectiveDate: '01/09/2026',
      status: 'ACTIVE'
    },
    {
      id: 'PR05',
      productCode: 'CELEBREX_200',
      productName: 'Celebrex 200mg Kháng viêm (Hộp 30 viên)',
      groupName: 'Thuốc Cơ Xương Khớp',
      unit: 'Hộp',
      costPrice: 240000,
      wholesalePrice: 265000,
      retailPrice: 285000,
      marginPercent: 18.75,
      effectiveDate: '10/09/2026',
      status: 'ACTIVE'
    }
  ]);

  editingItem: PriceRecord | null = null;

  ngOnInit(): void {
    // Can call this.policyPriceApi.getPriceBaseByTime(...)
  }

  filteredPrices(): PriceRecord[] {
    return this.priceList().filter(item => {
      const matchSearch = !this.searchFilter ||
        item.productName.toLowerCase().includes(this.searchFilter.toLowerCase()) ||
        item.productCode.toLowerCase().includes(this.searchFilter.toLowerCase());
      const matchGroup = this.selectedGroup === 'ALL' || item.groupName === this.selectedGroup;
      return matchSearch && matchGroup;
    });
  }

  startEdit(item: PriceRecord): void {
    this.editingItem = { ...item };
  }

  saveEdit(): void {
    if (!this.editingItem) return;
    this.priceList.update(list =>
      list.map(i => i.id === this.editingItem!.id ? this.editingItem! : i)
    );
    this.editingItem = null;
    alert('Đã cập nhật bảng giá thành công!');
  }

  cancelEdit(): void {
    this.editingItem = null;
  }

  exportExcel(): void {
    const list = this.filteredPrices();
    if (!list || list.length === 0) {
      alert('Không có dữ liệu bảng giá để xuất Excel!');
      return;
    }
    const data = list.map((item, idx) => ({
      'STT': idx + 1,
      'Mã hàng': item.productCode,
      'Tên hàng': item.productName,
      'Nhóm': item.groupName,
      'ĐVT': item.unit,
      'Giá vốn': item.costPrice,
      'Giá buôn': item.wholesalePrice,
      'Giá lẻ': item.retailPrice,
      'Biên LN (%)': `${item.marginPercent}%`,
      'Ngày áp dụng': item.effectiveDate,
      'Trạng thái': item.status === 'ACTIVE' ? 'Áp dụng' : 'Khóa'
    }));
    this.excelExportService.exportJsonToExcel(data, `Bang_gia_${this.selectedShop}`, 'Bảng giá');
  }
}
