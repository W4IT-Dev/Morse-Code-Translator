let classesWithColoredParents =
  /checkbox-container__input|radio-container__input|input-container__input|textarea-container__textarea|slider-container__slider/g;

const callFunction = (callback, e) => {
  let element = e.target;
  //if element has any of those classes in regex then its parent will change class.
  if (element.className && element.className.match(classesWithColoredParents))
    callback(element.parentElement);
};

const blur = (element) => element.classList.remove("selected");

const focus = (element) => element.classList.add("selected");

window.addEventListener("focus", (e) => callFunction(focus, e), true);
window.addEventListener("blur", (e) => callFunction(blur, e), true);
window.addEventListener("keydown", (e) => nav(e.key))

function nav(key) {
  const move = key === "ArrowDown" ? 1 : key === "ArrowUp" ? -1 : 0;
  const elements = document.querySelectorAll('.focusable');
  const currentIndex = [...elements].indexOf(document.activeElement)
  const targetElement = elements[currentIndex + move]
  if (targetElement) targetElement.focus();
}