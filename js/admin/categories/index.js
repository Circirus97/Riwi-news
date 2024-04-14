import { deleteHttp, post, update } from "../../API/clientHTTP.js"
import { get } from "../../API/clientHTTP.js"
import { URL_CATEGORIES } from "../../API/URLS.js";
import { idCategoryUpdate, printCategories } from "./functionsDOM.js";

//Selectores

const formCategories = document.getElementById("formCategories");
export const nameCategory = document.getElementById("nameCategory");
export const descriptionCategory = document.getElementById("descriptionCategory");


//Eventos

formCategories.addEventListener("submit", (event)=>{
    event.preventDefault();

    if(idCategoryUpdate.value){
        //Actualizar
        updateCategory(idCategoryUpdate.value);
    }else {
        createCategory();
    }

});

document.addEventListener("DOMContentLoaded", ()=> {
    getCatergories();

})

async function createCategory() {

    const newCategory = {
        name: nameCategory.value,
        description : descriptionCategory.value
    };

    post(URL_CATEGORIES, newCategory);
}


async function getCatergories() {
   const data = await get(URL_CATEGORIES);

   console.log(data);

   printCategories(data);
}

export async function deleteCategory(id) {
    console.log("Eliminado Id, ", id);

    await deleteHttp(`${URL_CATEGORIES}/${id}`);
}

export async function updateCategory(id) {

    const categoryUpdate = {
        name: nameCategory.value,
        description : descriptionCategory.value
    };

    await update(`${URL_CATEGORIES}/${id}`, categoryUpdate);
}


