import { createFileRoute, Link } from "@tanstack/react-router";
import { Button, Checkbox, DatePicker, Input, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import dayjs from "dayjs";
import { AppShell } from "@/components/AppShell";
import { DataTable } from "@/components/DataTable";
import { FilterBar, FilterField } from "@/components/FilterBar";
import { quotes, type Quote } from "@/data/mock";
import { StatusBadge } from "@/components/StatusBadge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quản lý dịch vụ — Quản lý BG/HĐ, phiếu TNTM" },
      {
        name: "description",
        content: "Danh sách báo giá, hợp đồng và phiếu TNTM: tra cứu, theo dõi trạng thái và hóa đơn.",
      },
      { property: "og:title", content: "Quản lý dịch vụ — Quản lý BG/HĐ, phiếu TNTM" },
      { property: "og:description", content: "Danh sách báo giá, hợp đồng và phiếu TNTM của phòng đo lường." },
    ],
  }),
  component: ServicePage,
});

function ServicePage() {
  const [keyword, setKeyword] = useState("");
  const [customer, setCustomer] = useState("");

  const data = quotes.filter(
    (q) =>
      q.soBG.toLowerCase().includes(keyword.toLowerCase()) &&
      q.khachHang.toLowerCase().includes(customer.toLowerCase()),
  );

  const columns: ColumnsType<Quote> = [
    { title: "STT", dataIndex: "stt", width: 56, align: "center" },
    {
      title: "Số BG/ HĐ",
      dataIndex: "soBG",
      width: 100,
      align: "center",
      render: (v: string, r) => (
        <Link to="/bao-gia/$id" params={{ id: r.id }} className="cell-link">
          {v}
        </Link>
      ),
    },
    {
      title: "Phiếu TNTM",
      dataIndex: "phieuTNTM",
      width: 110,
      align: "center",
      render: (v?: string) =>
        v ? (
          <Link to="/phieu-tntm/$id" params={{ id: v }} className="cell-link">
            {v}
          </Link>
        ) : null,
    },
    { title: "Ngày tạo", dataIndex: "ngayTao", width: 110, align: "center" },
    { title: "Khách hàng", dataIndex: "khachHang", width: 240 },
    { title: "Người lập", dataIndex: "nguoiLap", width: 110 },
    {
      title: "Trạng thái",
      dataIndex: "trangThai",
      width: 130,
      align: "center",
      render: (v: string) => <StatusBadge status={v} size="small" />,
    },
    { title: "Hóa đơn", dataIndex: "hoaDon", width: 110 },
    {
      title: "Tổng tiền",
      dataIndex: "tongTien",
      width: 120,
      align: "right",
      render: (v: number) => v.toLocaleString("vi-VN"),
    },
    {
      title: "Thao tác",
      key: "thaoTac",
      width: 170,
      align: "center",
      render: (_: unknown, r) => (
        <div className="cell-actions">
          <Link to="/bao-gia/$id" params={{ id: r.id }}>
            <Button size="small" type="primary">
              Chi tiết
            </Button>
          </Link>
          {r.trangThai === "Mới tạo" && (
            <Button size="small" type="primary">
              Tạo xong
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <AppShell title="Quản lý chung các BG/ HĐ, phiếu TNTM">
      <Link to="/bao-gia/tao">
        <Button type="primary" icon={<PlusOutlined />} style={{ marginBottom: 12 }}>
          Thêm mới
        </Button>
      </Link>


      <FilterBar>
        <FilterField label="Ngày tạo:">
          <div className="filter-daterange">
            <span className="filter-prefix">Từ</span>
            <DatePicker defaultValue={dayjs("2026-07-31")} format="DD-MM-YYYY" />
            <span className="filter-prefix">đến</span>
            <DatePicker defaultValue={dayjs("2026-08-10")} format="DD-MM-YYYY" />
          </div>
        </FilterField>
        <FilterField label="Loại yêu cầu:">
          <Select
            defaultValue="do-luong"
            style={{ width: 160 }}
            options={[
              { value: "do-luong", label: "Đo lường" },
              { value: "thu-nghiem", label: "Thử nghiệm" },
              { value: "kiem-dinh", label: "Kiểm định" },
            ]}
          />
        </FilterField>
        <FilterField label="Khách hàng:">
          <Input value={customer} onChange={(e) => setCustomer(e.target.value)} style={{ width: 220 }} />
        </FilterField>
        <FilterField label="Số BG/ HĐ:">
          <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} style={{ width: 200 }} />
        </FilterField>
      </FilterBar>

      <DataTable<Quote>
        columns={columns}
        data={data}
        rowKey="id"
        scrollX={1500}
        toolbarLeft={<Checkbox className="dt-checkbox">Hiển thị tất cả</Checkbox>}
      />
    </AppShell>
  );
}
