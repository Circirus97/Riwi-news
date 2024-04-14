import { cleanHTML } from "../../utils/cleanHTML.js"
import { contentNotice, deleteNew, idCategory, idNewsUpdate, nameNotice, urlImage } from "./index.js";

const newsTbody = document.getElementById("news-tbody");
const btnOpenModalNews = document.getElementById("btnOpenModalNews");



export function printNews(news) {

    cleanHTML(newsTbody);

    news.forEach((tempNew) => {
        const tr = document.createElement("tr");


        const tdImage = document.createElement("td");
        const tdTitle = document.createElement("td");
        const tdContent = document.createElement("td");
        const tdDate = document.createElement("td");
        const tdUser = document.createElement("td");
        const tdCategory = document.createElement("td");
        const tdActions = document.createElement("td");

        const image = document.createElement("img");
        image.src = "tempNew.image";
        image.width = "50px";
        image.height = "50px";
        image.classList.add("rounded-circle");


        const btnEdit = document.createElement("button");
        const btnDelete = document.createElement("button");

        btnDelete.classList.add("btn", "btn-danger");
        btnEdit.classList.add("btn", "btn-primary");

        btnEdit.textContent = "Editar";
        btnDelete.textContent = "Eliminar";

        btnEdit.addEventListener("click", ()=> {
            loadInfoNew(tempNew)
        });

        btnDelete.addEventListener("click", ()=> {
            deleteNew(tempNew.id)

        });

        tdTitle.textContent = tempNew.name;
        tdContent.textContent = tempNew.content;
        tdDate.textContent = tempNew.publicationDate;
        tdUser.textContent = tempNew.user.name;
        tdCategory.textContent = tempNew.category.name;

        tdImage.appendChild(image);
        tdActions.appendChild(btnEdit);
        tdActions.appendChild(btnDelete);


        tr.appendChild(tdImage);
        tr.appendChild(tdTitle);
        tr.appendChild(tdContent);
        tr.appendChild(tdDate);
        tr.appendChild(tdUser);
        tr.appendChild(tdCategory);
        tr.appendChild(tdActions);

        newsTbody.appendChild(tr);

    });
}


function loadInfoNew(newTemp) {

    btnOpenModalNews.click();
    nameNotice.value = newTemp.name;
    urlImage.value = newTemp.image;
    idCategory.value = newTemp.categoryId;
    contentNotice.value = newTemp.content;
    idNewsUpdate.value = newTemp.id;

}