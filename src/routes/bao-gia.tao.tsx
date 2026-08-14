import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button, DatePicker, Input, Select, Table, message } from "antd";
import { ArrowLeftOutlined, DeleteOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import dayjs from "dayjs";
import { AppShell } from "@/components/AppShell";
import { FilterField } from "@/components/FilterBar";
import { customers, formatVnd } from "@/data/mock";

export const Route = createFileRoute("/bao-gia/tao")({
  head: () => ({
    meta: [
      { title: "Tạo báo giá — Quản lý dịch vụ" },
      {
        name: "description",
        content: "Lập báo giá mới: chọn khách hàng, loại yêu cầu, thêm hạng mục dịch vụ, đơn giá và VAT.",
      },
      { property: "og:title", content: "Tạo báo giá mới" },
      { property: "og:description", content: "Lập báo giá mới cho khách hàng với các hạng mục dịch vụ." },
    ],
  }),
  component: CreateQuotePage,
});

type NewLine = {
  key: string;
  tenMau: string;
  dacTrung: string;
  soLuong: number;
  donGia: number;
  vat: string;
  noiTH: string;
  pdl: string;
  gcn: string;
};

const emptyLine = (key: string): NewLine => ({
  key,
  tenMau: "",
  dacTrung: "",
  soLuong: 1,
  donGia: 0,
  vat: "5%",
  noiTH: "VMI",
  pdl: "V03",
  gcn: "Có",
});

const lineTotal = (l: NewLine) => Math.round(l.soLuong * l.donGia * (1 + Number(l.vat.replace("%", "")) / 100));

function CreateQuotePage() {
  const navigate = useNavigate();
  const [lines, setLines] = useState<NewLine[]>([emptyLine("1")]);
  const [khachHang, setKhachHang] = useState<string | undefined>();

  const update = (key: string, patch: Partial<NewLine>) =>
    setLines((ls) => ls.map((l) => (l.key === key ? { ...l, ...patch } : l)));

  const columns: ColumnsType<NewLine> = [
    { title: "STT", key: "stt", width: 56, align: "center", render: (_: unknown, __: NewLine, i: number) => i + 1 },
    {
      title: "Tên mẫu/ PTĐ",
      dataIndex: "tenMau",
      width: 260,
      render: (v: string, r) => (
        <Input value={v} placeholder="Tên mẫu / phương tiện đo" onChange={(e) => update(r.key, { tenMau: e.target.value })} />
      ),
    },
    {
      title: "Đặc trưng kỹ thuật",
      dataIndex: "dacTrung",
      width: 180,
      render: (v: string, r) => <Input value={v} onChange={(e) => update(r.key, { dacTrung: e.target.value })} />,
    },
    {
      title: "Số lượng",
      dataIndex: "soLuong",
      width: 90,
      align: "center",
      render: (v: number, r) => (
        <Input
          value={String(v)}
          onChange={(e) => update(r.key, { soLuong: Number(e.target.value.replace(/\D/g, "")) || 0 })}
        />
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
          options={[
            { value: "0%", label: "0%" },
            { value: "5%", label: "5%" },
            { value: "8%", label: "8%" },
            { value: "10%", label: "10%" },
          ]}
        />
      ),
    },
    {
      title: "Thành tiền",
      key: "thanhTien",
      width: 120,
      align: "right",
      render: (_: unknown, r) => formatVnd(lineTotal(r)),
    },
    {
      title: "Nơi TH",
      dataIndex: "noiTH",
      width: 100,
      render: (v: string, r) => (
        <Select
          value={v}
          style={{ width: "100%" }}
          onChange={(val) => update(r.key, { noiTH: val })}
          options={[
            { value: "VMI", label: "VMI" },
            { value: "KH", label: "KH" },
          ]}
        />
      ),
    },
    {
      title: "PĐL",
      dataIndex: "pdl",
      width: 90,
      render: (v: string, r) => (
        <Select
          value={v}
          style={{ width: "100%" }}
          onChange={(val) => update(r.key, { pdl: val })}
          options={["V01", "V02", "V03", "V04"].map((x) => ({ value: x, label: x }))}
        />
      ),
    },
    {
      title: "GCN",
      dataIndex: "gcn",
      width: 84,
      render: (v: string, r) => (
        <Select
          value={v}
          style={{ width: "100%" }}
          onChange={(val) => update(r.key, { gcn: val })}
          options={[
            { value: "Có", label: "Có" },
            { value: "Không", label: "Không" },
          ]}
        />
      ),
    },
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
  const selected = customers.find((c) => c.tenKhachHang === khachHang);

  return (
    <AppShell title="Tạo báo giá">
      <Button className="btn-back" icon={<ArrowLeftOutlined />} onClick={() => navigate({ to: "/" })}>
        Quay lại
      </Button>

      <div className="filter-bar" style={{ marginTop: 12 }}>
        <div className="filter-fields">
          <FilterField label="Loại báo giá:">
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
          <FilterField label="Ngày tạo:">
            <DatePicker defaultValue={dayjs()} format="DD-MM-YYYY" />
          </FilterField>
          <FilterField label="Hạn đến:">
            <DatePicker defaultValue={dayjs().add(30, "day")} format="DD-MM-YYYY" />
          </FilterField>
          <FilterField label="Khách hàng:">
            <Select
              showSearch
              allowClear
              placeholder="Chọn khách hàng"
              style={{ width: 360 }}
              value={khachHang}
              onChange={setKhachHang}
              options={customers.map((c) => ({ value: c.tenKhachHang, label: c.tenKhachHang }))}
            />
          </FilterField>
          <FilterField label="Người liên hệ:">
            <Input style={{ width: 180 }} />
          </FilterField>
          <FilterField label="Điện thoại:">
            <Input style={{ width: 150 }} defaultValue={selected?.dienThoai} />
          </FilterField>
          <FilterField label="Địa chỉ:">
            <Input style={{ width: 420 }} value={selected?.diaChi ?? undefined} readOnly={!!selected} />
          </FilterField>
          <FilterField label="Ghi chú:">
            <Input.TextArea rows={1} style={{ width: 420 }} />
          </FilterField>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setLines((ls) => [...ls, emptyLine(String(Date.now()))])}
        >
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
            message.success("Đã lưu báo giá");
            navigate({ to: "/" });
          }}
        >
          Lưu báo giá
        </Button>
      </div>

      <Table<NewLine>
        className="dt-table"
        size="small"
        bordered
        rowKey="key"
        columns={columns}
        dataSource={lines}
        pagination={false}
        scroll={{ x: 1600 }}
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={6} align="right">
              <strong>Tổng tiền</strong>
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              <strong>{formatVnd(total)}</strong>
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} colSpan={4} />
          </Table.Summary.Row>
        )}
      />
    </AppShell>
  );
}
