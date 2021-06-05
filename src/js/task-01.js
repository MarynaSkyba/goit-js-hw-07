const categoriesTotalEl = document.querySelectorAll(".item");
console.log(`В списке ${categoriesTotalEl.length} категории.`) 

   categoriesTotalEl.forEach((element) => {

    console.log(`Категория: ${element.firstElementChild.textContent}`);
    console.log(`Количество элементов:${element.querySelectorAll('li').length }`)
});