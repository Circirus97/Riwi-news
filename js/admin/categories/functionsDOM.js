import { cleanHTML } from "../../utils/cleanHTML.js";
import { deleteCategory, descriptionCategory, nameCategory } from "./index.js";

//Selector
const categoriasTbody = document.getElementById("categorias-tbody");
export const idCategoryUpdate = document.getElementById("idCategoryUpdate");
export const btnAddCategoryModal = document.getElementById("btnAddCategoryModal")



export function printCategories(categories) {

    // categoriasTbody.innerHTML = "";

    cleanHTML(categoriasTbody);

    categories.forEach(category => {

        const tr = document.createElement("tr");
        const tdId = document.createElement("td");
        const tdName = document.createElement("td");
        const tdDescription = document.createElement("td");
        const tdButtons = document.createElement("td");

        const btnEdit = document.createElement("button");
        const btnDelete = document.createElement("button");

        btnDelete.textContent = "Eliminar";
        btnEdit.textContent = "Editar";

        btnDelete.classList.add("btn", "btn-danger");
        btnEdit.classList.add("btn", "btn-primary");

        btnDelete.addEventListener("click", () => {
            deleteCategory(category.id)
        });

        btnEdit.addEventListener("click", () => {
            loadInfoCategory(category);
        });

        tdId.textContent = category.id;
        tdName.textContent = category.name;
        tdDescription.textContent = category.description;


        tdButtons.appendChild(btnDelete);
        tdButtons.appendChild(btnEdit);

        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdDescription);
        tr.appendChild(tdButtons);

        categoriasTbody.appendChild(tr);

    });
}

function loadInfoCategory(category) {
    nameCategory.value = category.name;
    descriptionCategory.value = category.description;
    idCategoryUpdate.value = category.id;
    btnAddCategoryModal.click();
}