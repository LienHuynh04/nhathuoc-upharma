import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { TabManagerService, TabItem } from '../../core/services/tab-manager.service';
import { LoadingService } from '../../core/services/loading.service';

export interface BackstageMenuItem {
  code: string;
  title: string;
  icon: string;
  iconColor: string;
  route?: string;
  isCustomTab?: boolean;
}

export interface BackstageCategory {
  id: string;
  title: string;
  itemsCol1: BackstageMenuItem[];
  itemsCol2: BackstageMenuItem[];
}

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  authService = inject(AuthService);
  tabManager = inject(TabManagerService);
  loadingService = inject(LoadingService);

  // Active category on the blue left sidebar
  selectedCategory = signal<string>('hang-hoa');

  // Exact categories and items from uPharma desktop app with actual feature routes
  categories: BackstageCategory[] = [
    {
      id: 'cham-cong',
      title: 'Chấm công',
      itemsCol1: [
        { code: 'CC_1', title: '1. Chấm công', icon: 'schedule', iconColor: '#f59e0b', route: '/feature/cc_1' },
        { code: 'CC_2', title: '2. Phiếu thu tiền', icon: 'receipt', iconColor: '#10b981', route: '/feature/cc_2' }
      ],
      itemsCol2: [
        { code: 'CC_3', title: '3. Phê duyệt phiếu tăng ca', icon: 'verified', iconColor: '#0284c7', route: '/feature/cc_3' },
        { code: 'CC_4', title: '4. Chỉ tiêu khách hàng', icon: 'trending_up', iconColor: '#8b5cf6', route: '/feature/cc_4' }
      ]
    },
    {
      id: 'hang-hoa',
      title: 'Hàng hóa',
      itemsCol1: [
        { code: 'HH_1', title: '1. Sản phẩm trong hệ thống', icon: 'inventory_2', iconColor: '#eab308', route: '/product-list', isCustomTab: true },
        { code: 'HH_4', title: '4. Tồn kho hệ thống', icon: 'database', iconColor: '#eab308', route: '/feature/hh_4' },
        { code: 'HH_5', title: '5. Điều chuyển Shop', icon: 'shopping_cart', iconColor: '#ef4444', route: '/feature/hh_5' },
        { code: 'HH_6', title: '6. Tồn kho các Shop', icon: 'bar_chart', iconColor: '#06b6d4', route: '/feature/hh_6' },
        { code: 'HH_7', title: '7. Chuyển về kho tổng', icon: 'move_to_inbox', iconColor: '#64748b', route: '/feature/hh_7' }
      ],
      itemsCol2: [
        { code: 'HH_FEFO', title: 'Kiểm tra FEFO', icon: 'fact_check', iconColor: '#10b981', route: '/feature/hh_fefo' },
        { code: 'HH_9', title: '9. Tồn kho an toàn SHOP', icon: 'settings_suggest', iconColor: '#f59e0b', route: '/feature/hh_9' },
        { code: 'HH_10', title: '10. Hàng chậm bán (SHOP)', icon: 'query_builder', iconColor: '#10b981', route: '/feature/hh_10' },
        { code: 'HH_12', title: '12. Khách trả lại hàng', icon: 'business_center', iconColor: '#0284c7', route: '/feature/hh_12' },
        { code: 'HH_14', title: '14. Hàng hết, hàng chia, hàng giao tại điểm', icon: 'checklist', iconColor: '#6366f1', route: '/feature/hh_14' }
      ]
    },
    {
      id: 'vat-tu',
      title: 'Vật tư',
      itemsCol1: [
        { code: 'VT_1', title: '1. Nhập vật tư', icon: 'download', iconColor: '#0284c7', route: '/feature/vt_1' },
        { code: 'VT_2', title: '2. Điều chuyển vật tư', icon: 'sync_alt', iconColor: '#10b981', route: '/feature/vt_2' },
        { code: 'VT_3', title: '3. Tồn kho vật tư', icon: 'inventory', iconColor: '#eab308', route: '/feature/vt_3' }
      ],
      itemsCol2: [
        { code: 'VT_4', title: '4. Danh mục vật tư', icon: 'list_alt', iconColor: '#06b6d4', route: '/feature/vt_4' },
        { code: 'VT_5', title: '5. Sử dụng vật tư', icon: 'handyman', iconColor: '#ef4444', route: '/feature/vt_5' }
      ]
    },
    {
      id: 'don-hang',
      title: 'Đơn hàng',
      itemsCol1: [
        { code: 'DH_1', title: '1. Đơn đặt nội bộ', icon: 'home_work', iconColor: '#0284c7', route: '/feature/dh_1' },
        { code: 'DH_2', title: '2. Đơn đặt hàng', icon: 'shopping_cart', iconColor: '#10b981', route: '/feature/dh_2' },
        { code: 'DH_3', title: '3. Đơn bán hàng', icon: 'point_of_sale', iconColor: '#059669', route: '/pos', isCustomTab: true },
        { code: 'DH_4', title: '4. Báo cáo tốc độ tiêu thụ', icon: 'speed', iconColor: '#f59e0b', route: '/feature/dh_4' },
        { code: 'DH_5', title: '5. Đơn gọi hàng', icon: 'description', iconColor: '#64748b', route: '/feature/dh_5' },
        { code: 'DH_6', title: '6. Điểm thưởng Sales', icon: 'military_tech', iconColor: '#eab308', route: '/feature/dh_6' }
      ],
      itemsCol2: [
        { code: 'DH_9', title: '9. Gọi hàng sản phẩm mới', icon: 'task_alt', iconColor: '#f59e0b', route: '/feature/dh_9' },
        { code: 'DH_10', title: '10. Đơn gọi hàng 2', icon: 'description', iconColor: '#0284c7', route: '/feature/dh_10' },
        { code: 'DH_11', title: '11. Đơn điều chuyển Shop', icon: 'format_list_bulleted', iconColor: '#64748b', route: '/feature/dh_11' }
      ]
    },
    {
      id: 'doi-tem',
      title: 'Đổi tem',
      itemsCol1: [
        { code: 'DT_1', title: '1. Lịch sử luân chuyển', icon: 'history', iconColor: '#0284c7', route: '/feature/dt_1' },
        { code: 'DT_2', title: '2. Đổi tem theo chính sách', icon: 'qr_code_2', iconColor: '#10b981', route: '/feature/dt_2' }
      ],
      itemsCol2: [
        { code: 'DT_3', title: '3. Hủy sản phẩm', icon: 'delete_forever', iconColor: '#ef4444', route: '/feature/dt_3' },
        { code: 'DT_5', title: '5. Báo cáo tổng hợp', icon: 'assessment', iconColor: '#8b5cf6', route: '/feature/dt_5' }
      ]
    },
    {
      id: 'khach-hang',
      title: 'Khách hàng',
      itemsCol1: [
        { code: 'KH_1', title: '1. Danh sách khách hàng', icon: 'people', iconColor: '#0284c7', route: '/feature/kh_1' }
      ],
      itemsCol2: [
        { code: 'KH_2', title: '2. Thẻ khách hàng', icon: 'badge', iconColor: '#f59e0b', route: '/feature/kh_2' }
      ]
    },
    {
      id: 'ccdc',
      title: 'CCDC',
      itemsCol1: [
        { code: 'CCDC_1', title: '1. Khai báo danh mục', icon: 'app_registration', iconColor: '#0284c7', route: '/feature/ccdc_1' },
        { code: 'CCDC_2', title: '2. Nhập công cụ dụng cụ', icon: 'input', iconColor: '#10b981', route: '/feature/ccdc_2' },
        { code: 'CCDC_3', title: '3. Điều chuyển công cụ dụng cụ', icon: 'sync', iconColor: '#f97316', route: '/feature/ccdc_3' }
      ],
      itemsCol2: [
        { code: 'CCDC_4', title: '4. Hủy công cụ dụng cụ', icon: 'remove_shopping_cart', iconColor: '#ef4444', route: '/feature/ccdc_4' },
        { code: 'CCDC_5', title: '5. Tồn kho Công cụ dụng cụ', icon: 'warehouse', iconColor: '#8b5cf6', route: '/feature/ccdc_5' }
      ]
    }
  ];

  getCurrentCategory(): BackstageCategory {
    return this.categories.find(c => c.id === this.selectedCategory()) || this.categories[1];
  }

  selectCategory(catId: string): void {
    this.selectedCategory.set(catId);
    this.tabManager.selectTab('home');
  }

  openMenuItem(item: BackstageMenuItem): void {
    const route = item.route || `/feature/${item.code.toLowerCase()}`;
    this.tabManager.openTab({
      id: item.code,
      title: item.title,
      icon: item.icon,
      route: route,
      closable: true
    });
  }

  goBackToHome(): void {
    this.tabManager.selectTab('home');
  }

  getActiveTabTitle(): string {
    const activeId = this.tabManager.activeTabId();
    const tab = this.tabManager.tabs().find(t => t.id === activeId);
    return tab ? tab.title : 'Chi tiết nghiệp vụ';
  }

  formatTabTitle(title: string): string {
    if (!title) return 'UPHARMA';
    return title;
  }

  logout(): void {
    this.authService.logout();
  }
}
