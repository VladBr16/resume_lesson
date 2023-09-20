const btnNightMode = document.querySelector(".night-mode-btn");


// 1.првоерка - проверка темной темы на системныз настрйоках
// проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
  btnNightMode.classList.add("night-mode-btn--active");
  document.body.classList.add("night");
}

// 2. проверка темной темы в localStorage
if (localStorage.getItem('nightMode') === "night") {
  btnNightMode.classList.add("night-mode-btn--active");
  document.body.classList.add("night");
} else if (localStorage.getItem('nightMode') === "light") {
  document.body.classList.remove("night");
  document.body.classList.remove("night");
}




// 3.  усли меняются системные настрйоки, меняем тему
window
  .matchMedia("(prefers-color-scheme:dark)")
  .addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme === 'dark') {
      btnNightMode.classList.add("night-mode-btn--active");
      document.body.classList.add("night");
      localStorage.setItem('nightMode', "night");
    } else {
      btnNightMode.classList.remove("night-mode-btn--active");
      document.body.classList.remove("night");
      localStorage.setItem('nightMode', "light");
    }
  })

// вклчюенин ночного режима по кнопке
btnNightMode.onclick = function () {
  console.log("click")
  btnNightMode.classList.toggle("night-mode-btn--active");
  const isNight = document.body.classList.toggle("night");

  if (isNight) {
    localStorage.setItem('nightMode', "night")
  } else {
    localStorage.setItem('nightMode', "light")
  }
}

