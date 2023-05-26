//Creo el cont div
const divImg = document.createElement("div");
divImg.id = "img";
document.body.appendChild(divImg);

//Realizar el Fetch a la API
fetch('https://rickandmortyapi.com/api/character')
.then((response) => response.json())
.then((data) => {
    //Itero respuesta
    console.log(data);
    data.results.forEach(result => {
        //URL de la img
        const imageUrl = result.image;
        //nuevo elemt img
        const imgELement = document.createElement("img");
        imgELement.src = imageUrl;

        //agrego img al div
        divImg.appendChild(imgELement);
    });
})
.catch((error) => console.log(error, "Operacion no realizada")); 