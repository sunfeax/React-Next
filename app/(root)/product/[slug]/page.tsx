import { getProductBySlug } from "@/lib/actions/product.actions";

export default async function ProductDetailPage({params}:{params:Promise<{slug:string}>}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  return <div>
    <h1>{product?.name}</h1>
    <p>{product?.description}</p>
  </div>
}
