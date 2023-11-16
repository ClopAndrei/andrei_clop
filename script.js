//Cache the DOM
var buton = document.getElementById("buton")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var asteptari = document.getElementById("asteptari")
var img = document.getElementById("img")
var an = document.getElementById("anNastere")

const d = new Date()
var year = d.getFullYear()

//Add event listener to birthyear to display age
an.addEventListener("mouseover", displayAge)

//Add event listener to button
buton.addEventListener("click", altaViata)


function altaViata()
{
	nume.innerHTML = "Functie: Java Dev"
	prenume.innerHTML = "Locul de munca: Bali"
	asteptari.innerHTML = "Experienta: <ol><li>"
	intership</li><li>proiect de cercetare</li></ol>

	
	body.style.backgroundColor = "orange"
	body.style.color = "blue"
	
}

function displayAge()
{
an.innerHTML = year - an.innerHTML
}