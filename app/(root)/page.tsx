import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { Product } from "@/types/product";

export default async function HomePage() {
  const data = (await getLatestProducts()) as unknown as Product[];
  return (
    <div className="wrapper">
      <ProductList data={data} title='Mi lista' limit={4}/>
    </div>
  );
};
