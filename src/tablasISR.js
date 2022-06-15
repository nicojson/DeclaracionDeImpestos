/* Nota: cuando creeamos nuevas tablas deben llevar la siguiente 
nomenclatura "tablaAnualISR" + year, ejemplo:
tablaAnualISR2021
tablaAnualISR2022
tablaAnualISR2023
tablaAnualISR2024
tablaAnualISR2025 etc.
*/

const umaByYear = [
  {year: 2022,  value: 96.22},
  {year: 2021, value: 89.62},
  {year: 2020, value: 86.88},
];

const tablaAnualISR2022 = [
  {
    start: 0.01,
    end: 7735.00,
    cuotaFija: 0.00,
    apliPorcentaje: 1.92,
  },
  {
    start: 7735.01,
    end: 65651.07,
    cuotaFija: 148.51,
    apliPorcentaje: 6.40,
  },
  {
    start: 65651.08,
    end: 115375.90,
    cuotaFija: 3855.14,
    apliPorcentaje: 10.88,
  },
  {
    start: 115375.91,
    end: 134119.41,
    cuotaFija: 9265.20,
    apliPorcentaje: 16.00,
  },
  {
    start: 134119.42,
    end: 160577.65,
    cuotaFija: 12264.20,
    apliPorcentaje: 17.92,
  },
  {
    start: 160577.66,
    end: 323862.00,
    cuotaFija: 17005.47,
    apliPorcentaje: 21.36,
  },
  {
    start: 323862.01,
    end: 510451.00,
    cuotaFija: 51883.01,
    apliPorcentaje: 23.52,
  },
  {
    start: 510451.01,
    end: 974535.03,
    cuotaFija: 95768.74,
    apliPorcentaje: 30.00,
  },
  {
    start: 974535.04,
    end: 1299380.04,
    cuotaFija: 234993.34,
    apliPorcentaje: 32.00,
  },
  {
    start: 1299380.05,
    end: 3898140.12,
    cuotaFija: 338944.34,
    apliPorcentaje: 34.00,
  },
  {
    start: 3898140.13,
    end: "En adelante",
    cuotaFija: 1222522.76,
    apliPorcentaje: 35.00,
  },
]

const tablaAnualISR2021 = [
{
  start: 0.01,
  end: 7735.0,
  cuotaFija: 0.0,
  apliPorcentaje: 1.92,
},
{
  start: 7735.0,
  end: 65651.07,
  cuotaFija: 148.51,
  apliPorcentaje: 6.4,
},
{ start: 65651.08, 
  end: 115375.9, 
  cuotaFija: 3855.14, 
  apliPorcentaje: 10.88 
},
{ start: 115375.91, 
  end: 134119.41, 
  cuotaFija: 9265.2, 
  apliPorcentaje: 16.0 
},
{
  start: 134119.42,
  end: 160577.65,
  cuotaFija: 12264.16,
  apliPorcentaje: 17.92,
},
{
  start: 160577.66,
  end: 323862.0,
  cuotaFija: 17005.47,
  apliPorcentaje: 21.36,
},
{
  start: 323862.01,
  end: 510451.0,
  cuotaFija: 51883.01,
  apliPorcentaje: 23.52,
},
{
  start: 510451.01,
  end: 974535.03,
  cuotaFija: 95768.74,
  apliPorcentaje: 30.0,
},
{
  start: 974535.04,
  end: 1299380.04,
  cuotaFija: 234993.95,
  apliPorcentaje: 32.0,
},
{
  start: 1299380.05,
  end: 3898140.12,
  cuotaFija: 338944.34,
  apliPorcentaje: 34.0,
},
{
  start: 3898140.13,
  end: "En adelante",
  cuotaFija: 1222522.76,
  apliPorcentaje: 35.0,
},
];

const tablaAnualISR2020 = [
  {
    start: 0.01,
    end: 6942.2,
    cuotaFija: 0.0,
    apliPorcentaje: 1.92,
  },
  {
    start: 6942.2,
    end: 58922.16,
    cuotaFija: 133.28,
    apliPorcentaje: 6.4,
  },
  {
    start: 58922.17,
    end: 103550.44,
    cuotaFija: 3460.01,
    apliPorcentaje: 10.88,
  },
  {
    start: 103550.45,
    end: 120372.83,
    cuotaFija: 8315.57,
    apliPorcentaje: 16,
  },
  {
    start: 120372.84,
    end: 144119.23,
    cuotaFija: 11007.14,
    apliPorcentaje: 17.92,
  },
  {
    start: 144119.24,
    end: 290667.75,
    cuotaFija: 15262.49,
    apliPorcentaje: 21.36,
  },
  {
    start: 290667.76,
    end: 458132.29,
    cuotaFija: 46565.26,
    apliPorcentaje: 23.52,
  },
  {
    start: 458132.3,
    end: 874650.0,
    cuotaFija: 85952.92,
    apliPorcentaje: 30,
  },
  {
    start: 874650.01,
    end: 1166200.0,
    cuotaFija: 210908.23,
    apliPorcentaje: 32,
  },
  {
    start: 1166200.01,
    end: 3498600.0,
    cuotaFija: 304204.21,
    apliPorcentaje: 34,
  },
  {
    start: 3498600.01,
    end: "En adelante",
    cuotaFija: 1097220.21,
    apliPorcentaje: 35,
  },
];