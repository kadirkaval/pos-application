import { Button, Modal } from "antd";

function PrintBill({ isModalOpen, setIsModalOpen }) {
  return (
    <Modal
      title="Fatura Yazdır"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={false}
      width={800}
    >
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto bg-white px-6">
          <article className="overflow-hidden">
            <div className="logo my-6 text-4xl font-bold text-slate-500">
              <h2>LOGO</h2>
            </div>
            <div className="bill-details">
              <div className="grid sm:grid-cols-4 grid-cols-3 gap-10">
                <div className="text-md text-slate-500">
                  <p className="font-bold">Fatura Detayı:</p>
                  UnWrapped
                  <p>Fake Street 123</p>
                  <p>San Javier</p>
                  <p>CA 1234</p>
                </div>
                <div className="text-md text-slate-500">
                  <p className="font-bold">Fatura:</p>
                  Kent Aş.
                  <p>Fake Street 007</p>
                  <p>fisco</p>
                  <p>CA 0000</p>
                </div>
                <div className="text-md text-slate-500">
                  <div>
                    <p className="font-bold">Fatura Numarası:</p>
                    <p>00041</p>
                  </div>
                  <div className="mt-2">
                    <p className="font-bold">Veriliş Tarihi:</p>
                    <p>12/12/2023</p>
                  </div>
                </div>
                <div className="text-md text-slate-500 sm:block hidden">
                  <div>
                    <p className="font-bold">Şartlar:</p>
                    <p>10 gün</p>
                  </div>
                  <div className="mt-2">
                    <p className="font-bold">Vade:</p>
                    <p>12/12/2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bill-table-area mt-8">
              <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pt-4 text-left font-normal text-slate-700 text-sm sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      Görsel
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pt-4 text-left font-normal text-slate-700 text-sm sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      Başlık
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pt-4 text-left font-normal text-slate-700 text-sm sm:pl-6 md:pl-0 sm:table-cell hidden text-center"
                    >
                      Fiyat
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pt-4 text-left font-normal text-slate-700 text-sm sm:pl-6 md:pl-0 sm:table-cell hidden text-center"
                    >
                      Adet
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pt-4 text-left font-normal text-slate-700 text-sm sm:pl-6 md:pl-0 sm:table-cell hidden text-end"
                    >
                      Toplam
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4">
                      <img
                        className="w-12 h-12 object-cover"
                        alt="example"
                        src="https://www.bilgiustam.com/resimler/2015/11/elma.jpg"
                      />
                    </td>
                    <td className="py-4">
                      <span className="font-medium">Sirke</span>
                    </td>
                    <td className="py-4 text-center">
                      <span>5₺</span>
                    </td>
                    <td className="py-4 text-center">
                      <span>2</span>
                    </td>
                    <td className="py-4 text-end">
                      <span>10₺</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th className="text-right pt-6" colSpan={4} scope="row">
                      <span className="font-normal text-slate-700">
                        Ara Toplam
                      </span>
                    </th>
                    <th className="text-right pt-6" colSpan={4} scope="row">
                      <span className="font-normal text-slate-700">
                        10₺
                      </span>
                    </th>
                  </tr>
                 
                  <tr>
                    <th className="text-right pt-2" colSpan={4} scope="row">
                      <span className="font-normal text-slate-700">
                        KDV %8
                      </span>
                    </th>
                    <th className="text-right pt-2" colSpan={4} scope="row">
                      <span className="font-normal text-red-500">
                        +4₺
                      </span>
                    </th>
                  </tr>
                  <tr>
                    <th className="text-right" colSpan={4} scope="row">
                      <span className="font-normal text-slate-700">
                        Toplam
                      </span>
                    </th>
                    <th className="text-right py-2" colSpan={4} scope="row">
                      <span className="font-bold text-slate-700">
                        14₺
                      </span>
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div className="py-9">
                <div className="border-t pt-9 border-slate-400">
                <p className="text-sm font-light text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nobis exercitationem doloribus nostrum accusantium, similique, explicabo doloremque porro maiores, dolore mollitia dolores suscipit dolorem cupiditate magnam deleniti amet placeat? Iste aliquid molestiae voluptatibus dolor suscipit illum recusandae dolore obcaecati, excepturi veniam porro quam cumque aut atque accusantium dignissimos nam mollitia modi officia laudantium expedita nihil doloribus nulla. Doloremque nesciunt sint neque ut dolorem, molestiae explicabo natus libero laboriosam hic. Harum!</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="flex justify-end mt-4">
        <Button type="primary" size="large">Yazdır</Button>
      </div>
    </Modal>
  );
}

export default PrintBill;
