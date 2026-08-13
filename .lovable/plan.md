# Lab Management System UI (Vietnamese, Ant Design)

A faithful UI clone of the screenshots: dark teal sidebar, green table headers, dense data grids, Vietnamese labels. All data is mock (in-memory), so screens are fully clickable without a backend.

## Shell

- Dark navy/teal collapsible sidebar with "Xin chào / PĐL Lực", hamburger toggle, "Đăng xuất" in the top bar.
- Menu: Quản lý dịch vụ, Phiếu TNTM, Giấy chứng nhận, Khách hàng, Hợp đồng nguyên tắc, Hóa đơn, Mẫu /TB chưa HĐ, Lịch công tác (submenu: Danh sách, Lịch).
- Shared table toolbar: filter row, Tra cứu, Xuất/Kết xuất Excel, Ẩn/hiện cột + Khôi phục ẩn/hiện cột, footer "Hiển thị từ X đến Y trong tổng số N bản ghi" with pager.

## Screens

1. **Quản lý dịch vụ** (`/`) — main BG/HĐ list: Ngày tạo từ/đến, Loại yêu cầu, Khách hàng, Số BG/HĐ filters; columns STT, Số BG/HĐ, Phiếu TNTM, Ngày tạo, Khách hàng, Người lập, Trạng thái, Hóa đơn, Tổng tiền, Thao tác (Chi tiết / Tạo xong). "Thêm mới" button.
2. **Chi tiết báo giá** (`/bao-gia/$id`) — Quay lại, tabs Báo giá / Hợp đồng / Phiếu TNTM / Thống kê PTNTM; info block (loại báo giá, số BG, ngày tạo, khách hàng, địa chỉ, người lập, trạng thái, Thao tác log, Gửi B/G cho K/H, Tạo xong); line-item table (Tên mẫu/PTĐ, Đặc trưng kỹ thuật, Số lượng, Đơn giá, VAT, Thành tiền, Nơi TH, PĐL, KVPN, GCN, In, Thao tác) with Tổng tiền footer.
3. **Chi tiết phiếu TNTM** (`/phieu-tntm/$id`) — header info (số phiếu, ngày tiếp nhận, dự kiến trả mẫu, nơi TH, hiệu lực GCN, khách hàng, MST, người giao mẫu, điện thoại, hình thức giao mẫu, trạng thái) + device table with highlighted rows and "Chuyển mẫu tới PĐL" action; Tải phiếu TNTM button.
4. **Giấy chứng nhận** (`/giay-chung-nhan`) — filters (Số GCN, Tên KĐ, Tên mẫu/Thiết bị, Đặc trưng KT, Số serial); columns STT, Số BG/HĐ, Phiếu TNTM, Tên mẫu/thiết bị, Đặc trưng kỹ thuật, Số serial, PĐL, Số GCN, Trạng thái GCN, Tem KĐ, Đơn giá, Ngày cấp, Hiệu lực.
5. **Khách hàng** (`/khach-hang`) — Loại hình + Tên khách hàng filters; columns STT, Mã, Tên khách hàng, Địa chỉ, Tỉnh/TP, Mã số thuế, ĐT, Liên hệ, Thao tác (Chi tiết).
6. **Lịch công tác** — `/lich-cong-tac` (Danh sách table) and `/lich-cong-tac/lich` (month calendar grid with dense dark-red assignment bars per day, blue highlight for selected week, T2–CN headers).
7. Placeholder list pages for Hợp đồng nguyên tắc, Hóa đơn, Mẫu /TB chưa HĐ using the same table shell.

## Auth pages

- `/dang-nhap` (login: tên đăng nhập, mật khẩu, ghi nhớ, Đăng nhập), `/quen-mat-khau`, `/dat-lai-mat-khau`.
- Centered card on a dark teal gradient, matching the app palette. Non-functional forms: submitting login navigates to the dashboard; no real session (client-only mock flag), sidebar "Đăng xuất" returns to `/dang-nhap`.

## Technical notes

- Stack is TanStack Start (React 19 + Vite) — Next.js is not supported here; routing is file-based under `src/routes/`, same page-per-URL structure.
- Install `antd` + `@ant-design/icons`; wrap the app in a single `ConfigProvider` in `__root.tsx` with a custom theme (green `#28a745`-family primary, dark sidebar tokens, `vi_VN` locale, small component size, compact table padding) plus targeted CSS for the green header rows and thin borders.
- Mock data lives in `src/data/*.ts` typed modules (quotes, samples, certificates, customers, schedule) with enough rows to fill tables and drive detail pages by id.
- Reusable pieces: `AppShell`, `FilterBar`, `DataTable` (column show/hide + pagination footer + Excel button stubs), `DetailInfoGrid`.
- Each route gets its own `head()` with a Vietnamese title/description.
- Ant Design's own styles are used for components; no color hardcoding outside the theme/token layer.
