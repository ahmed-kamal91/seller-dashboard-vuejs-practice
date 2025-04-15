<template>

    <button 
    class='btn btn-primary w-100'
    style="height: 100%"
    data-bs-toggle="modal"
    v-html="txtBtn"
    data-bs-target="#addProductModal">
    </button>


    <!-- add product modal -->
    <div class="modal fade" data-bs-backdrop="static"  id="addProductModal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Product Info</h5>
                </div>
                <div class="modal-body text-start">

                    <!-- name -->
                    <div class="form-group">                        
                        <label  for="productName">Product name:</label>
                        <input class="form-control" type="text" id="productName" v-model="formData.name">
                    </div>

                    <!-- stock -->
                    <div class="form-group mb-2">                        
                        <label for="productStock">Stock:</label>
                        <input class="form-control" type="number" id="productStock" v-model="formData.stock">
                    </div>

                    
                    

                        <!-- price -->
                        <div class="form-group mb-2">
                            
                            <!-- labels: price , discount  -->
                            <div class="d-flex  justify-content-between">
                                <label  for="productPrice">Price:</label>
                                <div class="d-flex justify-content-cener align-items-center">
                                    <label for="productDiscount">Discount</label>
                                    <input 
                                    type="checkbox" 
                                    class="form-check ms-2" 
                                    id="productDiscount" 
                                    style="display: inline;"
                                    v-model="hasDiscount">
                                </div>
                            </div>

                            <div class="input-group w-100">
                                <!-- price -->
                                <input class="form-control" type="number" id="productPrice" v-model="formData.price">

                                <!-- discount -->
                                <input 
                                v-show="hasDiscount" 
                                class="form-control" 
                                type="number" 
                                id="productDiscount" 
                                style="display: block;"
                                min="0"
                                max="100"
                                v-model.number="discountValue"
                                v-model="formData.discount"
                                @input="validateDiscount">
                            </div> 

                        </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-danger" data-bs-dismiss="modal">cancel</button>
                    <button class="btn btn-primary" @click="addProduct()" :disabled="!isEmpty()" data-bs-dismiss="modal">Add</button>
                </div>
            </div>
        </div>
        </div>

</template>


<script>
// function return the store instance
import { useProductStore } from './../stores/productStore.js'

export default {
    data: ()=>({
        
        hasDiscount: false,
        discountValue: 0,
        formData: {name: '', stock:0, price:0, discount:0},
    }),
    components: {},
    props: {
        txtBtn: String,
    },
    methods:{
        validateDiscount() {
            if (this.discountValue < 0) 
                this.discountValue = 0;
        
            else if (this.discountValue > 100) 
                this.discountValue = 100;
        },


        isEmpty() {
            return this.formData.name.trim() !== '' && this.formData.price && this.formData.stock;
        },
    

        addProduct() {
            if (this.isEmpty()){
                // get + add + reset
                const store = useProductStore();
                store.addProduct({...this.formData});  //shallow-copy                     
                this.formData = {name: '', stock:0, price:0, discount:0};
            } 
        }
    }
}
</script>

