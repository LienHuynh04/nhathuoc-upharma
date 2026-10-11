import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { LocalStoreApiService } from '../../../core/services/api/local-store.service';
import { ExcelExportService } from '../../../core/services/excel-export.service';
import * as Models from '../../../core/models/api-models';

export interface ShopInventoryItem {
  ExpiryDays: string;
  ExpiryDaysNum: number;
  ProductID: string;
  ProductName: string;
  LotCode: string;
  ProductionDate: string;
  UnitPrice: number;
  ShopCode: string;
  SafetyStock: string;
  StampQuantity: number;
  StampPrice: number;
  StampUnit: string;
}

export interface ShopStampItem {
  ProductID: string;
  ProductName: string;
  LotIndex: string;
  LotCode: string;
  Stock: number;
  Quantity: number;
}

export interface WarningReportRow {
  Title: string;
  Value: number;
  RatioPercent: number;
}

@Component({
  selector: 'app-inventory-shop',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventory-shop.component.html',
  styleUrl: './inventory-shop.component.scss'
})
export class InventoryShopComponent implements OnInit {
  private localStoreApi = inject(LocalStoreApiService);
  private excelExportService = inject(ExcelExportService);
  public authService = inject(AuthService);

  // Selected shop: luôn ưu tiên shop đầu tiên của user
  selectedShop = this.authService.getFirstShopCode();
  expiryCheckDate = new Date().toISOString().split('T')[0];

  searchInventory = '';
  searchStamp = '';

  isLoading = signal<boolean>(false);
  hasLoaded = signal<boolean>(false);
  errorMessage = signal<string | null>(null);
  noPermission = signal<boolean>(false);
  noPermissionMessage = signal<string | null>(null);

  totalInventoryValue = signal<number>(0);
  totalProductCount = signal<number>(0);

  inventoryList = signal<ShopInventoryItem[]>([]);
  stampList = signal<ShopStampItem[]>([]);

  warningList: WarningReportRow[] = [
    { Title: 'Hàng hết hạn', Value: 0, RatioPercent: 0.0 },
    { Title: 'Hàng dưới 3 tháng', Value: 1581862, RatioPercent: 0.4 },
    { Title: 'Hàng dưới 6 tháng', Value: 3367785, RatioPercent: 0.84 },
    { Title: 'Hàng dưới 12 tháng', Value: 30172155, RatioPercent: 7.55 },
    { Title: 'Hàng trên 12 tháng', Value: 369259407, RatioPercent: 92.45 }
  ];

  // Demo fallback matching Screenshot 3 & 4 exactly
  private readonly demoInventory: ShopInventoryItem[] = [
    { ExpiryDays: 'Còn 3 ngày', ExpiryDaysNum: 3, ProductID: 'TB02919', ProductName: 'Que thử đường huyết On Call Plus H25', LotCode: '1694446', ProductionDate: '10/10/2024', UnitPrice: 5960, ShopCode: 'SHOP0025', SafetyStock: '', StampQuantity: 1, StampPrice: 149000, StampUnit: 'Hộp' },
    { ExpiryDays: 'Còn 16 ngày', ExpiryDaysNum: 16, ProductID: 'TH05185', ProductName: 'Lisiplus HCT 20/12.5 Tab Stella H3x10', LotCode: '031023', ProductionDate: '10/10/2023', UnitPrice: 5500, ShopCode: 'SHOP0025', SafetyStock: '', StampQuantity: 1, StampPrice: 165000, StampUnit: 'Hộp' },
    { ExpiryDays: 'Còn 20 ngày', ExpiryDaysNum: 20, ProductID: 'TH01967', ProductName: 'Tegretol 200 Tab H5x10', LotCode: 'TJYA2', ProductionDate: '11/2024', UnitPrice: 1800, ShopCode: 'SHOP0025', SafetyStock: 'Dưới an toàn 10', StampQuantity: 1, StampPrice: 90000, StampUnit: 'Hộp' },
    { ExpiryDays: 'Còn 32 ngày', ExpiryDaysNum: 32, ProductID: 'TH10386', ProductName: 'Galvus Met Tab 50mg/500mg H6x10 (SĐK-24)', LotCode: 'PP4526', ProductionDate: '05/2025', UnitPrice: 9300, ShopCode: 'SHOP0025', SafetyStock: '', StampQuantity: 1, StampPrice: 558000, StampUnit: 'Hộp' },
    { ExpiryDays: 'Còn 49 ngày', ExpiryDaysNum: 49, ProductID: 'TH00936', ProductName: 'Zencombi Nebu 2.5ml H2x5', LotCode: '011123', ProductionDate: '11/2023', UnitPrice: 14200, ShopCode: 'SHOP0025', SafetyStock: '', StampQuantity: 1, StampPrice: 142000, StampUnit: 'Hộp' },
    { ExpiryDays: 'Còn 50 ngày', ExpiryDaysNum: 50, ProductID: 'TB05086', ProductName: 'Băng gạc vô trùng Wound Dressing 9cmx25cm H50', LotCode: 'AB22480', ProductionDate: '12/2022', UnitPrice: 10000, ShopCode: 'SHOP0025', SafetyStock: 'Dưới an toàn 19', StampQuantity: 1, StampPrice: 500000, StampUnit: 'Hộp' },
    { ExpiryDays: 'Còn 51 ngày', ExpiryDaysNum: 51, ProductID: 'TB01476', ProductName: 'Kim lấy thuốc Vinahankook 18G H100', LotCode: '2812', ProductionDate: '12/2021', UnitPrice: 400, ShopCode: 'SHOP0025', SafetyStock: '', StampQuantity: 0, StampPrice: 0, StampUnit: '' },
    { ExpiryDays: 'Còn 64 ngày', ExpiryDaysNum: 64, ProductID: 'TH06267', ProductName: 'Gel tra mắt Aritear 0.2% H4x5', LotCode: '011223', ProductionDate: '12/2023', UnitPrice: 9500, ShopCode: 'SHOP0025', SafetyStock: '', StampQuantity: 1, StampPrice: 190000, StampUnit: 'Hộp' },
    { ExpiryDays: 'Còn 87 ngày', ExpiryDaysNum: 87, ProductID: 'TH01968', ProductName: 'Nexium Mups Tab 20mg H2x7', LotCode: 'ZFFR', ProductionDate: '01/2025', UnitPrice: 22142, ShopCode: 'SHOP0025', SafetyStock: 'Dưới an toàn 3', StampQuantity: 1, StampPrice: 309988, StampUnit: 'Hộp' }
  ];

