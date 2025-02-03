document.addEventListener('DOMContentLoaded', () => {
    // Função para validar o formulário de contato
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Formulário enviado com sucesso!');
        form.reset(); // Limpa o formulário após o envio
    });

    // Animação suave para a navegação
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
