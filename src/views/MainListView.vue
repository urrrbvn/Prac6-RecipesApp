<template>
    <div class="viewContainer" >
        <h1>All recipes</h1>
        <div class="inputCont">
            <p>Search recipes</p>
            <input type="text" v-model="inputVal" @keyup.enter="handler">
        </div>
        <div class="cardList">
            <MainListCard v-for="elem in recipesState.recipes" :elem="elem"></MainListCard>
        </div>
    </div>
</template>

<script setup>
import { useRecipesStorage } from '@/stores/RecipesStore'
import { ref } from 'vue';
import MainListCard from '../components/MainListCard.vue';

const recipesState = useRecipesStorage()

const inputVal = ref('')

function handler(){
    recipesState.Search(inputVal)
}


</script>

<style scoped>
    .viewContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .inputCont{
        margin-top: 34px;
        margin-bottom: 69px;
    }
    input{
        width: 405px;
        height: 46px;
        border-radius: 18px;
        margin-top: 5px;
        padding-left: 20px;
    }
    h1{
        font-size: 48px;
        font-weight: 400;
        line-height: 58px;
        margin-top: 34px;
    }
    .cardList{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 38px;

        width: 851px;

        justify-content: center;
    }
</style>