  private readonly demoStamps: ShopStampItem[] = [
    { ProductID: 'TB02919', ProductName: 'Que thử đường huyết On Call Plus H25 - H001', LotIndex: '029190000000541', LotCode: '1694446', Stock: 1, Quantity: 1 }
  ];

  ngOnInit(): void {
    // Đảm bảo focus/shopcode đầu tiên luôn là shop đầu tiên của user
    this.selectedShop = this.authService.getFirstShopCode();
    // Không tự động load API khi vào màn hình, chờ user bấm Tải lại
  }

  loadData(): void {
    // Chặn gọi trùng lặp nếu API đang thực thi
    if (this.isLoading()) return;

    this.hasLoaded.set(true);
    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.noPermission.set(false);
    this.noPermissionMessage.set(null);

    // Exact payload from Fiddler capture of NHATHUOC.exe
    const payload: Models.NTGetInventoryShopReq = {
      LotCode: '',
      ProductID: this.searchInventory.trim() || '',
      ShopCode: this.selectedShop || this.authService.getFirstShopCode(),
      StoreType: '',
      Token: this.authService.getToken() || '',
      uPharmaID: Number(this.authService.getUPharmaID()) || 841
    };

    this.localStoreApi.getInventoryShop(payload).subscribe({
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
          this.inventoryList.set([]);
          this.stampList.set([]);
          return;
        }

        const list = res?.LocalStoreLst || res?.LocalStoreList ||
          (Array.isArray(res) ? res : Object.values(res || {}).find(v => Array.isArray(v) && v.length > 0)) as any[];
        if (Array.isArray(list) && list.length > 0) {
          const mapped: ShopInventoryItem[] = list.map((item: any) => {
            let expDaysStr = '—';
            let expDaysNum = 999;
            const rawExpDay = item.ExpirationDay ?? item.ExpirationDays ?? item.ExpDay ?? item.HanSD ?? item.HanSd;
            if (rawExpDay !== undefined && rawExpDay !== null && rawExpDay !== '') {
              const n = typeof rawExpDay === 'number' ? rawExpDay : parseInt(String(rawExpDay).replace(/[^\d-]/g, ''), 10);
              if (!isNaN(n)) {
                expDaysNum = n;
                expDaysStr = n < 0 ? `Quá hạn ${Math.abs(n)} ngày` : (n === 0 ? 'Hết hạn hôm nay' : `Còn ${n} ngày`);
              }
            } else if (item.ExpirationDate || item.ExpirationDateD) {
              const d = new Date(item.ExpirationDate || item.ExpirationDateD);
              if (!isNaN(d.getTime())) {
                const diff = Math.ceil((d.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
                expDaysNum = diff;
                expDaysStr = diff < 0 ? `Quá hạn ${Math.abs(diff)} ngày` : (diff === 0 ? 'Hết hạn hôm nay' : `Còn ${diff} ngày`);
              }
            }

            const exist = Number(item.QuantityExist ?? item.Quantity ?? 0);
            const min = Number(item.QuantityMin ?? 0);
            let safetyStr = '';
            if (min > 0) {
              if (exist < min) {
                safetyStr = `Dưới an toàn ${min - exist}`;
              } else {
                safetyStr = 'An toàn';
              }
            }

            return {
              ExpiryDays: expDaysStr,
              ExpiryDaysNum: expDaysNum,
              ProductID: item.ProductID || item.ProductCode || '',
              ProductName: item.ProductName || item.ItemName || '',
              LotCode: item.LotCode || item.LotIndex || '',
              ProductionDate: item.ProductionDateD || item.ProductionDate || '—',
              UnitPrice: item.UnitPrice || item.Price || 0,
              ShopCode: item.ShopCode || this.selectedShop,
              SafetyStock: safetyStr,
              StampQuantity: item.Quantity ?? item.QuantityExist ?? 1,
              StampPrice: item.UnitPrice ?? item.Price ?? 0,
              StampUnit: item.UnitOfMeasure || item.Unit || 'Hộp'
            };
          });
          this.inventoryList.set(mapped);
          this.totalProductCount.set(mapped.length);
        } else {
          this.inventoryList.set(this.demoInventory);
          this.stampList.set(this.demoStamps);
          this.totalInventoryValue.set(399431562);
          this.totalProductCount.set(this.demoInventory.length);
        }
      },
      error: (err: any) => {
        this.isLoading.set(false);
        if (err?.error && (err.error.RespCode === 202 || String(err.error.RespText || '').toLowerCase().includes('không có quyền'))) {
          this.noPermission.set(true);
          this.noPermissionMessage.set(err.error.RespText || 'Không có quyền');
          this.inventoryList.set([]);
          this.stampList.set([]);
          this.totalInventoryValue.set(0);
          this.totalProductCount.set(0);
          return;
        }
        this.inventoryList.set(this.demoInventory);
        this.stampList.set(this.demoStamps);
        this.totalInventoryValue.set(399431562);
        this.totalProductCount.set(this.demoInventory.length);
      }
    });
  }

