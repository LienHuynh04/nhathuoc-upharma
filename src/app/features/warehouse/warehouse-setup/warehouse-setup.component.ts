import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface WarehouseItem {
  id: string;
  code: string;
  name: string;
  type: string;
  address: string;
  totalShelves: number;
  manager: string;
  status: 'ACTIVE' | 'INACTIVE';
}

@Component({
  selector: 'app-warehouse-setup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './warehouse-setup.component.html',
  styleUrl: './warehouse-setup.component.scss'
})
export class WarehouseSetupComponent {
  warehouses = signal<WarehouseItem[]>([
    {
      id: 'WH01',
      code: 'KHO_LE_01',
      name: 'Kho Quầy Bán Lẻ CH1',
      type: 'Kho Quầy Lẻ',
      address: 'Quầy thuốc Số 1, Tầng 1',
      totalShelves: 12,
      manager: 'Dược sĩ Lan',
      status: 'ACTIVE'
    },
    {
      id: 'WH02',
      code: 'KHO_LANH_01',
      name: 'Kho Bảo Quản Lạnh CH1 (2°C - 8°C)',
      type: 'Kho Lạnh Vacxin/Kháng sinh',
      address: 'Phòng Bảo quản lạnh Tầng 1',
      totalShelves: 4,
      manager: 'Dược sĩ Tuấn',
      status: 'ACTIVE'
    },
    {
      id: 'WH03',
      code: 'KHO_TONG_HN',
      name: 'Kho Tổng Dược Phẩm Hà Nội',
      type: 'Kho Tổng Trung Tâm',
      address: 'Kho Trung tâm ICPC1HN, Cầu Giấy',
      totalShelves: 85,
      manager: 'Ths. DS Hùng',
      status: 'ACTIVE'
    }
  ]);

  shelves = signal([
    { code: 'KE_A1', name: 'Kệ A1 - Kháng sinh nhóm Beta-lactam', rows: 4, cols: 6, zone: 'Khu vực A' },
    { code: 'KE_A2', name: 'Kệ A2 - Giảm đau & Chống viêm', rows: 4, cols: 5, zone: 'Khu vực A' },
    { code: 'KE_B1', name: 'Kệ B1 - Tiêu hóa & Dạ dày', rows: 5, cols: 6, zone: 'Khu vực B' },
    { code: 'KE_C1', name: 'Kệ C1 - Thực phẩm chức năng & Vitamin', rows: 4, cols: 8, zone: 'Khu vực C' },
    { code: 'TU_LANH_01', name: 'Tủ lạnh 01 - Insulin & Thuốc tiêm', rows: 3, cols: 4, zone: 'Khu Lạnh' }
  ]);
}
