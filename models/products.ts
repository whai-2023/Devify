export interface Products {
  id: number
  name: string
  price: number
  description: string
  imageUrl: string
  categoryId: number
}

export interface Categories {
  id: number
  name: string
  imageUrl: string
}
