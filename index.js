/*
 ________________________________
|БЫСТРАЯ СОРТИРОВКА (QUICK SORT) |
 ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
Алгоритм сортировки
1. Выбрать элемент из массива. Назовём его опорным.
2. Разбиение: перераспределение элементов в массиве таким образом, что элементы, меньшие опорного, помещаются перед ним, а большие или равные - после.
3. Рекурсивно применить первые два шага к двум подмассивам слева и справа от опорного элемента. Рекурсия не применяется к массиву, в котором только один элемент или отсутствуют элементы.
*/

let array = [2, 4, 5, 1, 453, 89, 1234] // Оригинальный массив (очень много времени в среднем уходит): [2, 4, 5, 1, 453, 43, 32, 1234, 12, 213, 12, 342, 3]
let isDebug = false // Включить логи в консоль (для разработки)

let comparisions = 0 // Операции
let swaps = 0 // "Перебросы"
let checks = 0 // Проверки"


// Функция для вывода логов в broadcast (консоль). msg - сообщение на вывод
async function log(msg) {
    if (isDebug) console.log(msg)
}

// Функция генерация рандомных числе в пределах от 1 до maxi
function random(maxi) {
    return Math.floor(Math.random() * maxi);
}

// Функция для проверки правильности сортировки массива. В array подаётся массив для проверки, затем он сортируется методом bubbleSort и сравнивается с поданным значением.
function validateIfArraySorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if ((array[i] > array[i + 1]) || (array.length < 2)) {
            // console.log((array[i] > array[i + 1]))
            return false
        }
    }
    if (array.length > 2) return true
    else return false
}


// Рекурсивная функция для сортировки массива. Использует метод Быстрой Сортировки. inArray - массив на вход (который требуется отсортировать)
function quickSortRecursive(inArray) {
    let keyElement = random(inArray.length) // Выбор "ключевого" элемента (1 пункт алгоритма)
    let leftPart = []
    let rightPart = []
    log(`\n${inArray} - inp`)

    // "Раскидывает" части массива влево-вправо (2 пункт алгоритма)
    for (let i = 0; i < inArray.length; i++) {
        if (i != keyElement) {
            if (inArray[i] < inArray[keyElement]) {
                leftPart[leftPart.length] = inArray[i]
                swaps++
            } else {
                rightPart[rightPart.length] = inArray[i]
                swaps++
            }
        }
    }
//////////
    log(`l(${leftPart}) - (${inArray[keyElement]}) - (${rightPart})r`)
    // Запуск рекурсии (пункт 3 в алгоритме). Если элементов 1 или 0, то возвращает полученный массив. Если больше, то выполняет пункты 1 и 2 алгоритма подмассивом
    if (inArray.length <= 1) {
        log('doned')
        // outArray[outArray.length] = outArray.concat(inArray)
        // console.log(`out: ${outArray}`)
        comparisions++
        return inArray
    } else {
        log('recursed')
        comparisions++
        return quickSortRecursive(leftPart).concat(inArray[keyElement], quickSortRecursive(rightPart))
    }
    //
    // console.log(recursive(leftPart))
}

let outArray = quickSortRecursive(array, isDebug)
console.log(outArray)

// Проверка
if (validateIfArraySorted(outArray) == true) {
    console.log('✅Успешно✅')
    checks++
} else {
    console.log('❌Неправильно❌')
    checks++
}
console.log(`Выполнено операций: ${comparisions} (число всегда случайное)`)
console.log(`Выполнено перебросов: ${swaps} (число всегда случайное)`)
console.log(`Выполнено сверок: ${checks}`)

// Среднее количество операций 17-20