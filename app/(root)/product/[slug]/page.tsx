import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/lib/actions/product.actions";

export default async function ProductDetailPage({params}:{params:Promise<{slug:string}>}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  return (
    <div className="flex gap-6">
      <div>
        <img className="w-xs" src={product?.images[0]} alt={product?.name} />
      </div>
      <div>
        <p className="text-sm mb-3">{product?.category}</p>
        <h1 className="text-xl font-bold mb-5">{product?.name}</h1>
        <p className="text-sm">{product?.rating} of {product?.numReviews} reviews</p>
        <div>
          <h1 className="text-l font-bold">Description</h1>
          <p>{product?.description}</p>
        </div>
      </div>
      <div>
        <p>Price €{product?.price}</p>
        <div className="flex gap-2">
          <h3>Status</h3>
          <p>{product!.stock > 0 ? 'In stock' : 'Out of stock'}</p>
        </div>
        <Button>Add to cart</Button>
      </div>
    </div>
  )
}
