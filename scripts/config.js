function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backDropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backDropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim(); // .trim() method gets rid of all white spaces before and/or after the content

  if (!enteredPlayername) {
    // enteredPlayername === ""; if enteredPlayername is falsy/empty:
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }
}
