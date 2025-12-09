import NotFound from "@/app/not-found";
import ProductPrice from "@/components/shared/product/product-price";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { Star } from "lucide-react";
import Image from "next/image";

export default async function ProductDetailPage({params}:{params:Promise<{slug:string}>}) {
  
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  
  if (!product) {
    return NotFound();
  }

  return (
    <div className="flex gap-20 items-start">
      <div>
        <Image
          className="w-full max-w-xs rounded-2xl"
          src={product.images[0]}
          alt={product.name}
          width={300} height={300}
        />
      </div>
      <div>
        <p className="text-sm mb-3">{product?.category}</p>
        <h1 className="text-xl font-bold mb-5">{product?.name}</h1>
        <div className="flex text-sm items-center gap-1 mb-8">
          <Star className="h-4 w-4 fill-amber-500 stroke-0" />
          {product?.rating} of {product?.numReviews} reviews
        </div>
        <div>
          <h1 className="text-l font-bold">Description</h1>
          <p>{product?.description}</p>
        </div>
      </div>
      <div className="border-1 shadow-2xl p-5 rounded-2xl">
        <div className="flex gap-3 mb-4">
          Price
          {product.stock > 0 ? (
            <ProductPrice value={+product.price} className={""} />
          ) : (
            <p className="text-destructive">Out of stock</p>
          )}
        </div>
        <Button>Add to cart</Button>
      </div>
    </div>
  )
}
