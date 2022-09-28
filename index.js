//НЕ ГОТОВ!!! ВЫПОЛНЕНА ЛИШЬ ЧАСТЬ РАБОТ

// let array = [2, 4, 5, 1, 453, 43, 32, 1234, 12, 213, 12, 342, 3]
let array = [2, 213, 4, 43, 12, 5, 1234, 453, 32, 3, 12, 1, 342]
let pos = array.length
let lockedpos = 1
let comparisions = 0
let tempVar = array.length
let tempVar1 = 0
let sorted = false
let outArray = array
let analyzeCheck = false
let result = 0
let i = 0
let i2 = 0
let antii = array.length-1

function analyze(array)
{
    while (tempVar>1)
    {
        tempVar = tempVar/2
        result++
    }
    return result
}

function sort(usedArray)
  {
    i = 0
    antii = usedArray.length-1
            while (i < Math.floor(usedArray.length/2))
        {
        if (usedArray[i] > usedArray[antii])
            {
                tempVar1 = usedArray[i];
                usedArray[i] = usedArray[antii];
                usedArray[antii] = tempVar1;
            }
            i++
            antii--
        }
    // console.log(usedArray)
        return usedArray
  }


result = analyze(array)
console.log(result)

while (sorted == false)
{
    while (tempVar < result)
    {
      //Деление массивов
    }  
    sorted = true
}