function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const div= document.querySelector('.cavaleiro');
    
if  (valor=="aries"){
    div.innerHTML="";
    texto.innerHTML = "UAU!! Seu cavaleiro é: Mu de Áries";
    imagem.setAttribute("src","img/aries.webp");
    imagem.setAttribute("width","600px");
}
else if(valor=="touro"){
    div.innerHTML="";
    texto.innerHTML = "UAU!! Seu cavaleiro é: Aldebaran de Touro";
    imagem.setAttribute("src","img/touro.jpg");
    imagem.setAttribute("width","600px");

}else if(valor=="gemeos"){
    div.innerHTML="";
    texto.innerHTML = "UAU!! Seu cavaleiro é: Saga de Gêmeos";
    imagem.setAttribute("src","img/gemeos.jpg");
    imagem.setAttribute("width","600px");
}
else if(valor=="cancer"){
    div.innerHTML="";
    texto.innerHTML = "UAU!! Seu cavaleiro é: Máscara da Morte de cancer";
    imagem.setAttribute("src","img/cancer.jpg");
    imagem.setAttribute("width","600px");
}
else if(valor=="leão"){
    div.innerHTML="";
    texto.innerHTML = "UAU!! Seu cavaleiro é: Aiolia de Leão";
    imagem.setAttribute("src","img/leao.jpg");
    imagem.setAttribute("width","600px");
}
else if(valor=="virgem"){
    div.innerHTML="";
    texto.innerHTML = "UAU!! Seu cavaleiro é: Shaka de Virgem";
    imagem.setAttribute("src","img/virgem.webp");
    imagem.setAttribute("width","600px");
}
else if(valor=="libra"){
    div.innerHTML="";
    texto.innerHTML = "UAU!! Seu cavaleiro é: Dohko de Libra";
    imagem.setAttribute("src","img/libra.jfif");
    imagem.setAttribute("width","600px");
}
else if(valor=="escorpião"){
    div.innerHTML="";
    texto.innerHTML = "UAU!! Seu cavaleiro é: Aiolos de Sagitário";
    imagem.setAttribute("src","img/sagitario.webp");
    imagem.setAttribute("width","600px");
}

    else if(valor=="capricornio"){
        div.innerHTML="";
        texto.innerHTML = "UAU!! Seu cavaleiro é: Shura de Capricórnio";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","600px");
    }

    else if(valor=="aquário"){
        div.innerHTML="";
        texto.innerHTML = "UAU!! Seu cavaleiro é: Camus de Aquário";
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","600px");
    }
    
    else if(valor=="peixes"){
        div.innerHTML="";
        texto.innerHTML = "UAU!! Seu cavaleiro é: Afrodite de Peixes";
        imagem.setAttribute("src","img/peixes.jfif");
        imagem.setAttribute("width","600px");
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}