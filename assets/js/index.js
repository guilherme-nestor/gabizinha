/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.3",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b),"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:this,document);
/***************************************/

//Função de rolagem menu superior
document.addEventListener('DOMContentLoaded', function(){
  const idButtonPartidas = document.getElementById('buttonPartidas')
  const idButtonEliminatorias = document.getElementById('buttonEliminatorias')
  const idButtonTabela = document.getElementById('buttonTabela')
  const idButtonGaleria = document.getElementById('buttonGaleria')

  const classTabelaPontos = document.querySelector('.tabelaPontos')
  const classMataMata = document.querySelector('.tabelaMataMata')
  const classGaleria = document.querySelector('.galeria')
  const classTabelaJogos = document.querySelector('.tabelaJogos')

  idButtonPartidas.addEventListener('click', function(){
    const targetPosition = classTabelaJogos.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 128
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idButtonEliminatorias.addEventListener('click', function(){
    const targetPosition = classMataMata.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 128
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idButtonTabela.addEventListener('click', function(){
    const targetPosition = classTabelaPontos.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 128
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idButtonGaleria.addEventListener('click', function(){
    const targetPosition = classGaleria.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 128
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
})

/***********************************************************/

//Grupo A
const time1 = 'Bélgica'
const time2 = 'Holanda'
const time3 = 'Turquia'

//Grupo B
const time4 = 'Dinamarca'
const time5 = 'Inglaterra'
const time6 = 'Croácia'

// Dados dos times dos Grupos A e B
const grupoA = [
  { nome: 'Bélgica', grupo: 'A', jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsFeitos: 0, golsTomados: 0, pontos: 0 },
  { nome: 'Holanda', grupo: 'A', jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsFeitos: 0, golsTomados: 0, pontos: 0 },
  { nome: 'Turquia', grupo: 'A', jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsFeitos: 0, golsTomados: 0, pontos: 0 }
];

const grupoB = [
  { nome: 'Dinamarca', grupo: 'B', jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsFeitos: 0, golsTomados: 0, pontos: 0 },
  { nome: 'Croácia', grupo: 'B', jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsFeitos: 0, golsTomados: 0, pontos: 0 },
  { nome: 'Inglaterra', grupo: 'B', jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsFeitos: 0, golsTomados: 0, pontos: 0 }
];

// Lista combinada para jogos entre todos os times
const todosOsTimes = [...grupoA, ...grupoB];

// Resultados das partidas entre todos os times
const resultados = [
  { hora: '16:30', time1: 'Bélgica', gols1: 2, time2: 'Holanda', gols2: 4 },
  { hora: '17:20', time1: 'Croácia', gols1: 3, time2: 'Inglaterra', gols2: 3 },
  { hora: '18:00', time1: 'Turquia', gols1: 0, time2: 'Dinamarca', gols2: 3 },

  { hora: '16:00', time1: 'Bélgica', gols1: 2, time2: 'Inglaterra', gols2: 3 },
  { hora: '16:50', time1: 'Croácia', gols1: 1, time2: 'Dinamarca', gols2: 3 },

  { hora: '17:00', time1: 'Holanda', gols1: 2, time2: 'Inglaterra', gols2: 1 },
  { hora: '18:00', time1: 'Bélgica', gols1: 1, time2: 'Croácia', gols2: 5 },
  
  { hora: '17:00', time1: 'Holanda', gols1: 2, time2: 'Dinamarca', gols2: 1 },
  { hora: '17:50', time1: 'Inglaterra', gols1: 6, time2: 'Turquia', gols2: 2 },
  
  { hora: '17:00', time1: 'Inglaterra', gols1: 1, time2: 'Dinamarca', gols2: 7 },
  { hora: '17:50', time1: 'Holanda', gols1: 0, time2: 'Turquia', gols2: 3 },
  
  { hora: '18:00', time1: 'Dinamarca', gols1: 4, time2: 'Bélgica', gols2: 1 },
  { hora: '19:30', time1: 'Turquia', gols1: 1, time2: 'Croácia', gols2: 3 },
  
  { hora: '17:00', time1: 'Bélgica', gols1: null, time2: 'Turquia', gols2: null },
  { hora: '17:50', time1: 'Holanda', gols1: null, time2: 'Croácia', gols2: null },
];

// Função para atualizar a classificação com base nos resultados
function atualizarClassificacao(resultados, times) {
  resultados.forEach(resultado => {
      const time1 = times.find(t => t.nome === resultado.time1);
      const time2 = times.find(t => t.nome === resultado.time2);

      if (resultado.gols1 !== null && resultado.gols2 !== null) {
          time1.jogos++;
          time2.jogos++;

          time1.golsFeitos += resultado.gols1;
          time1.golsTomados += resultado.gols2;

          time2.golsFeitos += resultado.gols2;
          time2.golsTomados += resultado.gols1;

          if (resultado.gols1 > resultado.gols2) {
              time1.vitorias++;
              time2.derrotas++;
              time1.pontos += 3;
          } else if (resultado.gols1 < resultado.gols2) {
              time2.vitorias++;
              time1.derrotas++;
              time2.pontos += 3;
          } else {
              time1.empates++;
              time2.empates++;
              time1.pontos += 1;
              time2.pontos += 1;
          }
      }
  });

  // Ordena os times pelos critérios: pontos, vitórias, saldo de gols, gols feitos
  times.sort((a, b) => 
      b.pontos - a.pontos || 
      b.vitorias - a.vitorias || 
      (b.golsFeitos - b.golsTomados) - (a.golsFeitos - a.golsTomados) ||
      b.golsFeitos - a.golsFeitos
  );
}

// Função para exibir o ranking dos times
function exibirRanking(times, containerId, titulo) {
  const container = document.getElementById(containerId);
  let rankingHTML = `<h2><strong>${titulo}</strong></h2>`;
  rankingHTML += `
      <table>
          <tr>
              <td></td>
              <td>#</td>
              <td></td>
              <td>Seleção</td>
              <td>J</td>
              <td>V</td>
              <td>E</td>
              <td>D</td>
              <td>Gols</td>
              <td>PTS</td>
          </tr>
  `;
  times.forEach((time, index) => {

      // Define a classe com base na posição
      let classePosicao = '';
      if (index === 0 || index === 1) {
          classePosicao = 'tagVerde';
      } else if (index === 2) {
          classePosicao = 'tagVermelha';
      }
      
      rankingHTML += `
          <tr>
              <td class="${classePosicao}"></td>
              <td>${index + 1}</td>
              <td><img src="assets/images/Bandeira ${time.nome}.png"></td>
              <td>${time.nome}</td>
              <td>${time.jogos}</td>
              <td>${time.vitorias}</td>
              <td>${time.empates}</td>
              <td>${time.derrotas}</td>
              <td>${time.golsFeitos}:${time.golsTomados}</td>
              <td>${time.pontos}</td>
          </tr>
      `;
  });
  rankingHTML += `</table>`;
  container.innerHTML = rankingHTML;
}

// Função para dividir as partidas em rodadas
function dividirRodadas(resultados) {
  const rodadas = [];
  let rodadaAtual = [];

  resultados.forEach((partida, index) => {
    rodadaAtual.push(partida);

    // Primeira rodada com 3 jogos, as demais com 2 jogos
    const jogosPorRodada = rodadas.length === 0 ? 3 : 2;

    if (rodadaAtual.length === jogosPorRodada) {
      rodadas.push(rodadaAtual);
      rodadaAtual = [];
    }
  });

  // Adiciona a última rodada se não estiver vazia
  if (rodadaAtual.length > 0) {
    rodadas.push(rodadaAtual);
  }

  return rodadas;
}

// Função para exibir as rodadas no HTML
function exibirRodadas(rodadas) {
  const container = document.getElementById('resultados');
  container.innerHTML = '';

  rodadas.forEach((rodada, index) => {
    // Cria a classe dinâmica baseada no índice da rodada
    const classRodada = `corTabela${index + 1}`;
    const rodadaDiv = document.createElement('div');
    rodadaDiv.classList.add('tabelaX', classRodada); // Adiciona 'tabelaX' e 'corTabela1', 'corTabela2', etc.

    // Define a classe para o número da rodada, se for rodada 4 ou 5
    const numRodadaClass = (index + 1 === 4 || index + 1 === 5) ? 'style="color: black;"' : '';

    // Estrutura da tabela com o cabeçalho
    rodadaDiv.innerHTML = `
      <h2><strong ${numRodadaClass}>${index + 1}º Rodada</strong></h2>
      <table>
        <tr>
          <th>Hora</th>
          <th colspan="7">Jogo</th>
        </tr>
        ${rodada.map(partida => `
          <tr>
            <td>${partida.hora}</td>
            <td><img src="assets/images/Bandeira ${partida.time1}.png"></td>
            <td>${partida.time1}</td>
            <td>${partida.gols1 ?? ''}</td>
            <td>x</td>
            <td>${partida.gols2 ?? ''}</td>
            <td>${partida.time2}</td>
            <td><img src="assets/images/Bandeira ${partida.time2}.png"></td>
          </tr>
        `).join('')}
      </table>
    `;

    // Adiciona uma div extra com informações específicas para a rodada 6
    if (index === 5) { // Rodada 6 tem índice 5 (0-based index)
      const infoDiv = document.createElement('div');
      infoDiv.classList.add('infoRodada');
      infoDiv.innerHTML = '<img src="assets/icons/alert-icon.svg" alt="Alerta"><strong>DATA ALTERADA!</strong> Turquia x Croácia > 05/09 <';
      rodadaDiv.appendChild(infoDiv);
    }

    container.appendChild(rodadaDiv);
  });
}


// Dividir partidas em rodadas e exibir
const rodadas = dividirRodadas(resultados);
exibirRodadas(rodadas);

// Atualiza e exibe a classificação para ambos os grupos
atualizarClassificacao(resultados, todosOsTimes);

// Dividir os times em Grupos A e B para classificação separada
const timesGrupoA = todosOsTimes.filter(t => t.grupo === 'A');
const timesGrupoB = todosOsTimes.filter(t => t.grupo === 'B');

exibirRanking(timesGrupoA, 'GrupoA', 'Grupo A');
exibirRanking(timesGrupoB, 'GrupoB', 'Grupo B');

/***********************************************************/

// Artilharia
let jogadores = [
  { posicao: 0, bandeira: 'Bélgica', nome: 'Guilherme', gols: 4 },
  { posicao: 0, bandeira: 'Bélgica', nome: 'Clarito', gols: 1 },
  { posicao: 0, bandeira: 'Bélgica', nome: 'Rafael', gols: 1 },

  { posicao: 0, bandeira: 'Holanda', nome: 'Thiago', gols: 4 },
  { posicao: 0, bandeira: 'Holanda', nome: 'Gustavo', gols: 2 },
  { posicao: 0, bandeira: 'Holanda', nome: 'Pedro', gols: 1 },

  { posicao: 0, bandeira: 'Croácia', nome: 'Nero', gols: 6 },
  { posicao: 0, bandeira: 'Croácia', nome: 'Helton', gols: 3 },
  { posicao: 0, bandeira: 'Croácia', nome: 'Caio', gols: 2 },
  { posicao: 0, bandeira: 'Croácia', nome: 'Orivaldo', gols: 1 },
  
  { posicao: 0, bandeira: 'Inglaterra', nome: 'Matheus', gols: 2 },
  { posicao: 0, bandeira: 'Inglaterra', nome: 'Victor', gols: 2 },
  { posicao: 0, bandeira: 'Inglaterra', nome: 'Rafael', gols: 4 },
  { posicao: 0, bandeira: 'Inglaterra', nome: 'T. Burgues', gols: 1 },
  { posicao: 0, bandeira: 'Inglaterra', nome: 'Ewerton', gols: 3 },
  { posicao: 0, bandeira: 'Inglaterra', nome: 'Hamilton', gols: 1 },

  { posicao: 0, bandeira: 'Dinamarca', nome: 'João Marcos', gols: 5 },
  { posicao: 0, bandeira: 'Dinamarca', nome: 'Helbert', gols: 5 },
  { posicao: 0, bandeira: 'Dinamarca', nome: 'Marcos', gols: 2 },
  { posicao: 0, bandeira: 'Dinamarca', nome: 'Ayrton', gols: 2 },
  { posicao: 0, bandeira: 'Dinamarca', nome: 'Adriano', gols: 2 },
  { posicao: 0, bandeira: 'Dinamarca', nome: 'Bruno', gols: 1 },
  { posicao: 0, bandeira: 'Dinamarca', nome: 'Yuri', gols: 1 },
  
  { posicao: 0, bandeira: 'Turquia', nome: 'Ceara', gols: 4 },
  { posicao: 0, bandeira: 'Turquia', nome: 'Arthur G.', gols: 2 },
];
jogadores.sort((a, b) => b.gols - a.gols)
jogadores.forEach((jogador, index) => {
  jogador.posicao = index + 1
});
function rankingArtilharia() {
  const rankingDiv = document.getElementById('tabArtilharia')
  let tabelaHTML = `
      <h2><strong>Artilharia</strong></h2>
      <table>
          <tr>
              <td>#</td>
              <td></td>
              <td></td>
              <td><img src="assets/icons/bola-icon.svg"></td>
          </tr>
  `;

  jogadores.forEach(jogador => {
      tabelaHTML += `
          <tr>
              <td>${jogador.posicao}</td>
              <td><img src="assets/images/Bandeira ${jogador.bandeira}.png"></td>
              <td>${jogador.nome}</td>
              <td>${jogador.gols}</td>
          </tr>
      `
  })

  tabelaHTML += '</table>';
  rankingDiv.innerHTML = tabelaHTML;
}
rankingArtilharia()

//Cartões Amarelos
let cartoesAmarelos = [
  { posicao: 0, bandeira: 'Bélgica', nome: 'David', cartao: 1 },
  { posicao: 0, bandeira: 'Bélgica', nome: 'Clarito', cartao: 1 },
  { posicao: 0, bandeira: 'Bélgica', nome: 'Luiz Eduardo', cartao: 1 },
  { posicao: 0, bandeira: 'Bélgica', nome: 'Guilherme', cartao: 1 },

  { posicao: 0, bandeira: 'Holanda', nome: 'Thiago', cartao: 2 },

  { posicao: 0, bandeira: 'Croácia', nome: 'Nero', cartao: 2 },
  { posicao: 0, bandeira: 'Croácia', nome: 'Marquinhos', cartao: 1 },
  
  { posicao: 0, bandeira: 'Inglaterra', nome: 'Hamilton', cartao: 1 },

  { posicao: 0, bandeira: 'Dinamarca', nome: 'Helbert', cartao: 1 },
  { posicao: 0, bandeira: 'Dinamarca', nome: 'Eduardo', cartao: 1 },
  
  { posicao: 0, bandeira: 'Turquia', nome: 'Ceara', cartao: 1 },
  { posicao: 0, bandeira: 'Turquia', nome: 'João Carlos', cartao: 1 },
  { posicao: 0, bandeira: 'Turquia', nome: 'Juliano', cartao: 1 },
];
cartoesAmarelos.sort((a, b) => b.cartao - a.cartao)
cartoesAmarelos.forEach((jogador, index) => {
  jogador.posicao = index + 1
});
function rankingCartaoAmarelo() {
  const rankingDiv = document.getElementById('tabCartaoAmarelo')
  let tabelaHTML = `
      <h2><strong>Cartões Amarelos</strong></h2>
      <table>
  `;

  cartoesAmarelos.forEach(jogador => {
      tabelaHTML += `
          <tr>
              <td><img src="assets/images/Bandeira ${jogador.bandeira}.png"></td>
              <td>${jogador.nome}</td>
              <td>${jogador.cartao}</td>
          </tr>
      `
  })

  tabelaHTML += '</table>';
  rankingDiv.innerHTML = tabelaHTML;
}
rankingCartaoAmarelo()

document.getElementById('buttonRegulamento').addEventListener('click', function() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});