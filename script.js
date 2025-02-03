document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(`Mensagem enviada por ${nome} (${email}):\n\n${mensagem}`);
});