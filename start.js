console.log('hello');

const boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", function() {
    console.log('click');
    this.classList.toggle("expanded");
  });
});
