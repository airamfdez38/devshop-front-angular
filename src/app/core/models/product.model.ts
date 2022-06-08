import { Supplier } from "./supplier.model";

export class Product {
    uuid?: string;

    name: string;

    brand: string;

    stock: number;

    price: number;

    category: string;

    image: string;

    supplier: Supplier
}