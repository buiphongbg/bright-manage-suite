import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { ReactNode } from "react";

export function FilterBar({ children, onSearch }: { children: ReactNode; onSearch?: () => void }) {
  return (
    <div className="filter-bar">
      <div className="filter-fields">{children}</div>
      <Button type="primary" icon={<SearchOutlined />} onClick={onSearch}>
        Tra cứu
      </Button>
    </div>
  );
}

export function FilterField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="filter-field">
      <label className="filter-label">{label}</label>
      {children}
    </div>
  );
}

export function InfoRow({ label, value, strong }: { label: string; value: ReactNode; strong?: boolean }) {
  return (
    <div className="info-row">
      <span className="info-label">{label}:</span>
      <span className={strong ? "info-value info-value-strong" : "info-value"}>{value}</span>
    </div>
  );
}
