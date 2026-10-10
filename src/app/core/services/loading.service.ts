import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private activeRequests = signal<number>(0);

  /**
   * Trạng thái đang tải dữ liệu toàn cục.
   * Khi > 0: đang có ít nhất 1 API request được thực thi.
   */
  readonly isLoading = computed(() => this.activeRequests() > 0);

  /**
   * Tăng bộ đếm request khi bắt đầu gọi API
   */
  show(): void {
    this.activeRequests.update(count => count + 1);
  }

  /**
   * Giảm bộ đếm request khi API hoàn tất hoặc lỗi
   */
  hide(): void {
    this.activeRequests.update(count => Math.max(0, count - 1));
  }

  /**
   * Ép buộc reset trạng thái loading về 0 (phòng ngừa rò rỉ trạng thái)
   */
  reset(): void {
    this.activeRequests.set(0);
  }
}
