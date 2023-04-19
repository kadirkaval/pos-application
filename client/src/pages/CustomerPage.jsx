import Header from "../components/header/Header";
import { Table } from "antd";

function CustomerPage() {

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl text-center font-bold mb-4">Müşterilerim</h1>
        <Table
          columns={columns}
          dataSource={dataSource}
          bordered
          pagination={false}
        />

      </div>
    </>
  );
}

export default CustomerPage;