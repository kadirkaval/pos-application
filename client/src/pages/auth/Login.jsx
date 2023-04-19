import { Button, Form, Input, Carousel, Checkbox } from "antd";
import { Link } from "react-router-dom";
import AuthCarouselItem from "../../components/auth/AuthCarouselItem";

function Login() {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 flex flex-col h-full justify-center w-[40%]">
          <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical">
            <Form.Item
              label="Email"
              name={"email"}
              rules={[{ required: true, message: "Email boş bırakılmaz" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Şifre"
              name={"password"}
              rules={[
                { required: true, message: "Şifre alanı boş bırakılmaz" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item name={"remember"} valuePropName="checked">
              <div className="flex justify-between items-center">
                <Checkbox>Remember me</Checkbox>
                <Link>Forgot Password</Link>
              </div>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Giriş Yap
              </Button>
            </Form.Item>
          </Form>
          <div className="text-center">
           Henüz bir hesabınız yok mu?
            <Link to={"/register"} className="text-blue-600">
              {" "}
              Şimdi kaydol
            </Link>
          </div>
        </div>
        <div className="md:w-[60%] bg-[#6c63ff]">
          <div className="w-full">
            <Carousel className="px-6 !h-full" autoplay>
              <AuthCarouselItem
                title={"Responsive"}
                content={"Tüm cihaz boyutları ile uyumludur"}
                img={"images/responsive.svg"}
              />
              <AuthCarouselItem
                title={"İstatistikler"}
                content={"Geniş tutulan istatistikler"}
                img={"images/statistic.svg"}
              />
              <AuthCarouselItem
                title={"Müşteri memnuniyeti"}
                content={"Üürnden memnun müşteriler"}
                img={"images/customer.svg"}
              />
              <AuthCarouselItem
                title={"Yönetici Paneli"}
                content={"tekyerden Yönetim"}
                img={"images/admin.svg"}
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
