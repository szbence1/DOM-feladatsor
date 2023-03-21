// 1 FELADAT
const label = document.querySelector("#karakterszam");
const input = document.querySelector("#input");
label.textContent = "Bevitt karakterek mennyisége";
const btn = document.querySelector("#btn");
const X = document.querySelector("#x");
const Y = document.querySelector("#y");
const negyzet = document.querySelector(".negyzet");
const img = document.querySelector("img");
const secondBtn = document.querySelector("#masodikbtn");
const email = document.querySelector("#email");
const emailCim = document.querySelector("#emailMeg");
const doboz = document.querySelector(".doboz");

const harmadikbtn = document.querySelector("#harmadikbtn");
input.addEventListener("input", (e) => {
  e.preventDefault();

  label.textContent = e.currentTarget.value.length;
});

// 2 FELADAT

btn.addEventListener("click", () => {
  const x = X.value;
  const y = Y.value;
  negyzet.style.height = `${y}px`;
  negyzet.style.width = `${x}px`;
  /*negyzet.style.left = `${x}px`;
  negyzet.style.top = `${y}px`;*/
});

// 3 FELADAT
let clicked = false;

secondBtn.addEventListener("click", (e) => {
  img.style.opacity = 0;
  console.log(e.target);
  if (!clicked) {
    img.classList.remove("fade-in");
    img.classList.add("fade-out");
    console.log(img.style.opacity);
  } else {
    img.classList.add("fade-in");
    img.classList.remove("fade-out");
    img.style.opacity = 1;
    console.log(img.style.opacity);
  }

  clicked = !clicked;
  console.log(clicked);
});

// 4 FELADAT

harmadikbtn.addEventListener("click", () => {
  if (email.value !== emailCim.value) {
    doboz.textContent = "A két mező tartalma nem egyezik!";
  }
  if (email.value === "") {
    doboz.textContent = "Nincs kitöltve az email mező!";
  }
  if (emailCim.value === "") {
    doboz.textContent = "Nincs kitöltve az email megerősitése mező!";
  }
  if (email.value === "" && emailCim.value === "") {
    doboz.textContent = "Nincs kitöltve egyik mező sem!";
  }
});
