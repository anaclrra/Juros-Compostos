function calcularJuros() {
    let resultado = document.getElementById('iTotal');
    const capital = document.getElementById('iCapital').value;
    const taxa = document.getElementById('iTaxa').value / 100;
    const tempo = document.getElementById('iTempo').value;
    
    const total = (capital * (1 + taxa) ** tempo);

    return resultado.innerHTML = ('R$ ' + total.toFixed(2));
}