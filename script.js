function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  /*Ou vc pode usar a função toggle que faz a mesma coisa
  html.classList.toggle("light")
  */
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light2.png")
  } else {
    img.setAttribute("src", "./assets/assets/avatar2.jpg")
  }

  const alt = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto do usuário sorrindo, usando camisa branca ócuços escuro, barba e fundo roxo."
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto do usuário sorrindo, usando camisa preta, barba e fundo branco."
    )
  }
}
