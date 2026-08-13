import { createFileRoute, Link } from "@tanstack/react-router";
import { Button, Input } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { DataTable } from "@/components/DataTable";
import { FilterBar, FilterField } from "@/components/FilterBar";
import { sampleSlips, type SampleSlip } from "@/data/mock";

export const Route = createFileRoute("/phieu-tntm/")({
  head: () => ({
    meta: [
      { title: "Phiếu TNTM — Tiếp nhận mẫu, thiết bị" },
      { name: "description", content: "Danh sách phiếu tiếp nhận mẫu/thiết bị: khách hàng, ngày tiếp nhận, trạng thái." },
      { property: "og:title", content: "Phiếu TNTM — Tiếp nhận mẫu, thiết bị" },
      { property: "og:description", content: "Danh sách phiếu tiếp nhận mẫu và thiết bị." },
    ],
  }),
  component: SampleSlipListPage,
});

function SampleSlipListPage() {
  const [kw, setKw] = useState("");
  const data = sampleSlips.filter((s) => s.soPhieu.includes(kw) || s.tenKH.toLowerCase().includes(kw.toLowerCase()));

  const columns: ColumnsType<SampleSlip> = [
    { title: "STT", key: "stt", width: 56, align: "center", render: (_: unknown, __: SampleSlip, i: number) => i + 1 },
    {
      title: "Số phiếu TNTM",
      dataIndex: "soPhieu",
      width: 130,
      align: "center",
      render: (v: string, r) => (
        <Link to="/phieu-tntm/$id" params={{ id: r.id }} className="cell-link">
          {v}
        </Link>
      ),
    },
    { title: "Ngày tiếp nhận", dataIndex: "ngayTiepNhan", width: 120, align: "center" },
    { title: "Dự kiến trả mẫu", dataIndex: "duKienTraMau", width: 130, align: "center" },
    { title: "Tên khách hàng", dataIndex: "tenKH", width: 300 },
    { title: "Mã số thuế", dataIndex: "maSoThue", width: 120 },
    { title: "Người giao mẫu", dataIndex: "nguoiGiaoMau", width: 150 },
    { title: "Nơi TH", dataIndex: "noiTH", width: 80, align: "center" },
    { title: "Trạng thái", dataIndex: "trangThai", width: 110 },
    {
      title: "Thao tác",
      key: "thaoTac",
      width: 120,
      align: "center",
      render: (_: unknown, r) => (
        <Link to="/phieu-tntm/$id" params={{ id: r.id }}>
          <Button size="small" type="primary">
            Chi tiết
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <AppShell title="Quản lý phiếu tiếp nhận mẫu/ thiết bị (TNTM)">
      <FilterBar>
        <FilterField label="Số phiếu TNTM/ Tên khách hàng:">
          <Input value={kw} onChange={(e) => setKw(e.target.value)} style={{ width: 320 }} />
        </FilterField>
      </FilterBar>
      <DataTable<SampleSlip> columns={columns} data={data} rowKey="id" scrollX={1500} exportLabel="Kết xuất Excel" />
    </AppShell>
  );
}
