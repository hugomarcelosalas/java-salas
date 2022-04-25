
// Obtencion datos formularios

const formulario1 = document.getElementById("formulario1");
const diaInicial = document.getElementById("Día");
const xxlInicial = document.getElementById("IngreseInicialXxl");
const xlInicial = document.getElementById("IngreseInicialXl");
const lInicial = document.getElementById("IngreseIniciall");
const mInicial = document.getElementById("IngreseInicialM");
const sInicial = document.getElementById("IngreseInicialS");
const xsInicial = document.getElementById("IngreseInicialXs");

const formulario2 = document.getElementById("ventas");
const xxlVentas = document.getElementById("IngreseVentasXxl");
const xlVentas = document.getElementById("IngreseVentasXl");
const lVentas = document.getElementById("IngreseVentasL");
const mVentas = document.getElementById("IngreseVentasM");
const sVentas = document.getElementById("IngreseVentasS");
const xsVentas = document.getElementById("IngreseVentasXs");

const formulario3 = document.getElementById("cumples");
const xxlCumples = document.getElementById("IngreseCumplesXxl");
const xlCumples = document.getElementById("IngreseCumplesXl");
const lCumples = document.getElementById("IngreseCumplesl");
const mCumples = document.getElementById("IngreseCumplesM");
const sCumples = document.getElementById("IngreseCumplesS");
const xsCumples = document.getElementById("IngreseCumplesXs");

const formulario4 = document.getElementById("stock");
const xxlStock = document.getElementById("IngreseStockXxl");
const xlStock = document.getElementById("IngreseStockXl");
const lStock = document.getElementById("IngreseStockL");
const mStock = document.getElementById("IngreseStockM");
const sStock = document.getElementById("IngreseStockS");
const xsStock = document.getElementById("IngreseStockXs");


class Calcetines {
    constructor(xxl, xl, l, m, s, xs, dia) {
        this.xxl = parseInt(xxl);
        this.xl = parseInt(xl);
        this.l = parseInt(l);
        this.m = parseInt(m);
        this.s = parseInt(s);
        this.xs = parseInt(xs);
        this.dia = dia;
    }
}

formulario1.addEventListener("submit", enviarFormularioInicial);

let arrayInicial = []
function enviarFormularioInicial(e) {
    e.preventDefault();

    let inicial = new Calcetines(xxlInicial.value, xlInicial.value, lInicial.value, mInicial.value, sInicial.value, xsInicial.value, diaInicial.value)

    arrayInicial.push(inicial)
    // console.log();

    localStorage.setItem("Inicial", JSON.stringify(inicial));

}
formulario1.addEventListener("submit", respuestaClick)
function respuestaClick() {
    if (xxlInicial != "" & xlInicial != "" & lInicial != "" & mInicial != "" & sInicial != "" & xsInicial != "" & diaInicial != "")
        Toastify({
            text: "ENVIADO",
            duration: 3000
        }).showToast();


}






formulario2.addEventListener("submit", enviarFormularioVentas);

let arrayVentas = []
function enviarFormularioVentas(e) {
    e.preventDefault();

    let ventas = new Calcetines(xxlVentas.value, xlVentas.value, lVentas.value, mVentas.value, sVentas.value, xsVentas.value)

    arrayVentas.push(ventas)

    localStorage.setItem("Ventas", JSON.stringify(ventas));

}
formulario2.addEventListener("submit", respuestaClick)
function respuestaClick() {
    if (xxlVentas != "" & xlVentas != "" & lVentas != "" & mVentas != "" & sVentas != "" & xsVentas != "")
        Toastify({
            text: "ENVIADO",
            duration: 3000
        }).showToast();


}

formulario3.addEventListener("submit", enviarFormularioCumples);

let arrayCumples = []
function enviarFormularioCumples(e) {
    e.preventDefault();

    let cumples = new Calcetines(xxlCumples.value, xlCumples.value, lCumples.value, mCumples.value, sCumples.value, xsCumples.value)

    arrayCumples.push(cumples)

    localStorage.setItem("Cumples", JSON.stringify(cumples));
}
formulario3.addEventListener("submit", respuestaClick)
function respuestaClick() {
    if (xxlCumples != "" & xlCumples != "" & lCumples != "" & mCumples != "" & sCumples != "" & xsCumples != "")
        Toastify({
            text: "ENVIADO",
            duration: 3000
        }).showToast();


}

formulario4.addEventListener("submit", enviarFormularioStock);

let arrayStock = []
function enviarFormularioStock(e) {
    e.preventDefault();

    let stock = new Calcetines(xxlStock.value, xlStock.value, lStock.value, mStock.value, sStock.value, xsStock.value, diaInicial.value)

    arrayStock.push(stock)

    localStorage.setItem("Stock", JSON.stringify(stock));
}
formulario4.addEventListener("submit", respuestaClick)
function respuestaClick() {
    if (xxlStock != "" & xlStock != "" & lStock != "" & mStock != "" & sStock != "" & xsStock != "")
        Toastify({
            text: "ENVIADO",
            duration: 3000
        }).showToast();


}





