const unixForm = document.getElementById("unixForm");
const dateForm = document.getElementById("dateForm");

unixForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const unixInput = unixForm.elements["unixInput"].value;
  if (unixInput) {
    const url = window.location.href;
    location.assign(`${url}api/${unixInput}`);
  }
});

dateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const dateInput = dateForm.elements["dateInput"].value;
  if (dateInput) {
    const url = window.location.href;
    location.assign(`${url}api/${dateInput}`);
  }
});
