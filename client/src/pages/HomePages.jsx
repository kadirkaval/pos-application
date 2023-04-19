import CardTotals from "../components/cart/CartTotals";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Products from "../components/products/Products";
function HomePages() {
  return (
    <>
    <Header />
    <div className="home px-6  md:flex justify-between gap-10 max-h-[85vh]">
      <div className="categories overflow-auto max-h-[calc(100vh-_-112px)]">
        <Categories />
      </div>
      <div className="products flex-[8] overflow-auto max-h-[calc(100vh-_-112px)]">
        <Products />
      </div>
      <div className="cart-wrapper w-[300px] border border-l-2 md:mb-0">
        <CardTotals/>
      </div>
    </div>
  </>
  )
}

export default HomePages