import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { AuthCard } from "@/components/AuthCard";

export const Route = createFileRoute("/dang-nhap")({
  head: () => ({
    meta: [
      { title: "Đăng nhập — Hệ thống quản lý đo lường" },
      { name: "description", content: "Đăng nhập vào hệ thống quản lý báo giá, phiếu TNTM và giấy chứng nhận." },
      { property: "og:title", content: "Đăng nhập — Hệ thống quản lý đo lường" },
      { property: "og:description", content: "Đăng nhập để quản lý dịch vụ đo lường, hiệu chuẩn và kiểm định." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();

  return (
    <AuthCard title="Đăng nhập" subtitle="Vui lòng nhập tài khoản được cấp để tiếp tục.">
      <Form layout="vertical" onFinish={() => navigate({ to: "/" })} initialValues={{ username: "pdl.luc", remember: true }}>
        <Form.Item
          label="Tên đăng nhập"
          name="username"
          rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Tên đăng nhập" size="large" />
        </Form.Item>
        <Form.Item label="Mật khẩu" name="password" rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}>
          <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" size="large" />
        </Form.Item>
        <div className="auth-row">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Ghi nhớ đăng nhập</Checkbox>
          </Form.Item>
          <Link to="/quen-mat-khau" className="auth-link">
            Quên mật khẩu?
          </Link>
        </div>
        <Button type="primary" htmlType="submit" size="large" block style={{ marginTop: 16 }}>
          Đăng nhập
        </Button>
      </Form>
    </AuthCard>
  );
}
