import { createFileRoute } from "@tanstack/react-router";
import { Input } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { DataTable } from "@/components/DataTable";
import { FilterBar, FilterField } from "@/components/FilterBar";
import { certificates, formatVnd, type Certificate } from "@/data/mock";

export const Route = createFileRoute("/giay-chung-nhan")({
  head: () => ({
    meta: [
      { title: "Giấy chứng nhận — Tra cứu GCN hiệu chuẩn, kiểm định" },
      { name: "description", content: "Tra cứu giấy chứng nhận theo số GCN, tên mẫu/thiết bị, số serial, ngày cấp và hiệu lực." },
      { property: "og:title", content: "Giấy chứng nhận — Tra cứu GCN" },
      { property: "og:description", content: "Danh sách giấy chứng nhận hiệu chuẩn và kiểm định." },
    ],
  }),
  component: CertificatePage,
});

function CertificatePage() {
  const [soGCN, setSoGCN] = useState("");
  const [tenMau, setTenMau] = useState("");
  const [serial, setSerial] = useState("");

  const data = certificates.filter(
    (c) =>
      c.soGCN.toLowerCase().includes(soGCN.toLowerCase()) &&
      c.tenMau.toLowerCase().includes(tenMau.toLowerCase()) &&
      c.soSerial.toLowerCase().includes(serial.toLowerCase()),
  );

  const columns: ColumnsType<Certificate> = [
    { title: "STT", dataIndex: "stt", width: 56, align: "center" },
    { title: "Số BG/ HĐ", dataIndex: "soBG", width: 94, align: "center", render: (v: string) => <span className="cell-link">{v}</span> },
    { title: "Phiếu TNTM", dataIndex: "phieuTNTM", width: 96, align: "center", render: (v: string) => <span className="cell-link">{v}</span> },
    { title: "Tên mẫu/ thiết bị", dataIndex: "tenMau", width: 190 },
    { title: "Đặc trưng kỹ thuật", dataIndex: "dacTrung", width: 140 },
    { title: "Số serial", dataIndex: "soSerial", width: 240 },
    { title: "PĐL", dataIndex: "pdl", width: 60, align: "center" },
    { title: "Số GCN", dataIndex: "soGCN", width: 140 },
    { title: "Trạng thái GCN", dataIndex: "trangThaiGCN", width: 120, render: (v: string) => <span className="cell-link">{v}</span> },
    { title: "Tem KĐ", dataIndex: "temKD", width: 90 },
    { title: "Đơn giá", dataIndex: "donGia", width: 110, align: "right", render: (v: number) => formatVnd(v) },
    { title: "Ngày cấp", dataIndex: "ngayCap", width: 110, align: "center" },
    { title: "Hiệu lực", dataIndex: "hieuLuc", width: 100, align: "center" },
  ];

  return (
    <AppShell title="Quản lý giấy chứng nhận">
      <FilterBar>
        <FilterField label="Số GCN:">
          <Input value={soGCN} onChange={(e) => setSoGCN(e.target.value)} style={{ width: 150 }} />
        </FilterField>
        <FilterField label="Tem-KĐ:">
          <Input style={{ width: 110 }} />
        </FilterField>
        <FilterField label="Tên mẫu/ Thiết bị:">
          <Input value={tenMau} onChange={(e) => setTenMau(e.target.value)} style={{ width: 240 }} />
        </FilterField>
        <FilterField label="Đặc trưng KT/ Kiểu/ Chi tiết:">
          <Input style={{ width: 300 }} />
        </FilterField>
        <FilterField label="Số serial:">
          <Input value={serial} onChange={(e) => setSerial(e.target.value)} style={{ width: 180 }} />
        </FilterField>
      </FilterBar>

      <DataTable<Certificate> columns={columns} data={data} scrollX={1700} exportLabel="Kết xuất Excel" />
    </AppShell>
  );
}
