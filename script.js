//Cache the DOM
var buton = document.getElemntById("buton")
var body = document.getElemntById("body")
var nume = document.getElemntById("nume")
var prenume = document.getElemntById("prenume")
var asteptari = document.getElemntById("asteptari")
var img = document.getElemntById("img")
var an = document.getElemntById("anNastere")

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
	buton.text-align:center
}

function displayAge()
{
an.innerHTML = year - an.innerHTML
}