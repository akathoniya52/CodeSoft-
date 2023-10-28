let x = 1;
function onClickHandler() {
  const icon = document.getElementById("navv");
  if (x % 2 == 0) {
    icon.classList.remove("showNav");
    x++;
  } else {
    icon.classList.add("showNav");
    x--;
  }
}
