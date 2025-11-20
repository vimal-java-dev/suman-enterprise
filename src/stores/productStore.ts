// src/stores/productStore.ts
import { defineStore } from 'pinia'
import products from '@/data/products'
import type { Product } from '@/data/products'

export const useProductStore = defineStore('product', {
    state: () => ({
        products,
        compareList: [] as Product[]
    }),
    actions: {
        addToCompare(product: Product) {
            if (!this.compareList.find(p => p.id === product.id)) {
                this.compareList.push(product)
            }
        },
        removeFromCompare(productId: number) {
            this.compareList = this.compareList.filter(p => p.id !== productId)
        },
        clearCompare() {
            this.compareList = []
        }
    }
})
