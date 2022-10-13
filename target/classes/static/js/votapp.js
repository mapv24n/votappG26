var vectorCandidatos = new Array(2);

vectorCandidatos[0] = 0;
vectorCandidatos[1] = 0;

function votar(candidato) {
    vectorCandidatos[candidato] = vectorCandidatos[candidato] + 1;
    alert("Gracias por su Voto");
}

function estadistica() {
    let totalVotos = vectorCandidatos[0] + vectorCandidatos[1];
    let porCan1 = (vectorCandidatos[0] / totalVotos) * 100;
    let porCan2 = (vectorCandidatos[1] / totalVotos) * 100;

    let nodoParrafo1 = document.createElement('p');
    let nodoParrafo2 = document.createElement('p');
    let nodoParrafo3 = document.createElement('p');
    let nodoTexto1 = document.createTextNode("Total Votos: " + totalVotos);
    let nodoTexto2 = document.createTextNode("Total Votos Candidato 1: " + vectorCandidatos[0] + " - " + porCan1 + "%");
    let nodoTexto3 = document.createTextNode("Total Votos Candidato 2: " + vectorCandidatos[1] + " - " + porCan2 + "%");

    nodoParrafo1.appendChild(nodoTexto1);
    nodoParrafo2.appendChild(nodoTexto2);
    nodoParrafo3.appendChild(nodoTexto3);

    let elementoDiv = document.getElementById('conEst');
    elementoDiv.appendChild(nodoParrafo1);
    elementoDiv.appendChild(nodoParrafo2);
    elementoDiv.appendChild(nodoParrafo3);

    // Obtener una referencia al elemento canvas del DOM
    const $grafica = document.querySelector("#grafica");
    // Las etiquetas son las que van en el eje X. 
    const etiquetas = ["Candidato 1", "Candidato 2"]
    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const datosVotos = {
        label: "Votos por Candidato",
        data: [vectorCandidatos[0], vectorCandidatos[1]], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 1,// Ancho del borde
    };
    new Chart($grafica, {
        type: 'line',// Tipo de gráfica
        data: {
            labels: etiquetas,
            datasets: [
                datosVotos,
                // Aquí más datos...
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });
}