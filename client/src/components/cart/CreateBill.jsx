import React from "react";
import { Card, Button, Modal, Form, Input, Select } from "antd";

function CreateBill({ isModalOpen, setIsModalOpen }) {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Müşteri Adı"
          initialValues={{ remember: true }}
          name={"customerName"}
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Tel No"
          name={"phoneNumber"}
          rules={[{ required: true, message: "Please input your Phone Number!" }]}
        >
          <Input  maxLength={11}/>
        </Form.Item>
        <Form.Item
          label="Ödeme Yöntemi"
          name={"peymentMode"}
          rules={[{ required: true, message: "Please select your Peyment Mode!" }]}
        >
          <Select placeholder="Bir ödeme yöntemi seçiniz">
            <Select.Option value="nakit">Nakit</Select.Option>
            <Select.Option value="kkart">Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>
        <Card className="">
          <div className="flex justify-between">
            <span>Ara Toplam</span>
            <span>549.00₺</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>KDV %8</span>
            <span className="text-red-700">+54.00₺</span>
          </div>
          <div className="flex justify-between my-2">
            <b>Toplam</b>
            <b>592.00₺</b>
          </div>
          <div className="flex justify-end">
            <Button type="primary" htmlType="submit">
              Sipariş Oluştur
            </Button>
          </div>
        </Card>
      </Form>
    </Modal>
  );
}

export default CreateBill;
