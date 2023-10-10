// Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.

let btn = document.querySelector(".button-test");
btn.addEventListener("click", function () {
  let one = document.querySelector(".btn__icon2");
  let two = document.querySelector(".btn__icon");
  one.style.display = one.style.display === "none" ? "block" : "none";
  two.style.display = two.style.display === "block" ? "none" : "block";
});
