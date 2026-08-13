import { createFileRoute } from "@tanstack/react-router";
import { Input } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AppShell } from "@/components/AppShell";
import { DataTable } from "@/components/DataTable";
import { FilterBar, FilterField } from "@/components/FilterBar";
import { certificates } from "@/data/mock";

export const Route = createFileRoute("/mau-chua-hd")({
  head: () => ({
    meta: [
      { title: "Mẫu /TB chưa HĐ — Mẫu, thiết bị chưa có hợp đồng" },
      { name: "description", content: "Danh sách mẫu và thiết bị đã tiếp nhận nhưng chưa có báo giá/hợp đồng tương ứng." },
      { property: "og:title", content: "Mẫu /TB chưa HĐ" },
      { property: "og:description", content: "Mẫu và thiết bị chưa gắn báo giá hoặc hợp đồng." },
    ],
  }),
  component: PendingSamplePage,
});

type Row = { key: string; stt: number; tenMau: string; dacTrung: string; soSerial: string; pdl: string; ngayNhan: string; trangThai: string };

const rows: Row[] = certificates.slice(0, 9).map((c, i) => ({
  key: String(i + 1),
  stt: i + 1,
  tenMau: c.tenMau,
  dacTrung: c.dacTrung,
  soSerial: c.soSerial,
  pdl: c.pdl,
  ngayNhan: c.ngayCap,
  trangThai: "Chưa có HĐ",
}));

function PendingSamplePage() {
  const columns: ColumnsType<Row> = [
    { title: "STT", dataIndex: "stt", width: 56, align: "center" },
    { title: "Tên mẫu/ thiết bị", dataIndex: "tenMau", width: 240 },
    { title: "Đặc trưng kỹ thuật", dataIndex: "dacTrung", width: 180 },
    { title: "Số serial", dataIndex: "soSerial", width: 200 },
    { title: "PĐL", dataIndex: "pdl", width: 70, align: "center" },
    { title: "Ngày nhận", dataIndex: "ngayNhan", width: 110, align: "center" },
    { title: "Trạng thái", dataIndex: "trangThai", width: 130 },
  ];

  return (
    <AppShell title="Mẫu/ thiết bị chưa có hợp đồng">
      <FilterBar>
        <FilterField label="Tên mẫu/ Thiết bị:">
          <Input style={{ width: 320 }} />
        </FilterField>
      </FilterBar>
      <DataTable<Row> columns={columns} data={rows} exportLabel="Kết xuất Excel" />
    </AppShell>
  );
}
