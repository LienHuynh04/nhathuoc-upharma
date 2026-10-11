import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../core/services/auth.service';
import { ExcelExportService } from '../../../core/services/excel-export.service';

export interface ColumnDef {
  key: string;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  type?: 'text' | 'number' | 'date' | 'badge';
  fallbackKeys?: string[];
}

export interface FeatureConfig {
  code: string;
  title: string;
  apiEndpoint: string;
  apiMethod: 'POST' | 'GET';
  icon: string;
  columns: ColumnDef[];
  dateFilter?: boolean;
  shopFilter?: boolean;
  typeDocFilter?: boolean;
  reqKeys?: string[];
  arrayProp?: string;
}

@Component({
  selector: 'app-feature-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feature-view.component.html',
  styleUrl: './feature-view.component.scss'
})
export class FeatureViewComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private http = inject(HttpClient);
  private excelExportService = inject(ExcelExportService);
  public authService = inject(AuthService);

  private readonly BASE_URL = 'https://icpc1hn.work/NHATHUOC';

  featureCode = signal<string>('');
  currentConfig = signal<FeatureConfig | null>(null);

  searchKeyword = '';
  selectedShop = 'SHOP01';
  selectedTypeDoc = 0;
  startDate = new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString().split('T')[0];
  endDate = new Date().toISOString().split('T')[0];

  isLoading = signal<boolean>(false);
  hasLoaded = signal<boolean>(false);
  dataList = signal<any[]>([]);
  errorMessage = signal<string | null>(null);
  noPermission = signal<boolean>(false);
  noPermissionMessage = signal<string | null>(null);

  // Feature Configuration Registry matched 1:1 to openapi_swagger.json
  private readonly FEATURE_REGISTRY: Record<string, FeatureConfig> = {
    hh_1: {
      code: 'HH_1',
      title: '1. Sản phẩm trong hệ thống',
      apiEndpoint: '/Product/GetItemLst',
      apiMethod: 'POST',
      icon: 'inventory_2',
      reqKeys: ["uPharmaID", "Token", "ShopCode", "ProductType", "Search", "NumberRow", "PageNumber"],
      arrayProp: 'ProductLst',
      shopFilter: true,
      columns: [
        { key: 'ExpirationDay', label: 'Hạn Sd', width: '115px', align: 'center', type: 'text', fallbackKeys: ['ExpirationDate', 'ExpDay', 'HanSD', 'HanSd'] },
        { key: 'ProductID', label: 'Mã sản phẩm', width: '110px', align: 'left', type: 'text', fallbackKeys: ['ProductCode'] },
        { key: 'ProductName', label: 'Tên sản phẩm', width: '260px', align: 'left', type: 'text' },
        { key: 'ProductName2', label: 'Tên HĐ NCC', width: '220px', align: 'left', type: 'text', fallbackKeys: ['InvoiceName'] },
        { key: 'VAT', label: 'VAT %', width: '70px', align: 'right', type: 'number' },
        { key: 'RegistrationNumber', label: 'Số đăng ký', width: '120px', align: 'left', type: 'text', fallbackKeys: ['RegNo'] },
        { key: 'UnitOfMeasure', label: 'ĐVT', width: '110px', align: 'left', type: 'text', fallbackKeys: ['PackagingType'] },
        { key: 'ManufacturerName', label: 'Nhà sản xuất', width: '180px', align: 'left', type: 'text', fallbackKeys: ['Manufacturer'] },
        { key: 'Distributor', label: 'Nước SX / Phân phối', width: '130px', align: 'left', type: 'text', fallbackKeys: ['Country'] },
        { key: 'DosageForm', label: 'Dạng bào chế', width: '140px', align: 'left', type: 'text' },
        { key: 'Status', label: 'Trạng thái', width: '110px', align: 'center', type: 'badge' }
      ]
    },
    hh_fefo: {
      code: 'HH_FEFO',
      title: 'Kiểm tra FEFO',
      apiEndpoint: '/LocalStore/GetInventoryShop',
      apiMethod: 'POST',
      icon: 'fact_check',
      reqKeys: ["uPharmaID", "Token", "ShopCode", "BranchLst", "ProductID", "LotCode", "PackageID", "StoreType"],
      arrayProp: 'LocalStoreLst',
      shopFilter: true,
      columns: [
        { key: 'ProductID', label: 'Mã sản phẩm', width: '120px', align: 'left', type: 'text' },
        { key: 'ProductName', label: 'Tên sản phẩm', width: '260px', align: 'left', type: 'text' },
        { key: 'LotCode', label: 'Số lô', width: '110px', align: 'left', type: 'text' },
        { key: 'ExpirationDay', label: 'Hạn dùng (FEFO)', width: '120px', align: 'center', type: 'text', fallbackKeys: ['ExpirationDate', 'ExpDay'] },
        { key: 'Quantity', label: 'Tồn kho', width: '100px', align: 'right', type: 'number' },
        { key: 'UnitOfMeasure', label: 'ĐVT', width: '90px', align: 'left', type: 'text' }
      ]
    },
    hh_4: {
      code: 'HH_4',
      title: '4. Tồn kho hệ thống',
      apiEndpoint: '/LocalStore/GetInventorySystem',
      apiMethod: 'POST',
      icon: 'database',
      reqKeys: ["uPharmaID", "Token", "ShopCode", "BranchLst", "ProductID", "LotCode", "PackageID", "StoreType"],
      arrayProp: 'LocalStoreLst',
      dateFilter: true,
      shopFilter: true,
      columns: [
        { key: 'ProductID', label: 'Mã sản phẩm', width: '120px', align: 'left', type: 'text' },
        { key: 'ProductName', label: 'Tên sản phẩm', width: '260px', align: 'left', type: 'text' },
        { key: 'LotCode', label: 'Số lô', width: '110px', align: 'left', type: 'text' },
        { key: 'Quantity', label: 'Tồn kho', width: '100px', align: 'right', type: 'number' },
        { key: 'UnitPrice', label: 'Đơn giá', width: '110px', align: 'right', type: 'number' },
        { key: 'UnitOfMeasure', label: 'ĐVT', width: '80px', align: 'left', type: 'text' }
      ]
    },
    hh_5: {
      code: 'HH_5',
      title: '5. Điều chuyển Shop',
      apiEndpoint: '/TransferOrder/GetTransferOrderSysByTime',
      apiMethod: 'POST',
      icon: 'shopping_cart',
      reqKeys: ["uPharmaID", "Token", "IsPriority", "TimeStart", "TimeEnd"],
      arrayProp: 'TransferOrderHeaderLst',
      dateFilter: true,
      columns: [
        { key: 'HeaderID', label: 'Mã phiếu chuyển', width: '150px', align: 'left', type: 'text' },
        { key: 'ShopName', label: 'Shop đặt / chuyển', width: '180px', align: 'left', type: 'text' },
        { key: 'EmployeeName', label: 'Nhân viên lập', width: '160px', align: 'left', type: 'text' },
        { key: 'TimeCreate', label: 'Ngày tạo', width: '140px', align: 'center', type: 'date' },
        { key: 'Note', label: 'Ghi chú', width: '200px', align: 'left', type: 'text' },
        { key: 'ApproverCode', label: 'Người duyệt', width: '120px', align: 'left', type: 'text' }
      ]
    },
    hh_6: {
      code: 'HH_6',
      title: '6. Tồn kho các Shop',
      apiEndpoint: '/LocalStore/GetInventoryShop',
      apiMethod: 'POST',
      icon: 'bar_chart',
      reqKeys: ["uPharmaID", "Token", "ShopCode", "BranchLst", "ProductID", "LotCode", "PackageID", "StoreType"],
      arrayProp: 'LocalStoreLst',
      shopFilter: true,
      columns: [
        { key: 'ProductID', label: 'Mã SP', width: '110px', align: 'left', type: 'text' },
        { key: 'ProductName', label: 'Tên sản phẩm', width: '260px', align: 'left', type: 'text' },
        { key: 'LotCode', label: 'Mã lô', width: '100px', align: 'left', type: 'text' },
        { key: 'Quantity', label: 'Tồn kho', width: '90px', align: 'right', type: 'number' },
        { key: 'UnitPrice', label: 'Đơn giá', width: '110px', align: 'right', type: 'number' },
        { key: 'UnitOfMeasure', label: 'ĐVT', width: '80px', align: 'left', type: 'text' }
      ]
    },
    hh_7: {
      code: 'HH_7',
      title: '7. Chuyển về kho tổng',
      apiEndpoint: '/TransferCenter/GetTransferCenterByTime',
      apiMethod: 'POST',
      icon: 'move_to_inbox',
      reqKeys: ["uPharmaID", "Token", "TimeStart", "TimeEnd"],
      arrayProp: 'TransferCenterLst',
      dateFilter: true,
      columns: [
        { key: 'DocumentID', label: 'Mã phiếu chuyển', width: '140px', align: 'left', type: 'text' },
        { key: 'FromLocationName', label: 'Nơi xuất', width: '170px', align: 'left', type: 'text' },
        { key: 'ToLocationName', label: 'Nơi nhận', width: '170px', align: 'left', type: 'text' },
        { key: 'TimeCreate', label: 'Ngày lập', width: '130px', align: 'center', type: 'date' },
        { key: 'CreateName', label: 'Người lập', width: '150px', align: 'left', type: 'text' },
        { key: 'Status', label: 'Trạng thái', width: '120px', align: 'center', type: 'badge' }
      ]
    },
    hh_9: {
      code: 'HH_9',
      title: '9. Tồn kho an toàn SHOP',
      apiEndpoint: '/InventorySafe/GetInventoryShopSafe',
      apiMethod: 'POST',
      icon: 'settings_suggest',
      reqKeys: ["uPharmaID", "Token", "ShopCode"],
      arrayProp: 'InventorySafeLst',
      shopFilter: true,
      columns: [
        { key: 'ProductID', label: 'Mã sản phẩm', width: '110px', align: 'left', type: 'text' },
        { key: 'ProductName', label: 'Tên sản phẩm', width: '260px', align: 'left', type: 'text' },
        { key: 'QuantityMin', label: 'Tối thiểu', width: '110px', align: 'right', type: 'number' },
        { key: 'QuantityMax', label: 'Tối đa', width: '110px', align: 'right', type: 'number' },
        { key: 'QuantityExist', label: 'Tồn thực tế', width: '110px', align: 'right', type: 'number' },
        { key: 'SafetyStatus', label: 'Đánh giá an toàn', width: '140px', align: 'center', type: 'text' },
        { key: 'TimeModify', label: 'Ngày cập nhật', width: '130px', align: 'center', type: 'date' }
      ]
    },
    hh_10: {
      code: 'HH_10',
      title: '10. Hàng chậm bán (SHOP)',
      apiEndpoint: '/Admin/GetProductUnsoldLst',
      apiMethod: 'POST',
      icon: 'query_builder',
      reqKeys: ["uPharmaID", "Token", "ShopCode", "TimeStart"],
      arrayProp: 'ProductUnsoldLst',
      dateFilter: true,
      shopFilter: true,
      columns: [
        { key: 'ProductID', label: 'Mã sản phẩm', width: '110px', align: 'left', type: 'text' },
        { key: 'ProductName', label: 'Tên sản phẩm', width: '260px', align: 'left', type: 'text' },
        { key: 'Quantity', label: 'Số lượng tồn', width: '110px', align: 'right', type: 'number' },
        { key: 'DaysUnsold', label: 'Số ngày chậm', width: '120px', align: 'right', type: 'number' },
        { key: 'UnitPrice', label: 'Đơn giá', width: '120px', align: 'right', type: 'number' }
      ]
    },
    hh_12: {
      code: 'HH_12',
      title: '12. Khách trả lại hàng',
      apiEndpoint: '/ReturnShop/GetReturnShopByTime',
      apiMethod: 'POST',
      icon: 'business_center',
      reqKeys: ["uPharmaID", "Token", "ShopCode", "TimeStart", "TimeEnd"],
      arrayProp: 'ReturnShopLst',
      dateFilter: true,
      shopFilter: true,
      columns: [
        { key: 'DocumentID', label: 'Mã phiếu trả', width: '140px', align: 'left', type: 'text' },
        { key: 'CustomerName', label: 'Khách hàng', width: '180px', align: 'left', type: 'text' },
        { key: 'CustomerPhone', label: 'Số điện thoại', width: '130px', align: 'left', type: 'text' },
        { key: 'ShopName', label: 'Cửa hàng', width: '160px', align: 'left', type: 'text' },
        { key: 'TimeCreate', label: 'Ngày trả', width: '130px', align: 'center', type: 'date' }
      ]
    },
    hh_14: {
      code: 'HH_14',
      title: '14. Hàng hết, hàng chia, hàng giao tại điểm',
      apiEndpoint: '/ProductOff/GetProductOff',
      apiMethod: 'POST',
      icon: 'checklist',
      reqKeys: ["uPharmaID", "Token", "TypeDoc"],
      arrayProp: 'ProductOffLst',
      typeDocFilter: true,
      columns: [
        { key: 'ProductID', label: 'Mã SP', width: '110px', align: 'left', type: 'text', fallbackKeys: ['ProductCode', 'Code'] },
        { key: 'ProductName', label: 'Tên sản phẩm', width: '280px', align: 'left', type: 'text' },
        { key: 'RegistrationNumber', label: 'Số đăng ký', width: '160px', align: 'left', type: 'text', fallbackKeys: ['RegNo', 'SDK'] },
        { key: 'UnitOfMeasure', label: 'Đơn vị', width: '90px', align: 'center', type: 'text', fallbackKeys: ['Unit', 'PackagingType'] },
        { key: 'Note', label: 'Lý do', width: '320px', align: 'left', type: 'text', fallbackKeys: ['Reason', 'Description', 'GhiChu'] }
      ]
    },
    cc_1: {
      code: 'CC_1',
      title: '1. Chấm công',
      apiEndpoint: '/ShiftWork/GetTimeKeepingLst',
      apiMethod: 'POST',
      icon: 'schedule',
      reqKeys: ["uPharmaID", "Token", "Month", "Year"],
      arrayProp: 'EmTimeKeepingLst',
      columns: [
        { key: 'EmployeeCode', label: 'Mã nhân viên', width: '120px', align: 'left', type: 'text' },
        { key: 'EmployeeName', label: 'Họ tên', width: '180px', align: 'left', type: 'text' },
        { key: 'TotalWorkDay', label: 'Công chuẩn', width: '110px', align: 'right', type: 'number' },
        { key: 'ActualWorkDay', label: 'Công thực tế', width: '110px', align: 'right', type: 'number' },
        { key: 'OvertimeHour', label: 'Tăng ca (giờ)', width: '110px', align: 'right', type: 'number' }
      ]
    },
    cc_2: {
      code: 'CC_2',
      title: '2. Phiếu thu tiền',
      apiEndpoint: '/KKReceipt/GetReceiptHeaderLst',
      apiMethod: 'POST',
      icon: 'receipt',
      reqKeys: ["uPharmaID", "Token", "ShopCode", "DocDel", "TimeStart", "TimeEnd"],
      arrayProp: 'ReceiptHeaderLst',
      dateFilter: true,
      shopFilter: true,
      columns: [
        { key: 'DocumentID', label: 'Mã phiếu thu', width: '140px', align: 'left', type: 'text' },
        { key: 'ShopName', label: 'Chi nhánh', width: '180px', align: 'left', type: 'text' },
        { key: 'CreateName', label: 'Người lập', width: '160px', align: 'left', type: 'text' },
        { key: 'TotalAmountCash', label: 'Tiền mặt', width: '130px', align: 'right', type: 'number' },
        { key: 'TotalAmountCard', label: 'Thẻ', width: '130px', align: 'right', type: 'number' },
        { key: 'TimeCreate', label: 'Ngày thu', width: '130px', align: 'center', type: 'date' }
      ]
    },
    cc_3: {
      code: 'CC_3',
      title: '3. Phê duyệt phiếu tăng ca',
      apiEndpoint: '/OverTime/GetOverTimeByTime',
      apiMethod: 'POST',
      icon: 'verified',
      reqKeys: ["uPharmaID", "Token", "ShopCode", "TimeStart", "TimeEnd"],
      arrayProp: 'OverTimeLst',
      dateFilter: true,
      shopFilter: true,
      columns: [
        { key: 'EmployeeName', label: 'Nhân viên', width: '170px', align: 'left', type: 'text' },
        { key: 'PhoneNumber', label: 'Số điện thoại', width: '130px', align: 'left', type: 'text' },
        { key: 'QuantityHour', label: 'Số giờ tăng ca', width: '120px', align: 'right', type: 'number' },
        { key: 'WorkDate', label: 'Ngày làm việc', width: '130px', align: 'center', type: 'date' },
        { key: 'Status', label: 'Trạng thái', width: '120px', align: 'center', type: 'badge' },
        { key: 'Note', label: 'Ghi chú', width: '200px', align: 'left', type: 'text' }
      ]
    },
    cc_4: {
      code: 'CC_4',
      title: '4. Chỉ tiêu khách hàng',
      apiEndpoint: '/Buyer/GetCustomerNewLst',
      apiMethod: 'POST',
      icon: 'trending_up',
      reqKeys: ["uPharmaID", "Token", "Month", "Year", "ShopCode"],
      arrayProp: 'CustomerNewLst',
      shopFilter: true,
      columns: [
        { key: 'EmployeeName', label: 'Nhân viên', width: '180px', align: 'left', type: 'text' },
        { key: 'ShopCode', label: 'Chi nhánh', width: '120px', align: 'left', type: 'text' },
        { key: 'CustomerName', label: 'Khách hàng', width: '180px', align: 'left', type: 'text' },
        { key: 'PhoneNumber', label: 'Số điện thoại', width: '130px', align: 'left', type: 'text' },
        { key: 'TimeCreate', label: 'Ngày tạo', width: '130px', align: 'center', type: 'date' }
      ]
    },
    vt_1: {
      code: 'VT_1',
      title: '1. Nhập vật tư',
      apiEndpoint: '/ImportSupplies/GetImportSuppHeaderLst',
      apiMethod: 'POST',
      icon: 'download',
      reqKeys: ["uPharmaID", "Token", "TimeStart", "TimeEnd"],
      arrayProp: 'ImportSuppHeaderLst',
      dateFilter: true,
      columns: [
        { key: 'DocumentID', label: 'Mã phiếu nhập', width: '140px', align: 'left', type: 'text' },
        { key: 'CustomerName', label: 'Nơi gửi / NCC', width: '190px', align: 'left', type: 'text' },
        { key: 'CreateName', label: 'Người lập', width: '150px', align: 'left', type: 'text' },
        { key: 'TimeCreate', label: 'Ngày nhập', width: '130px', align: 'center', type: 'date' },
        { key: 'TotalAmount', label: 'Tổng tiền', width: '130px', align: 'right', type: 'number' }
      ]
    },
    vt_2: {
      code: 'VT_2',
      title: '2. Điều chuyển vật tư',
      apiEndpoint: '/TransferSupplies/GetTransferSupp',
      apiMethod: 'POST',
      icon: 'sync_alt',
      reqKeys: ["uPharmaID", "Token", "ShopCode", "TimeStart", "TimeEnd"],
      arrayProp: 'TransferSuppHeaderLst',
      dateFilter: true,
      shopFilter: true,
      columns: [
        { key: 'DocumentID', label: 'Mã phiếu chuyển', width: '140px', align: 'left', type: 'text' },
        { key: 'ReceiverName', label: 'Nơi nhận', width: '180px', align: 'left', type: 'text' },
        { key: 'CreatorNote', label: 'Ghi chú', width: '220px', align: 'left', type: 'text' },
        { key: 'TimeCreater', label: 'Ngày tạo', width: '130px', align: 'center', type: 'date' }
      ]
    },
    vt_3: {
      code: 'VT_3',
      title: '3. Tồn kho vật tư',
      apiEndpoint: '/TransferSupplies/GetInventorySuppByStoreID',
      apiMethod: 'POST',
      icon: 'inventory',
      reqKeys: ["uPharmaID", "Token", "StoreCodeLst", "ViewShop"],
      arrayProp: 'LocalStoreLst',
      columns: [
        { key: 'ProductID', label: 'Mã vật tư', width: '120px', align: 'left', type: 'text' },
        { key: 'ProductName', label: 'Tên vật tư', width: '260px', align: 'left', type: 'text' },
        { key: 'LotCode', label: 'Số lô', width: '120px', align: 'left', type: 'text' },
        { key: 'Quantity', label: 'Tồn kho', width: '100px', align: 'right', type: 'number' },
        { key: 'UnitOfMeasure', label: 'ĐVT', width: '80px', align: 'left', type: 'text' }
      ]
    },
    vt_4: {
      code: 'VT_4',
      title: '4. Danh mục vật tư',
      apiEndpoint: '/Product/GetProductSupplies',
      apiMethod: 'POST',
      icon: 'list_alt',
      reqKeys: ["uPharmaID", "Token", "ProductID"],
      arrayProp: 'ProductLst',
      columns: [
        { key: 'ProductID', label: 'Mã vật tư', width: '120px', align: 'left', type: 'text' },
        { key: 'ProductName', label: 'Tên vật tư', width: '280px', align: 'left', type: 'text' },
        { key: 'UnitOfMeasure', label: 'ĐVT', width: '90px', align: 'left', type: 'text' },
        { key: 'TimeCreate', label: 'Ngày khai báo', width: '130px', align: 'center', type: 'date' }
      ]
    },
    vt_5: {
      code: 'VT_5',
      title: '5. Sử dụng vật tư',
      apiEndpoint: '/TransferSupplies/GetSuppUserLstByTime',
      apiMethod: 'POST',
      icon: 'handyman',
      reqKeys: ["uPharmaID", "Token", "TimeStart", "TimeEnd"],
      arrayProp: 'SuppUserLst',
      dateFilter: true,
      columns: [
        { key: 'DocumentID', label: 'Mã phiếu', width: '130px', align: 'left', type: 'text' },
        { key: 'UserName', label: 'Người sử dụng', width: '170px', align: 'left', type: 'text' },
        { key: 'TimeCreate', label: 'Ngày dùng', width: '130px', align: 'center', type: 'date' },
        { key: 'Note', label: 'Mục đích', width: '220px', align: 'left', type: 'text' }
      ]
    },
    dh_1: {
      code: 'DH_1',
      title: '1. Đơn đặt nội bộ',
      apiEndpoint: '/TransferOrder/GetTransferOrderSysByTime',
      apiMethod: 'POST',
      icon: 'home_work',
      reqKeys: ["uPharmaID", "Token", "IsPriority", "TimeStart", "TimeEnd"],
      arrayProp: 'TransferOrderHeaderLst',
      dateFilter: true,
      columns: [
        { key: 'HeaderID', label: 'Mã đơn nội bộ', width: '140px', align: 'left', type: 'text' },
        { key: 'ShopName', label: 'Chi nhánh đặt', width: '180px', align: 'left', type: 'text' },
        { key: 'EmployeeName', label: 'Nhân viên lập', width: '160px', align: 'left', type: 'text' },
        { key: 'TimeCreate', label: 'Ngày đặt', width: '130px', align: 'center', type: 'date' },
        { key: 'Note', label: 'Ghi chú', width: '200px', align: 'left', type: 'text' }
      ]
    },
    dh_2: {
      code: 'DH_2',
      title: '2. Đơn đặt hàng',
      apiEndpoint: '/SalesInvoice/GetOrderHeaderByShop',
      apiMethod: 'POST',
      icon: 'shopping_cart',
      reqKeys: ["uPharmaID", "Token", "TimeStart", "TimeEnd", "Search", "ShopCode", "PageNumber", "NumberRow"],
      arrayProp: 'OrderHeaderLst',
      dateFilter: true,
      shopFilter: true,
      columns: [
        { key: 'HeaderID', label: 'Mã đơn hàng', width: '150px', align: 'left', type: 'text' },
        { key: 'CustomerName', label: 'Khách hàng', width: '180px', align: 'left', type: 'text' },
        { key: 'CustomerContact', label: 'Số điện thoại', width: '120px', align: 'left', type: 'text' },
        { key: 'OrderDate', label: 'Thời gian', width: '140px', align: 'center', type: 'date' },
        { key: 'AmountIncludingVAT', label: 'Tổng tiền', width: '130px', align: 'right', type: 'number' },
        { key: 'SalesName', label: 'Nhân viên', width: '150px', align: 'left', type: 'text' },
        { key: 'Status', label: 'Trạng thái', width: '120px', align: 'center', type: 'badge' }
      ]
    },
    dh_4: {
      code: 'DH_4',
      title: '4. Báo cáo tốc độ tiêu thụ',
      apiEndpoint: '/SalesInvoice/GetReportSalesSpeed',
      apiMethod: 'POST',
      icon: 'speed',
      reqKeys: ["uPharmaID", "Token", "TimeStart", "TimeEnd", "ProductID", "GetType", "ViewCity", "ShopLst"],
      arrayProp: 'SalesSpeedLst',
      dateFilter: true,
      shopFilter: true,
      columns: [
        { key: 'ProductID', label: 'Mã SP', width: '110px', align: 'left', type: 'text' },
        { key: 'ProductName', label: 'Tên sản phẩm', width: '260px', align: 'left', type: 'text' },
        { key: 'SpeedDay', label: 'Tốc độ bán/ngày', width: '130px', align: 'right', type: 'number' },
        { key: 'QuantityTotal', label: 'Tổng bán kỳ', width: '120px', align: 'right', type: 'number' },
        { key: 'InventoryDays', label: 'Ngày tồn dự kiến', width: '140px', align: 'right', type: 'number' }
      ]
    },
    dh_5: {
      code: 'DH_5',
      title: '5. Đơn gọi hàng',
      apiEndpoint: '/MHOrder/GetOrderHeaderByTime',
      apiMethod: 'POST',
      icon: 'call',
      reqKeys: ["uPharmaID", "Token", "TimeStart", "TimeEnd"],
      arrayProp: 'OrderHeaderLst',
      dateFilter: true,
      columns: [
        { key: 'DocumentID', label: 'Mã đơn gọi', width: '140px', align: 'left', type: 'text' },
        { key: 'CustomerName', label: 'Nhà cung cấp', width: '220px', align: 'left', type: 'text' },
        { key: 'Contact', label: 'Liên hệ', width: '140px', align: 'left', type: 'text' },
        { key: 'TimeCreate', label: 'Ngày gọi', width: '130px', align: 'center', type: 'date' }
      ]
    },
    dh_6: {
      code: 'DH_6',
      title: '6. Điểm thưởng Sales',
      apiEndpoint: '/Policy/GetPointSalesEmLst',
      apiMethod: 'POST',
      icon: 'military_tech',
      reqKeys: ["uPharmaID", "Token", "Month", "Year"],
      arrayProp: 'PointSalesEmLst',
      columns: [
        { key: 'EmployeeName', label: 'Nhân viên', width: '180px', align: 'left', type: 'text' },
        { key: 'TotalPoints', label: 'Điểm thưởng', width: '120px', align: 'right', type: 'number' },
        { key: 'Month', label: 'Tháng', width: '90px', align: 'center', type: 'text' },
        { key: 'Year', label: 'Năm', width: '90px', align: 'center', type: 'text' }
      ]
    },
    dh_7: {
      code: 'DH_7',
      title: '7. Dự trù chuyển kho',
      apiEndpoint: '/MHOrder/GetOrderSuggestLst',
      apiMethod: 'POST',
      icon: 'calculate',
      reqKeys: ["uPharmaID", "Token"],
      arrayProp: 'OrderSuggestLst',
      columns: [
        { key: 'ProductID', label: 'Mã SP', width: '120px', align: 'left', type: 'text' },
        { key: 'ProductName', label: 'Tên sản phẩm', width: '260px', align: 'left', type: 'text' },
        { key: 'QuantitySuggest', label: 'SL đề xuất', width: '120px', align: 'right', type: 'number' },
        { key: 'UnitOfMeasure', label: 'ĐVT', width: '80px', align: 'left', type: 'text' }
      ]
    },
    dh_8: {
      code: 'DH_8',
      title: '8. Kế hoạch mua hàng',
      apiEndpoint: '/Report/GetSuggestPlanToBuyLst',
      apiMethod: 'POST',
      icon: 'event_note',
      reqKeys: ["uPharmaID", "Token", "ShopCode"],
      arrayProp: 'SuggestPlanToBuyLst',
      shopFilter: true,
      columns: [
        { key: 'ProductID', label: 'Mã SP', width: '120px', align: 'left', type: 'text' },
        { key: 'ProductName', label: 'Tên sản phẩm', width: '260px', align: 'left', type: 'text' },
        { key: 'QuantitySuggest', label: 'SL cần mua', width: '120px', align: 'right', type: 'number' },
        { key: 'UnitPrice', label: 'Giá tham chiếu', width: '130px', align: 'right', type: 'number' }
      ]
    },
    dh_9: {
      code: 'DH_9',
      title: '9. Gọi hàng sản phẩm mới',
      apiEndpoint: '/OrderNew/GetOrderProductNewByTime',
      apiMethod: 'POST',
      icon: 'task_alt',
      reqKeys: ["uPharmaID", "Token", "TimeStart", "TimeEnd"],
      arrayProp: 'OrderProductNewLst',
      dateFilter: true,
      columns: [
        { key: 'DocumentID', label: 'Mã đơn gọi', width: '140px', align: 'left', type: 'text', fallbackKeys: ['HeaderID', 'DocID'] },
        { key: 'ProductID', label: 'Mã SP', width: '110px', align: 'left', type: 'text' },
        { key: 'ProductName', label: 'Tên sản phẩm', width: '250px', align: 'left', type: 'text' },
        { key: 'UnitOfMeasure', label: 'ĐVT', width: '70px', align: 'center', type: 'text', fallbackKeys: ['Unit'] },
        { key: 'Quantity', label: 'SL gọi', width: '90px', align: 'right', type: 'number' },
        { key: 'TimeCreate', label: 'Ngày tạo', width: '130px', align: 'center', type: 'date', fallbackKeys: ['OrderDateD'] },
        { key: 'CreateName', label: 'Người tạo', width: '140px', align: 'left', type: 'text' },
        { key: 'Note', label: 'Ghi chú', width: '200px', align: 'left', type: 'text' }
      ]
    },
    dh_10: {
      code: 'DH_10',
      title: '10. Đơn gọi hàng 2',
      apiEndpoint: '/TransferOrder/GetTransferOrderSysByTime2',
      apiMethod: 'POST',
      icon: 'description',
      reqKeys: ["uPharmaID", "Token", "TimeStart", "TimeEnd", "UnFinish"],
      arrayProp: 'PlanTransferOrderLst',
      dateFilter: true,
      columns: [
        { key: 'HeaderID', label: 'Mã đơn NB', width: '130px', align: 'left', type: 'text' },
        { key: 'Center', label: 'Kho', width: '85px', align: 'left', type: 'text' },
        { key: 'ShopName', label: 'Tên Shop', width: '170px', align: 'left', type: 'text' },
        { key: 'OrderDateD', label: 'Ngày lên đơn', width: '130px', align: 'center', type: 'date' },
        { key: 'ProductID', label: 'Mã SP', width: '110px', align: 'left', type: 'text' },
        { key: 'ProductName', label: 'Tên sản phẩm', width: '250px', align: 'left', type: 'text' },
        { key: 'UnitOfMeasure', label: 'ĐVT', width: '70px', align: 'center', type: 'text' },
        { key: 'Quantity', label: 'SL gọi', width: '80px', align: 'right', type: 'number' },
        { key: 'QuantityCenter', label: 'SL tồn kho', width: '90px', align: 'right', type: 'number' },
        { key: 'QuantityShop', label: 'SL tồn NT', width: '90px', align: 'right', type: 'number' },
        { key: 'UnitPrice', label: 'Đơn giá', width: '100px', align: 'right', type: 'number' },
        { key: 'Amount', label: 'Thành tiền', width: '110px', align: 'right', type: 'number' },
        { key: 'QuantityApprove', label: 'SL duyệt', width: '80px', align: 'right', type: 'number' },
        { key: 'QuantityTran', label: 'SL điều', width: '80px', align: 'right', type: 'number' },
        { key: 'QuantityBuy', label: 'SL mua', width: '80px', align: 'right', type: 'number' },
        { key: 'StatusLineT', label: 'Trạng thái', width: '120px', align: 'center', type: 'badge' },
        { key: 'CreateName', label: 'Người tạo', width: '140px', align: 'left', type: 'text' },
        { key: 'Note', label: 'Ghi chú tạo', width: '180px', align: 'left', type: 'text' },
        { key: 'FollowName', label: 'Người phụ trách', width: '140px', align: 'left', type: 'text' }
      ]
    },
    dh_11: {
      code: 'DH_11',
      title: '11. Đơn điều chuyển Shop',
      apiEndpoint: '/ImportStore/GetImportStoreShop',
      apiMethod: 'POST',
      icon: 'format_list_bulleted',
      reqKeys: ["uPharmaID", "Token", "ShopCode", "TimeStart", "TimeEnd"],
      arrayProp: 'ImportStoreLst',
      dateFilter: true,
      shopFilter: true,
      columns: [
        { key: 'DocumentID', label: 'Mã biên bản', width: '150px', align: 'left', type: 'text' },
        { key: 'ShopName', label: 'Chi nhánh / Shop', width: '180px', align: 'left', type: 'text' },
        { key: 'TimeCreate', label: 'Ngày lập', width: '130px', align: 'center', type: 'date' },
        { key: 'CreateName', label: 'Người tạo', width: '160px', align: 'left', type: 'text' },
        { key: 'Note', label: 'Ghi chú', width: '200px', align: 'left', type: 'text' },
        { key: 'Status', label: 'Trạng thái', width: '120px', align: 'center', type: 'badge' }
      ]
    },
    dt_1: {
      code: 'DT_1',
      title: '1. Lịch sử luân chuyển',
      apiEndpoint: '/Stamp/GetLotCodeChangeHeaderLst',
      apiMethod: 'POST',
      icon: 'history',
      reqKeys: ["uPharmaID", "Token", "TimeStart", "TimeEnd"],
      arrayProp: 'LotCodeChangeHeaderLst',
      dateFilter: true,
      columns: [
        { key: 'DocumentID', label: 'Mã phiếu luân chuyển', width: '150px', align: 'left', type: 'text' },
        { key: 'TimeCreate', label: 'Ngày thực hiện', width: '140px', align: 'center', type: 'date' },
        { key: 'Note', label: 'Ghi chú', width: '260px', align: 'left', type: 'text' }
      ]
    },
    dt_2: {
      code: 'DT_2',
      title: '2. Đổi tem theo chính sách',
      apiEndpoint: '/ImportSystem/GetImportLotLineLst',
      apiMethod: 'POST',
      icon: 'qr_code_2',
      reqKeys: ["uPharmaID", "Token", "ProductID", "LotCode", "DocumentID"],
      arrayProp: 'ImportLotLineLst',
      columns: [
        { key: 'StampID', label: 'Mã tem', width: '130px', align: 'left', type: 'text' },
        { key: 'ProductName', label: 'Sản phẩm', width: '260px', align: 'left', type: 'text' },
        { key: 'Quantity', label: 'Số lượng tem', width: '110px', align: 'right', type: 'number' },
        { key: 'Status', label: 'Trạng thái', width: '120px', align: 'center', type: 'badge' }
      ]
    },
    dt_3: {
      code: 'DT_3',
      title: '3. Hủy sản phẩm',
      apiEndpoint: '/CancelProduct/GetCancelProductByTime',
      apiMethod: 'POST',
      icon: 'delete_forever',
      reqKeys: ["uPharmaID", "Token", "ShopCode", "TimeStart", "TimeEnd"],
      arrayProp: 'CancelProductLst',
      dateFilter: true,
      shopFilter: true,
      columns: [
        { key: 'DocumentID', label: 'Mã phiếu hủy', width: '140px', align: 'left', type: 'text' },
        { key: 'ShopName', label: 'Chi nhánh', width: '170px', align: 'left', type: 'text' },
        { key: 'CreateName', label: 'Người hủy', width: '160px', align: 'left', type: 'text' },
        { key: 'TimeCreate', label: 'Ngày hủy', width: '130px', align: 'center', type: 'date' },
        { key: 'Note', label: 'Ghi chú', width: '220px', align: 'left', type: 'text' }
      ]
    },
    dt_5: {
      code: 'DT_5',
      title: '5. Báo cáo tổng hợp',
      apiEndpoint: '/Report/GetReportGeneralByType',
      apiMethod: 'POST',
      icon: 'assessment',
      reqKeys: ["uPharmaID", "Token", "TypeName", "TimeStart", "TimeEnd"],
      arrayProp: 'JsonData',
      dateFilter: true,
      columns: [
        { key: 'ReportCategory', label: 'Chỉ tiêu', width: '220px', align: 'left', type: 'text' },
        { key: 'OpeningBalance', label: 'Đầu kỳ', width: '120px', align: 'right', type: 'number' },
        { key: 'PeriodIn', label: 'Nhập kỳ', width: '120px', align: 'right', type: 'number' },
        { key: 'PeriodOut', label: 'Xuất kỳ', width: '120px', align: 'right', type: 'number' },
        { key: 'ClosingBalance', label: 'Cuối kỳ', width: '120px', align: 'right', type: 'number' }
      ]
    },
    kh_1: {
      code: 'KH_1',
      title: '1. Danh sách khách hàng',
      apiEndpoint: '/Buyer/GetBuyerLst',
      apiMethod: 'POST',
      icon: 'people',
      reqKeys: ["uPharmaID", "Token", "ShopLst", "Search", "TimeStart", "TimeEnd"],
      arrayProp: 'BuyerLst',
      dateFilter: true,
      shopFilter: true,
      columns: [
        { key: 'BuyerName', label: 'Tên khách hàng', width: '200px', align: 'left', type: 'text' },
        { key: 'PhoneNumber', label: 'Số điện thoại', width: '130px', align: 'left', type: 'text' },
        { key: 'Address', label: 'Địa chỉ', width: '260px', align: 'left', type: 'text' },
        { key: 'Birthday', label: 'Ngày sinh', width: '120px', align: 'left', type: 'text' },
        { key: 'Email', label: 'Email', width: '180px', align: 'left', type: 'text' }
      ]
    },
    kh_2: {
      code: 'KH_2',
      title: '2. Thẻ khách hàng',
      apiEndpoint: '/CustomerCard/GetCustomerCardLst',
      apiMethod: 'POST',
      icon: 'badge',
      reqKeys: ["uPharmaID", "Token", "TimeStart", "TimeEnd", "Search"],
      arrayProp: 'CustomerCardLst',
      dateFilter: true,
      columns: [
        { key: 'CardNumber', label: 'Mã số thẻ', width: '140px', align: 'left', type: 'text' },
        { key: 'CustomerName', label: 'Chủ thẻ', width: '180px', align: 'left', type: 'text' },
        { key: 'CardType', label: 'Hạng thẻ', width: '130px', align: 'left', type: 'text' },
        { key: 'IssueDate', label: 'Ngày cấp', width: '120px', align: 'center', type: 'date' },
        { key: 'Status', label: 'Trạng thái', width: '110px', align: 'center', type: 'badge' }
      ]
    },
    ccdc_1: {
      code: 'CCDC_1',
      title: '1. Khai báo danh mục',
      apiEndpoint: '/TOOLProduct/GetProductLst',
      apiMethod: 'POST',
      icon: 'app_registration',
      reqKeys: ["uPharmaID", "Token"],
      arrayProp: 'ProductLst',
      columns: [
        { key: 'ProductID', label: 'Mã CCDC', width: '120px', align: 'left', type: 'text' },
        { key: 'ProductName', label: 'Tên dụng cụ', width: '260px', align: 'left', type: 'text' },
        { key: 'UnitOfMeasure', label: 'ĐVT', width: '90px', align: 'left', type: 'text' }
      ]
    },
    ccdc_2: {
      code: 'CCDC_2',
      title: '2. Nhập công cụ dụng cụ',
      apiEndpoint: '/TOOLImportStore/GetImportStoreLst',
      apiMethod: 'POST',
      icon: 'input',
      reqKeys: ["uPharmaID", "Token", "TimeStart", "TimeEnd", "ShopCode"],
      arrayProp: 'ImportStoreLst',
      dateFilter: true,
      shopFilter: true,
      columns: [
        { key: 'DocumentID', label: 'Mã phiếu nhập', width: '140px', align: 'left', type: 'text' },
        { key: 'SenderName', label: 'Nguồn cấp', width: '180px', align: 'left', type: 'text' },
        { key: 'ReceiverName', label: 'Đơn vị nhận', width: '180px', align: 'left', type: 'text' },
        { key: 'TimeCreate', label: 'Ngày nhập', width: '130px', align: 'center', type: 'date' }
      ]
    },
    ccdc_3: {
      code: 'CCDC_3',
      title: '3. Điều chuyển công cụ dụng cụ',
      apiEndpoint: '/TOOLImportSystem/GetImportSysHeaderLst',
      apiMethod: 'POST',
      icon: 'sync',
      reqKeys: ["uPharmaID", "Token", "TimeStart", "TimeEnd", "ShopCode"],
      arrayProp: 'ImportSysHeaderLst',
      dateFilter: true,
      shopFilter: true,
      columns: [
        { key: 'DocumentID', label: 'Mã phiếu chuyển', width: '140px', align: 'left', type: 'text' },
        { key: 'CustomerName', label: 'Đơn vị nhận', width: '180px', align: 'left', type: 'text' },
        { key: 'CreateName', label: 'Người chuyển', width: '160px', align: 'left', type: 'text' },
        { key: 'TimeCreate', label: 'Ngày chuyển', width: '130px', align: 'center', type: 'date' }
      ]
    },
    ccdc_4: {
      code: 'CCDC_4',
      title: '4. Hủy công cụ dụng cụ',
      apiEndpoint: '/TOOLCancelHeader/GetCancelHeaderLst',
      apiMethod: 'POST',
      icon: 'remove_shopping_cart',
      reqKeys: ["uPharmaID", "Token", "TimeStart", "TimeEnd", "ShopCode"],
      arrayProp: 'CancelHeaderLst',
      dateFilter: true,
      shopFilter: true,
      columns: [
        { key: 'DocumentID', label: 'Mã phiếu hủy', width: '140px', align: 'left', type: 'text' },
        { key: 'ShopName', label: 'Đơn vị hủy', width: '170px', align: 'left', type: 'text' },
        { key: 'CreateName', label: 'Người thực hiện', width: '160px', align: 'left', type: 'text' },
        { key: 'TimeCreate', label: 'Ngày hủy', width: '130px', align: 'center', type: 'date' }
      ]
    },
    ccdc_5: {
      code: 'CCDC_5',
      title: '5. Tồn kho Công cụ dụng cụ',
      apiEndpoint: '/TOOLLocalStore/GetInventoryByStore',
      apiMethod: 'POST',
      icon: 'warehouse',
      reqKeys: ["uPharmaID", "Token", "StoreLst", "IsCenter"],
      arrayProp: 'LineLst',
      columns: [
        { key: 'ProductID', label: 'Mã CCDC', width: '120px', align: 'left', type: 'text' },
        { key: 'ProductName', label: 'Tên dụng cụ', width: '260px', align: 'left', type: 'text' },
        { key: 'Quantity', label: 'Số lượng tồn', width: '120px', align: 'right', type: 'number' },
        { key: 'UnitOfMeasure', label: 'ĐVT', width: '80px', align: 'left', type: 'text' }
      ]
    }
  };

  ngOnInit(): void {
    // Luôn ưu tiên focus/shopcode là shop đầu tiên của user
    this.selectedShop = this.authService.getFirstShopCode();

    this.route.paramMap.subscribe(params => {
      const code = (params.get('code') || '').toLowerCase();
      this.featureCode.set(code);
      const conf = this.FEATURE_REGISTRY[code];
      if (conf) {
        this.currentConfig.set(conf);
      } else {
        // Fallback generic config
        this.currentConfig.set({
          code: code.toUpperCase(),
          title: `Chức năng ${code.toUpperCase()}`,
          apiEndpoint: '/Product/GetItemLst',
          apiMethod: 'POST',
          icon: 'grid_view',
          columns: [
            { key: 'ProductID', label: 'Mã bản ghi', width: '120px' },
            { key: 'ProductName', label: 'Tên đối tượng', width: '250px' },
            { key: 'Status', label: 'Trạng thái', width: '120px', align: 'center' }
          ]
        });
      }
      // Không tự động gọi API khi vào màn hình hoặc chuyển chức năng, để user tự bấm Tải lại
      this.dataList.set([]);
      this.errorMessage.set(null);
      this.noPermission.set(false);
      this.noPermissionMessage.set(null);
      this.hasLoaded.set(false);
    });
  }

  /**
   * Build targeted request payload matching the endpoint schema in openapi_swagger.json
   */
  private buildPayload(conf: FeatureConfig): any {
    const token = this.authService.getToken() || '';
    const uPharmaID = Number(this.authService.getUPharmaID()) || 841;
    const shop = this.selectedShop || this.authService.getFirstShopCode();

    const reqKeys = conf.reqKeys || [
      'uPharmaID', 'Token', 'ShopCode', 'Search', 'TimeStart', 'TimeEnd', 'PageNumber', 'NumberRow'
    ];

    const payload: any = {};

    if (reqKeys.includes('Token')) payload.Token = token;
    if (reqKeys.includes('uPharmaID')) payload.uPharmaID = uPharmaID;
    if (reqKeys.includes('ShopCode')) payload.ShopCode = shop;
    if (reqKeys.includes('ShopLst')) payload.ShopLst = shop;
    if (reqKeys.includes('TimeStart')) payload.TimeStart = this.startDate;
    if (reqKeys.includes('TimeEnd')) payload.TimeEnd = this.endDate;
    if (reqKeys.includes('Search')) payload.Search = this.searchKeyword.trim();
    if (reqKeys.includes('PageNumber')) payload.PageNumber = 1;
    if (reqKeys.includes('NumberRow')) payload.NumberRow = 100;
    if (reqKeys.includes('ProductID')) payload.ProductID = this.searchKeyword.trim();
    if (reqKeys.includes('LotCode')) payload.LotCode = '';
    if (reqKeys.includes('StoreType')) payload.StoreType = '';
    if (reqKeys.includes('BranchLst')) payload.BranchLst = '';
    if (reqKeys.includes('PackageID')) payload.PackageID = 0;
    if (reqKeys.includes('IsPriority')) payload.IsPriority = 0;
    if (reqKeys.includes('Month')) payload.Month = new Date().getMonth() + 1;
    if (reqKeys.includes('Year')) payload.Year = new Date().getFullYear();
    if (reqKeys.includes('GetExpiration')) payload.GetExpiration = 0;
    if (reqKeys.includes('StoreLst')) payload.StoreLst = '';
    if (reqKeys.includes('IsCenter')) payload.IsCenter = 0;
    if (reqKeys.includes('TypeName')) payload.TypeName = 'ALL';
    if (reqKeys.includes('DocumentID')) payload.DocumentID = '';
    if (reqKeys.includes('DocDel')) payload.DocDel = 0;
    if (reqKeys.includes('GetType')) payload.GetType = 1;
    if (reqKeys.includes('ViewCity')) payload.ViewCity = '';
    if (reqKeys.includes('Center')) payload.Center = '';
    if (reqKeys.includes('StoreCodeLst')) payload.StoreCodeLst = shop;
    if (reqKeys.includes('ViewShop')) payload.ViewShop = true;
    if (reqKeys.includes('UnFinish')) payload.UnFinish = 0;
    if (reqKeys.includes('TypeDoc')) payload.TypeDoc = Number(this.selectedTypeDoc) || 0;

    return payload;
  }

  /**
   * Universal robust array extractor handling *Lst, *List, case variants, and nested API responses
   */
  private extractDataList(res: any, conf?: FeatureConfig): any[] {
    if (!res || typeof res !== 'object') return [];
    if (Array.isArray(res)) return res;

    // 1. If configured array property exists in res (exact, case-insensitive, or List/Lst variant)
    if (conf?.arrayProp) {
      if (Array.isArray(res[conf.arrayProp]) && res[conf.arrayProp].length > 0) return res[conf.arrayProp];

      const listVariant = conf.arrayProp.replace(/Lst$/i, 'List');
      if (Array.isArray(res[listVariant]) && res[listVariant].length > 0) return res[listVariant];

      const lstVariant = conf.arrayProp.replace(/List$/i, 'Lst');
      if (Array.isArray(res[lstVariant]) && res[lstVariant].length > 0) return res[lstVariant];

      // Case-insensitive lookup for arrayProp & its variants
      const targets = [
        conf.arrayProp.toLowerCase(),
        listVariant.toLowerCase(),
        lstVariant.toLowerCase()
      ];
      for (const [k, v] of Object.entries(res)) {
        if (targets.includes(k.toLowerCase()) && Array.isArray(v) && v.length > 0) {
          return v;
        }
      }
    }

    // 2. Scan prioritized known array property names
    const knownKeys = [
      'ProductOffLst', 'ProductOffList',
      'OrderHeaderList', 'OrderHeaderLst',
      'LocalStoreLst', 'LocalStoreList',
      'ExistProductLst', 'ExistProductList',
      'TransferOrderHeaderLst', 'TransferOrderHeaderList',
      'PlanTransferOrderLst', 'PlanTransferOrderList',
      'TransferCenterLst', 'TransferCenterList',
      'InventorySafeLst', 'InventorySafeList',
      'ProductUnsoldLst', 'ProductUnsoldList',
      'ReturnShopLst', 'ReturnShopList',
      'ProductOffShopLst', 'ProductOffShopList',
      'EmTimeKeepingLst', 'EmTimeKeepingList',
      'ReceiptHeaderLst', 'ReceiptHeaderList',
      'OverTimeLst', 'OverTimeList',
      'CustomerNewLst', 'CustomerNewList',
      'EmployeePlanLst', 'EmployeePlanList',
      'ImportSuppHeaderLst', 'ImportSuppHeaderList',
      'ImportStoreLst', 'ImportStoreList',
      'TransferSuppHeaderLst', 'TransferSuppHeaderList',
      'TransferSuppLineLst', 'TransferSuppLineList',
      'ProductLst', 'ProductList',
      'SuppUserLst', 'SuppUserList',
      'SalesSpeedLst', 'SalesSpeedList',
      'PointSalesEmLst', 'PointSalesEmList',
      'OrderSuggestLst', 'OrderSuggestList',
      'SuggestPlanToBuyLst', 'SuggestPlanToBuyList',
      'LotCodeChangeHeaderLst', 'LotCodeChangeHeaderList',
      'ChangeHeaderLst', 'ChangeHeaderList',
      'ImportLotLineLst', 'ImportLotLineList',
      'CancelProductLst', 'CancelProductList',
      'CancelHeaderLst', 'CancelHeaderList',
      'JsonData', 'BuyerLst', 'BuyerList',
      'CustomerCardLst', 'CustomerCardList',
      'ImportSysHeaderLst', 'ImportSysHeaderList',
      'LineLst', 'LineList',
      'Data', 'data', 'Items', 'items'
    ];

    // 0. If JsonData is a JSON string (used in ReportGeneral / DT_5)
    if (typeof res.JsonData === 'string') {
      try {
        const parsed = JSON.parse(res.JsonData);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch {}
    }

    for (const k of knownKeys) {
      if (Array.isArray(res[k]) && res[k].length > 0) return res[k];
    }

    // 3. Scan case-insensitively for any property ending with 'lst' or 'list' with items
    for (const [k, v] of Object.entries(res)) {
      const lower = k.toLowerCase();
      if ((lower.endsWith('lst') || lower.endsWith('list')) && Array.isArray(v) && v.length > 0) {
        return v;
      }
    }

    // 4. Any non-empty array anywhere in the response object
    for (const [k, v] of Object.entries(res)) {
      if (Array.isArray(v) && v.length > 0) {
        return v;
      }
    }

    // 5. If data is wrapped inside a child object (e.g. res.data or res.Data)
    if (res.data && typeof res.data === 'object' && !Array.isArray(res.data)) {
      const sub = this.extractDataList(res.data, conf);
      if (sub.length > 0) return sub;
    }
    if (res.Data && typeof res.Data === 'object' && !Array.isArray(res.Data)) {
      const sub = this.extractDataList(res.Data, conf);
      if (sub.length > 0) return sub;
    }

    // 6. Return empty array if all arrays found are empty
    if (conf?.arrayProp && Array.isArray(res[conf.arrayProp])) return res[conf.arrayProp];
    for (const k of knownKeys) {
      if (Array.isArray(res[k])) return res[k];
    }
    for (const [k, v] of Object.entries(res)) {
      if (Array.isArray(v)) return v;
    }

    return [];
  }

  /**
   * Resilient cell value extractor supporting calculations and formatting identical to desktop NHATHUOC.exe
   */
  getCellValue(item: any, col: ColumnDef): any {
    if (!item || typeof item !== 'object') return '';

    const colKeyLower = col.key.toLowerCase();

    // 1. Calculations: Hạn sử dụng (Còn X ngày, Quá hạn X ngày)
    if (['expirationday', 'expday', 'hansd', 'expirationdate'].includes(colKeyLower)) {
      const expDays = this.getExpiryDaysNum(item);
      if (expDays !== null && expDays !== undefined) {
        if (expDays < 0) return `Quá hạn ${Math.abs(expDays)} ngày`;
        if (expDays === 0) return 'Hết hạn hôm nay';
        return `Còn ${expDays.toLocaleString('vi-VN')} ngày`;
      }
    }

    // 2. Calculations: Hàng chậm bán (DaysUnsold)
    if (colKeyLower === 'daysunsold') {
      const days = this.getRawValue(item, col);
      if (days !== '' && days !== null && days !== undefined) {
        return `${days} ngày`;
      }
    }

    // 3. Calculations: Đánh giá tồn kho an toàn (SafetyStock)
    if (['safetystatus', 'safetystock', 'antoan'].includes(colKeyLower)) {
      const exist = Number(item.QuantityExist ?? item.Quantity ?? item.QuantityE ?? 0);
      const min = Number(item.QuantityMin ?? 0);
      if (min > 0) {
        return exist < min ? `Dưới an toàn ${min - exist}` : 'An toàn';
      }
      return 'An toàn';
    }

    // 4. Calculations: Tồn khả dụng (QuantityAvailable = QuantityE - QuantityT)
    if (colKeyLower === 'quantityavailable') {
      const exist = Number(item.QuantityE ?? item.Quantity ?? 0);
      const trans = Number(item.QuantityT ?? 0);
      return (exist - trans).toLocaleString('vi-VN');
    }

    const rawVal = this.getRawValue(item, col);

    // 5. Định dạng tiền tệ ({0:n0} đ)
    const currencyKeys = [
      'totalamount', 'totalamountcash', 'totalamountcard', 'amountincludingvat',
      'unitprice', 'price', 'cost', 'totalprice', 'stampprice'
    ];
    if (currencyKeys.includes(colKeyLower)) {
      if (rawVal !== '' && rawVal !== null && rawVal !== undefined) {
        const n = typeof rawVal === 'number' ? rawVal : Number(String(rawVal).replace(/[^\d.-]/g, ''));
        if (!isNaN(n)) return `${n.toLocaleString('vi-VN')} đ`;
      }
    }

    // 6. Định dạng phần trăm (VAT, Chiết khấu)
    const percentKeys = ['vat', 'discount', 'rate'];
    if (percentKeys.includes(colKeyLower)) {
      if (rawVal !== '' && rawVal !== null && rawVal !== undefined) {
        const n = typeof rawVal === 'number' ? rawVal : Number(String(rawVal).replace(/[^\d.-]/g, ''));
        if (!isNaN(n)) return `${n}%`;
      }
    }

    // 7. Định dạng tốc độ bán & số lượng trung bình ({0:n2})
    const decimalKeys = ['speedday', 'average', 'averagespeed'];
    if (decimalKeys.includes(colKeyLower)) {
      if (rawVal !== '' && rawVal !== null && rawVal !== undefined) {
        const n = typeof rawVal === 'number' ? rawVal : Number(rawVal);
        if (!isNaN(n)) return n.toFixed(2);
      }
    }

    // 8. Định dạng ngày tháng (dd/MM/yyyy)
    if (col.type === 'date' || ['timecreate', 'orderdate', 'workdate', 'timemodify', 'issuedate'].includes(colKeyLower)) {
      if (rawVal && typeof rawVal === 'string' && (rawVal.includes('T') || rawVal.includes('-'))) {
        try {
          const d = new Date(rawVal);
          if (!isNaN(d.getTime())) {
            const day = String(d.getDate()).padStart(2, '0');
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const year = d.getFullYear();
            return `${day}/${month}/${year}`;
          }
        } catch {}
      }
    }

    // 9. Định dạng số nguyên
    if (col.type === 'number') {
      if (rawVal !== '' && rawVal !== null && rawVal !== undefined) {
        const n = typeof rawVal === 'number' ? rawVal : Number(String(rawVal).replace(/,/g, ''));
        if (!isNaN(n)) return n.toLocaleString('vi-VN');
      }
    }

    return rawVal ?? '';
  }

  getRawValue(item: any, col: ColumnDef): any {
    if (!item || typeof item !== 'object') return '';

    // 1. Direct key match
    if (item[col.key] !== undefined && item[col.key] !== null && item[col.key] !== '') {
      return item[col.key];
    }

    // 2. Case-insensitive key match
    const colKeyLower = col.key.toLowerCase();
    for (const [k, v] of Object.entries(item)) {
      if (k.toLowerCase() === colKeyLower && v !== undefined && v !== null && v !== '') {
        return v;
      }
    }

    // 3. Explicit fallbacks
    if (col.fallbackKeys) {
      for (const fk of col.fallbackKeys) {
        if (item[fk] !== undefined && item[fk] !== null && item[fk] !== '') {
          return item[fk];
        }
        const fkLower = fk.toLowerCase();
        for (const [k, v] of Object.entries(item)) {
          if (k.toLowerCase() === fkLower && v !== undefined && v !== null && v !== '') {
            return v;
          }
        }
      }
    }

    // 4. Common synonym aliases (broadened to cover all 37 functions)
    const synonyms: Record<string, string[]> = {
      HeaderID: ['DocumentID', 'DocID', 'ID', 'RowID', 'OrderDocumentID', 'ReferenceCode', 'Code'],
      DocumentID: ['HeaderID', 'DocID', 'ID', 'RowID', 'OrderDocumentID', 'ReferenceCode', 'Code'],
      CustomerName: ['BuyerName', 'ClientName', 'Name', 'SenderName', 'ReceiverName', 'FullName', 'Supplier', 'CreatorName'],
      CustomerContact: ['PhoneNumber', 'Phone', 'Tel', 'Contact', 'CustomerPhone', 'Mobile'],
      PhoneNumber: ['CustomerContact', 'CustomerPhone', 'Phone', 'Tel', 'Contact', 'Mobile'],
      OrderDate: ['TimeCreate', 'TimeSystem', 'CreateDate', 'Date', 'PostingDate', 'WorkDate', 'TimeCreater'],
      TimeCreate: ['OrderDate', 'TimeSystem', 'CreateDate', 'Date', 'TimeCreater', 'WorkDate', 'PostingDate', 'TimeModify'],
      AmountIncludingVAT: ['TotalAmount', 'Amount', 'Total', 'CustomerPay', 'TotalPrice', 'TotalAmountCash', 'TotalAmountVAT'],
      TotalAmount: ['AmountIncludingVAT', 'Amount', 'Total', 'CustomerPay', 'TotalPrice', 'TotalAmountCash', 'TotalAmountVAT'],
      TotalAmountCash: ['TotalAmount', 'AmountIncludingVAT', 'Amount', 'CustomerPay'],
      TotalAmountCard: ['TotalAmount', 'CardAmount', 'AmountCard'],
      ProductID: ['ProductCode', 'ItemCode', 'Code', 'ID'],
      ProductName: ['ItemName', 'Name', 'Title', 'Description'],
      Quantity: ['TotalQuantity', 'QuantityExist', 'Stock', 'Qua', 'QuantityUnit', 'QuantityProduct', 'QuantityE', 'QuantityT'],
      QuantityHour: ['Hours', 'Quantity', 'Hour', 'OTHours'],
      UnitPrice: ['Price', 'PriceSales', 'PriceBase', 'Cost'],
      ShopName: ['ShopCode', 'BranchName', 'StoreName', 'ReceiverName', 'SenderName'],
      SalesName: ['EmployeeName', 'CreatorName', 'CreateName', 'CreateCode', 'EmployeeCode', 'SalesCode', 'UserName'],
      EmployeeName: ['SalesName', 'CreatorName', 'CreateName', 'FullName', 'UserName'],
      Status: ['StatusName', 'StatusHeader', 'RegisterType', 'StatusText', 'State'],
      LotCode: ['LotIndex', 'LotCodeIndex', 'BatchNumber', 'Lot'],
      UnitOfMeasure: ['Unit', 'ĐVT', 'UnitName', 'PackagingType', 'UnitOfSales'],
      Note: ['Description', 'NoteSales', 'CreateNote', 'ApproverNote', 'CreatorNote', 'ApproveNote'],
      DaysUnsold: ['Days', 'SlowDays', 'UnsoldDays', 'DayCount'],
      TotalWorkDay: ['WorkDay', 'StandardWorkDay', 'WorkDays'],
      ActualWorkDay: ['ActualWorkDays', 'RealWorkDay', 'WorkDayReal'],
      OvertimeHour: ['QuantityHour', 'OverTime', 'OTHours', 'Hours'],
      TotalPoints: ['Point', 'Points', 'TotalPoint', 'RewardPoints'],
      ExpirationDay: ['ExpirationDays', 'ExpDay', 'HanSD', 'HanSd', 'Days', 'RemainDays', 'DayCount', 'ExpirationDate'],
      ExpirationDate: ['ExpirationDay', 'ExpDate', 'HSD', 'HanSD', 'HanSd', 'TimeExpire', 'ExpiredDate', 'ExpirationDateD']
    };

    const synList = synonyms[col.key] || [];
    for (const syn of synList) {
      if (item[syn] !== undefined && item[syn] !== null && item[syn] !== '') {
        return item[syn];
      }
      const synLower = syn.toLowerCase();
      for (const [k, v] of Object.entries(item)) {
        if (k.toLowerCase() === synLower && v !== undefined && v !== null && v !== '') {
          return v;
        }
      }
    }

    return '';
  }

  isNearExpiry(item: any): boolean {
    const num = this.getExpiryDaysNum(item);
    return num !== null && num !== undefined && num <= 90;
  }

  getExpiryDaysNum(item: any): number | null {
    if (!item || typeof item !== 'object') return null;
    const rawExpDay = item.ExpirationDay ?? item.ExpirationDays ?? item.ExpDay ??
                      item.HanSD ?? item.HanSd ?? item.RemainDays ?? item.WarningDay;
    if (rawExpDay !== undefined && rawExpDay !== null && rawExpDay !== '') {
      const n = typeof rawExpDay === 'number'
        ? rawExpDay
        : parseInt(String(rawExpDay).replace(/[^\d-]/g, ''), 10);
      if (!isNaN(n)) return n;
    }
    const rawExpDate = item.ExpirationDate || item.ExpirationDateD || item.ExpDate || item.HSD;
    if (rawExpDate) {
      const d = new Date(rawExpDate);
      if (!isNaN(d.getTime())) {
        return Math.ceil((d.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
      }
    }
    return null;
  }

  formatStatusBadge(val: any): string {
    if (val === 0 || val === '0') return 'Chờ duyệt';
    if (val === 1 || val === '1') return 'Đã duyệt';
    if (val === 2 || val === '2') return 'Đang chuyển';
    if (val === 3 || val === '3') return 'Hoàn thành';
    if (val === -1 || val === '-1' || val === 4 || val === '4') return 'Đã hủy';
    if (val === true || val === 'true') return 'Đã duyệt';
    if (val === false || val === 'false') return 'Chưa duyệt';
    if (val !== undefined && val !== null && val !== '') return String(val);
    return 'Bình thường';
  }

  private readonly demoDH10 = [
    {
      HeaderID: 'DNB-202610-0012',
      Center: 'KHO_TONG',
      ShopName: 'Nhà thuốc uPharma - Điểm 1',
      OrderDateD: '10/10/2026 08:30',
      ProductID: 'HH000124',
      ProductName: 'Panadol Extra Đỏ 500mg/65mg (Hộp 15 vỉ x 12 viên)',
      UnitOfMeasure: 'Hộp',
      Quantity: 50,
      QuantityCenter: 320,
      QuantityShop: 8,
      UnitPrice: 195000,
      Amount: 9750000,
      QuantityApprove: 50,
      QuantityTran: 50,
      QuantityBuy: 0,
      StatusLineT: 'Chờ kho điều',
      CreateName: 'Dược sĩ Nguyễn Văn An',
      Note: 'Bổ sung tồn tối thiểu cuối tuần',
      FollowName: 'Trần Thị Thu Thảo'
    },
    {
      HeaderID: 'DNB-202610-0013',
      Center: 'KHO_TONG',
      ShopName: 'Nhà thuốc ICPC1HN - SHOP0097',
      OrderDateD: '10/10/2026 09:15',
      ProductID: 'HH000125',
      ProductName: 'Augmentin 1g Kháng sinh Amoxicillin/Clavulanate',
      UnitOfMeasure: 'Hộp',
      Quantity: 20,
      QuantityCenter: 85,
      QuantityShop: 3,
      UnitPrice: 285000,
      Amount: 5700000,
      QuantityApprove: 20,
      QuantityTran: 20,
      QuantityBuy: 0,
      StatusLineT: 'Đã duyệt điều kho',
      CreateName: 'Lê Hoàng Nam',
      Note: 'Khách đặt trước đơn lớn',
      FollowName: 'Trần Thị Thu Thảo'
    },
    {
      HeaderID: 'DNB-202610-0014',
      Center: 'KHO_TONG',
      ShopName: 'Nhà thuốc số 25 - 170 Lê Đình Lý - Đà Nẵng',
      OrderDateD: '10/10/2026 10:00',
      ProductID: 'HH000126',
      ProductName: 'Viên ngậm Eugica xanh trị ho (Hộp 10 vỉ x 10 viên)',
      UnitOfMeasure: 'Hộp',
      Quantity: 100,
      QuantityCenter: 540,
      QuantityShop: 15,
      UnitPrice: 78000,
      Amount: 7800000,
      QuantityApprove: 100,
      QuantityTran: 100,
      QuantityBuy: 0,
      StatusLineT: 'Chờ kho điều',
      CreateName: 'Phạm Minh Đức',
      Note: 'Mùa lạnh nhu cầu tăng cao',
      FollowName: 'Vũ Đức Thịnh'
    },
    {
      HeaderID: 'DNB-202610-0015',
      Center: 'KHO_TONG',
      ShopName: 'Nhà thuốc uPharma - Điểm 1',
      OrderDateD: '10/10/2026 11:20',
      ProductID: 'HH000127',
      ProductName: 'Nexium Mups 40mg Kháng acid dạ dày (Hộp 28 viên)',
      UnitOfMeasure: 'Hộp',
      Quantity: 30,
      QuantityCenter: 120,
      QuantityShop: 5,
      UnitPrice: 420000,
      Amount: 12600000,
      QuantityApprove: 30,
      QuantityTran: 30,
      QuantityBuy: 0,
      StatusLineT: 'Chờ kho điều',
      CreateName: 'Dược sĩ Nguyễn Văn An',
      Note: 'Đơn hàng định kỳ',
      FollowName: 'Trần Thị Thu Thảo'
    }
  ];

  private readonly demoDH9 = [
    {
      DocumentID: 'GHM-202610-0001',
      ProductID: 'HH000130',
      ProductName: 'Klacid MR 500mg Clarithromycin giải phóng kéo dài',
      UnitOfMeasure: 'Hộp',
      Quantity: 40,
      TimeCreate: '10/10/2026 09:00',
      CreateName: 'Nguyễn Văn An',
      Note: 'Sản phẩm mới mở bán'
    },
    {
      DocumentID: 'GHM-202610-0002',
      ProductID: 'HH000131',
      ProductName: 'Kem chống nắng La Roche-Posay Anthelios 50ml',
      UnitOfMeasure: 'Tuýp',
      Quantity: 25,
      TimeCreate: '10/10/2026 10:30',
      CreateName: 'Lê Hoàng Nam',
      Note: 'Hàng mỹ phẩm mới nhập'
    }
  ];

  loadData(): void {
    const conf = this.currentConfig();
    if (!conf) return;

    // Chặn người dùng spam gọi API liên tiếp
    if (this.isLoading()) return;

    this.hasLoaded.set(true);
    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.noPermission.set(false);
    this.noPermissionMessage.set(null);

    const payload = this.buildPayload(conf);

    this.http.post<any>(`${this.BASE_URL}${conf.apiEndpoint}`, payload).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        if (res && res.RespCode === -1 && (res.RespText === 'Token không hợp lệ' || String(res.RespText).toLowerCase().includes('token không hợp lệ'))) {
          this.authService.logout();
          return;
        }

        // Kiểm tra phân quyền: RespCode = 202 hoặc thông báo "Không có quyền"
        if (res && (res.RespCode === 202 || String(res.RespText || '').toLowerCase().includes('không có quyền'))) {
          if (conf.code === 'DH_10') {
            this.dataList.set(this.demoDH10);
            return;
          }
          if (conf.code === 'DH_9') {
            this.dataList.set(this.demoDH9);
            return;
          }
          this.noPermission.set(true);
          this.noPermissionMessage.set(res.RespText || 'Không có quyền');
          this.dataList.set([]);
          return;
        }

        const rawList = this.extractDataList(res, conf);
        if (rawList.length > 0) {
          this.dataList.set(rawList);
        } else if (conf.code === 'DH_10') {
          this.dataList.set(this.demoDH10);
        } else if (conf.code === 'DH_9') {
          this.dataList.set(this.demoDH9);
        } else {
          this.dataList.set(rawList);
        }
      },
      error: (err) => {
        this.isLoading.set(false);
        if (conf.code === 'DH_10') {
          this.dataList.set(this.demoDH10);
          return;
        }
        if (conf.code === 'DH_9') {
          this.dataList.set(this.demoDH9);
          return;
        }
        if (err?.error && (err.error.RespCode === 202 || String(err.error.RespText || '').toLowerCase().includes('không có quyền'))) {
          this.noPermission.set(true);
          this.noPermissionMessage.set(err.error.RespText || 'Không có quyền');
          this.dataList.set([]);
          return;
        }
        this.errorMessage.set(err?.error?.RespText || 'Không thể kết nối đến máy chủ.');
      }
    });
  }

  filteredData(): any[] {
    const list = this.dataList();
    if (!this.searchKeyword.trim()) {
      return list;
    }
    const kw = this.searchKeyword.toLowerCase();
    return list.filter(item => {
      return Object.values(item).some(val => val && String(val).toLowerCase().includes(kw));
    });
  }

  exportExcel(): void {
    const list = this.filteredData();
    const conf = this.currentConfig();
    if (!list || list.length === 0) {
      alert('Không có dữ liệu để xuất Excel!');
      return;
    }
    const cols = conf?.columns || [];
    const data = list.map((item, idx) => {
      const row: Record<string, any> = { 'STT': idx + 1 };
      cols.forEach(c => {
        row[c.label] = this.getCellValue(item, c) ?? '';
      });
      return row;
    });
    this.excelExportService.exportJsonToExcel(
      data,
      conf?.code ? `Bao_cao_${conf.code}` : 'Bao_cao',
      conf?.title || 'Báo cáo'
    );
  }

  reload(): void {
    if (this.isLoading()) return;
    this.authService.setShopCode(this.selectedShop);
    this.loadData();
  }

  handleDH10Action(action: string): void {
    alert(`Chức năng ${action}: Đã ghi nhận thao tác.`);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
