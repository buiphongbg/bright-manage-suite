import { createFileRoute } from "@tanstack/react-router";
import { Button, Select } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { AppShell } from "@/components/AppShell";
import { assignmentsForDay } from "@/data/mock";

export const Route = createFileRoute("/lich-cong-tac/lich")({
  head: () => ({
    meta: [
      { title: "Lịch công tác theo tháng — Phân công nhân viên" },
      { name: "description", content: "Lịch tháng hiển thị các quyết định công tác và nhân viên được phân công theo từng ngày." },
      { property: "og:title", content: "Lịch công tác theo tháng" },
      { property: "og:description", content: "Xem phân công công tác theo từng ngày trong tháng." },
    ],
  }),
  component: CalendarPage,
});

const WEEKDAYS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

function CalendarPage() {
  const [month, setMonth] = useState(dayjs("2026-08-01"));

  const cells = useMemo(() => {
    const start = month.startOf("month");
    const offset = (start.day() + 6) % 7; // Monday-first
    const gridStart = start.subtract(offset, "day");
    return Array.from({ length: 42 }, (_, i) => {
      const date = gridStart.add(i, "day");
      return {
        date,
        inMonth: date.month() === month.month(),
        assignments: assignmentsForDay(date.date() + date.month() * 31),
      };
    });
  }, [month]);

  return (
    <AppShell title="Lịch công tác">
      <div className="cal-toolbar">
        <div className="cal-nav">
          <Button icon={<LeftOutlined />} onClick={() => setMonth((m) => m.subtract(1, "month"))} aria-label="Tháng trước" />
          <span className="cal-title">Tháng {month.month() + 1} / {month.year()}</span>
          <Button icon={<RightOutlined />} onClick={() => setMonth((m) => m.add(1, "month"))} aria-label="Tháng sau" />
        </div>
        <Select
          defaultValue="all"
          style={{ width: 200 }}
          options={[
            { value: "all", label: "Tất cả phòng đo lường" },
            { value: "V02", label: "PĐL V02" },
            { value: "V05", label: "PĐL V05" },
            { value: "V09", label: "PĐL V09" },
          ]}
        />
      </div>

      <div className="cal-grid">
        {WEEKDAYS.map((d) => (
          <div key={d} className={d === "T7" ? "cal-head cal-head-sat" : d === "CN" ? "cal-head cal-head-sun" : "cal-head"}>
            {d}
          </div>
        ))}
        {cells.map((c) => (
          <div key={c.date.format("YYYY-MM-DD")} className={c.inMonth ? "cal-cell" : "cal-cell cal-cell-out"}>
            <div className="cal-daynum">{c.date.date()}</div>
            <div className="cal-events">
              {c.assignments.map((a, i) => (
                <div key={i} className={a.blue ? "cal-event cal-event-blue" : "cal-event"} title={`QĐ: ${a.qd}, BG: ${a.bg}, NV: ${a.nv}`}>
                  QĐ: {a.qd}, BG: {a.bg}, NV: {a.nv}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
