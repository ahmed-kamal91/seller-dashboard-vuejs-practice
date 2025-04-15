import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', { 
    state: ()=>({products: []}),

    actions: {

        setInitialProducts(products){
            this.products = products;
        },

        addProduct(product) {
            product.id = this.products.length + 2;
        this.products.push(product)
        },

        removeProduct(proudctId){
            this.products = this.products.filter(p => p.id != proudctId);
        }
    }
})