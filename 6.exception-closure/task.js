// Задача 1. Форматтер чисел
function parseCount(intNumber){
  
    let conversionResult = Number.parseFloat(String(intNumber));
    if(conversionResult === Nan){
      throw new Error("Невалидное значение");
    }
    return conversionResult;
  }
  
  function validateCount(inputValue){
    try{
      parseCount(inputValue);
    } catch (error){
      console.log(error);
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
      let p = (a + b + c) / 2;
      this._area = +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)); 
      this._perimeter = a + b + c;
    }
    
    get area(){
      return this._area;
    }
    get perimeter(){
      return this._perimeter;
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