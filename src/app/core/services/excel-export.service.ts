import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelExportService {
  /**
   * Xuất danh sách dữ liệu ra file Excel (.xlsx)
   * @param data Danh sách object đã format key theo tiêu đề cột tiếng Việt
   * @param fileName Tên file xuất ra (mặc định kèm timestamp)
   * @param sheetName Tên sheet
   */
  exportJsonToExcel(data: Record<string, any>[], fileName: string = 'Danh_sach', sheetName: string = 'Dữ liệu'): void {
    if (!data || data.length === 0) {
      alert('Không có dữ liệu để xuất Excel!');
      return;
    }

    try {
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);

      // Tự động căn chỉnh độ rộng cột theo nội dung dài nhất
      const colWidths: { wch: number }[] = [];
      const keys = Object.keys(data[0] || {});

      keys.forEach((key) => {
        let maxLen = key.length;
        data.forEach((row) => {
          const val = row[key];
          if (val !== undefined && val !== null) {
            const strVal = String(val);
            if (strVal.length > maxLen) {
              maxLen = strVal.length;
            }
          }
        });
        colWidths.push({ wch: Math.min(Math.max(maxLen + 4, 12), 50) });
      });

      ws['!cols'] = colWidths;

      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, sheetName);

      const now = new Date();
      const timeStr = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;
      const finalFileName = `${fileName}_${timeStr}.xlsx`;

      XLSX.writeFile(wb, finalFileName);
    } catch (err) {
      console.error('Lỗi khi xuất file Excel:', err);
      alert('Có lỗi xảy ra khi tạo file Excel. Vui lòng thử lại!');
    }
  }

  /**
   * Xuất trực tiếp bảng HTML ra file Excel (.xlsx)
   */
  exportTableToExcel(tableElement: HTMLTableElement, fileName: string = 'Danh_sach'): void {
    if (!tableElement) return;

    try {
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(tableElement);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      const now = new Date();
      const timeStr = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
      XLSX.writeFile(wb, `${fileName}_${timeStr}.xlsx`);
    } catch (err) {
      console.error('Lỗi khi xuất bảng ra Excel:', err);
      alert('Có lỗi xảy ra khi xuất file Excel.');
    }
  }
}
