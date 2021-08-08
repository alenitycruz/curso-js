function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 5 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = manha.jpg
        document.body.style.background = 'yellow'
    }else if (hora >=12 && hora < 18) {
        //Boa tarde!
        img.src = tarde.jpg
        
    }else {
        //Boa Noite!!
        img.src = noite.jpg
        document.body.style.background = 'black'
    }
}