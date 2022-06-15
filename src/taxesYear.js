
function isrAnual(tablaSalario){

// funcion para buscal el valor de la uma
  let uma;
  function buscarValorUma (yearUma){
  if (yearUma <= 2022 & yearUma >= 2015){
    uma = umaByYear.find(function(valor){
      return valor.year == yearUma;
    });
  }else{
    uma = umaByYear.find(function(valor){
      return valor.year == 2021;
    })
    const umaError = document.getElementById("defauldYear");
    umaError.innerText = `Año no selecionado por defecto es 2021`;
  };
  return uma;
  };

    const sumaSalario = tablaSalario.reduce(function (salario, nuevoSalaraio) {
      return salario + nuevoSalaraio;
    });

    const yearSelected = document.getElementById("year");
    const yearValue = parseInt(yearSelected.value);
    console.log(yearValue);

    //aqui comenzamos a traer los valores exentos

    function getExento (valor){
      let exento = document.getElementById(valor);
      let exentoValue = parseFloat(exento.value);
      return exentoValue;
    }

    const aginaldo = getExento("aguinaldo");
    const ptu = getExento("ptu");
    const otrosIngresos = getExento("otros");

    const functUma = buscarValorUma(yearValue);
    const valorUma = functUma.value;
    console.log({valorUma});

    const maxExentoAgui = parseFloat((valorUma * 30).toFixed(2));
    const maxExentoPTU = parseFloat((valorUma * 15).toFixed(2));
    console.log({
      maxExentoAgui,
      maxExentoPTU
    })

    const arraySalExento = [];

    arraySalExento.push(otrosIngresos);

    if (aginaldo < maxExentoAgui){
      arraySalExento.push(aginaldo);
    }else{
      arraySalExento.push(maxExentoAgui);
    };

    if (ptu < maxExentoPTU){
      arraySalExento.push(ptu);
    }else{
      arraySalExento.push(maxExentoPTU);
    };

    console.log(arraySalExento);

    const sumArraySalExento = arraySalExento.reduce(function (salario, nuevoSalaraio){
      return salario + nuevoSalaraio;
    });
    console.log(sumArraySalExento);
// acomodamos esta constante para que pueda ser leida
    const salarioAcomulado = sumaSalario - sumArraySalExento;
    console.log(salarioAcomulado);

    //aqui comenzamos a validar el año del ejercicio
    let isrLevel;

    if (yearValue === 2021){
      isrLevel = tablaAnualISR2021.find(function(isr){
        return isr.end >= salarioAcomulado;
    });
    }else if (yearValue === 2020){
      isrLevel = tablaAnualISR2020.find(function(isr){
        return isr.end >= salarioAcomulado;
    });
    }else if(yearValue === 2022){
      isrLevel = tablaAnualISR2022.find(function(isr){
        return isr.end >= salarioAcomulado;
    });
    }
    else {
      // default 2021
      isrLevel = tablaAnualISR2021.find(function(isr){
        return isr.end >= salarioAcomulado;
      });
    }
    console.log(isrLevel);

    // empezamos a calcular
    //aqui sumamos la cuotafija y el % que le aplicamos al exedente
    

    const isrFijo = isrLevel.cuotaFija;
    const isrPorcentaje = (isrLevel.apliPorcentaje / 100).toFixed(4);
    const isrExedente = ((salarioAcomulado - isrLevel.start) * isrPorcentaje).toFixed(2);
    
    const isrTotal = parseFloat(isrFijo + isrExedente).toFixed(2);

    // aqui empezamos a imprimir los valores
    const tdSalaryAcomulado = document.getElementById("salAcomulado");
    tdSalaryAcomulado.innerText = `$${sumaSalario}`;

    const tdSalaryExento = document.getElementById("salExento");
    tdSalaryExento.innerText = `$` + parseFloat(sumArraySalExento.toFixed(2));

    const tdSalaryGravado = document.getElementById("salGravado");
    tdSalaryGravado.innerText = `$${salarioAcomulado}`;

    const tdLimInferior = document.getElementById("limInferior");
    // isrLevel es el metodo de la funcion find
    tdLimInferior.innerText = `$${isrLevel.start}`;

    const tdLimSuperior = document.getElementById("limSuperior");
    tdLimSuperior.innerText = `$${isrLevel.end}`;

    const tdPorcentaje = document.getElementById("porcentajeMarginal");
    tdPorcentaje.innerText = `%${isrLevel.apliPorcentaje}`;

    const tdCuotaMarginal = document.getElementById("cuotaMarginal");
    tdCuotaMarginal.innerText = `$${isrExedente}`;

    const tdCuotaFija = document.getElementById("cuotaFija");
    tdCuotaFija.innerText = `$${isrFijo}`;

    return isrTotal;
}
 
//qui llamamos nuestro onclick y extraemos los datos del salario para 
//despues ejecutar la función isrAnual
function calcularISR(){

    const arraySalarios = [];

    function getSalary(mouth){
        let salary = document.getElementById(mouth);
        let valueSalary = parseFloat(salary.value);
        return arraySalarios.push(valueSalary);
    }
    
    getSalary("juanary");
    getSalary("february");
    getSalary("march");
    getSalary("april");
    getSalary("may");
    getSalary("june");
    getSalary("july");
    getSalary("august");
    getSalary("september");
    getSalary("october");
    getSalary("november");
    getSalary("december");

    console.log(arraySalarios);

    const isrFinal = isrAnual(arraySalarios);

    const tdIsr = document.getElementById("isrFinal");
    tdIsr.innerText = `$${isrFinal}`;
}



