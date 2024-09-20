// Alternar o menu expansivo
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('show');
});

// Função para alternar a visibilidade das seções com animação
function toggleSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section.classList.contains('visible')) {
        section.classList.remove('visible');
        section.classList.add('hidden');
    } else {
        section.classList.remove('hidden');
        section.classList.add('visible');
    }
}

// Função para ocultar todas as seções
function hideAllSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('visible');
        section.classList.add('hidden');
    });
}

// Associar os links do menu às seções correspondentes
document.querySelector('a[href="#inicio"]').addEventListener('click', function () {
    hideAllSections();
    toggleSection('#inicio');
});

document.querySelector('a[href="#alimentacao"]').addEventListener('click', function () {
    hideAllSections();
    toggleSection('#alimentacao');
});

document.querySelector('a[href="#exercicios"]').addEventListener('click', function () {
    hideAllSections();
    toggleSection('#exercicios');
});

document.querySelector('a[href="#saude-mental"]').addEventListener('click', function () {
    hideAllSections();
    toggleSection('#saude-mental');
});

document.querySelector('a[href="#imc"]').addEventListener('click', function () {
    hideAllSections();
    toggleSection('#imc');
});

// Lógica da calculadora de IMC
document.getElementById('imc-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (peso > 0 && altura > 0) {
        const imc = (peso / (altura * altura)).toFixed(2);
        let categoria;

        if (imc < 18.5) {
            categoria = "Abaixo do peso";
        } else if (imc < 24.9) {
            categoria = "Peso normal";
        } else if (imc < 29.9) {
            categoria = "Sobrepeso";
        } else {
            categoria = "Obesidade";
        }

        document.getElementById('resultado').textContent = `Seu IMC é ${imc} (${categoria})`;
    } else {
        document.getElementById('resultado').textContent = "Por favor, insira valores válidos.";
    }
});
