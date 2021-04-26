const car = {
   type: 'sedan',
   color: 'green',
   engine: 2.5
};

const carDescription = `${car.type} ${car.color} ${car.engine}`;
console.log(carDescription);

const color = {
    red: 100,
    green: 0,
    blue: 0
};

const referenceColor = color;
referenceColor.red = 50;
referenceColor.gren = 50;

