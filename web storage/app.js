let btnLocal = document.getElementById("btn-local")
let btnSession = document.getElementById("btn-session")
let btnCookie = document.getElementById("btn-cookie")


btnLocal.addEventListener("click", () => {
    let orang = ["Andi", "Budi", "Caca"];

    localStorage.setItem("orang", JSON.stringify(orang))
})

btnSession.addEventListener("click", () => {
    let orangTolol = {
        nama: "Alex Sandro",
        umur: 20,
        hobby: ["Main Slot", "tidur"]
    }

    localStorage.setItem("orangTolol", JSON.stringify(orangTolol))
})

btnCookie.addEventListener("click", () => {
    let orangJomok = [
        {
            nama: "Alex Sandro",
            umur: 20,
            hobby: ["Main Slot", "tidur"]
        },
        {
            nama: "Ale",
            umur: 200,
            hobby: ["Main CS", "tidur Pas Zoom"]
        },
    ]

    document.cookie = "orangJomok=" + JSON.stringify(orangJomok)
})

let orang = JSON.parse(localStorage.getItem("orang"))
let orangTolol = JSON.parse(localStorage.getItem("orangTolol"))
let orangJomok = document.cookie.split("=")[1];


console.log(orang)
console.log(orangTolol)
console.log(orangJomok)


