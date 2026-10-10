# UPHARMA - HỆ THỐNG QUẢN LÝ NHÀ THUỐC (ANGULAR WEB VERSION)

Dự án chuyển đổi toàn diện từ **Hệ thống Nhà Thuốc Desktop (WinForms DevExpress)** sang nền tảng **Website SPA hiện đại bằng Angular**.

---

## 🚀 ĐẶC ĐIỂM NỔI BẬT

1. **Khớp 100% với CSDL & OpenAPI (`openapi_swagger.json`)**:
   - Toàn bộ **657 API endpoints** và **194 Schemas / DTOs** đã được chuyển hóa thành các TypeScript Model và Angular Api Services có type-safe.
   - Thư mục `src/app/core/services/api/` chứa 78 service API phân nhóm chuẩn: `SalesInvoice`, `PolicyPrice`, `Warehouse`, `ImportStore`, `ConnectFast`, `ConnectSYT`, `Buyer`, `Supplier`...

2. **Giao diện đa tab (Tabbed MDI Layout)**:
   - Tái hiện trải nghiệm mở đồng thời nhiều tab làm việc độc lập của Desktop App: Dược sĩ có thể vừa mở tab **Quầy Bán Thuốc (POS)**, vừa mở tab **Cài Đặt Giá Bán**, vừa mở tab **Kiểm Kê Kho** mà không bị mất dữ liệu.

3. **Core Modules đã triển khai**:
   - 🛒 **POS (Point of Sale)**: Quầy bán lẻ thuốc, quét mã vạch, tính tiền, chọn thuốc nhanh, hỗ trợ phương thức Tiền mặt / QR Chuyển khoản / Thẻ.
   - 💰 **SetPriceSales**: Cài đặt bảng giá vốn, giá sỉ, giá bán lẻ và tỷ suất lợi nhuận theo từng chi nhánh.
   - 📦 **SetupWarehouse & InputShelf**: Cài đặt hệ thống kho dược phẩm, tủ bảo quản lạnh và định vị sơ đồ giá kệ chứa thuốc.
   - 📊 **Dashboard Tổng quan**: Thống kê doanh thu, cảnh báo thuốc cận date (< 90 ngày), đơn online chờ duyệt.
   - 🔐 **Auth & Security**: Quản lý phiên làm việc, phân quyền theo điểm bán (Shop), Token Interceptor tự động gắn Bearer Token.

---

## 📂 CẤU TRÚC THƯ MỤC

```
nhathuoc-web/
├── src/
│   ├── app/
│   │   ├── core/                      # Hạt nhân ứng dụng
│   │   │   ├── interceptors/          # Auth & Error Interceptors
│   │   │   ├── models/                # 194 TypeScript Schemas từ Swagger
│   │   │   └── services/              # AuthService, TabManager & 78 API Services
│   │   │       └── api/               # Từng API Module tương ứng backend
│   │   ├── layout/                    # Khung sườn ứng dụng
│   │   │   └── main-layout/           # Sidebar, Header, Thanh tab MDI
│   │   ├── features/                  # Các màn hình nghiệp vụ
│   │   │   ├── auth/login/            # Đăng nhập hệ thống
│   │   │   ├── dashboard/             # Tổng quan quản trị
│   │   │   ├── sales/pos/             # Quầy bán thuốc (POS)
│   │   │   ├── policy/price-setup/    # Cài đặt giá bán (SetPriceSales)
│   │   │   └── warehouse/warehouse-setup/ # Cài đặt kho & giá kệ
│   │   ├── app.config.ts              # Cấu hình Providers, Router, HttpClient
│   │   └── app.routes.ts              # Định tuyến điều hướng
│   ├── index.html                     # Google Fonts Inter & Material Symbols
│   └── styles.scss                    # Design System & Token màu sắc
└── package.json
```

---

## 🛠️ HƯỚNG DẪN KHỞI CHẠY DỰ ÁN

Để khởi chạy dự án, mở terminal tại thư mục `nhathuoc-web`:

```bash
cd nhathuoc-web

# 1. Cài đặt các gói phụ thuộc
npm install

# 2. Khởi chạy máy chủ phát triển
npm start
# hoặc: ng serve --open
```

Truy cập trình duyệt tại địa chỉ: `http://localhost:4200`

# nhathuoc-upharma
