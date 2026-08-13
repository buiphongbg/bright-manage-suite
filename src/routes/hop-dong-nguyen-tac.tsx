import { createFileRoute } from "@tanstack/react-router";
import { Input } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AppShell } from "@/components/AppShell";
import { DataTable } from "@/components/DataTable";
import { FilterBar, FilterField } from "@/components/FilterBar";
import { customers } from "@/data/mock";

export const Route = createFileRoute("/hop-dong-nguyen-tac")({
  head: () => ({
    meta: [
      { title: "Hợp đồng nguyên tắc — Quản lý hợp đồng khung" },
      { name: "description", content: "Danh sách hợp đồng nguyên tắc/PO theo khách hàng, thời hạn hiệu lực và trạng thái." },
      { property: "og:title", content: "Hợp đồng nguyên tắc — Quản lý hợp đồng khung" },
      { property: "og:description", content: "Danh sách hợp đồng nguyên tắc và PO của khách hàng." },
    ],
  }),
  component: ContractPage,
});

type Row = { key: string; stt: number; soHD: string; khachHang: string; ngayKy: string; hanDen: string; trangThai: string };

const rows: Row[] = customers.slice(0, 8).map((c, i) => ({
  key: String(i + 1),
  stt: i + 1,
  soHD: `HĐNT.${100 + i}.26`,
  khachHang: c.ten,
  ngayKy: `0${(i % 9) + 1}-01-2026`,
  hanDen: "31-12-2026",
  trangThai: i % 3 === 0 ? "Hết hiệu lực" : "Còn hiệu lực",
}));

function ContractPage() {
  const columns: ColumnsType<Row> = [
    { title: "STT", dataIndex: "stt", width: 56, align: "center" },
    { title: "Số HĐ nguyên tắc", dataIndex: "soHD", width: 150, render: (v: string) => <span className="cell-link">{v}</span> },
    { title: "Khách hàng", dataIndex: "khachHang", width: 320 },
    { title: "Ngày ký", dataIndex: "ngayKy", width: 110, align: "center" },
    { title: "Hạn đến", dataIndex: "hanDen", width: 110, align: "center" },
    { title: "Trạng thái", dataIndex: "trangThai", width: 130 },
  ];

  return (
    <AppShell title="Quản lý hợp đồng nguyên tắc">
      <FilterBar>
        <FilterField label="Số HĐ/ Khách hàng:">
          <Input style={{ width: 320 }} />
        </FilterField>
      </FilterBar>
      <DataTable<Row> columns={columns} data={rows} exportLabel="Kết xuất Excel" />
    </AppShell>
  );
}
