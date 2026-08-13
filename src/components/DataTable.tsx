import { Button, Checkbox, Dropdown, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DownloadOutlined } from "@ant-design/icons";
import { useMemo, useState, type ReactNode } from "react";

export type DataTableProps<T> = {
  columns: ColumnsType<T>;
  data: T[];
  rowKey?: string;
  exportLabel?: string;
  toolbarLeft?: ReactNode;
  pageSize?: number;
  scrollX?: number;
  footerRight?: ReactNode;
  rowClassName?: (record: T) => string;
};

export function DataTable<T extends object>({
  columns,
  data,
  rowKey = "key",
  exportLabel = "Xuất excel",
  toolbarLeft,
  pageSize = 10,
  scrollX,
  footerRight,
  rowClassName,
}: DataTableProps<T>) {
  const allKeys = columns.map((c, i) => String((c as { dataIndex?: string }).dataIndex ?? c.key ?? i));
  const [hidden, setHidden] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(pageSize);

  const visibleColumns = useMemo(
    () => columns.filter((c, i) => !hidden.includes(String((c as { dataIndex?: string }).dataIndex ?? c.key ?? i))),
    [columns, hidden],
  );

  const from = data.length === 0 ? 0 : (page - 1) * size + 1;
  const to = Math.min(page * size, data.length);

  return (
    <div className="dt-wrap">
      <div className="dt-toolbar">
        <div className="dt-toolbar-left">
          <Button type="primary" icon={<DownloadOutlined />}>
            {exportLabel}
          </Button>
          {toolbarLeft}
        </div>
        <div className="dt-toolbar-right">
          <Dropdown
            trigger={["click"]}
            popupRender={() => (
              <div className="dt-colpanel">
                {columns.map((c, i) => {
                  const key = String((c as { dataIndex?: string }).dataIndex ?? c.key ?? i);
                  return (
                    <div key={key}>
                      <Checkbox
                        checked={!hidden.includes(key)}
                        onChange={(e) =>
                          setHidden((h) => (e.target.checked ? h.filter((k) => k !== key) : [...h, key]))
                        }
                      >
                        {typeof c.title === "string" ? c.title : key}
                      </Checkbox>
                    </div>
                  );
                })}
              </div>
            )}
          >
            <button type="button" className="dt-linkbtn">
              Ẩn/hiện cột
            </button>
          </Dropdown>
          <button type="button" className="dt-linkbtn" onClick={() => setHidden([])}>
            Khôi phục ẩn/hiện cột
          </button>
          <span className="dt-colcount">{allKeys.length - hidden.length} cột</span>
        </div>
      </div>

      <Table<T>
        className="dt-table"
        size="small"
        bordered
        rowKey={rowKey}
        columns={visibleColumns}
        dataSource={data}
        rowClassName={rowClassName}
        scroll={scrollX ? { x: scrollX } : undefined}
        pagination={{
          current: page,
          pageSize: size,
          total: data.length,
          showSizeChanger: false,
          onChange: (p, s) => {
            setPage(p);
            setSize(s);
          },
        }}
      />

      <div className="dt-footer">
        <span>
          Hiển thị từ {from} đến {to} trong tổng số {data.length} bản ghi
        </span>
        {footerRight}
      </div>
      <div className="dt-toolbar-left" style={{ marginTop: 8 }}>
        <Button type="primary" icon={<DownloadOutlined />}>
          {exportLabel}
        </Button>
      </div>
    </div>
  );
}
