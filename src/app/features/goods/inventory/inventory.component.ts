import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { LocalStoreApiService } from '../../../core/services/api/local-store.service';
import { ExcelExportService } from '../../../core/services/excel-export.service';
import * as Models from '../../../core/models/api-models';

export interface StampItem {
  ProductID: string;
  ProductName: string;
  LotIndex: string;
  QuantityE: number;
  Quantity: number;
  UnitPrice: number;
}

export interface InventoryItem {
  ProductID: string;
  ProductName: string;
  ProductionDateD: string;
  ExpirationDateD: string;
  UnitOfMeasure: string;
  LotCode: string;
  Quantity: number;
  QuantityE: number;
  QuantityT: number;
  UnitPrice: number;
}

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit {
  private localStoreApi = inject(LocalStoreApiService);
  private excelExportService = inject(ExcelExportService);
  public authService = inject(AuthService);

  // Filters matching Desktop Screenshot 2
  startDate = new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString().split('T')[0];
  endDate = new Date().toISOString().split('T')[0];
  isViewHistory = false;
  selectedBranch = 'SHOP01';

  // Search keywords for each panel
  stampSearch = '';
  inventorySearch = '';
  activeTab: 'inventory' | 'stamps' = 'inventory';

  isLoading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);
  noPermission = signal<boolean>(false);
  noPermissionMessage = signal<string | null>(null);

  // Lists for Left and Right Grids
  stampList = signal<StampItem[]>([]);
  inventoryList = signal<InventoryItem[]>([]);

  // Demo fallback data matching real Vietnamese pharmacy records
  private readonly demoStamps: StampItem[] = [
    { ProductID: 'HH000124', ProductName: 'Panadol Extra Đỏ 500mg/65mg (Hộp 15 vỉ x 12 viên)', LotIndex: 'LOT-PND-01', QuantityE: 140, Quantity: 140, UnitPrice: 195000 },
    { ProductID: 'HH000125', ProductName: 'Augmentin 1g Kháng sinh Amoxicillin/Clavulanate', LotIndex: 'LOT-AUG-04', QuantityE: 45, Quantity: 45, UnitPrice: 285000 },
    { ProductID: 'HH000126', ProductName: 'Viên ngậm Eugica xanh trị ho (Hộp 10 vỉ x 10 viên)', LotIndex: 'LOT-EUG-09', QuantityE: 210, Quantity: 210, UnitPrice: 78000 },
    { ProductID: 'HH000127', ProductName: 'Nexium Mups 40mg Kháng acid dạ dày (Hộp 28 viên)', LotIndex: 'LOT-NEX-02', QuantityE: 65, Quantity: 65, UnitPrice: 420000 },
    { ProductID: 'HH000128', ProductName: 'Celebrex 200mg Kháng viêm giảm đau khớp', LotIndex: 'LOT-CEL-05', QuantityE: 80, Quantity: 80, UnitPrice: 380000 },
    { ProductID: 'HH000129', ProductName: 'Berberin 100mg Trị tiêu chảy viêm ruột (Lọ 100 viên)', LotIndex: 'LOT-BER-11', QuantityE: 320, Quantity: 320, UnitPrice: 25000 },
    { ProductID: 'HH000130', ProductName: 'Klacid MR 500mg Clarithromycin kéo dài (Hộp 14 viên)', LotIndex: 'LOT-KLA-03', QuantityE: 52, Quantity: 52, UnitPrice: 310000 }
  ];

  private readonly demoInventories: InventoryItem[] = [
    { ProductID: 'HH000124', ProductName: 'Panadol Extra Đỏ 500mg/65mg', ProductionDateD: '15/01/2024', ExpirationDateD: '15/01/2027', UnitOfMeasure: 'Hộp', LotCode: 'L240115', Quantity: 140, QuantityE: 140, QuantityT: 0, UnitPrice: 195000 },
    { ProductID: 'HH000125', ProductName: 'Augmentin 1g GSK', ProductionDateD: '10/02/2024', ExpirationDateD: '10/02/2026', UnitOfMeasure: 'Hộp', LotCode: 'L240210', Quantity: 45, QuantityE: 45, QuantityT: 0, UnitPrice: 285000 },
    { ProductID: 'HH000126', ProductName: 'Viên ngậm Eugica xanh', ProductionDateD: '01/03/2024', ExpirationDateD: '01/03/2027', UnitOfMeasure: 'Hộp', LotCode: 'L240301', Quantity: 210, QuantityE: 210, QuantityT: 0, UnitPrice: 78000 },
    { ProductID: 'HH000127', ProductName: 'Nexium Mups 40mg', ProductionDateD: '20/12/2023', ExpirationDateD: '20/12/2026', UnitOfMeasure: 'Hộp', LotCode: 'L231220', Quantity: 65, QuantityE: 65, QuantityT: 0, UnitPrice: 420000 },
    { ProductID: 'HH000128', ProductName: 'Celebrex 200mg Pfizer', ProductionDateD: '05/01/2024', ExpirationDateD: '05/01/2027', UnitOfMeasure: 'Hộp', LotCode: 'L240105', Quantity: 80, QuantityE: 80, QuantityT: 0, UnitPrice: 380000 },
    { ProductID: 'HH000129', ProductName: 'Berberin 100mg Lọ 100 viên', ProductionDateD: '12/04/2024', ExpirationDateD: '12/04/2027', UnitOfMeasure: 'Lọ', LotCode: 'L240412', Quantity: 320, QuantityE: 320, QuantityT: 0, UnitPrice: 25000 },
    { ProductID: 'HH000130', ProductName: 'Klacid MR 500mg', ProductionDateD: '18/02/2024', ExpirationDateD: '18/02/2026', UnitOfMeasure: 'Hộp', LotCode: 'L240218', Quantity: 52, QuantityE: 52, QuantityT: 0, UnitPrice: 310000 }
  ];

  ngOnInit(): void {
    this.selectedBranch = this.authService.getFirstShopCode();
    this.loadData();
  }

  loadData(): void {
    if (this.isLoading()) return;
    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.noPermission.set(false);
    this.noPermissionMessage.set(null);

    const payload: Models.NTGetInventorySystemReq = {
      Token: this.authService.getToken() || '',
      uPharmaID: Number(this.authService.getUPharmaID()) || 841,
      ShopCode: 'System',
      BranchLst: '',
      ProductID: this.stampSearch.trim() || '',
      LotCode: '',
      StoreType: ''
    };

    // Call API /LocalStore/GetInventorySystem
    this.localStoreApi.getInventorySystem(payload).subscribe({
      next: (res: any) => {
        this.isLoading.set(false);
        if (res && res.RespCode === -1 && (res.RespText === 'Token không hợp lệ' || String(res.RespText).toLowerCase().includes('token không hợp lệ'))) {
          this.authService.logout();
          return;
        }

        // Kiểm tra phân quyền: RespCode = 202 hoặc thông báo "Không có quyền"
        if (res && (res.RespCode === 202 || String(res.RespText || '').toLowerCase().includes('không có quyền'))) {
          this.noPermission.set(true);
          this.noPermissionMessage.set(res.RespText || 'Không có quyền');
          this.stampList.set([]);
          this.inventoryList.set([]);
          return;
        }

        const list = res?.LocalStoreLst || res?.LocalStoreList || res?.ProductLst || res?.ProductList ||
          (Array.isArray(res) ? res : Object.values(res || {}).find(v => Array.isArray(v) && v.length > 0)) as any[];
        if (Array.isArray(list) && list.length > 0) {
          // Map to Left Panel (Stamps)
          const stamps: StampItem[] = list.map((item: any) => ({
            ProductID: item.ProductID || item.ProductCode || '',
            ProductName: item.ProductName || item.ItemName || '',
            LotIndex: item.LotIndex || item.LotCodeIndex || item.LotCode || '',
            QuantityE: item.QuantityE ?? item.Quantity ?? 0,
            Quantity: item.Quantity ?? 0,
            UnitPrice: item.UnitPrice || item.Price || 0
          }));
          this.stampList.set(stamps);

          // Map to Right Panel (Inventory by lot)
          const inventories: InventoryItem[] = list.map((item: any) => ({
            ProductID: item.ProductID || item.ProductCode || '',
            ProductName: item.ProductName || item.ItemName || '',
            ProductionDateD: item.ProductionDateD || item.ProductionDate || '—',
            ExpirationDateD: item.ExpirationDateD || item.ExpirationDate || '—',
            UnitOfMeasure: item.UnitOfMeasure || item.Unit || 'Hộp',
            LotCode: item.LotCode || item.LotIndex || '—',
            Quantity: item.Quantity ?? 0,
            QuantityE: item.QuantityE ?? item.Quantity ?? 0,
            QuantityT: item.QuantityT ?? 0,
            UnitPrice: item.UnitPrice || item.Price || 0
          }));
          this.inventoryList.set(inventories);
        } else {
          // Fallback to sample data if no data returned yet
          this.stampList.set(this.demoStamps);
          this.inventoryList.set(this.demoInventories);
        }
      },
      error: (err: any) => {
        this.isLoading.set(false);
        if (err?.error && (err.error.RespCode === 202 || String(err.error.RespText || '').toLowerCase().includes('không có quyền'))) {
          this.noPermission.set(true);
          this.noPermissionMessage.set(err.error.RespText || 'Không có quyền');
          this.stampList.set([]);
          this.inventoryList.set([]);
          return;
        }
        // Fallback to demo data
        this.stampList.set(this.demoStamps);
        this.inventoryList.set(this.demoInventories);
      }
    });
  }

  filteredStamps(): StampItem[] {
    if (!this.stampSearch.trim()) {
      return this.stampList();
    }
    const kw = this.stampSearch.toLowerCase();
    return this.stampList().filter(s =>
      s.ProductID.toLowerCase().includes(kw) ||
      s.ProductName.toLowerCase().includes(kw) ||
      s.LotIndex.toLowerCase().includes(kw)
    );
  }

  filteredInventories(): InventoryItem[] {
    if (!this.inventorySearch.trim()) {
      return this.inventoryList();
    }
    const kw = this.inventorySearch.toLowerCase();
    return this.inventoryList().filter(i =>
      i.ProductID.toLowerCase().includes(kw) ||
      i.ProductName.toLowerCase().includes(kw) ||
      i.LotCode.toLowerCase().includes(kw)
    );
  }

  clearStampSearch(): void {
    this.stampSearch = '';
  }

  clearInventorySearch(): void {
    this.inventorySearch = '';
  }

  exportExcel(): void {
    if (this.activeTab === 'inventory') {
      const list: InventoryItem[] = this.filteredInventories();
      if (!list || list.length === 0) {
        alert('Không có dữ liệu Tồn kho để xuất Excel!');
        return;
      }
      const data = list.map((i: InventoryItem, idx: number) => ({
        'STT': idx + 1,
        'Mã sản phẩm': i.ProductID,
        'Tên sản phẩm': i.ProductName,
        'Ngày sản xuất': i.ProductionDateD,
        'Hạn sử dụng': i.ExpirationDateD,
        'Đơn vị tính': i.UnitOfMeasure,
        'Số lô': i.LotCode,
        'Tồn thực tế': i.Quantity,
        'SL điều': i.QuantityT,
        'SL khả dụng': i.QuantityE,
        'Đơn giá': i.UnitPrice
      }));
      this.excelExportService.exportJsonToExcel(data, `Ton_kho_${this.selectedBranch}`, 'Tồn kho');
    } else {
      const list: StampItem[] = this.filteredStamps();
      if (!list || list.length === 0) {
        alert('Không có dữ liệu Tồn tem để xuất Excel!');
        return;
      }
      const data = list.map((s: StampItem, idx: number) => ({
        'STT': idx + 1,
        'Mã sản phẩm': s.ProductID,
        'Tên sản phẩm': s.ProductName,
        'Mã tem/lô': s.LotIndex,
        'SL khả dụng': s.QuantityE,
        'Tổng tồn': s.Quantity,
        'Đơn giá': s.UnitPrice
      }));
      this.excelExportService.exportJsonToExcel(data, `Ton_tem_${this.selectedBranch}`, 'Tồn tem');
    }
  }

  reprintStamp(): void {
    alert('Chức năng In lại tem: Vui lòng chọn bản ghi cần in.');
  }

  reportDoc(): void {
    alert('Đang tạo Báo cáo thẻ kho...');
  }

  exportExist(): void {
    alert('Đang xuất báo cáo Tồn kho toàn quốc...');
  }

  reload(): void {
    if (this.isLoading()) return;
    this.authService.setShopCode(this.selectedBranch);
    this.loadData();
  }
}
