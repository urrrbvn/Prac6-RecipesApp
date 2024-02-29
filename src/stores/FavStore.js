
import { defineStore } from "pinia";

export const useFavStore = defineStore('favStore',{
    state: ()=>({
        favRecipes:[],
        currentFilter:[],
        filterParam: 'All'
    }),
    actions:{
        addNewFav(value){
            this.favRecipes = [...this.favRecipes, value]

            this.filterFav(this.filterParam)
        },
        deleteFav(id){
            this.favRecipes = this.favRecipes.filter(elem => elem.id !== id)
            this.filterFav(this.filterParam)
        },

        filterFav(value){

            this.filterParam = value

            if(this.filterParam == 'All'){
                this.currentFilter = [...this.favRecipes]
                console.log(this.currentFilter)
            }else if(this.filterParam == 'Easy'){
                this.currentFilter = this.favRecipes.filter(elem => elem.difficulty == 'Easy')
                console.log(this.currentFilter)
            }else{
                this.currentFilter = this.favRecipes.filter(elem => elem.difficulty == 'Medium')
                console.log(this.currentFilter)
            }
        }
    }
})
