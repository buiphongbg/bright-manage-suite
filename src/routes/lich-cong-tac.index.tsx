import { createFileRoute } from "@tanstack/react-router";
import { Button, Input } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { DataTable } from "@/components/DataTable";
import { FilterBar, FilterField } from "@/components/FilterBar";
import { scheduleList, type ScheduleItem } from "@/data/mock";

export const Route = createFileRoute("/lich-cong-tac/")({
  head: () => ({
    meta: [
      { title: "Lịch công tác — Danh sách quyết định công tác" },
      { name: "description", content: "Danh sách quyết định công tác: nhân viên, khách hàng, thời gian và trạng thái." },
      { property: "og:title", content: "Lịch công tác — Danh sách quyết định" },
      { property: "og:description", content: "Danh sách quyết định công tác của các phòng đo lường." },
    ],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  const [kw, setKw] = useState("");
  const data = scheduleList.filter(
    (s) => s.qd.toLowerCase().includes(kw.toLowerCase()) || s.nhanVien.toLowerCase().includes(kw.toLowerCase()),
  );

  const columns: ColumnsType<ScheduleItem> = [
    { title: "STT", dataIndex: "stt", width: 56, align: "center" },
    { title: "Số QĐ", dataIndex: "qd", width: 110, align: "center", render: (v: string) => <span className="cell-link">{v}</span> },
    { title: "Số BG", dataIndex: "bg", width: 96, align: "center", render: (v: string) => <span className="cell-link">{v}</span> },
    { title: "Nhân viên", dataIndex: "nhanVien", width: 200 },
    { title: "Khách hàng", dataIndex: "khachHang", width: 260 },
    { title: "Từ ngày", dataIndex: "tuNgay", width: 110, align: "center" },
    { title: "Đến ngày", dataIndex: "denNgay", width: 110, align: "center" },
    { title: "Nội dung", dataIndex: "noiDung", width: 200 },
    { title: "Trạng thái", dataIndex: "trangThai", width: 110 },
    {
      title: "Thao tác",
      key: "thaoTac",
      width: 100,
      align: "center",
      render: () => (
        <Button size="small" type="primary">
          Chi tiết
        </Button>
      ),
    },
  ];

  return (
    <AppShell title="Danh sách lịch công tác">
      <FilterBar>
        <FilterField label="Số QĐ/ Nhân viên:">
          <Input value={kw} onChange={(e) => setKw(e.target.value)} style={{ width: 300 }} />
        </FilterField>
      </FilterBar>
      <DataTable<ScheduleItem> columns={columns} data={data} scrollX={1500} exportLabel="Kết xuất Excel" />
    </AppShell>
  );
}
