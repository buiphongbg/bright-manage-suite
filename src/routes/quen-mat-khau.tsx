import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button, Form, Input, message } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { AuthCard } from "@/components/AuthCard";

export const Route = createFileRoute("/quen-mat-khau")({
  head: () => ({
    meta: [
      { title: "Quên mật khẩu — Hệ thống quản lý đo lường" },
      { name: "description", content: "Gửi yêu cầu đặt lại mật khẩu tài khoản hệ thống quản lý đo lường." },
      { property: "og:title", content: "Quên mật khẩu — Hệ thống quản lý đo lường" },
      { property: "og:description", content: "Nhận liên kết đặt lại mật khẩu qua email." },
    ],
  }),
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const navigate = useNavigate();

  return (
    <AuthCard title="Quên mật khẩu" subtitle="Nhập email đăng ký, chúng tôi sẽ gửi liên kết đặt lại mật khẩu.">
      <Form
        layout="vertical"
        onFinish={() => {
          message.success("Đã gửi liên kết đặt lại mật khẩu.");
          navigate({ to: "/dat-lai-mat-khau" });
        }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: "email", message: "Vui lòng nhập email hợp lệ" }]}
        >
          <Input prefix={<MailOutlined />} placeholder="email@donvi.vn" size="large" />
        </Form.Item>
        <Button type="primary" htmlType="submit" size="large" block>
          Gửi yêu cầu
        </Button>
        <div className="auth-row" style={{ marginTop: 14, justifyContent: "center" }}>
          <Link to="/dang-nhap" className="auth-link">
            Quay lại đăng nhập
          </Link>
        </div>
      </Form>
    </AuthCard>
  );
}
