
interface MenuItem {
    id: string
    name: string;
    description: string;
    price: number;
    category: string;
    isFavorite: boolean;
    image: string;
}

export type { MenuItem };