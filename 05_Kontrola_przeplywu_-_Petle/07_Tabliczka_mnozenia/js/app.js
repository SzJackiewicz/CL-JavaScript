const n = 3;
const calc = [];


for(let i = 0; i < n; i++){
    calc[i] = [];
    for(let k = 0; k < n; k++){
        calc[i][k] = (i + 1) + ' * ' + (k + 1) + ' = ' + (i + 1) * (k + 1);
    }
}
for(let i = 0; i < calc.length; i++){
    console.log(String(calc[i]).replaceAll(',', ' | '));
}
