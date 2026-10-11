import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin, of, catchError } from 'rxjs';
import { ProductApiService } from '../../../core/services/api/product.service';
import { LocalStoreApiService } from '../../../core/services/api/local-store.service';
import { AuthService } from '../../../core/services/auth.service';
import { ExcelExportService } from '../../../core/services/excel-export.service';

export interface ProductItem {
  ProductID?: string;
  ProductCode?: string;
  ProductName?: string;
  InvoiceName?: string;
  ExpiryDays?: string;
  ExpiryDaysNum?: number;
  ExpirationDate?: string;
  VAT?: number;
  RegNo?: string;
  PackagingType?: string;
  Manufacturer?: string;
  Country?: string;
  DosageForm?: string;
  PharmacologyType?: string;
  StorageCondition?: string;
  IsStopped?: boolean;
  CreatedDate?: string;
  CreatedBy?: string;
  IsPrescription?: boolean;
  RawData?: any;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit, AfterViewInit {
  private productApi = inject(ProductApiService);
  private localStoreApi = inject(LocalStoreApiService);
  private excelExportService = inject(ExcelExportService);
  public authService = inject(AuthService);

  @ViewChild('searchInput') searchInputElement?: ElementRef<HTMLInputElement>;

  searchKeyword = '';
  selectedIndex = signal<number>(0);
  isLoading = signal<boolean>(false);
  hasLoaded = signal<boolean>(false);
  errorMessage = signal<string | null>(null);
  noPermission = signal<boolean>(false);
  noPermissionMessage = signal<string | null>(null);

  // Danh sách sản phẩm thực tế hiển thị trên bảng (khởi tạo rỗng, user bấm Tải lại mới load)
  products = signal<ProductItem[]>([]);

  // Danh sách sản phẩm mẫu đối soát 1:1 theo ảnh thực tế DevExpress NHATHUOC.exe
  private readonly demoProducts: ProductItem[] = [
    {
      ProductCode: 'TB02919',
      ProductName: 'Que thử đường huyết On Call Plus H25',
      InvoiceName: 'Que thử đường huyết On Call Plus H25',
      ExpiryDays: 'Còn 3 ngày',
      ExpiryDaysNum: 3,
      VAT: 5,
      RegNo: 'TB-02919',
      PackagingType: 'Hộp 25 que',
      Manufacturer: 'ACON Biotech',
      Country: 'Mỹ',
      DosageForm: 'Que thử',
      PharmacologyType: 'Thiết bị y tế chẩn đoán',
      StorageCondition: 'Dưới 30°C, khô ráo',
      IsStopped: false,
      CreatedDate: '10/01/2024 08:30',
      CreatedBy: 'admin',
      IsPrescription: false
    },
    {
      ProductCode: 'TH05185',
      ProductName: 'Lisiplus HCT 20/12.5 Tab Stella H3x10',
      InvoiceName: 'Lisiplus HCT 20/12.5 Tab Stella',
      ExpiryDays: 'Còn 16 ngày',
      ExpiryDaysNum: 16,
      VAT: 5,
      RegNo: 'VD-21589-14',
      PackagingType: 'Hộp 3 vỉ x 10 viên',
      Manufacturer: 'Stella Pharm',
      Country: 'Việt Nam',
      DosageForm: 'Viên nén',
      PharmacologyType: 'Tim mạch, huyết áp',
      StorageCondition: 'Dưới 30°C',
      IsStopped: false,
      CreatedDate: '12/01/2024 09:15',
      CreatedBy: 'admin',
      IsPrescription: true
    },
    {
      ProductCode: 'TH01967',
      ProductName: 'Tegretol 200 Tab H5x10',
      InvoiceName: 'Tegretol 200mg Novartis',
      ExpiryDays: 'Còn 20 ngày',
      ExpiryDaysNum: 20,
      VAT: 5,
      RegNo: 'VN-17234-13',
      PackagingType: 'Hộp 5 vỉ x 10 viên',
      Manufacturer: 'Novartis Pharma Services',
      Country: 'Thụy Sĩ',
      DosageForm: 'Viên nén',
      PharmacologyType: 'Thuốc chống động kinh',
      StorageCondition: 'Dưới 25°C',
      IsStopped: false,
      CreatedDate: '15/01/2024 10:20',
      CreatedBy: 'admin',
      IsPrescription: true
    },
    {
      ProductCode: 'TH10386',
      ProductName: 'Galvus Met Tab 50mg/500mg H6x10 (SĐK-24)',
      InvoiceName: 'Galvus Met 50/500mg Novartis',
      ExpiryDays: 'Còn 32 ngày',
      ExpiryDaysNum: 32,
      VAT: 5,
      RegNo: 'VN-22456-20',
      PackagingType: 'Hộp 6 vỉ x 10 viên',
      Manufacturer: 'Novartis',
      Country: 'Thụy Sĩ',
      DosageForm: 'Viên nén bao phim',
      PharmacologyType: 'Hạ đường huyết',
      StorageCondition: 'Dưới 30°C',
      IsStopped: false,
      CreatedDate: '18/01/2024 14:00',
      CreatedBy: 'admin',
      IsPrescription: true
    },
    {
      ProductCode: 'TH00936',
      ProductName: 'Zencombi Nebu 2.5ml H2x5',
      InvoiceName: 'Zencombi khí dung 2.5ml',
      ExpiryDays: 'Còn 49 ngày',
      ExpiryDaysNum: 49,
      VAT: 5,
      RegNo: 'VD-28901-18',
      PackagingType: 'Hộp 2 vỉ x 5 ống',
      Manufacturer: 'Dược phẩm CPC1 Hà Nội',
      Country: 'Việt Nam',
      DosageForm: 'Dung dịch khí dung',
      PharmacologyType: 'Hô hấp, giãn phế quản',
      StorageCondition: 'Dưới 30°C, tránh ánh sáng',
      IsStopped: false,
      CreatedDate: '20/01/2024 11:30',
      CreatedBy: 'admin',
      IsPrescription: true
    },
    {
      ProductCode: 'TB05086',
      ProductName: 'Băng gạc vô trùng Young Wound Dressing 9cmx25cm H50',
      InvoiceName: 'Băng gạc Young Wound Dressing',
      ExpiryDays: 'Còn 50 ngày',
      ExpiryDaysNum: 50,
      VAT: 5,
      RegNo: 'TB-05086',
      PackagingType: 'Hộp 50 miếng',
      Manufacturer: 'Young Chemical',
      Country: 'Hàn Quốc',
      DosageForm: 'Băng gạc y tế',
      PharmacologyType: 'Vật tư y tế',
      StorageCondition: 'Nhiệt độ phòng',
      IsStopped: false,
      CreatedDate: '22/01/2024 15:40',
      CreatedBy: 'admin',
      IsPrescription: false
    },
    {
      ProductCode: 'TB01476',
      ProductName: 'Kim lấy thuốc Vinahankook 18G H100',
      InvoiceName: 'Kim lấy thuốc Vinahankook 18G',
      ExpiryDays: 'Còn 51 ngày',
      ExpiryDaysNum: 51,
      VAT: 5,
      RegNo: 'TB-01476',
      PackagingType: 'Hộp 100 cái',
      Manufacturer: 'Vinahankook',
      Country: 'Việt Nam',
      DosageForm: 'Kim tiêm y tế',
      PharmacologyType: 'Vật tư y tế',
      StorageCondition: 'Khô ráo',
      IsStopped: false,
      CreatedDate: '25/01/2024 09:00',
      CreatedBy: 'admin',
      IsPrescription: false
    },
    {
      ProductCode: 'TH06267',
      ProductName: 'Gel tra mắt Aritear 0.2% H4x5',
      InvoiceName: 'Aritear Gel tra mắt 0.2%',
      ExpiryDays: 'Còn 64 ngày',
      ExpiryDaysNum: 64,
      VAT: 5,
      RegNo: 'VN-19823-15',
      PackagingType: 'Hộp 4 vỉ x 5 tép',
      Manufacturer: 'Unimed Pharma',
      Country: 'Slovakia',
      DosageForm: 'Gel tra mắt',
      PharmacologyType: 'Thuốc nhỏ mắt',
      StorageCondition: 'Dưới 25°C',
      IsStopped: false,
      CreatedDate: '28/01/2024 16:10',
      CreatedBy: 'admin',
      IsPrescription: false
    },
    {
      ProductCode: 'TH01968',
      ProductName: 'Nexium Mups Tab 20mg H2x7',
      InvoiceName: 'Nexium Mups 20mg AstraZeneca',
      ExpiryDays: 'Còn 87 ngày',
      ExpiryDaysNum: 87,
      VAT: 5,
      RegNo: 'VN-19875-15',
      PackagingType: 'Hộp 2 vỉ x 7 viên',
      Manufacturer: 'AstraZeneca AB',
      Country: 'Thụy Điển',
      DosageForm: 'Viên nén kháng dịch dạ dày',
      PharmacologyType: 'Ức chế bơm proton (PPI)',
      StorageCondition: 'Dưới 30°C',
      IsStopped: false,
      CreatedDate: '01/02/2024 08:45',
      CreatedBy: 'admin',
      IsPrescription: true
    },
    {
      ProductCode: 'TH00936',
      ProductName: 'Zencombi Nebu 2.5ml H2x5',
      InvoiceName: 'Zencombi khí dung 2.5ml',
      ExpiryDays: 'Còn 91 ngày',
      ExpiryDaysNum: 91,
      VAT: 5,
      RegNo: 'VD-28901-18',
      PackagingType: 'Hộp 2 vỉ x 5 ống',
      Manufacturer: 'Dược phẩm CPC1 Hà Nội',
      Country: 'Việt Nam',
      DosageForm: 'Dung dịch khí dung',
      PharmacologyType: 'Hô hấp, giãn phế quản',
      StorageCondition: 'Dưới 30°C',
      IsStopped: false,
      CreatedDate: '05/02/2024 10:00',
      CreatedBy: 'admin',
      IsPrescription: true
    },
    {
      ProductCode: 'TH00290',
      ProductName: 'Zoamco Tab 20mg H2x15',
      InvoiceName: 'Zoamco 20mg Atorvastatin',
      ExpiryDays: 'Còn 93 ngày',
      ExpiryDaysNum: 93,
      VAT: 5,
      RegNo: 'VD-24512-16',
      PackagingType: 'Hộp 2 vỉ x 15 viên',
      Manufacturer: 'Dược phẩm CPC1 Hà Nội',
      Country: 'Việt Nam',
      DosageForm: 'Viên nén',
      PharmacologyType: 'Tim mạch, hạ lipid máu',
      StorageCondition: 'Dưới 30°C',
      IsStopped: false,
      CreatedDate: '08/02/2024 11:15',
      CreatedBy: 'admin',
      IsPrescription: true
    },
    {
      ProductCode: 'TH01973',
      ProductName: 'Concor Tab 5mg H3x10',
      InvoiceName: 'Concor 5mg Merck',
      ExpiryDays: 'Còn 97 ngày',
      ExpiryDaysNum: 97,
      VAT: 5,
      RegNo: 'VN-16543-13',
      PackagingType: 'Hộp 3 vỉ x 10 viên',
      Manufacturer: 'Merck Healthcare KGaA',
      Country: 'Đức',
      DosageForm: 'Viên nén bao phim',
      PharmacologyType: 'Thuốc chẹn beta giao cảm',
      StorageCondition: 'Dưới 30°C',
      IsStopped: false,
      CreatedDate: '10/02/2024 14:30',
      CreatedBy: 'admin',
      IsPrescription: true
    },
    {
      ProductCode: 'TH01973',
      ProductName: 'Concor Tab 5mg H3x10',
      InvoiceName: 'Concor 5mg Merck',
      ExpiryDays: 'Còn 104 ngày',
      ExpiryDaysNum: 104,
      VAT: 5,
      RegNo: 'VN-16543-13',
      PackagingType: 'Hộp 3 vỉ x 10 viên',
      Manufacturer: 'Merck Healthcare KGaA',
      Country: 'Đức',
      DosageForm: 'Viên nén bao phim',
      PharmacologyType: 'Thuốc chẹn beta giao cảm',
      StorageCondition: 'Dưới 30°C',
      IsStopped: false,
      CreatedDate: '12/02/2024 09:30',
      CreatedBy: 'admin',
      IsPrescription: true
    },
    {
      ProductCode: 'TH02523',
      ProductName: 'Fortrans Sac H4',
      InvoiceName: 'Fortrans gói bột pha dung dịch',
      ExpiryDays: 'Còn 105 ngày',
      ExpiryDaysNum: 105,
      VAT: 5,
      RegNo: 'VN-18765-15',
      PackagingType: 'Hộp 4 gói',
      Manufacturer: 'Beaufour Ipsen Industrie',
      Country: 'Pháp',
      DosageForm: 'Bột pha uống',
      PharmacologyType: 'Nhuận tràng thẩm thấu',
      StorageCondition: 'Dưới 30°C',
      IsStopped: false,
      CreatedDate: '15/02/2024 09:40',
      CreatedBy: 'admin',
      IsPrescription: true
    },
    {
      ProductCode: 'TH04140',
      ProductName: 'Polygynax Sup H2x6',
      InvoiceName: 'Polygynax viên đặt âm đạo',
      ExpiryDays: 'Còn 112 ngày',
      ExpiryDaysNum: 112,
      VAT: 5,
      RegNo: 'VN-20123-16',
      PackagingType: 'Hộp 2 vỉ x 6 viên',
      Manufacturer: 'Innothera Chouzy',
      Country: 'Pháp',
      DosageForm: 'Viên nang đặt',
      PharmacologyType: 'Thuốc phụ khoa',
      StorageCondition: 'Dưới 25°C',
      IsStopped: false,
      CreatedDate: '20/02/2024 13:50',
      CreatedBy: 'admin',
      IsPrescription: true
    },
    {
      ProductCode: 'TH07270',
      ProductName: 'Natri Bicarbonat Tab 500mg Bidiphar L160',
      InvoiceName: 'Natri Bicarbonat 500mg',
      ExpiryDays: 'Còn 116 ngày',
      ExpiryDaysNum: 116,
      VAT: 5,
      RegNo: 'VD-22341-15',
      PackagingType: 'Lọ 160 viên',
      Manufacturer: 'Bidiphar',
      Country: 'Việt Nam',
      DosageForm: 'Viên nén',
      PharmacologyType: 'Kháng acid, kiềm hóa',
      StorageCondition: 'Dưới 30°C',
      IsStopped: false,
      CreatedDate: '22/02/2024 15:20',
      CreatedBy: 'admin',
      IsPrescription: false
    },
    {
      ProductCode: 'TH07152',
      ProductName: 'Anna 0,15mg/0.03mg Tab H24xB1x28',
      InvoiceName: 'Anna tránh thai hàng ngày',
      ExpiryDays: 'Còn 126 ngày',
      ExpiryDaysNum: 126,
      VAT: 5,
      RegNo: 'VD-29876-18',
      PackagingType: 'Hộp 24 vỉ x 28 viên',
      Manufacturer: 'Dược phẩm Nam Hà',
      Country: 'Việt Nam',
      DosageForm: 'Viên nén',
      PharmacologyType: 'Thuốc tránh thai',
      StorageCondition: 'Dưới 30°C',
      IsStopped: false,
      CreatedDate: '25/02/2024 08:10',
      CreatedBy: 'admin',
      IsPrescription: false
    },
    {
      ProductCode: 'TH07152',
      ProductName: 'Anna 0,15mg/0.03mg Tab H24xB1x28',
      InvoiceName: 'Anna tránh thai hàng ngày',
      ExpiryDays: 'Còn 127 ngày',
      ExpiryDaysNum: 127,
      VAT: 5,
      RegNo: 'VD-29876-18',
      PackagingType: 'Hộp 24 vỉ x 28 viên',
      Manufacturer: 'Dược phẩm Nam Hà',
      Country: 'Việt Nam',
      DosageForm: 'Viên nén',
      PharmacologyType: 'Thuốc tránh thai',
      StorageCondition: 'Dưới 30°C',
      IsStopped: false,
      CreatedDate: '25/02/2024 08:10',
      CreatedBy: 'admin',
      IsPrescription: false
    },
    {
      ProductCode: 'TH07152',
      ProductName: 'Anna 0,15mg/0.03mg Tab H24xB1x28',
      InvoiceName: 'Anna tránh thai hàng ngày',
      ExpiryDays: 'Còn 127 ngày',
      ExpiryDaysNum: 127,
      VAT: 5,
      RegNo: 'VD-29876-18',
      PackagingType: 'Hộp 24 vỉ x 28 viên',
      Manufacturer: 'Dược phẩm Nam Hà',
      Country: 'Việt Nam',
      DosageForm: 'Viên nén',
      PharmacologyType: 'Thuốc tránh thai',
      StorageCondition: 'Dưới 30°C',
      IsStopped: false,
      CreatedDate: '25/02/2024 08:10',
      CreatedBy: 'admin',
      IsPrescription: false
    },
    {
      ProductCode: 'TH07152',
      ProductName: 'Anna 0.15mg/0.03mg Tab H24xB1x28',
      InvoiceName: 'Anna tránh thai hàng ngày',
      ExpiryDays: 'Còn 129 ngày',
      ExpiryDaysNum: 129,
      VAT: 5,
      RegNo: 'VD-29876-18',
      PackagingType: 'Hộp 24 vỉ x 28 viên',
      Manufacturer: 'Dược phẩm Nam Hà',
      Country: 'Việt Nam',
      DosageForm: 'Viên nén',
      PharmacologyType: 'Thuốc tránh thai',
      StorageCondition: 'Dưới 30°C',
      IsStopped: false,
      CreatedDate: '26/02/2024 10:15',
      CreatedBy: 'admin',
      IsPrescription: false
    }
  ];

  ngOnInit(): void {
    // Không tự động load API khi vào màn hình, chờ user bấm Tải lại hoặc Tìm kiếm
  }

  ngAfterViewInit(): void {
    // Tự động focus vào ô tìm kiếm khi mở màn hình
    setTimeout(() => {
      this.searchInputElement?.nativeElement?.focus();
    }, 150);
  }

  selectRow(index: number): void {
    this.selectedIndex.set(index);
  }

  onFind(): void {
    if (this.isLoading()) return;
    this.loadProducts();
  }

  onClear(): void {
    if (this.isLoading()) return;
    this.searchKeyword = '';
    this.loadProducts();
  }

  /**
   * Tính toán Hạn sử dụng chuẩn 1:1 theo công thức trong DLL NHATHUOC.exe (NTLocalStoreInfo.get_ExpirationDay):
   * diff = expDate.Value - DateTime.Now; => diff.Days
   */
  calculateExpiry(expDate?: string, expDaysNum?: number | string): { days: number | null; text: string } {
    // 1. Nếu backend đã trả sẵn số ngày nguyên
    if (expDaysNum !== undefined && expDaysNum !== null && expDaysNum !== '') {
      const num = typeof expDaysNum === 'number'
        ? expDaysNum
        : parseInt(String(expDaysNum).replace(/[^\d-]/g, ''), 10);
      if (!isNaN(num)) {
        if (num < 0) return { days: num, text: `Quá hạn ${Math.abs(num)} ngày` };
        if (num === 0) return { days: 0, text: 'Hết hạn hôm nay' };
        return { days: num, text: `Còn ${num} ngày` };
      }
    }

    // 2. Tính từ ngày hết hạn ExpirationDate
    if (expDate) {
      try {
        const d = new Date(expDate);
        if (!isNaN(d.getTime())) {
          const now = new Date();
          const diffMs = d.getTime() - now.getTime();
          const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
          if (diffDays < 0) return { days: diffDays, text: `Quá hạn ${Math.abs(diffDays)} ngày` };
          if (diffDays === 0) return { days: 0, text: 'Hết hạn hôm nay' };
          return { days: diffDays, text: `Còn ${diffDays} ngày` };
        }
      } catch {
        return { days: null, text: String(expDate) };
      }
    }

    return { days: null, text: '—' };
  }

  loadProducts(): void {
    // Chặn người dùng spam gọi API liên tiếp
    if (this.isLoading()) return;

    this.hasLoaded.set(true);
    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.noPermission.set(false);
    this.noPermissionMessage.set(null);

    const token = this.authService.getToken() || '';
    const uId = Number(this.authService.getUPharmaID()) || 841;
    const shopCode = this.authService.getFirstShopCode();

    const productPayload = {
      Token: token,
      uPharmaID: uId,
      ShopCode: shopCode,
      Search: this.searchKeyword.trim(),
      ProductType: '',
      NumberRow: 100,
      PageNumber: 1
    };

    const expPayload = {
      Token: token,
      uPharmaID: uId,
      ShopCode: shopCode
    };

    // Gọi đồng thời GetItemLst và GetInventoryExpiration để kết hợp danh mục và hạn dùng cận date
    forkJoin({
      products: this.productApi.getItemLst(productPayload).pipe(
        catchError(() => of(null))
      ),
      expirations: this.localStoreApi.getInventoryExpiration(expPayload).pipe(
        catchError(() => of(null))
      )
    }).subscribe({
      next: ({ products, expirations }) => {
        this.isLoading.set(false);

        // Kiểm tra phiên đăng nhập
        if (
          (products && products.RespCode === -1 && String(products.RespText).toLowerCase().includes('token không hợp lệ')) ||
          (expirations && expirations.RespCode === -1 && String(expirations.RespText).toLowerCase().includes('token không hợp lệ'))
        ) {
          this.authService.logout();
          return;
        }

        // Kiểm tra phân quyền: RespCode = 202 hoặc thông báo "Không có quyền"
        if (
          (products && (products.RespCode === 202 || String(products.RespText || '').toLowerCase().includes('không có quyền'))) ||
          (expirations && (expirations.RespCode === 202 || String(expirations.RespText || '').toLowerCase().includes('không có quyền')))
        ) {
          this.noPermission.set(true);
          this.noPermissionMessage.set(products?.RespText || expirations?.RespText || 'Không có quyền');
          this.products.set([]);
          return;
        }

        // Tạo map hạn dùng theo ProductID từ API LocalStore/GetInventoryExpiration
        const expiryMap = new Map<string, { expDate: string; days: number; text: string }>();
        const expList = (expirations as any)?.LocalStoreLst || [];
        if (Array.isArray(expList)) {
          for (const item of expList) {
            const pId = String(item.ProductID || '').trim();
            if (pId && (item.ExpirationDate || item.ExpirationDay !== undefined)) {
              const calc = this.calculateExpiry(item.ExpirationDate, item.ExpirationDay);
              if (!expiryMap.has(pId) || (calc.days !== null && (expiryMap.get(pId)!.days > calc.days))) {
                expiryMap.set(pId, { expDate: item.ExpirationDate, days: calc.days ?? 9999, text: calc.text });
              }
            }
          }
        }

        const rawList = (products as any)?.ProductLst || (products as any)?.ProductList || (products as any)?.data ||
          (Array.isArray(products) ? products : Object.values(products || {}).find(v => Array.isArray(v) && v.length > 0)) as any[];

        if (Array.isArray(rawList) && rawList.length > 0) {
          const mapped: ProductItem[] = rawList.map((item: any) => {
            const pId = String(item.ProductID || item.ProductCode || '').trim();
            const expFromMap = expiryMap.get(pId);

            const rawExpDate = item.ExpirationDate || item.ExpirationDateD || item.ExpDate || item.HSD || expFromMap?.expDate;
            const rawExpDay = item.ExpirationDay ?? item.ExpirationDays ?? item.ExpDay ?? item.HanSD ?? expFromMap?.days;

            const calc = this.calculateExpiry(rawExpDate, rawExpDay);

            return {
              ProductID: item.ProductID,
              ProductCode: item.ProductID || item.ProductCode,
              ProductName: item.ProductName,
              InvoiceName: item.ProductName2 || item.InvoiceName,
              ExpiryDays: calc.text,
              ExpiryDaysNum: calc.days ?? undefined,
              ExpirationDate: rawExpDate,
              VAT: item.VAT,
              RegNo: item.RegistrationNumber || item.RegNo,
              PackagingType: item.UnitOfMeasure || item.PackagingType,
              Manufacturer: item.ManufacturerName || item.Manufacturer,
              Country: item.Distributor || item.Country,
              DosageForm: item.DosageForm,
              PharmacologyType: item.PharmacologicalType || item.PharmacologyType,
              StorageCondition: item.StorageCondition,
              IsStopped: item.RegisterType === '1' || item.IsStopped === true,
              CreatedDate: item.TimeCreateD || item.CreatedDate,
              CreatedBy: item.CreaterID || item.CreatedBy,
              IsPrescription: item.KDStr === 'Có' || item.IsPrescription === true,
              RawData: item
            };
          });
          this.products.set(mapped);
        } else if (Array.isArray(expList) && expList.length > 0) {
          // Khi trang hiển thị danh sách tồn kho cận date (như màn hình InventoryExpirationF)
          const mapped: ProductItem[] = expList.map((item: any) => {
            const calc = this.calculateExpiry(item.ExpirationDate, item.ExpirationDay);
            return {
              ProductID: item.ProductID,
              ProductCode: item.ProductID,
              ProductName: item.ProductName,
              InvoiceName: item.ProductName,
              ExpiryDays: calc.text,
              ExpiryDaysNum: calc.days ?? undefined,
              ExpirationDate: item.ExpirationDate,
              VAT: item.VAT,
              RegNo: item.RegistrationNumber || '—',
              PackagingType: item.UnitOfMeasure || '—',
              Manufacturer: item.ManufacturerName || '—',
              Country: item.ManufacturerCoutry || '—',
              DosageForm: item.DosageForm || '—',
              PharmacologyType: item.PharmacologicalType || '—',
              StorageCondition: item.StorageCondition || '—',
              IsStopped: false,
              CreatedDate: item.TimeCreate || '',
              CreatedBy: String(item.CreaterID || ''),
              IsPrescription: false,
              RawData: item
            };
          });
          this.products.set(mapped);
        } else {
          this.products.set(this.demoProducts);
        }
      },
      error: (err: any) => {
        this.isLoading.set(false);
        if (err?.error && (err.error.RespCode === 202 || String(err.error.RespText || '').toLowerCase().includes('không có quyền'))) {
          this.noPermission.set(true);
          this.noPermissionMessage.set(err.error.RespText || 'Không có quyền');
          this.products.set([]);
          return;
        }
        this.products.set(this.demoProducts);
      }
    });
  }

  filteredProducts(): ProductItem[] {
    if (!this.searchKeyword.trim()) {
      return this.products();
    }
    const kw = this.searchKeyword.toLowerCase();
    return this.products().filter(p =>
      (p.ProductCode && p.ProductCode.toLowerCase().includes(kw)) ||
      (p.ProductName && p.ProductName.toLowerCase().includes(kw)) ||
      (p.Manufacturer && p.Manufacturer.toLowerCase().includes(kw))
    );
  }

  exportExcel(): void {
    const list = this.filteredProducts();
    if (!list || list.length === 0) {
      alert('Không có dữ liệu sản phẩm để xuất Excel!');
      return;
    }

    const excelData = list.map((p, idx) => ({
      'STT': idx + 1,
      'Hạn Sd': p.ExpiryDays || '—',
      'Mã sản phẩm': p.ProductCode || p.ProductID || '',
      'Tên sản phẩm': p.ProductName || '',
      'Tên HĐ nhà cung cấp': p.InvoiceName || '',
      'VAT %': p.VAT !== undefined ? `${p.VAT}%` : '',
      'Số đăng ký': p.RegNo || '',
      'Loại đóng gói': p.PackagingType || '',
      'Nhà sản xuất': p.Manufacturer || '',
      'Nước sản xuất': p.Country || '',
      'Dạng bào chế': p.DosageForm || '',
      'Loại dược lý': p.PharmacologyType || '',
      'Điều kiện bảo quản': p.StorageCondition || '',
      'Hàng dừng': p.IsStopped ? 'Dừng' : 'Bình thường',
      'Thời gian tạo': p.CreatedDate || '',
      'Người tạo': p.CreatedBy || '',
      'Kê đơn': p.IsPrescription ? 'Kê đơn (Rx)' : 'Không kê đơn (OTC)'
    }));

    this.excelExportService.exportJsonToExcel(
      excelData,
      'Danh_sach_san_pham_uPharma',
      'Danh sách sản phẩm'
    );
  }

  reload(): void {
    this.loadProducts();
  }
}
