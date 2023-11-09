// console.log("a")
// console.log("b")

// setTimeout(() => {
//     console.log("c")
// }, 2000)

// console.log("d")


// function janji(condition) {
//     return new Promise((resolve, reject) => {
//         if (condition) {
//             setTimeout(() => {
//                 resolve("Janji terpenuhi")
//             }, 2000)
//         } else {
//             setTimeout(() => {
//                 reject("Janji tidak terpenuhi")
//             }, 2000)
//         }
//     })
// }







let pokemonFromPromise = []


// fetch("https://pokeapi.deno.dev/pokemon?limit=10")

//     .then((response) => {
//         return response.json()
//     })

//     .then((response) => {
//         console.log(response)
//         pokemonFromPromise = [...response]
//         console.log(pokemonFromPromise);
//     })

//     .catch((error) => {
//         console.log(error)
//     })

async function getDataPokemon() {
    let respons = await fetch("https://digimon-api.vercel.app/api/digimon")
    let digimon = await respons.json()
    let listPoke = document.getElementById("poke");

    digimon.map((item, index) => {
        let cardPoke =
            `<div class="col">
            <div class="card">
                <img src=${item.img} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.level}</div>
            </div>`;

        listPoke.innerHTML += cardPoke;

    })

}


getDataPokemon()

// const greatAuthors = books.filter((book) => book.sales > 1000000).map((book) => {
//     return `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`;
// });



