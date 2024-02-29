<template>
    <div class="favCont">
        <h1>Favourite ({{ favArr.favRecipes.length }})</h1>
        <div class="selector">
            <h3>Difficulty</h3>
            <select name="" id="" v-model="FilterOpt">
                <option disabled value="">Фильтр</option>
                <option value="All">All</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
            </select>
        </div>
        <FavListCard v-for="elem in favArr.currentFilter"
                                    :elem = elem>
        </FavListCard>
    </div>  
</template>

<script setup>
import { useFavStore } from '@/stores/FavStore';
import FavListCard from '../components/FavListCard.vue'
import { onMounted, watch, ref } from 'vue';

    const favArr = useFavStore()

    const FilterOpt = ref('')

    watch(FilterOpt, ()=>{
        favArr.filterFav(FilterOpt.value)
        console.log(FilterOpt.value)
    })

</script>

<style scoped>
    .favCont{
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

    }
    h1{
        padding: 0;
        margin-top: 31px;
        margin-bottom: 37px;
    }
    .selector{
        width: 162px;
        height: 72px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
    }
    select{
        width: 144px;
        height: 46px;
        border-radius: 15px;
        border: 1px solid black;
        padding-left: 18px;
        align-self: center;
    }
    h3{
        margin-left: 18px;
        font-size: 16px;
        margin-bottom: 6px;
    }


</style>