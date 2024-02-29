<template>
    <div class="card">
        <img :src="elem.image" alt="" width="253" height="285">
        <div class="cardInfo">
            <div class="cardText">
                <h1>{{ elem.name }}</h1>
                <p>Difficulty: {{ elem.difficulty }}</p>
                <p>Cuisine: {{ elem.cuisine }}</p>
            </div>  
            <div class="buttons">
                <button v-if="recipeWatched" @click="changeWatched" class="watched">Watched</button>
                <button v-else @click="changeWatched" class="unwatched">Unwatched</button>
                <button @click="deleteFav" class="remove">Remove</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useFavStore } from '@/stores/FavStore'
import { ref } from 'vue';

const props = defineProps({
    elem: Object
})

const favArr = useFavStore()

const recipeWatched = ref(false)

function deleteFav(){
    favArr.deleteFav(props.elem.id)
}

function changeWatched(){
    recipeWatched.value = !recipeWatched.value
}

</script>

<style scoped>
.card{
    width: 474px;
    height: 285px;

    display: flex;
    flex-direction: row;

    border: 1px solid #E4E4E4;

    box-shadow: 0px 4px 4px 0px #00000040;

    border-radius: 25px;
    overflow: hidden;
    margin-top: 36px;
}
.cardInfo{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.cardText{
    display: flex;
    flex-direction: column;
    margin-left: 14px;   
}
h1{
    margin-top: 23px;
    margin-bottom: 2px;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
}
p{
    padding-bottom: 4px;
    font-size: 12px;
    line-height: 14.5px;

    font-weight: 400;

}
.buttons{
    margin-top: 60px;

    display: flex;
    flex-direction:column ;
    gap: 19px;
    align-self: center;
    justify-items: center;
    align-items: center;
}
button{
    
    width: 135px;
    height: 47px;

    border-radius: 25px;
    border: none;

    /* align-self: center; */

    text-align: center;
}
.watched{
    background-color: #6FFF8F;
}
.unwatched{
    background-color: #85D3FF;
}
.remove{
    background-color: red;
}
</style>