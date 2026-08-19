import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button, Table, Tabs } from "antd";
import { ArrowLeftOutlined, DownloadOutlined, EditOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { AppShell } from "@/components/AppShell";
import { InfoRow } from "@/components/FilterBar";
import { getQuoteDetail, formatVnd, type QuoteLine } from "@/data/mock";
import { StatusBadge } from "@/components/StatusBadge";

export const Route = createFileRoute("/bao-gia/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Chi tiết báo giá ${params.id} — Quản lý dịch vụ` },
      { name: "description", content: `Thông tin báo giá số ${params.id}: khách hàng, hạng mục, đơn giá, VAT.` },
      { property: "og:title", content: `Chi tiết báo giá ${params.id}` },
      { property: "og:description", content: "Thông tin chi tiết báo giá và các hạng mục dịch vụ." },
    ],
  }),
  component: QuoteDetailPage,
});

function QuoteDetailPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const d = getQuoteDetail(id);

  const columns: ColumnsType<QuoteLine> = [
    { title: "STT", dataIndex: "stt", width: 56, align: "center" },
    { title: "Tên mẫu/ PTĐ", dataIndex: "tenMau", width: 260, render: (v: string) => <span className="cell-link">{v}</span> },
    { title: "Đặc trưng kỹ thuật", dataIndex: "dacTrung", width: 150 },
    { title: "Số lượng", dataIndex: "soLuong", width: 76, align: "center" },
    { title: "Đơn giá", dataIndex: "donGia", width: 110, align: "right", render: (v: number) => formatVnd(v) },
    { title: "VAT", dataIndex: "vat", width: 72, align: "center" },
    { title: "Thành tiền", dataIndex: "thanhTien", width: 120, align: "right", render: (v: number) => formatVnd(v) },
    { title: "Nơi TH", dataIndex: "noiTH", width: 80, align: "center" },
    { title: "PĐL", dataIndex: "pdl", width: 76, align: "center" },
    { title: "KVPN", dataIndex: "kvpn", width: 84, align: "center" },
    { title: "GCN", dataIndex: "gcn", width: 64, align: "center" },
    { title: "In", dataIndex: "in", width: 56, align: "center" },
    { title: "Thao tác", key: "thaoTac", width: 180, align: "center", render: () => null },
  ];

  const total = d.lines.reduce((s, l) => s + l.thanhTien, 0);

  const actionButtons = (
    <div className="detail-actions">
      <Button type="primary" icon={<EditOutlined />}>
        Sửa
      </Button>
      <Button type="primary" icon={<DownloadOutlined />}>
        Tải báo giá
      </Button>
      <Button type="primary" icon={<DownloadOutlined />}>
        Tải báo giá(Theo PĐL)
      </Button>
    </div>
  );

  return (
    <AppShell title="Quản lý chung các BG/ HĐ, phiếu TNTM">
      <Button className="btn-back" icon={<ArrowLeftOutlined />} onClick={() => navigate({ to: "/" })}>
        Quay lại
      </Button>

      <Tabs
        className="detail-tabs"
        defaultActiveKey="bao-gia"
        items={[
          {
            key: "bao-gia",
            label: "Báo giá",
            children: (
              <div className="detail-panel">
                {actionButtons}
                <div className="info-grid">
                  <div>
                    <InfoRow label="Loại báo giá" value={d.loaiBaoGia} strong />
                    <InfoRow label="Số báo giá" value={d.soBaoGia} strong />
                    <InfoRow label="Ngày tạo" value={d.ngayTao} />
                    <InfoRow label="Khách hàng " value={d.khachHang} />
                    <InfoRow label="Người liên hệ" value={d.nguoiLienHe} />
                    <InfoRow label="Người lập" value={d.nguoiLap} strong />
                    <InfoRow label="Ghi chú" value={d.ghiChu} />
                    <InfoRow label="Trạng thái" value={<StatusBadge status={d.trangThai} />} />
                  </div>
                  <div>
                    <div style={{ marginBottom: 8 }}>
                      <Button type="primary">Gửi B/G cho K/H</Button>
                    </div>
                    <InfoRow label="HĐ nguyên tắc/ PO" value={d.hopDongNguyenTac} />
                    <InfoRow label="Hạn đến" value={d.hanDen} />
                    <InfoRow label="Địa chỉ" value={d.diaChi} strong />
                    <InfoRow label="Điện thoại" value={d.dienThoai} />
                    <InfoRow label="Người duyệt" value={d.nguoiDuyet} />
                    <InfoRow label="Thao tác" value={d.thaoTac} strong />
                    <InfoRow
                      label="Chuyển trạng thái"
                      value={
                        <Button size="small" type="primary">
                          Tạo xong
                        </Button>
                      }
                    />
                  </div>
                </div>

                <div className="dt-toolbar">
                  <Button type="primary" icon={<DownloadOutlined />}>
                    Kết xuất excel
                  </Button>
                  <div className="dt-toolbar-right">
                    <button type="button" className="dt-linkbtn">
                      Ẩn/hiện cột
                    </button>
                    <button type="button" className="dt-linkbtn">
                      Khôi phục ẩn/hiện cột
                    </button>
                  </div>
                </div>

                <Table<QuoteLine>
                  className="dt-table"
                  size="small"
                  bordered
                  columns={columns}
                  dataSource={d.lines}
                  pagination={false}
                  scroll={{ x: 1600 }}
                />

                <div className="dt-footer">
                  <span>Hiển thị từ 1 đến {d.lines.length} trong tổng số {d.lines.length} bản ghi</span>
                  <span className="dt-total">Tổng tiền: {formatVnd(total)}</span>
                </div>

                <div style={{ marginTop: 10 }}>{actionButtons}</div>
              </div>
            ),
          },
          { key: "hop-dong", label: "Hợp đồng", children: <div className="detail-empty">Chưa có hợp đồng cho báo giá này.</div> },
          { key: "phieu-tntm", label: "Phiếu TNTM", children: <div className="detail-empty">Chưa có phiếu TNTM cho báo giá này.</div> },
          { key: "thong-ke", label: "Thống kê PTNTM", children: <div className="detail-empty">Chưa có số liệu thống kê.</div> },
        ]}
      />
    </AppShell>
  );
}
