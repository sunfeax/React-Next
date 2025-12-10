import NotFound from "@/app/not-found";
import { getProductBySlug } from "@/lib/actions/product.actions";
import ProductDetailPage from "./productDetailPage";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) return NotFound();

  return <ProductDetailPage product={product} />;
}
