import { ACONCAGUA, CHAMPAQUI, STICKERS_4PANELES, STICKERS_6PANELES } from "@/assets/images";


export type ProductLabel = { label: string; img: string; img2: string; tomas: number; paneles: number; colors: number; age: string; price: string }


export const productLabels: Record<string, ProductLabel> = {
  champaqui: {label: "Champaquí", img: CHAMPAQUI, img2: STICKERS_4PANELES, tomas: 20, paneles: 4, colors: 5, age: "3 a 6", price: "250.000"},
  aconcagua: {label: "Aconcagua", img: ACONCAGUA, img2: STICKERS_6PANELES, tomas:   30, paneles: 6, colors: 6, age: "3 a 8", price: "350.000"},
}

export interface CreateOrder {
  id: string;
  uuid: string;
  mp_id: string;
  item: string;
  amount: number;
}

export const HOST = "http://localhost:3000"