import { URL_CATEGORIES, URL_NEWS } from "../../API/URLS.js";
import { deleteHttp, get, post, update } from "../../API/clientHTTP.js"
import { printNews } from "./functionsDOM.js";

//Selectores

const formNews = document.getElementById("formNews");
export const nameNotice = document.getElementById("nameNotice");
export const urlImage = document.getElementById("urlImage");
export const idCategory = document.getElementById("idCategory");
export const contentNotice = document.getElementById("contentNotice");
export const idNewsUpdate = document.getElementById("idNewsUpdate");



//Eventos

document.addEventListener("DOMContentLoaded", ()=>{
    loadCategories();

    getNews();
})

formNews.addEventListener("submit", (event)=>{
    event.preventDefault();
    if (idNewsUpdate.value){

        updateNew();

    }else{
        createNew();
    }

});

async function createNew() {

    const user = JSON.parse(localStorage.getItem("user"))

    if(!idCategory.value){
        console.error("La categoria es obligatoria");
        return;
    }

    const newNotice = {
        name: nameNotice.value,
        image: urlImage.value,
        categoryId: idCategory.value,
        content: contentNotice.value,
        userId: user.id,
        publicationDate: new Date().toISOString().split("T")[0],
    }

    await post(URL_NEWS, newNotice)
}

async function loadCategories() {
    const categories = await get(URL_CATEGORIES);


    categories.forEach(category => {
        const option = document.createElement("option");
        option.textContent = category.name;
        option.value = category.id;

        idCategory.appendChild(option);
    });


}

async function getNews() {
    const news = await get(`${URL_NEWS}?_embed=category&_embed=user`);

    printNews(news);

}

export async function deleteNew(id) {
    await deleteHttp(`${URL_NEWS}/${id}`);
}

async function updateNew() {

    const user = JSON.parse(localStorage.getItem("user"))

    const newNotice = {
        name: nameNotice.value,
        image: urlImage.value,
        categoryId: idCategory.value,
        content: contentNotice.value,
        userId: user.id,
        publicationDate: new Date().toISOString().split("T")[0],
    }

    await update(`${URL_NEWS}/${idNewsUpdate.value}`, newNotice);
}