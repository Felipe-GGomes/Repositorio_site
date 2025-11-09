// JavaScript para ampliar a foto ao clicar
<script>
const foto = document.querySelector('.foto-quemsou');
foto.addEventListener('click', function() {
  foto.classList.toggle('ampliada')
});

const btn = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu-lateral');
btn.onclick = function() {
  menu.classList.toggle('aberta')};

</script>
// Fim do JavaScript para ampliar a foto ao clicar
