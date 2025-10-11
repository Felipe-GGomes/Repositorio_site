const botao = document.getElementById('MeuBotao');
const caixa = document.getElementById('caixa');

botao.addEventListener('click', () => {
    //alterna uma animação simples
    caixa.style.transform = 'scale(1.2) rotate(15deg)';
    caixa.style.background = '#ffffffff';

    setTimeout(() => {
        caixa.style.transform = '';
        caixa.style.background = '#000000ff';
    }, 800);
});
