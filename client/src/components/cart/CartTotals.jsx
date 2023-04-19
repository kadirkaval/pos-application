import { Button } from "antd";
import { ClearOutlined, PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Card} from "antd";

function CardTotals() {
  return (
    <div className="cart h-full flex flex-col">
      <h2 className="bg-blue-600 text-white text-center py-4 px-2 font-bold tracking-wide">
        Sepetteki Ürünler
      </h2>  
          <ul className="flex flex-col gap-y-1 overflow-y-auto">
            <li>
            <Card bordered={false}>
            <div className="flex items-center justify-between h-10">
              <img
                className="w-[70px]"
                alt="example"
                src="https://www.bilgiustam.com/resimler/2015/11/elma.jpg"
              />
              <div>
                <h2>Elme</h2>
                <span>7₺ x 3</span>
              </div>
              <div className="flex justify-between items-center">
            <PlusCircleOutlined style={{ fontSize: '16px', color: '#08c' }}/>
            <span className="px-2">3</span>
            <MinusCircleOutlined style={{ fontSize: '16px', color: '#08c' }}/>
            </div>
            </div>           
          </Card>
            </li>
            <li>
            <Card bordered={false}>
            <div className="flex items-center justify-between">
              <img
                className="w-[70px]"
                alt="example"
                src="https://www.bilgiustam.com/resimler/2015/11/elma.jpg"
              />
              <div>
                <h2>Elme</h2>
                <span>7₺ x 3</span>
              </div>
              <div className="flex justify-between items-center">
            <PlusCircleOutlined style={{ fontSize: '16px', color: '#08c' }}/>
            <span className="px-2">3</span>
            <MinusCircleOutlined style={{ fontSize: '16px', color: '#08c' }}/>
            </div>
            </div>           
          </Card>
            </li>
            <li>
            <Card bordered={false}>
            <div className="flex items-center justify-between h-10">
              <img
                className="w-[70px]"
                alt="example"
                src="https://www.bilgiustam.com/resimler/2015/11/elma.jpg"
              />
              <div>
                <h2>Elme</h2>
                <span>7₺ x 3</span>
              </div>
              <div className="flex justify-between items-center">
            <PlusCircleOutlined style={{ fontSize: '16px', color: '#08c' }}/>
            <span className="px-2">3</span>
            <MinusCircleOutlined style={{ fontSize: '16px', color: '#08c' }}/>
            </div>
            </div>           
          </Card>
            </li>
            <li>
            <Card bordered={false}>
            <div className="flex items-center justify-between h-10">
              <img
                className="w-[70px]"
                alt="example"
                src="https://www.bilgiustam.com/resimler/2015/11/elma.jpg"
              />
              <div>
                <h2>Elme</h2>
                <span>7₺ x 3</span>
              </div>
              <div className="flex justify-between items-center">
            <PlusCircleOutlined style={{ fontSize: '16px', color: '#08c' }}/>
            <span className="px-2">3</span>
            <MinusCircleOutlined style={{ fontSize: '16px', color: '#08c' }}/>
            </div>
            </div>           
          </Card>
            </li>
            <li>
            <Card bordered={false}>
            <div className="flex items-center justify-between h-10">
              <img
                className="w-[70px]"
                alt="example"
                src="https://www.bilgiustam.com/resimler/2015/11/elma.jpg"
              />
              <div>
                <h2>Elme</h2>
                <span>7₺ x 3</span>
              </div>
              <div className="flex justify-between items-center">
            <PlusCircleOutlined style={{ fontSize: '16px', color: '#08c' }}/>
            <span className="px-2">3</span>
            <MinusCircleOutlined style={{ fontSize: '16px', color: '#08c' }}/>
            </div>
            </div>           
          </Card>
            </li>
            <li>
            <Card bordered={false}>
            <div className="flex items-center justify-between h-10">
              <img
                className="w-[70px]"
                alt="example"
                src="https://www.bilgiustam.com/resimler/2015/11/elma.jpg"
              />
              <div>
                <h2>Elme</h2>
                <span>7₺ x 3</span>
              </div>
              <div className="flex justify-between items-center">
            <PlusCircleOutlined style={{ fontSize: '16px', color: '#08c' }}/>
            <span className="px-2">3</span>
            <MinusCircleOutlined style={{ fontSize: '16px', color: '#08c' }}/>
            </div>
            </div>           
          </Card>
            </li>
            <li>
            <Card bordered={false}>
            <div className="flex items-center justify-between h-10">
              <img
                className="w-[70px]"
                alt="example"
                src="https://www.bilgiustam.com/resimler/2015/11/elma.jpg"
              />
              <div>
                <h2>Elme</h2>
                <span>7₺ x 3</span>
              </div>
              <div className="flex justify-between items-center">
            <PlusCircleOutlined style={{ fontSize: '16px', color: '#08c' }}/>
            <span className="px-2">3</span>
            <MinusCircleOutlined style={{ fontSize: '16px', color: '#08c' }}/>
            </div>
            </div>           
          </Card>
            </li>
          </ul>
      
      <div className="cart-totals mt-auto">
        <div className="border border-b">
          <div className="flex justify-between p-2">
            <b>Ara Toplam</b>
            <span>99₺</span>
          </div>
          <div className="flex justify-between p-2">
            <b>KDV %8</b>
            <span className="text-red-700">7.92₺</span>
          </div>
        </div>
        <div className="border-b mt-4">
          <div className="flex justify-between p-2">
            <b className="text-lg text-green-500">Genel Toplam</b>
            <span className="text-2xl">99₺</span>
          </div>
        </div>
        <div className="py-4 px-2">
          <Button type="primary" size="large" className="w-full">
            Sipariş Oluştur
          </Button>
          <Button
            icon={<ClearOutlined />}
            type="primary"
            size="large"
            className="w-full mt-2 flex items-center justify-center"
            danger
          >
            Temizle
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardTotals;
