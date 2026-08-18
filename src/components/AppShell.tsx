import { Layout, Menu, Button, Drawer } from "antd";
import {
  AppstoreOutlined,
  SwapOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
  FileProtectOutlined,
  CreditCardOutlined,
  AreaChartOutlined,
  CalendarOutlined,
  MenuOutlined,
  LogoutOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import imcLogo from "@/assets/imc-logo.jpg.asset.json";

const { Sider, Header, Content } = Layout;

const items = [
  { key: "/", icon: <AppstoreOutlined />, label: <Link to="/">Quản lý dịch vụ</Link> },
  { key: "/phieu-tntm", icon: <SwapOutlined />, label: <Link to="/phieu-tntm">Phiếu TNTM</Link> },
  {
    key: "/giay-chung-nhan",
    icon: <SafetyCertificateOutlined />,
    label: <Link to="/giay-chung-nhan">Giấy chứng nhận</Link>,
  },
  { key: "/khach-hang", icon: <UserOutlined />, label: <Link to="/khach-hang">Khách hàng</Link> },
  {
    key: "/hop-dong-nguyen-tac",
    icon: <FileProtectOutlined />,
    label: <Link to="/hop-dong-nguyen-tac">Hợp đồng nguyên tắc</Link>,
  },
  { key: "/hoa-don", icon: <CreditCardOutlined />, label: <Link to="/hoa-don">Hóa đơn</Link> },
  { key: "/mau-chua-hd", icon: <AreaChartOutlined />, label: <Link to="/mau-chua-hd">Mẫu /TB chưa HĐ</Link> },
  {
    key: "lich-cong-tac",
    icon: <CalendarOutlined />,
    label: "Lịch công tác",
    children: [
      {
        key: "/lich-cong-tac",
        icon: <UnorderedListOutlined />,
        label: <Link to="/lich-cong-tac">Danh sách</Link>,
      },
      {
        key: "/lich-cong-tac/lich",
        icon: <CalendarOutlined />,
        label: <Link to="/lich-cong-tac/lich">Lịch</Link>,
      },
    ],
  },
];

export function AppShell({ title, children }: { title: string; children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const selected = pathname.startsWith("/bao-gia")
    ? "/"
    : pathname.startsWith("/phieu-tntm")
      ? "/phieu-tntm"
      : pathname;

  const menu = (
    <>
      <div className="app-sider-brand">
        <img src={imcLogo.url} alt="Logo Industrial Measuring Center" className="app-sider-logo" />
        <div className="app-sider-hello">Xin chào</div>
        <div className="app-sider-user">PĐL Lực</div>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selected]}
        defaultOpenKeys={pathname.startsWith("/lich-cong-tac") ? ["lich-cong-tac"] : []}
        items={items}
        className="app-menu"
        onClick={() => setDrawerOpen(false)}
      />
    </>
  );

  return (
    <Layout className="app-layout" style={{ minHeight: "100vh" }}>
      {isMobile ? (
        <Drawer
          placement="left"
          size="default"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          closable={false}
          styles={{ body: { padding: 0, background: "var(--ms-sider)" } }}
          className="app-drawer"
        >
          {menu}
        </Drawer>
      ) : (
        <Sider width={224} collapsedWidth={0} trigger={null} collapsible collapsed={collapsed} className="app-sider">
          {menu}
        </Sider>
      )}
      <Layout>
        <Header className="app-header">
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={() => (isMobile ? setDrawerOpen(true) : setCollapsed((c) => !c))}
            aria-label="Ẩn/hiện menu"
          />
          <Button
            type="text"
            icon={<LogoutOutlined />}
            className="app-logout"
            onClick={() => navigate({ to: "/dang-nhap" })}
          >
            Đăng xuất
          </Button>
        </Header>
        <div className="app-page-title">{title}</div>
        <Content className="app-content">{children}</Content>
      </Layout>
    </Layout>
  );
}
