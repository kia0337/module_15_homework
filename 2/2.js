function getSize() {
  let screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  let screenHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  alert("Размер экрана: " + screenWidth + "px x " + screenHeight + "px");
}

document.getElementById("getSizeButton");
addEventListener("click", getSize);
