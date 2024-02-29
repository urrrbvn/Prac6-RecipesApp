import axios from "axios";
import { defineStore } from "pinia";

export const useRecipesStorage = defineStore('recipesStore', {
    state: ()=> ({
        recipes: [],
        inputVal: ''
    }),
    getters:{
        url(){
            return `https://dummyjson.com/recipes/search?q=${this.inputVal}`
        }
    },
    actions:{
        async Search(value){
            this.inputVal = value

            let res = await axios.get(this.url)
            
            this.recipes = res.data.recipes
            console.log(res.data)
        }
    }
    

})