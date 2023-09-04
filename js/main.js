function MudaDesenho(){
    const texto = document.querySelector("h1");
    const texto2 = document.querySelector("h2");
    const texto3 = document.querySelector("h3");
    const texto4 = document.querySelector("h4");
    const texto5 = document.querySelector("h5");
    const texto6 = document.querySelector("h6");
    const texto7 = document.querySelector("h7");
    const texto8 = document.querySelector("h8");
    const texto9 = document.querySelector("h9");
    const texto10 = document.querySelector("h10");
    const texto11 = document.querySelector("h11");
    const texto12 = document.querySelector("h12");
    const texto13 = document.querySelector("h13");
    const texto14 = document.querySelector("h14");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const div= document.querySelector('.cavaleiro');
    
    if((valor=="Áries") || (valor=="Aries") || (valor=="aries") || (valor=="áries") ){
    div.innerHTML="";
    texto.innerHTML = "UAU!! Seu cavaleiro é: Mu de Áries";
    texto2.innerHTML="Cavaleiro de Ouro do signo de Áries. Natural do Tibete. Elegante e tem personalidade pacífica. É o único capaz de restaurar armaduras. Tem admiração pelo Dohko, amigo do mestre Shion e o chama de Velho Mestre. É forte nas técnicas de Psicocinese, teletransporte e de defesa Muralha de Cristal que aplicam a supercapacidade.";
    imagem.setAttribute("src","img/aries.webp");
    imagem.setAttribute("width","600px");
}
else if((valor=="Touro") || (valor=="touro")){
    div.innerHTML="";
    texto.innerHTML = "UAU!! Seu cavaleiro é: Aldebaran de Touro";
    texto3.innerHTML = "Cavaleiro de Ouro do signo de touro. Natural do Brasil. Possui físico admirável que não sofre impacto nenhum dos oponentes. Assim como Aeolia, concentra os golpes com os punhos. De poucas palavras, estuda o oponente pela troca de socos. Desfere o golpe mortal Grande Chifre baseado na técnica Iainuki.";
    imagem.setAttribute("src","img/touro.jpg");
    imagem.setAttribute("width","600px");

} 
else if((valor=="Gêmeos") || (valor=="Gemeos") || (valor=="gêmeos") || (valor=="gemeos")){
    div.innerHTML="";
    texto.innerHTML = "UAU!! Seu cavaleiro é: Saga de Gêmeos";
    texto4.innerHTML ="Cavaleiro de Ouro do signo de gêmeos. Natural da Grécia. Possui duas personalidades, do bem e do mal. Tem experiências de lutas contínuas com seu lado mal instalado em seu corpo. Nessa condição, ameaçou a vida da Deusa Atena mas foi impedido por Aiolos de Sagitário. ";
    imagem.setAttribute("src","img/gemeos.jpg");
    imagem.setAttribute("width","600px");
}
else if((valor=="Câncer") || (valor=="Cancer") || (valor=="câncer") || (valor=="cancer")){
    div.innerHTML="";
    texto.innerHTML = "UAU!! Seu cavaleiro é: Máscara da Morte de cancer";
    texto5.innerHTML ="Cavaleiro de Ouro do signo de câncer. Natural da Itália. Manipula o buraco que liga ao submundo. Tem como valor a definição da justiça muda com o passar do tempo e já ajudou o Papa (Saga) que se converteu ao mal. Talvez o seu modo de viver possa ser descrito como humano dentre os Cavaleiros de Ouro. Desfere o golpe mortal Ondas dos Infernos que envia para o submundo a alma dos oponentes."
    imagem.setAttribute("src","img/cancer.jpg");
    imagem.setAttribute("width","600px");
}
else if((valor=="Leão") || (valor=="Leao") || (valor=="leão") || (valor=="leao")){
    div.innerHTML="";
    texto.innerHTML = "UAU!! Seu cavaleiro é: Aiolia de Leão";
    texto6.innerHTML ="É o herói desta obra. Cavaleiro de Ouro do signo de Leão. Natural da Grécia.Tem a personalidade mais correta entre os Cavaleiros de Ouro e não gosta de trapaças. É um cavaleiro de honra que desfere abertamente golpes do tipo relâmpago na velocidade da luz. É o irmão mais novo de Aiolos de Sagitário que foi acusado de irmão traidor mas com a grande missão de salvar Atena descobre uma verdade bravamente guardada. Finalmente se reencontra com Aiolos que fora exterminado no Muro das Lamentações.";
        imagem.setAttribute("src","img/leao.jpg");
    imagem.setAttribute("width","600px");
}
else if((valor=="Virgem") || (valor=="virgem")){
    div.innerHTML="";
    texto.innerHTML = "UAU!! Seu cavaleiro é: Shaka de Virgem";
    texto7.innerHTML ="Cavaleiro de Ouro do signo de virgem. Natural da Índia. É o mais sensato entre os Cavaleiros de Ouro. Não se abala com qualquer coisa e avalia tudo com muita calma. Não é cego mas mantem os olhos fechados e se priva da visão para elevar seu cosmo ao extremo.";
    imagem.setAttribute("src","img/virgem.webp");
    imagem.setAttribute("width","600px");
}
else if((valor=="Libra") || (valor=="libra")){
    div.innerHTML="";
    texto.innerHTML = "UAU!! Seu cavaleiro é: Dohko de Libra";
    texto8.innerHTML ="Cavaleiro de Ouro do signo de libra. Natural da China. Um dos únicos dois sobreviventes da última Guerra Santa, é chamado respeitosamente por todos de Velho Mestre. Originalmente é um Cavaleiro que luta com seus próprios punhos mas a armadura de libra é adaptada com equipamentos de espada e de lança"
    imagem.setAttribute("src","img/libra.jfif");
    imagem.setAttribute("width","600px");
}
else if((valor=="Escorpião") || (valor=="Escorpiao") || (valor=="escorpião") || (valor=="escorpiao")){
    div.innerHTML="";
    texto.innerHTML = "UAU!! Seu cavaleiro é: Milo de Escorpião";
    texto9.innerHTML ="Cavaleiro de Ouro do signo de escorpião. Natural da Grécia. Como o Aiolia, é espontâneo e tem forte espírito de justiça. Tem muito orgulho por ser um Cavaleiro de Ouro. A técnica mortal Agulha Escarlate usa as pontas dos dedos para espetar violentamente quinze pontos do oponente, paralisando os seus cinco sentidos. Era muito amigo de Camus de Aquário.";
    imagem.setAttribute("src","img/sagitario.webp");
    imagem.setAttribute("width","600px");
}

else if((valor=="Capricórnio") || (valor=="Capricornio") || (valor=="capricórnio") || (valor=="capricornio")){
        div.innerHTML="";
        texto.innerHTML = "UAU!! Seu cavaleiro é: Shura de Capricórnio";
        text10.innerHTML = "Cavaleiro de Ouro do signo de capricórnio. Natural da Espanha. No passado, recebeu a vida do Papa (Saga) e teve um confronto direto com Aiolos. Originalmente tinha grande lealdade à Deusa e no episódio de Hades, voltou à ativa lutando sob comando de Hades ao mesmo tempo em que, nas batalhas ao lados dos companheiros, deu a vida como Cavaleiro de Ouro de Atena."
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","600px");
    }

    else if((valor=="Aquário") || (valor=="Aquario") || (valor=="aquário") || (valor=="aquario")){
        div.innerHTML="";
        texto.innerHTML = "UAU!! Seu cavaleiro é: Camus de Aquário";
        texto11.innerHTML ="Cavaleiro de Ouro do signo de aquário. Natural da França. Por trás de sua aparente frieza, esconde uma alma quente. Em vez de julgar o bem e o mal, continua a lutar sem perder o foco. É o que ele busca como cavaleiro. Utiliza a técnica de luta do gelo, sendo assim chamado de Feificeiro da Água e do Gelo. Seu golpe mortal máximo, Execução Aurora, é uma poderosa rajada de ar frio, em zero absoluto, que pulveriza tudo aquilo que for atingido.";
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","600px");
    }
    
    else if((valor=="Peixes") || (valor=="peixes")){
        div.innerHTML="";
        texto.innerHTML = "UAU!! Seu cavaleiro é: Afrodite de Peixes";
        texto12.innerHTML ="Cavaleiro de Ouro do signo de peixes. Natural da Suécia. É o mais belo de todas as 88 constelações e acredita fielmente que a força é a justiça. Utiliza as características da rosa pelo Cosmo e aplica os golpes. As Rosas Diabólicas Reais são flores vermelhas com veneno para atacar os inimigos. Apesar do lema a força é a justiça, é o Cavaleiro que mais se preocupa com a paz na superfície.";
        imagem.setAttribute("src","img/peixes.jfif");
        imagem.setAttribute("width","600px");
    }
    else if((valor=="Sagitario") || (valor=="sagitario") || (valor=="Sagitário") || (valor=="sagitário")){
        div.innerHTML="";
        texto.innerHTML = "UAU!! Seu cavaleiro é: Aiolos de Sagitário";
        texto12.innerHTML ="Aiolos de Sagitário (射手座のアイオロス, Sajitariasu no Aiorosu) é o Cavaleiro de Ouro de Sagitário do Século XX. Irmão de Aiolia de Leão e melhor amigo de Shura de Capricórnio, morreu ao tentar salvar a infante Atena de Saga de Gêmeos que estava disfarçado de Grande Mestre.";
        imagem.setAttribute("src","img/sagitario.webp");
        imagem.setAttribute("width","600px");
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}