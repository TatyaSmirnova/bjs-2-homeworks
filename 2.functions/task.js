function getArrayParams(...arr) {
  // Код по первому варианту решения
  /*  let sum = 0, max = arr[0], min = arr[0];
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > max) {
        max = arr[i];
      }
      if(arr[i] < min) {
        min = arr[i];
      }
      sum = sum + arr[i];
    }*/
  
  // Код по второму варианту решения
    return {max: Math.max(...arr), //Math.max.apply(arr.length, arr),
            min: Math.min(...arr), //Math.min.apply(arr.length, arr),
            avg: +(arr.reduce( (accumulator, currentValue, index, arr) => accumulator + currentValue/arr.length, 0).toFixed(2))};
            
  /*  let sum = arr.reduce( (accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(`max = ${Math.max.apply(arr.length, arr)}, min = ${Math.min.apply(arr.length, arr)}, avg = ${+(sum/arr.length).toFixed(2)}`); */
  }
  
  function summElementsWorker(...arr) {
    return arr.reduce( (accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  function differenceMaxMinWorker(...arr) {
    if(arr.length === 0) {
      return 0;
    }
    return Math.max(...arr) - Math.min(...arr);
  //  return Math.max.apply(arr.length, arr) - Math.min.apply(arr.length, arr);
  }
  
  function differenceEvenOddWorker(...arr) {
    if(arr.length === 0) {
      return 0;
    }
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for(let i = 0; i < arr.length; i++) {
      if( arr[i]%2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
      }
      else {
        sumOddElement = sumOddElement + arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  }
  
  function averageEvenElementsWorker(...arr) {
    if(arr.length === 0) {
      return 0;
    }
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for(let i = 0; i < arr.length; i++) {
      if( arr[i]%2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
        countEvenElement++;
      }     
    }
     
    return sumEvenElement/countEvenElement; 
  }
  
  function makeWork (arrOfArr, func) {
    let maxWorkerResult = -Infinity;
     
    for(let i = 0; i < arrOfArr.length; i++) {  
      const funcResult = func(...arrOfArr[i]);
  
      if (funcResult > maxWorkerResult) {
        maxWorkerResult = funcResult;
      } 
  /*    if(maxWorkerResult < func.apply(i, arrOfArr[i])) {
        maxWorkerResult = func.apply(i, arrOfArr[i]);
      } */
    } 
  return maxWorkerResult;
  }