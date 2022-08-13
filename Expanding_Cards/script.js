const panels = document.querySelectorAll(".panel");
console.log(panels);

const panelClear = () => {
  panels.forEach((item) => {
    item.classList.remove("active");
  });
};

panels.forEach((item) => {
  item.addEventListener("click", () => {
    panelClear();
    item.classList.add("active");
  });
});
