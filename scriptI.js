
    let golesA = 2;
    let golesB = 1;
    const marcador = document.getElementById('marcador');

    function alerta(){
      alert('¡Disfruta los mejores partidos de fútbol!');
    }
    setInterval(()=>{
      if(Math.random() > 0.7){
        Math.random() > 0.5 ? golesA++ : golesB++;
        marcador.textContent = `${golesA} : ${golesB}`;
      }
    }, 5000);
