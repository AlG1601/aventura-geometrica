function calcularCirculo(){ // Círculo: Praticar o uso da constante π (pi) e a potenciação.
    var raio = parseFloat(document.getElementById('area').value);
    
    var area = Math.PI * Math.pow(raio, 2);
    
    document.getElementById('resultado').textContent = area.toFixed(2) + " m²";
}

function calcularTronco(){ // Tronco da pirâmide: é o sólido formado por uma secção transversal, paralela à base, com faces laterais trapezoidais e bases poligonais.
  // Obtenha os valores inseridos pelo usuário
  var raioMaior = parseFloat(document.getElementById('maior').value);
  var raioMenor = parseFloat(document.getElementById('menor').value);
  var altura = parseFloat(document.getElementById('area').value);

  // var area = Math.PI * (raioMaior + raioMenor) * (raioMaior - raioMenor + Math.sqrt(Math.pow(altura, 2) + Math.pow(raioMaior - raioMenor, 2)));

  var area = ((raioMaior+raioMenor)*altura/2)*4;

  document.getElementById('resultado').textContent = area.toFixed(2) + " m²"

  // var r1 = parseFloat(prompt("Informe o valor do Raio maior"));
  // var r2 = parseFloat(prompt("Informe o valor do Raio menor"));
  // var h = parseFloat(prompt("Informe o valor da altura"));

  // var slantHeight = Math.sqrt(Math.pow(h, 2) + Math.pow((r2 - r1), 2));
  // var lateralArea = (r1 + r2) * slantHeight;

  // // Calcule a área das bases
  // var base1Area = Math.PI * Math.pow(r1, 2);
  // var base2Area = Math.PI * Math.pow(r2, 2);

  // // Calcule a área total
  // var totalArea = lateralArea + base1Area + base2Area;
  // console.log(totalArea);
}

function calcularRentagulo(){ // Retângulo: Semelhante ao quadrado, mas com lados diferentes.
  var base = parseFloat(document.getElementById('base').value);
  var altura = parseFloat(document.getElementById('area').value);

  var area = base*altura;

  document.getElementById('resultado').textContent = area.toFixed(2) + " m²"
}

function calcularCoroaDoCirculo(){ // Coroa do Círculo: Quando duas ou mais circunferências possuem o mesmo centro, são denominadas concêntricas. Nesse caso elas podem ter raio de tamanhos diferentes.

  var raioMaior = parseFloat(document.getElementById('maior').value);
  var raioMenor = parseFloat(document.getElementById('area').value);

  var area = Math.PI * (Math.pow(raioMaior, 2) - Math.pow(raioMenor, 2));

  document.getElementById('resultado').textContent = area.toFixed(2) + " m²"

}

function calcularTrapezoideIrregular(){ // Trapezoide Irregular: onde os quatro lados têm diferentes comprimentos. Teremos que aplicar fórmulas de geometria mais avançadas para chegar à área correta.

  var baseTrapezio = parseFloat(document.getElementById('base1').value);
  var segundaBaseTrapezio = parseFloat(document.getElementById('base2').value);
  var altura = parseFloat(document.getElementById('area').value);

  var area = (baseTrapezio+segundaBaseTrapezio)/2*altura;

  document.getElementById('resultado').textContent = area.toFixed(2) + " m²"

}

function calcularPoligono(escolhaForma){ // Polígono Regular com N Lados: Peça aos usuários que escolham um polígono regular com um número variável de lados (por exemplo, pentágono, hexágono, heptágono, etc.). Coloque pelo menos três opções.  Então usaremos fórmulas trigonométricas para dividir o polígono em triângulos e calcular a área total.

  // var forma = parseInt(prompt("Digite 1 (pentágono), 2 (losango), 3 (quadrilátero)"));
  var area;

  if (escolhaForma === pentagono) {
    var lado = parseFloat(document.getElementById('lado').value);
    var apotemo = parseFloat(document.getElementById('area').value);

    area = (lado * 5) * apotemo;
    console.log("teste");
    
  }else if (escolhaForma === losango) {
    var diagonal1 = parseFloat(document.getElementById('diagonal').value);
    var diagonal2 = parseFloat(document.getElementById('area').value);

    area = (diagonal1 * diagonal2) / 2;
  } else if (escolhaForma === quadrilatero) {
    console.log("Funciona");
    var lados = parseFloat(document.getElementById('area').value);
    console.log("Funciona");

    area = Math.pow(lados, 2);
  }

  document.getElementById('resultado').textContent = area.toFixed(2) + " m²";

}

function calcularQuadrado(){ // Quadrado: O cálculo da área de um quadrado é simples, bastando multiplicar o lado pelo lado.
  var lado = parseFloat(document.getElementById('area').value);

  var area = lado*lado;

  document.getElementById('resultado').textContent = area.toFixed(2) + " m²"
}

function calcularCircular(){ // Setor Circular em um Círculo Aninhado: Vamos calcular a área de um setor circular dentro de um círculo maior. Isso envolve calcular a área do setor, subtrair a área do triângulo formado pelo raio do setor e depois adicionar a área do círculo maior.

  // Solicita ao usuário o raio do círculo maior (R) e o ângulo do setor (θ)
  const raioMaior = parseFloat(document.getElementById('maior').value);
  const anguloSetor = parseFloat(document.getElementById('area').value);

  // Converte o ângulo de graus para radianos
  const anguloRadianos = (anguloSetor * Math.PI) / 180;

  // Calcula a área do setor
  const areaSetor = (anguloRadianos / (2 * Math.PI)) * Math.PI * raioMaior * raioMaior;

  // Calcula a área do triângulo
  const areaTriangulo = (1 / 2) * raioMaior * raioMaior * Math.sin(anguloRadianos);

  // Calcula a área do círculo maior
  const areaCirculoMaior = Math.PI * raioMaior * raioMaior;

  // Calcula a área do setor circular dentro do círculo maior
  const area = areaTriangulo - areaSetor + areaCirculoMaior;

  // Exibe o resultado
  document.getElementById('resultado').textContent = area.toFixed(2) + " m²"

}

document.getElementById("area").addEventListener("keyup", function(event) { // Como chamei de area, então em todos os inputs terei que utilizar area como ID
    if (event.key === "Enter") {
      event.preventDefault();
      calculo();
    }
  });