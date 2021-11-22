let resultBurger = document.querySelector(".result");
let checkboxes = document.querySelectorAll("input[type=checkbox][name=ingredients]");
let ingredients = [];
let images = document.querySelectorAll(".ingredient-image");
let eatButton = document.querySelector(".eat-button");
let resetButton = document.querySelector(".reset-button")
let body = document.querySelector(".burger__body");
let question = document.querySelector(".head__title");


for (let i in checkboxes) {
  checkboxes[i].checked=false;
};

checkboxes.forEach(function(checkbox) {
	checkbox.addEventListener("change", function() {
			ingredients = 
				Array.from(checkboxes)
				.filter(i => i.checked)
				.map(i => i.value)
			console.log(ingredients)

			if (images[checkbox.value].classList.contains("ingredient-image_on") == false && checkbox.checked) {
					images[checkbox.value].classList.add("ingredient-image_on")
				}	else {
					images[checkbox.value].classList.remove("ingredient-image_on")					
			}
	})
});


eatButton.addEventListener("click", eatBurger);
resetButton.addEventListener("click", resetBurger);

function eatBurger() {
	question.innerHTML = "Нормально поели! Хотите еще?";
	resetButton.style.display = "block";
	body.style.display = "none";
};

function resetBurger() {
	question.innerHTML = "С чем хотите бургер?";
	resetButton.style.display = "none";
	body.style.display = "flex";

	checkboxes.forEach(function(checkbox) {
  	checkbox.checked = false;
		images[Number(checkbox.value)].classList.remove("ingredient-image_on");
	});
};
