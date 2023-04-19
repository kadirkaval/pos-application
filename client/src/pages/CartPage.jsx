import React, { useState } from "react";
import Header from "../components/header/Header";
import { Button, Table, Card } from 'antd';
import CreateBill from "../components/cart/CreateBill";

function CartPage() {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
      const [isModalOpen, setIsModalOpen] = useState(false);

  
  return (
    <>
      <Header />
      <div className="px-6">
      <Table columns={columns} dataSource={dataSource} bordered pagination={false}/>
      <div className="cart-total flex justify-end mt-4">
      <Card className="w-72">
      <div className="flex justify-between">
        <span>Ara Toplam</span><span>549.00₺</span>
      </div>
      <div className="flex justify-between mt-2">
        <span>KDV %8</span><span className="text-red-700">+54.00₺</span>
      </div>
      <div className="flex justify-between my-2">
        <b>Toplam</b><b>592.00₺</b>
      </div>
      <Button type="primary" className="w-full" onClick={()=>setIsModalOpen(true)}>Sipariş Oluştur</Button>
   
    </Card>
      </div>
    </div>
        <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
 
  );
}

export default CartPage;
