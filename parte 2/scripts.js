function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
        if (hora >= 0 && hora < 12){
            //BOM DIA !!!!
            img.src='/parte 2/img/manha.jpg'
        } else if (hora >= 12 && hora <= 18){
           // BOA TARDE!!!
            img.src='/parte 2/img/tarde.jpg'
        } else{
            //BOA NOITE !!!
            img.src='/parte 2/img/noite.jpg'
        }

}