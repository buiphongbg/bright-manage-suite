import { createFileRoute } from "@tanstack/react-router";
import { Button, Input, Select } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { DataTable } from "@/components/DataTable";
import { FilterBar, FilterField } from "@/components/FilterBar";
import { customers, type Customer } from "@/data/mock";

export const Route = createFileRoute("/khach-hang")({
  head: () => ({
    meta: [
      { title: "Khách hàng — Danh mục khách hàng" },
      { name: "description", content: "Danh mục khách hàng: mã, tên, địa chỉ, tỉnh/TP, mã số thuế và người liên hệ." },
      { property: "og:title", content: "Khách hàng — Danh mục khách hàng" },
      { property: "og:description", content: "Danh mục khách hàng của phòng đo lường." },
    ],
  }),
  component: CustomerPage,
});

function CustomerPage() {
  const [ten, setTen] = useState("");
  const [loaiHinh, setLoaiHinh] = useState("all");

  const data = customers.filter(
    (c) => c.ten.toLowerCase().includes(ten.toLowerCase()) && (loaiHinh === "all" || c.loaiHinh === loaiHinh),
  );

  const columns: ColumnsType<Customer> = [
    { title: "STT", dataIndex: "stt", width: 56, align: "center" },
    { title: "Mã", dataIndex: "ma", width: 74 },
    { title: "Tên khách hàng", dataIndex: "ten", width: 300 },
    { title: "Địa chỉ", dataIndex: "diaChi", width: 300 },
    { title: "Tỉnh/ TP", dataIndex: "tinh", width: 100 },
    { title: "Mã số Thuế", dataIndex: "maSoThue", width: 120 },
    { title: "ĐT", dataIndex: "dt", width: 110 },
    { title: "Liên hệ", dataIndex: "lienHe", width: 180 },
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
    <AppShell title="Danh mục khách hàng">
      <FilterBar>
        <FilterField label="Loại hình:">
          <Select
            value={loaiHinh}
            onChange={setLoaiHinh}
            style={{ width: 160 }}
            options={[
              { value: "all", label: "---Tất cả---" },
              { value: "Doanh nghiệp", label: "Doanh nghiệp" },
              { value: "Đơn vị nhà nước", label: "Đơn vị nhà nước" },
              { value: "Nước ngoài", label: "Nước ngoài" },
            ]}
          />
        </FilterField>
        <FilterField label="Tên khách hàng:">
          <Input value={ten} onChange={(e) => setTen(e.target.value)} style={{ width: 400 }} />
        </FilterField>
      </FilterBar>

      <DataTable<Customer> columns={columns} data={data} scrollX={1500} exportLabel="Kết xuất Excel" />
    </AppShell>
  );
}
