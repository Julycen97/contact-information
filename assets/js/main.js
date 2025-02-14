document.addEventListener("DOMContentLoaded", () => {
    const imgHome = document.querySelector(".imgHome");
    const imagenes = ["./assets/images/publicidad1.png", "./assets/images/publicidad2.png", "./assets/images/publicidad3.png"];
    let indice = 0;
  
    setInterval(() => {
      imgHome.style.backgroundImage = `url(${imagenes[indice]})`;

      indice = (indice + 1) % 3; 
    }, 3000); 
  });