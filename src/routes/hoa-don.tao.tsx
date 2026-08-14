import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeftOutlined, DeleteOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, Select, Table, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import dayjs from "dayjs";
import { AppShell } from "@/components/AppShell";
import { FilterField } from "@/components/FilterBar";
import { customers, quotes, formatVnd } from "@/data/mock";

export const Route = createFileRoute("/hoa-don/tao")({
  head: () => ({
    meta: [
      { title: "Tạo hóa đơn — Quản lý hóa đơn" },
      {
        name: "description",
        content: "Lập hóa đơn mới cho khách hàng: chọn số BG/HĐ, hạng mục dịch vụ, đơn giá, VAT và tổng tiền.",
      },
      { property: "og:title", content: "Tạo hóa đơn mới" },
      { property: "og:description", content: "Lập hóa đơn dịch vụ đo lường cho khách hàng." },
    ],
  }),
  component: CreateInvoicePage,
});

type Line = { key: string; noiDung: string; donViTinh: string; soLuong: number; donGia: number; vat: string };

const emptyLine = (key: string): Line => ({ key, noiDung: "", donViTinh: "Cái", soLuong: 1, donGia: 0, vat: "10%" });

const lineTotal = (l: Line) => Math.round(l.soLuong * l.donGia * (1 + Number(l.vat.replace("%", "")) / 100));

function CreateInvoicePage() {
  const navigate = useNavigate();
  const [lines, setLines] = useState<Line[]>([emptyLine("1")]);
  const [khachHang, setKhachHang] = useState<string | undefined>();

  const update = (key: string, patch: Partial<Line>) =>
    setLines((ls) => ls.map((l) => (l.key === key ? { ...l, ...patch } : l)));

  const selected = customers.find((c) => c.ten === khachHang);

  const columns: ColumnsType<Line> = [
    { title: "STT", key: "stt", width: 56, align: "center", render: (_: unknown, __: Line, i: number) => i + 1 },
    {
      title: "Nội dung",
      dataIndex: "noiDung",
      width: 340,
      render: (v: string, r) => (
        <Input value={v} placeholder="Tên dịch vụ / hàng hóa" onChange={(e) => update(r.key, { noiDung: e.target.value })} />
      ),
    },
    {
      title: "Đơn vị tính",
      dataIndex: "donViTinh",
      width: 120,
      render: (v: string, r) => (
        <Select
          value={v}
          style={{ width: "100%" }}
          onChange={(val) => update(r.key, { donViTinh: val })}
          options={["Cái", "Bộ", "Lần", "Chiếc"].map((x) => ({ value: x, label: x }))}
        />
      ),
    },
    {
      title: "Số lượng",
      dataIndex: "soLuong",
      width: 90,
      align: "center",
      render: (v: number, r) => (
        <Input value={String(v)} onChange={(e) => update(r.key, { soLuong: Number(e.target.value.replace(/\D/g, "")) || 0 })} />
      ),
    },
    {
      title: "Đơn giá",
      dataIndex: "donGia",
      width: 140,
      render: (v: number, r) => (
        <Input
          value={v ? v.toLocaleString("vi-VN") : ""}
          onChange={(e) => update(r.key, { donGia: Number(e.target.value.replace(/\D/g, "")) || 0 })}
        />
      ),
    },
    {
      title: "VAT",
      dataIndex: "vat",
      width: 90,
      render: (v: string, r) => (
        <Select
          value={v}
          style={{ width: "100%" }}
          onChange={(val) => update(r.key, { vat: val })}
          options={["0%", "5%", "8%", "10%"].map((x) => ({ value: x, label: x }))}
        />
      ),
    },
    { title: "Thành tiền", key: "thanhTien", width: 130, align: "right", render: (_: unknown, r) => formatVnd(lineTotal(r)) },
    {
      title: "Thao tác",
      key: "actions",
      width: 90,
      align: "center",
      render: (_: unknown, r) => (
        <Button
          size="small"
          danger
          type="primary"
          icon={<DeleteOutlined />}
          disabled={lines.length === 1}
          onClick={() => setLines((ls) => ls.filter((l) => l.key !== r.key))}
        />
      ),
    },
  ];

  const total = lines.reduce((s, l) => s + lineTotal(l), 0);

  return (
    <AppShell title="Tạo hóa đơn">
      <Button className="btn-back" icon={<ArrowLeftOutlined />} onClick={() => navigate({ to: "/hoa-don" })}>
        Quay lại
      </Button>

      <div className="filter-bar" style={{ marginTop: 12 }}>
        <div className="filter-fields">
          <FilterField label="Số hóa đơn:">
            <Input style={{ width: 160 }} placeholder="Tự động" />
          </FilterField>
          <FilterField label="Ngày xuất:">
            <DatePicker defaultValue={dayjs()} format="DD-MM-YYYY" />
          </FilterField>
          <FilterField label="Số BG/ HĐ:">
            <Select
              showSearch
              allowClear
              placeholder="Chọn số BG/HĐ"
              style={{ width: 180 }}
              options={quotes.map((q) => ({ value: q.soBG, label: q.soBG }))}
              onChange={(val) => {
                const q = quotes.find((x) => x.soBG === val);
                if (q) setKhachHang(q.khachHang);
              }}
            />
          </FilterField>
          <FilterField label="Khách hàng:">
            <Select
              showSearch
              allowClear
              placeholder="Chọn khách hàng"
              style={{ width: 380 }}
              value={khachHang}
              onChange={setKhachHang}
              options={customers.map((c) => ({ value: c.ten, label: c.ten }))}
            />
          </FilterField>
          <FilterField label="Mã số Thuế:">
            <Input style={{ width: 160 }} value={selected?.maSoThue ?? undefined} readOnly={!!selected} />
          </FilterField>
          <FilterField label="Địa chỉ:">
            <Input style={{ width: 420 }} value={selected?.diaChi ?? undefined} readOnly={!!selected} />
          </FilterField>
          <FilterField label="Hình thức thanh toán:">
            <Select
              defaultValue="CK"
              style={{ width: 160 }}
              options={[
                { value: "CK", label: "Chuyển khoản" },
                { value: "TM", label: "Tiền mặt" },
              ]}
            />
          </FilterField>
          <FilterField label="Ghi chú:">
            <Input.TextArea rows={1} style={{ width: 420 }} />
          </FilterField>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setLines((ls) => [...ls, emptyLine(String(Date.now()))])}>
          Thêm hạng mục
        </Button>
        <Button
          type="primary"
          icon={<SaveOutlined />}
          onClick={() => {
            if (!khachHang) {
              message.warning("Vui lòng chọn khách hàng");
              return;
            }
            message.success("Đã lưu hóa đơn");
            navigate({ to: "/hoa-don" });
          }}
        >
          Lưu hóa đơn
        </Button>
      </div>

      <Table<Line>
        className="dt-table"
        size="small"
        bordered
        rowKey="key"
        columns={columns}
        dataSource={lines}
        pagination={false}
        scroll={{ x: 1200 }}
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={6} align="right">
              <strong>Tổng tiền</strong>
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              <strong>{formatVnd(total)}</strong>
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} />
          </Table.Summary.Row>
        )}
      />
    </AppShell>
  );
}
