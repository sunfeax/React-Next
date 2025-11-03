export type Product = {
    id?: string;
    name: string;
    slug: string;
    category: string;
    description: string;
    images: string[];
    price: number;
    brand: string;
    rating: number;
    numReviews: number;
    stock: number;
    isFeature: boolean;
    banner: string;
}