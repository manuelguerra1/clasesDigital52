window.onload = function (event) {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("form.form");
  let article = document.querySelector("article");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
  //-------------------DE REGISTRO DE PELÍCULAS------------------//
  
  let ul = document.querySelector(".errores");
  let title = document.getElementById("title");
  let rating = document.getElementById("rating");
  let awards = document.getElementById("awards");
  let releaseDate = document.getElementById("release_date");
  let length = document.getElementById("length");
  let genreId = document.getElementById("genre_id");
  let span = document.getElementById('span');
  let campos = [title, rating, awards, releaseDate, length, genreId];

  formulario.addEventListener("submit", (e) => {

    let errors = [];

    campos.forEach((campo) => {

      if (campo.value == "") {

        let errorMsg = `el campo ${campo.name} debe ser llenado`;

        errors.push(errorMsg);

        // campo.classList.add("is-invalid");

      }
    });

    if (errors.length > 0) {

        e.preventDefault();

        console.log(ul);

        ul.classList.add("alert-warning");

        for (let i = 0; i < errors.length; i++) {

          ul.innerHTML = "<li>" + errors[i] + "</li>";

        }
      } else {

        alert('La pelicula se guardo satisfactoriamente')

        formulario.submit();

      }
      console.log(errors);

    });
    
    title.addEventListener("blur", (e) => {

        const ExpRegNomUsuario=/^[a-z0-9_-]{3,16}$/;
      console.log(title.value);
      if (ExpRegNomUsuario.test(title.value)) {

        console.log(title.value);

        title.classList.add("is-valid");
        title.classList.remove("is-invalid");
        span.innerText = ''

      } else {

        span.innerText = `el campo ${title.name} debe ser llenado`;

        title.classList.add("is-invalid");
        title.classList.remove("is-valid");
        

      }
    });
  
    // rating.addEventListener("blur", (e) => {

    //   if (rating.value > 0 && rating.value < 10) {

    //     console.log(rating.value);

    //     rating.classList.add("is-valid");

    //   } else {

    //     let div = rating.parentNode;

    //     let p = document.createElement("p");

    //     p.innerText = `el campo ${rating.name} debe ser llenado`;

    //     div.appendChild(p);

    //     rating.classList.add("is-invalid");

    //   }
    // });
  
    // awards.addEventListener("blur", (e) => {

    //   if (awards.value > 0 && awards.value < 10) {

    //     console.log(awards.value);
  
    //     awards.classList.add("is-valid");

    //   } else {

    //     let div = awards.parentNode;

    //     let p = document.createElement("p");

    //     p.innerText = `el campo ${awards.name} debe ser llenado`;

    //     div.appendChild(p);

    //     awards.classList.add("is-invalid");

    //   }
    // });
  
    // releaseDate.addEventListener("blur", (e) => {

    //   if (releaseDate.value != "") {

    //     console.log(releaseDate.value);

    //     releaseDate.classList.add("is-valid");

    //   } else {

    //     let div = releaseDate.parentNode;

    //     let p = document.createElement("p");

    //     p.innerText = `el campo ${releaseDate.name} debe ser llenado`;

    //     div.appendChild(p);

    //     releaseDate.classList.add("is-invalid");

    //   }
    // });
  
    // length.addEventListener("blur", (e) => {

    //   if (length.value > 60 && length.value < 360) {

    //     length.classList.add("is-valid");
  
    //     console.log(length.value);

    //   } else {

    //     let div = length.parentNode;

    //     let p = document.createElement("p");

    //     p.innerText = `el campo ${length.name} debe ser llenado`;

    //     div.appendChild(p);

    //     length.classList.add("is-invalid");

    //   }
    // });
  
    // genreId.addEventListener("blur", (e) => {

    //   if (genreId.value != "") {

    //     console.log(genreId.value);

    //     genreId.classList.add("is-valid");

    //   } else {

    //     let div = genreId.parentNode;

    //     let p = document.createElement("p");

    //     p.innerText = `el campo ${genreId.name} debe ser llenado`;

    //     div.appendChild(p);

    //     genreId.classList.add("is-invalid");

    //   }
    // });
};