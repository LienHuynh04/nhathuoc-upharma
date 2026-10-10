import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface TabItem {
  id: string;
  title: string;
  icon: string;
  route: string;
  closable: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TabManagerService {
  // Default tabs matching real desktop app
  readonly tabs = signal<TabItem[]>([
    {
      id: 'home',
      title: 'Trang chủ',
      icon: 'home',
      route: '/',
      closable: false
    },
    {
      id: 'HH_1',
      title: '1. Sản phẩm trong hệ thống',
      icon: 'inventory_2',
      route: '/product-list',
      closable: true
    },
    {
      id: 'HH_FEFO',
      title: 'Kiểm tra FEFO',
      icon: 'fact_check',
      route: '/feature/hh_fefo',
      closable: true
    }
  ]);

  readonly activeTabId = signal<string>('HH_1');

  constructor(private router: Router) {}

  openTab(tab: { id: string; title: string; icon: string; route: string; closable?: boolean }): void {
    const existing = this.tabs().find(t => t.id === tab.id);
    if (!existing) {
      this.tabs.update(current => [
        ...current,
        {
          id: tab.id,
          title: tab.title,
          icon: tab.icon,
          route: tab.route,
          closable: tab.closable ?? true
        }
      ]);
    }
    this.selectTab(tab.id);
  }

  selectTab(tabId: string): void {
    const tab = this.tabs().find(t => t.id === tabId);
    if (tab) {
      this.activeTabId.set(tabId);
      this.router.navigateByUrl(tab.route);
    }
  }

  closeTab(tabId: string, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }

    const currentTabs = this.tabs();
    const tabIndex = currentTabs.findIndex(t => t.id === tabId);
    if (tabIndex === -1 || !currentTabs[tabIndex].closable) {
      return;
    }

    const newTabs = currentTabs.filter(t => t.id !== tabId);
    this.tabs.set(newTabs);

    // If closing active tab, switch to adjacent or first tab
    if (this.activeTabId() === tabId) {
      const nextTab = newTabs[Math.max(0, tabIndex - 1)];
      if (nextTab) {
        this.selectTab(nextTab.id);
      }
    }
  }
}
