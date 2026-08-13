import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button, Form, Input, message } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { AuthCard } from "@/components/AuthCard";

export const Route = createFileRoute("/dat-lai-mat-khau")({
  head: () => ({
    meta: [
      { title: "Đặt lại mật khẩu — Hệ thống quản lý đo lường" },
      { name: "description", content: "Tạo mật khẩu mới cho tài khoản hệ thống quản lý đo lường." },
      { property: "og:title", content: "Đặt lại mật khẩu — Hệ thống quản lý đo lường" },
      { property: "og:description", content: "Tạo mật khẩu mới và tiếp tục sử dụng hệ thống." },
    ],
  }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const navigate = useNavigate();

  return (
    <AuthCard title="Đặt lại mật khẩu" subtitle="Mật khẩu mới cần tối thiểu 8 ký tự.">
      <Form
        layout="vertical"
        onFinish={() => {
          message.success("Đã cập nhật mật khẩu.");
          navigate({ to: "/dang-nhap" });
        }}
      >
        <Form.Item
          label="Mật khẩu mới"
          name="password"
          rules={[{ required: true, min: 8, message: "Mật khẩu tối thiểu 8 ký tự" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu mới" size="large" />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu"
          name="confirm"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Vui lòng nhập lại mật khẩu" },
            ({ getFieldValue }) => ({
              validator: (_, value) =>
                !value || getFieldValue("password") === value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Mật khẩu nhập lại không khớp")),
            }),
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Nhập lại mật khẩu" size="large" />
        </Form.Item>
        <Button type="primary" htmlType="submit" size="large" block>
          Cập nhật mật khẩu
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
