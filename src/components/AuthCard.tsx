import type { ReactNode } from "react";
import imcLogo from "@/assets/imc-logo.jpg.asset.json";

export function AuthCard({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <div className="auth-brand">
          <img src={imcLogo.url} alt="Logo Industrial Measuring Center" className="auth-logo" />
          <div>
            <div className="auth-brand-title">Hệ thống quản lý đo lường</div>
            <div className="auth-brand-sub">Phòng đo lường - Hiệu chuẩn - Kiểm định</div>
          </div>
        </div>
        <h1 className="auth-title">{title}</h1>
        <p className="auth-subtitle">{subtitle}</p>
        {children}
      </div>
    </div>
  );
}
