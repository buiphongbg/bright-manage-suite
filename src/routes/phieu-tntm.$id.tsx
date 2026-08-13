import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button, Table } from "antd";
import { ArrowLeftOutlined, DownloadOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { AppShell } from "@/components/AppShell";
import { InfoRow } from "@/components/FilterBar";
import { getSampleSlip, type SampleSlipItem } from "@/data/mock";

export const Route = createFileRoute("/phieu-tntm/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Chi tiết phiếu TNTM ${params.id} — Tiếp nhận mẫu` },
      { name: "description", content: `Phiếu tiếp nhận mẫu/thiết bị số ${params.id}: khách hàng, thiết bị, ngày trả mẫu.` },
      { property: "og:title", content: `Chi tiết phiếu TNTM ${params.id}` },
      { property: "og:description", content: "Thông tin phiếu tiếp nhận mẫu và danh sách thiết bị." },
    ],
  }),
  component: SampleSlipDetailPage,
});

function SampleSlipDetailPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const d = getSampleSlip(id);

  const columns: ColumnsType<SampleSlipItem> = [
    { title: "STT", dataIndex: "stt", width: 52, align: "center" },
    {
      title: "Tên mẫu/ PTĐ",
      dataIndex: "tenMau",
      width: 200,
      render: (v: string) => <span className="cell-link cell-prewrap">{v}</span>,
    },
    { title: "Đặc trưng kỹ thuật", dataIndex: "dacTrung", width: 190 },
    { title: "Số serial", dataIndex: "soSerial", width: 90 },
    { title: "SL", dataIndex: "sl", width: 48, align: "center" },
    { title: "Nội dung PĐL phản hồi", dataIndex: "noiDungPDL", width: 130 },
    { title: "Loại GCN", dataIndex: "loaiGCN", width: 84, align: "center" },
    { title: "GCN", dataIndex: "gcn", width: 96, align: "center" },
    { title: "Trạng thái GCN", dataIndex: "trangThaiGCN", width: 120, align: "center" },
    { title: "Tình trạng mẫu", dataIndex: "tinhTrangMau", width: 120 },
    { title: "PĐL", dataIndex: "pdl", width: 60, align: "center" },
    { title: "Ngày PĐL cần trả", dataIndex: "ngayCanTra", width: 110, align: "center" },
    {
      title: "Thao tác",
      key: "thaoTac",
      width: 170,
      align: "center",
      render: () => (
        <Button size="small" type="primary">
          Chuyển mẫu tới PĐL
        </Button>
      ),
    },
  ];

  return (
    <AppShell title="Chi tiết phiếu tiếp nhận mẫu/ thiết bị">
      <div className="detail-actions" style={{ marginBottom: 12 }}>
        <Button className="btn-back" icon={<ArrowLeftOutlined />} onClick={() => navigate({ to: "/phieu-tntm" })}>
          Quay lại
        </Button>
        <Button type="primary" icon={<DownloadOutlined />}>
          Tải phiếu TNTM
        </Button>
      </div>

      <div className="info-grid">
        <div>
          <InfoRow label="Số phiếu TNTM" value={<b>{d.soPhieu}</b>} />
          <InfoRow label="Ngày tiếp nhận" value={d.ngayTiepNhan} />
          <InfoRow label="Dự kiến trả mẫu" value={d.duKienTraMau} />
          <InfoRow label="Ngày PĐL trả mẫu" value={d.ngayPDLTraMau} />
          <InfoRow label="Nơi TH" value={d.noiTH} strong />
          <InfoRow label="Hiệu lực GCN" value={d.hieuLucGCN} />
          <InfoRow label="Hiệu chỉnh" value={d.hieuChinh} />
          <InfoRow label="Trạng thái" value={<b>{d.trangThai}</b>} />
        </div>
        <div>
          <InfoRow label="Tên KH" value={d.tenKH} />
          <InfoRow label="ĐC CSSD (ghi trên GCN)" value={d.dcCSSD} />
          <InfoRow label="Mã số thuế" value={d.maSoThue} />
          <InfoRow label="Người giao mẫu" value={d.nguoiGiaoMau} />
          <InfoRow label="Điện thoại" value={d.dienThoai} />
          <InfoRow label="Phương pháp" value={d.phuongPhap} />
          <InfoRow label="Hình thức giao mẫu" value={d.hinhThucGiaoMau} strong />
          <InfoRow label="Thao tác" value={d.thaoTac} strong />
        </div>
      </div>

      <div className="dt-toolbar">
        <span />
        <div className="dt-toolbar-right">
          <button type="button" className="dt-linkbtn">
            Ẩn/hiện cột
          </button>
          <button type="button" className="dt-linkbtn">
            Khôi phục ẩn/hiện cột
          </button>
        </div>
      </div>

      <Table<SampleSlipItem>
        className="dt-table"
        size="small"
        bordered
        columns={columns}
        dataSource={d.items}
        pagination={false}
        scroll={{ x: 1700 }}
        rowClassName={(r) => (r.highlight ? "row-highlight" : "")}
      />

      <div className="dt-footer">
        <span>
          Hiển thị từ 1 đến {d.items.length} trong tổng số {d.items.length} bản ghi
        </span>
      </div>
    </AppShell>
  );
}
