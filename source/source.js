const main = document.querySelector('.main-container');
const bio = document.createElement('p');
bio.classList.add('bio-text');
main.appendChild(bio);
const textoBio = `Olá, 
Meu nome é Raphael, tenho 28 anos, sou formado em sistemas de 
informação, moro na cidade de Uberaba – MG.\n

Tenho como hobby ler livros, jogos competitivos em equipe, fazer caminhada\n 
entre outros.

Estou migrando da área de Infraestrutura/suporte na qual eu trabalhei por\n 
quase 1 ano, Após conhecer e pesquisar sobre a Trybe,\n 
cheguei a conclusão que havia encontrado o que procurava. Tive a certeza\n 
de que aqui seria o lugar certo para ganhar confiança e me\n 
especializar em programação.`

bio.innerText = textoBio;