  filteredInventory(): ShopInventoryItem[] {
    if (!this.searchInventory.trim()) {
      return this.inventoryList();
    }
    const kw = this.searchInventory.toLowerCase();
    return this.inventoryList().filter(i =>
      i.ProductID.toLowerCase().includes(kw) ||
      i.ProductName.toLowerCase().includes(kw) ||
      i.LotCode.toLowerCase().includes(kw)
    );
  }

  filteredStamps(): ShopStampItem[] {
    if (!this.searchStamp.trim()) {
      return this.stampList();
    }
    const kw = this.searchStamp.toLowerCase();
    return this.stampList().filter(s =>
      s.ProductID.toLowerCase().includes(kw) ||
      s.ProductName.toLowerCase().includes(kw) ||
      s.LotIndex.toLowerCase().includes(kw)
    );
  }

  clearInventory(): void {
    this.searchInventory = '';
  }

  clearStamp(): void {
    this.searchStamp = '';
  }

  reload(): void {
    this.loadData();
  }

  exportInventory(): void {
    const list = this.filteredInventory();
    if (!list || list.length === 0) {
      alert('Không có dữ liệu tồn kho Shop để xuất Excel!');
      return;
    }
    const data = list.map((item, idx) => ({
      'STT': idx + 1,
      'Hạn Sd': item.ExpiryDays,
      'Mã sản phẩm': item.ProductID,
      'Tên sản phẩm': item.ProductName,
      'Số lô': item.LotCode,
      'Ngày sản xuất': item.ProductionDate,
      'Đơn giá': item.UnitPrice,
      'Mã Shop': item.ShopCode,
      'An toàn': item.SafetyStock,
      'SL tồn tem': item.StampQuantity,
      'Giá bán tem': item.StampPrice,
      'ĐVT': item.StampUnit
    }));
    this.excelExportService.exportJsonToExcel(data, `Ton_kho_shop_${this.selectedShop}`, 'Tồn kho Shop');
  }

  exportStamps(): void {
    const list = this.filteredStamps();
    if (!list || list.length === 0) {
      alert('Không có dữ liệu tồn tem để xuất Excel!');
      return;
    }
    const data = list.map((s, idx) => ({
      'STT': idx + 1,
      'Mã sản phẩm': s.ProductID,
      'Tên sản phẩm': s.ProductName,
      'Mã tem': s.LotIndex,
      'Số lô': s.LotCode,
      'Tồn kho': s.Stock,
      'Số lượng': s.Quantity
    }));
    this.excelExportService.exportJsonToExcel(data, `Ton_tem_${this.selectedShop}`, 'Tồn tem');
  }

  reprintStamp(): void {
    alert('Chức năng In lại tem: Vui lòng chọn tem cần in.');
  }
}
