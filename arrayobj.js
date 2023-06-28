let array = [
    { name: "New York", population: 8405837, temperature: 20, weatherDescription: "frio" },
    { name: "Fortaleza", population: 140000, temperature: 28, weatherDescription: "quente" },
    { name: "Sao Carlos", population: 130000, temperature: 18, weatherDescription: "frio" },
    { name: "Rio de Janeiro", population: 750000, temperature: 25, weatherDescription: "quente" }
];

function sortCities(vet, method) {
    let array_sorted = [];
    for (let i = 0; i < vet.length; i++) {
        array_sorted.push(vet[i]);
    }
    if (method === "population") {
        return array_sorted.sort(function (a, b) {
            return a.population - b.population;
        });
    }
    if (method === "temperature") {
        return array_sorted.sort(function (a, b) {
            return a.temperature - b.temperature;
        });
    }

    if (method === "name") {
        return array_sorted.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            if (a.name === b.name) return 0;
        });

    }
}

function filterCities(vet, criterio, valor) {
    let array_filtrado = [];
    if (criterio === "population") {
        for (let i = 0; i < vet.length; i++) {
            if (vet[i].population >= valor)
                array_filtrado.push(vet[i]);
        }
    }
    if (criterio === "weatherDescription") {
        for (let i = 0; i < vet.length; i++) {
            if (vet[i].weatherDescription === "valor")
                array_filtrado.push(vet[i]);
        }

    }
    return array_filtrado;


}

function processCities(vet, filt_crit, filt_value, sort_crit) {
    let vet_processed = [];
    vet_processed = sortCities(filterCities(vet, filt_crit, filt_value), sort_crit);
    return vet_processed;

}

//test cases

let teste1 = sortCities(array, "name");

for (let i = 0; i < teste1.length; i++) {
    console.log(teste1[i].name);
}
console.log("End of teste1 \n");

let teste2 = sortCities(array, "population")
for (let i = 0; i < teste2.length; i++) {
    console.log(teste2[i].name);
}
console.log("End of teste2 \n");
let teste3 = sortCities(array, "temperature")
for (let i = 0; i < teste3.length; i++) {
    console.log(teste3[i].name);
}
console.log("End of teste3 \n");

let teste4 = processCities(array, "population", 200000, "name");
for (let i = 0; i < teste4.length; i++) {
    console.log(teste4[i].name);
}
console.log("End of teste4 \n");
