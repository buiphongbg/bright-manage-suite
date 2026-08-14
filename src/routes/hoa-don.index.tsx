import { createFileRoute } from "@tanstack/react-router";
import { Input } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AppShell } from "@/components/AppShell";
import { DataTable } from "@/components/DataTable";
import { FilterBar, FilterField } from "@/components/FilterBar";
import { quotes, formatVnd } from "@/data/mock";

export const Route = createFileRoute("/hoa-don")({
  head: () => ({
    meta: [
      { title: "Hóa đơn — Theo dõi hóa đơn dịch vụ" },
      { name: "description", content: "Danh sách hóa đơn theo báo giá/hợp đồng: khách hàng, số tiền, ngày xuất và trạng thái." },
      { property: "og:title", content: "Hóa đơn — Theo dõi hóa đơn dịch vụ" },
      { property: "og:description", content: "Theo dõi hóa đơn phát hành cho khách hàng." },
    ],
  }),
  component: InvoicePage,
});

type Row = { key: string; stt: number; soHD: string; soBG: string; khachHang: string; ngayXuat: string; soTien: number; trangThai: string };

const rows: Row[] = quotes.map((q, i) => ({
  key: String(i + 1),
  stt: i + 1,
  soHD: `HĐ.${2100 + i}`,
  soBG: q.soBG,
  khachHang: q.khachHang,
  ngayXuat: q.ngayTao,
  soTien: q.tongTien,
  trangThai: i % 2 === 0 ? "Chưa thanh toán" : "Đã thanh toán",
}));

function InvoicePage() {
  const columns: ColumnsType<Row> = [
    { title: "STT", dataIndex: "stt", width: 56, align: "center" },
    { title: "Số hóa đơn", dataIndex: "soHD", width: 120, render: (v: string) => <span className="cell-link">{v}</span> },
    { title: "Số BG/ HĐ", dataIndex: "soBG", width: 100, align: "center" },
    { title: "Khách hàng", dataIndex: "khachHang", width: 300 },
    { title: "Ngày xuất", dataIndex: "ngayXuat", width: 110, align: "center" },
    { title: "Số tiền", dataIndex: "soTien", width: 130, align: "right", render: (v: number) => formatVnd(v) },
    { title: "Trạng thái", dataIndex: "trangThai", width: 150 },
  ];

  return (
    <AppShell title="Quản lý hóa đơn">
      <FilterBar>
        <FilterField label="Số hóa đơn/ Khách hàng:">
          <Input style={{ width: 320 }} />
        </FilterField>
      </FilterBar>
      <DataTable<Row> columns={columns} data={rows} exportLabel="Kết xuất Excel" />
    </AppShell>
  );
}
