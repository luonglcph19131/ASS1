type ProductRate = {
    rate: number
    count: number
}

export type Product = {
    id: number
    title: string
    price: number
    image: string
    // ....
    rating: ProductRate
}