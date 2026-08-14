import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeftOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Input, Select, message } from "antd";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { FilterField } from "@/components/FilterBar";

export const Route = createFileRoute("/khach-hang/tao")({
  head: () => ({
    meta: [
      { title: "Thêm khách hàng — Danh mục khách hàng" },
      {
        name: "description",
        content: "Thêm khách hàng mới: loại hình, tên, địa chỉ, tỉnh/TP, mã số thuế, điện thoại và người liên hệ.",
      },
      { property: "og:title", content: "Thêm khách hàng mới" },
      { property: "og:description", content: "Khai báo thông tin khách hàng mới cho phòng đo lường." },
    ],
  }),
  component: CreateCustomerPage,
});

const provinces = ["Hà Nội", "Hải Phòng", "Bắc Ninh", "Hưng Yên", "Đà Nẵng", "TP HCM", "Bình Dương", "Đồng Nai"];

function CreateCustomerPage() {
  const navigate = useNavigate();
  const [ten, setTen] = useState("");
  const [loaiHinh, setLoaiHinh] = useState("Doanh nghiệp");

  return (
    <AppShell title="Thêm khách hàng">
      <Button className="btn-back" icon={<ArrowLeftOutlined />} onClick={() => navigate({ to: "/khach-hang" })}>
        Quay lại
      </Button>

      <div className="filter-bar" style={{ marginTop: 12 }}>
        <div className="filter-fields">
          <FilterField label="Loại hình:">
            <Select
              value={loaiHinh}
              onChange={setLoaiHinh}
              style={{ width: 200 }}
              options={["Doanh nghiệp", "Đơn vị nhà nước", "Nước ngoài"].map((x) => ({ value: x, label: x }))}
            />
          </FilterField>
          <FilterField label="Mã khách hàng:">
            <Input style={{ width: 140 }} placeholder="Tự động" />
          </FilterField>
          <FilterField label="Tên khách hàng:">
            <Input value={ten} onChange={(e) => setTen(e.target.value)} style={{ width: 520 }} />
          </FilterField>
          <FilterField label="Địa chỉ:">
            <Input style={{ width: 520 }} />
          </FilterField>
          <FilterField label="Tỉnh/ TP:">
            <Select
              showSearch
              allowClear
              placeholder="Chọn tỉnh/TP"
              style={{ width: 200 }}
              options={provinces.map((p) => ({ value: p, label: p }))}
            />
          </FilterField>
          <FilterField label="Mã số Thuế:">
            <Input style={{ width: 180 }} />
          </FilterField>
          <FilterField label="Điện thoại:">
            <Input style={{ width: 160 }} />
          </FilterField>
          <FilterField label="Email:">
            <Input style={{ width: 240 }} />
          </FilterField>
          <FilterField label="Người liên hệ:">
            <Input style={{ width: 240 }} />
          </FilterField>
          <FilterField label="Ghi chú:">
            <Input.TextArea rows={2} style={{ width: 520 }} />
          </FilterField>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <Button
          type="primary"
          icon={<SaveOutlined />}
          onClick={() => {
            if (!ten.trim()) {
              message.warning("Vui lòng nhập tên khách hàng");
              return;
            }
            message.success("Đã lưu khách hàng");
            navigate({ to: "/khach-hang" });
          }}
        >
          Lưu khách hàng
        </Button>
        <Button onClick={() => navigate({ to: "/khach-hang" })}>Hủy</Button>
      </div>
    </AppShell>
  );
}
