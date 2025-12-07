
interface MenuItem {
    id: string
    name: string;
    description: string;
    price: number;
    priceOptions: { 4: number; 8: number; 12: number };
    category: string;
    isFavorite: boolean;
    image: string;
}

export type { MenuItem };