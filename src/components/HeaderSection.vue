<template>
    <div class="d-flex justify-content-between align-items-center p-3">
        <h1>Seller Dashboard</h1>
        <div style="height: 3rem; width: 3rem;"><AddProductBtn txtBtn="+"></AddProductBtn></div>
    </div>
</template>


<script>
import AddProductBtn from './addProductBtn.vue';

export default{
    components: {AddProductBtn}
}
</script>

