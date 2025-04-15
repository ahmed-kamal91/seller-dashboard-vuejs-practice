<template>

    <div class="container">

        <section class="row border border-light">

        <aside class="col-2 d-flex flex-column py-2 px-0 align-items-center bg-light">
            
            <ul class="list-unstyled text-center w-100 px-2">
                <li class="mb-2"><div class="incHeight"><addProductBtn txtBtn="Add </br> Product"></addProductBtn></div></li>
                <li class="mb-2"><a class="btn" href="#">Categories</a></li>
                <li class="mb-2"><a class="btn" href="#">Contact Us</a></li>
                <li class="mb-2"><a class="btn" href="#">About</a></li>
                <li class="mb-2"><a class="btn btn-outline-danger rounded-3" href="#">logout</a></li>
            </ul>
                        
        </aside>   


        <!-- table -->
        <section class="col p-0 minHeight">

            <div v-if="!products.length" class="d-flex flex-column mt-5 align-items-center minHeight text-secondary">
                <i class="fa-solid fa-box-open fa-10x"></i>
                <h3 >empty...add some products...</h3>
            </div>

            <table v-if="products.length" class="table">

            <!-- head -->
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Remove?</th>
                </tr>
            </thead>

            <!-- body -->
            <tbody>
                <tr v-for="p in products.slice().reverse()" :key="p.id">
                    <td>{{ p.name }}</td>
                    <td>{{ p.stock }}</td>
                    <td>{{ p.price }}</td>
                    <td>{{ p.discount }}</td>
                    <td><button class="btn btn-outline-danger border-0" @click="remove(p.id)">
                        <i class="fa-solid fa-trash fa-lg"></i>
                    </button></td>
                </tr>
            </tbody>

            </table>
        </section>  

        </section>




    </div>

</template>

<script>
import { useProductStore } from '@/stores/productStore';
import addProductBtn from './addProductBtn.vue';

export default {

    components:{addProductBtn},

    data: ()=>({}),
    props: {
        products: Array,
    },
    methods: {
        remove(id){
            const store = useProductStore();
            store.removeProduct(id);
        }
    }
}
</script>


<style>
.incHeight{
    height: 7rem;
}

.minHeight {
  min-height: 79vh;
}

</style>
