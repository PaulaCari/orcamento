const form = document.getElementById('form-orcamento');
const resultado = document.getElementById('resultado-orcamento');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const projeto = document.getElementById('projeto').value;
    const horasPrevistas = parseInt(document.getElementById('horas-previstas').value);
    const valorHora = parseInt(document.getElementById('valor-hora').value);
    const prazo = document.getElementById('prazo').value;

    const valorTotal = horasPrevistas * valorHora;

    document.getElementById('projeto-valor').textContent = projeto;
    document.getElementById('horas-previstas-valor').textContent = horasPrevistas;
    document.getElementById('valor-hora-valor').textContent =  valorHora.toFixed(2);  // Formato com 2 casas decimais
    document.getElementById('prazo-valor').textContent = prazo;
    document.getElementById('valor-total-valor').textContent = valorTotal;

    document.getElementById('valor-total-valor').textContent = valorTotal.toFixed(2);  

  
    resultado.classList.remove('hidden'); 
  });


