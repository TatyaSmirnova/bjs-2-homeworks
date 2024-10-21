function getArrayParams(...arr) {
// Код по первому варианту решения
//  let sum = 0, max = arr[0], min = arr[0];
//  for(let i = 0; i < arr.length; i++) {
//    if(arr[i] > max) {
//      max = arr[i];
//    }
//    if(arr[i] < min) {
//      min = arr[i];
//    }
//    sum = sum + arr[i];
//  }


// Код по второму варианту решения
  let sum = arr.reduce( (accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(`max = ${Math.max.apply(arr.length, arr)}, min = ${Math.min.apply(arr.length, arr)}, avg = ${+(sum/arr.length).toFixed(2)}`);
}

function summElementsWorker(...arr) {
  let sum = 0;
  if(arr.length != 0) {
    sum = arr.reduce( (accumulator, currentValue) => accumulator + currentValue, 0);
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let differenceMinMax = 0;
  if(arr.length != 0) {
    differenceMinMax = Math.max.apply(arr.length, arr) - Math.min.apply(arr.length, arr);
  }
  return differenceMinMax;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0, sumOddElement = 0;
  if(arr.length != 0) {
    for(let i = 0; i < arr.length; i++) {
      if( arr[i]%2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
      }
      else {
        sumOddElement = sumOddElement + arr[i];
      }
    }
  }
  return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0, countEvenElement = 0, averageEvenElement = 0;
  if(arr.length != 0) {
    for(let i = 0; i < arr.length; i++) {
      if( arr[i]%2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
       countEvenElement++;
      }     
    }
    averageEvenElement = sumEvenElement/countEvenElement;
 }  
  return averageEvenElement; 
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++) {
    if(maxWorkerResult < func.apply(i, arrOfArr[i])) {
      maxWorkerResult = func.apply(i, arrOfArr[i]);
    }
  }
  return maxWorkerResult;
}
