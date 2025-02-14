document.addEventListener("DOMContentLoaded", () => {
    const footerText = document.querySelector("#footerText");
    const imgHome = document.querySelector(".imgHome");
    const imagenes = ["./assets/images/publicidad1.png", "./assets/images/publicidad2.png", "./assets/images/publicidad3.png"];
    let indice = 0;
  
    footerText.innerHTML = `&copy; ${new Date().getFullYear()} - Creado por <a href="https://www.linkedin.com/in/julian-centurion/" target="_blank" rel="noopener noreferrer">Julián Centurión</a>`;

    setInterval(() => {
      imgHome.style.backgroundImage = `url(${imagenes[indice]})`;

      indice = (indice + 1) % 3; 
    }, 3000); 
  });