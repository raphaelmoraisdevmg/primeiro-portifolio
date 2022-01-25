const main = document.querySelector('.main-container');
const bio = document.createElement('p');
bio.classList.add('bio-text');
main.appendChild(bio);
const textoBio = `Olá, 

Meu nome é raphael tenho 28 anos sou formado em sistemas de informação, moro na cidade de Uberaba\n 
Que fica localizada no estado de minas gerais, tenho como hobby ler livros, jogar jogos competitivos de equipe, fazer caminhada entre outros.\n 

Estou migrando da área de Infraestrutura suporte na qual eu trabalhei por quase 1 ano,\n 
quando eu fiquei sabendo que a trybe existia e que a proposta deles era muito boa e depois de pesquisar tudo sobre a escola\n 
tive a certeza de que aqui seria o lugar certo para ganhar confiança e aprender mais programação. `;
bio.innerText=textoBio;