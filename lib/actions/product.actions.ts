'use server';

import { prisma } from "@/db/prisma";
import { Product } from "@/types/product";

function normalizeProduct(product: any): Product {
  return {
    ...product,
    price: Number(product.price),
    rating: Number(product.rating),
    createdAt: product.createdAt ? product.createdAt.toISOString() : undefined,
  };
}

export async function getLatestProducts(): Promise<Product[]> {
  const data = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return data.map(normalizeProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const data = await prisma.product.findFirst({
    where: { slug },
  });

  return data ? normalizeProduct(data) : null;
}
