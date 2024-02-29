<template>
    <div class="Header" >
        <div class="logo">Recipes</div>
        <div class="btnCont">
            <RouterLink to="/"><button>All recipes</button></RouterLink>
            <RouterLink to="/favourite"><button>Favourite</button></RouterLink>
        </div>
    </div>
</template>

<script setup>
import {RouterLink} from 'vue-router';


</script>

<style scoped>
    .Header{
        height: 158px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: orange;
    }
    .logo{
        width: 296px;
        height: 104px;

        border-radius: 25px;

        background-color: #FF4F04;

        font-size: 48px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: 55px;
    }
    button{
    margin-top: 11px;
    margin-right: 55px;
    
    width: 177px;
    height: 47px;

    border-radius: 25px;
    border: none;

    align-self: center;

    text-align: center;

    background-color: #FF4F04;
}
</style>