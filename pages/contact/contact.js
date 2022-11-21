// button disable logic
let reqInput = document.querySelector(".reqInput");

let submitBtn = document.querySelector("#submit");
submitBtn.disabled = true; //setting button state to disabled

reqInput.addEventListener("change", handleState);
function handleState() {
  if (reqInput.value === "") {
    submitBtn.disabled = true; //button remains disabled
  } else {
    submitBtn.disabled = false; //button is enabled
  }
}

let radio1 = document.querySelector("#radio1");
let radio2 = document.querySelector("#radio2");

radio1.addEventListener("click", () => (radio2.checked = false));
radio2.addEventListener("click", () => (radio1.checked = false));
