// Задача 1. Форматтер чисел
function parseCount(intNumber){
  
  let conversionResult = Number.parseFloat(intNumber);
  if(isNaN(conversionResult)){
    throw new Error("Невалидное значение");
  }
  return conversionResult;
}

function validateCount(inputValue){
  try{
    return parseCount(inputValue);
  } catch (error){
    return error;
  }
}

// Задача 2. Треугольник
class Triangle{
  constructor(a, b, c) {
    if(a + b < c || a + c < b || b + c < a) {
      throw new Error("Невалидное значение");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  
  get perimeter(){
    return this.a + this.b + this.c;
  }
  get area(){
    return +(Math.sqrt((this.perimeter / 2) * (this.perimeter / 2 - this.a) * (this.perimeter / 2 - this.b) * (this.perimeter / 2 - this.c)).toFixed(3)); 
  }    
}

class TriangleError{  
  get area(){
    return "Ошибка! Треугольник не существует";
  }
  get perimeter(){
    return "Ошибка! Треугольник не существует";
  }    
}

function getTriangle(a, b, c) {
  try{
    return new Triangle(a, b, c);
  } catch (error) {
    return new TriangleError();
  }
}