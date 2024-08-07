var num=0

function counter(){
    num = num+1 
    document.getElementById("line").innerHTML = num 
}

function change(){
    counter() 
    document.getElementById("smileyImg").src = "https://media.istockphoto.com/id/157030584/vector/thumb-up-emoticon.jpg?s=612x612&w=0&k=20&c=GGl4NM_6_BzvJxLSl7uCDF4Vlo_zHGZVmmqOBIewgKg="
}

function restart(){
    num = 0 
    document.getElementById("smileyImg").src = "https://st2.depositphotos.com/1001911/7684/v/600/depositphotos_76840879-stock-illustration-depressed-emoticon.jpg"
    document.getElementById("line").innerHTML = "___"
}

console.log("hello")
