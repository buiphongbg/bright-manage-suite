import { Tag } from "antd";

/**
 * Ánh xạ trạng thái → (màu Ant Design, nhãn hiển thị, class CSS).
 * Dùng cho mọi loại trạng thái trong hệ thống: báo giá, GCN, hóa đơn,
 * hợp đồng, lịch công tác… để đảm bảo màu sắc nhất quán, rõ ràng.
 */
type StatusCfg = { color: string; label: string; cls: string };

const NORMALIZE: Record<string, string> = {
  "mới tạo": "moi-tao",
  "mớitạo": "moi-tao",
  "chờ duyệt": "cho-duyet",
  "chờduyệt": "cho-duyet",
  "đã duyệt": "da-duyet",
  "đãduyệt": "da-duyet",
  "phát hành": "phat-hanh",
  "pháthành": "phat-hanh",
  "đã hủy": "da-huy",
  "đãhủy": "da-huy",
  "hết hiệu lực": "het-hieu-luc",
  "hếthiệulực": "het-hieu-luc",
  "còn hiệu lực": "con-hieu-luc",
  "cònhiệulực": "con-hieu-luc",
  "chưa thanh toán": "chua-thanh-toan",
  "chửathanhtoán": "chua-thanh-toan",
  "đã thanh toán": "da-thanh-toan",
  "đãthanhtoán": "da-thanh-toan",
  "chưa có": "chua-co",
  "chưa có hd": "chua-co",
};

const MAP: Record<string, StatusCfg> = {
  "moi-tao": { color: "default", label: "Mới tạo", cls: "sb-moi-tao" },
  "cho-duyet": { color: "warning", label: "Chờ duyệt", cls: "sb-cho-duyet" },
  "da-duyet": { color: "processing", label: "Đã duyệt", cls: "sb-da-duyet" },
  "phat-hanh": { color: "success", label: "Phát hành", cls: "sb-phat-hanh" },
  "da-huy": { color: "error", label: "Đã hủy", cls: "sb-da-huy" },
  "het-hieu-luc": { color: "default", label: "Hết hiệu lực", cls: "sb-het-hieu-luc" },
  "con-hieu-luc": { color: "success", label: "Còn hiệu lực", cls: "sb-con-hieu-luc" },
  "chua-thanh-toan": { color: "warning", label: "Chưa thanh toán", cls: "sb-cho-duyet" },
  "da-thanh-toan": { color: "success", label: "Đã thanh toán", cls: "sb-phat-hanh" },
  "chua-co": { color: "default", label: "Chưa có", cls: "sb-moi-tao" },
};

function normalize(status: string): string {
  const key = status
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
  return NORMALIZE[key] ?? key.replace(/\s+/g, "-");
}

export type StatusBadgeProps = {
  status: string;
  /** Nhãn hiển thị tuỳ chỉnh; mặc định lấy từ cấu hình. */
  label?: string;
  size?: "small" | "default";
};

export function StatusBadge({ status, label, size = "default" }: StatusBadgeProps) {
  const cfg = MAP[normalize(status)] ?? {
    color: "default",
    label: status,
    cls: "sb-moi-tao",
  };
  return (
    <Tag
      color={cfg.color}
      bordered={false}
      className={`sb ${cfg.cls} ${size === "small" ? "sb-sm" : ""}`}
    >
      {label ?? cfg.label}
    </Tag>
  );
}
