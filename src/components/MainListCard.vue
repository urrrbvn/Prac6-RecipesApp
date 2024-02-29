<template>
    <div class="card">
        <img :src="elem.image" alt="" width="255" height="207">
        <h2>{{ elem.name }}</h2>
        <p>Difficulty: {{ elem.difficulty }}</p>
        <p>Cuisine: {{ elem.cuisine }} </p>
        <button @click="addToFav(elem)" >Add to favourite</button>
    </div>
</template>

<script setup>
import { useFavStore } from '@/stores/FavStore';

const props = defineProps({
    elem: Object
})

const favState = useFavStore()

function addToFav(value){
    favState.addNewFav(value)

    console.log('Успешно!');
}

</script>

<style scoped>
.card{
    width: 255px;
    height: 357px;

    display: flex;
    flex-direction: column;

    border-radius: 25px;

    overflow: hidden;

    border: 1px solid #E4E4E4;

    box-shadow: 0px 4px 4px 0px #00000040;

}
h2{
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    margin-left: 18px;

    margin-top: 17.4px;
}
p{
    margin-left: 18px;
    padding-bottom: 4px;
}
button{
    margin-top: 11px;
    
    width: 177px;
    height: 47px;

    border-radius: 25px;
    border: none;

    align-self: center;

    text-align: center;

    background-color: #FF4F04;
}
</style>