let arrayResultado = []
function restaIxV() {
    let resultado = new Calcetines(arrayInicial[0].xxl - (arrayVentas[0].xxl + arrayCumples[0].xxl), arrayInicial[0].xl - (arrayVentas[0].xl + arrayCumples[0].xl), arrayInicial[0].l - (arrayVentas[0].l + arrayCumples[0].l),
        arrayInicial[0].m - (arrayVentas[0].m + arrayCumples[0].m), arrayInicial[0].s - (arrayVentas[0].s + arrayCumples[0].s), arrayInicial[0].xs - (arrayVentas[0].xs + arrayCumples[0].xs), arrayInicial[0].dia
    )
    arrayResultado.push(resultado)

    localStorage.setItem("Resultado", JSON.stringify(resultado));


    console.log(resultado)


}

let arrayDiferencia = []
function resta() {
    let diferencia = new Calcetines(arrayStock[0].xxl - arrayResultado[0].xxl, arrayStock[0].xl - arrayResultado[0].xl, arrayStock[0].l - arrayResultado[0].l,
        arrayStock[0].m - arrayResultado[0].m, arrayStock[0].s - arrayResultado[0].s, arrayStock[0].xs - arrayResultado[0].xs, arrayInicial[0].dia
    )
    arrayDiferencia.push(diferencia)

    localStorage.setItem("Diferencia", JSON.stringify(diferencia));

 
   

    
}





// REVISAR

let botonResta = document.getElementById("restaIXV")
botonResta.addEventListener("click", restaIxV);


if ( arrayDiferencia.includes( '!=0' ) ) {
    Swal.fire({
        icon: 'Error en el stock',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })

}

let botonResta2 = document.getElementById("resta")
botonResta.addEventListener("click", resta);





//Generar Tabla
function genera_tabla() {

    var tablaHTML = document.getElementById("tabla");
    var tabla = document.createElement("table");
    tabla.innerHTML = `
        <thead>
        <tr>
            <th>${diaInicial}</th>
            <th>XXL</th>
            <th>XL</th>
            <th>L</th>
            <th>M</th>
            <th>S</th>
            <th>XS</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Inicial</td>
            <td>${arrayInicial[0].xxl}</td>
            <td>${arrayInicial[0].xl}</td>
            <td>${arrayInicial[0].l}</td>
            <td>${arrayInicial[0].m}</td>
            <td>${arrayInicial[0].s}</td>
            <td>${arrayInicial[0].xs}</td>
        </tr>
        <tr>
            <td>Cumples</td>
            <td>${arrayCumples[0].xxl}</td>
            <td>${arrayCumples[0].xl}</td>
            <td>${arrayCumples[0].l}</td>
            <td>${arrayCumples[0].m}</td>
            <td>${arrayCumples[0].s}</td>
            <td>${arrayCumples[0].xs}</td>
        </tr>
        <tr>
            <td>Ventas</td>
            <td>${arrayVentas[0].xxl}</td>
            <td>${arrayVentas[0].xl}</td>
            <td>${arrayVentas[0].l}</td>
            <td>${arrayVentas[0].m}</td>
            <td>${arrayVentas[0].s}</td>
            <td>${arrayVentas[0].xs}</td>
        </tr>
        <tr>
            <td>Stock Teorico</td>
            <td>${arrayResultado[0].xxl}</td>
            <td>${arrayResultado[0].xl}</td>
            <td>${arrayResultado[0].l}</td>
            <td>${arrayResultado[0].m}</td>
            <td>${arrayResultado[0].s}</td>
            <td>${arrayResultado[0].xs}</td>
        </tr>
        <tr>
            <td>Stock Actual</td>
            <td>${arrayStock[0].xxl}</td>
            <td>${arrayStock[0].xl}</td>
            <td>${arrayStock[0].l}</td>
            <td>${arrayStock[0].m}</td>
            <td>${arrayStock[0].s}</td>
            <td>${arrayStock[0].xs}</td>
        </tr>
        <tr>
            <td>Diferencia</td>
            <td>${arrayDiferencia[0].xxl}</td>
            <td>${arrayDiferencia[0].xl}</td>
            <td>${arrayDiferencia[0].l}</td>
            <td>${arrayDiferencia[0].m}</td>
            <td>${arrayDiferencia[0].s}</td>
            <td>${arrayDiferencia[0].xs}</td>
        </tr>
        </tbody>
`
    tabla.setAttribute("border", "2");
    tablaHTML.appendChild(tabla)
}