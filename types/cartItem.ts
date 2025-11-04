import { MenuItem } from "./menuItem";

interface CartItem {
    menu: MenuItem;
    pieces: number;
    quantity: number;
}

export type { CartItem };