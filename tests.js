/*
 ________________________________
|БЫСТРАЯ СОРТИРОВКА (QUICK SORT) |
 ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
Алгоритм сортировки
1. Выбрать элемент из массива. Назовём его опорным.
2. Разбиение: перераспределение элементов в массиве таким образом, что элементы, меньшие опорного, помещаются перед ним, а большие или равные - после.
3. Рекурсивно применить первые два шага к двум подмассивам слева и справа от опорного элемента. Рекурсия не применяется к массиву, в котором только один элемент или отсутствуют элементы.
*/


let isDebug = false // Включить логи в консоль (для разработки)


let averageComparisions = 0
let averageSwaps = 0
let averageChecks = 0

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

let measureStart = performance.now()
for (let perfCounter = 0; perfCounter < 1024; perfCounter++) {
    let array = []
    for (let randomizerArray = 0; randomizerArray <= 2048; randomizerArray++) {
        array[array.length] = random(4294967296)
    }


    let comparisions = 0 // Операции
    let swaps = 0 // "Перебросы"
    let checks = 0 // Проверки"

    // console.log(array)


// Рекурсивная функция для сортировки массива. Использует метод Быстрой Сортировки. inArray - массив на вход (который требуется отсортировать)
    function quickSortRecursive(inArray) {
        // console.time('123')
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
    log(outArray)

// Проверка
    if (validateIfArraySorted(outArray) == true) {
        log('✅Успешно✅')
        checks++
    } else {
        log('❌Неправильно❌')
        checks++
    }
    log(`Выполнено операций: ${comparisions} (число всегда случайное)`)
    averageComparisions = averageComparisions + comparisions

    log(`Выполнено перебросов: ${swaps} (число всегда случайное)`)
    averageSwaps = averageSwaps + swaps

    log(`Выполнено сверок: ${checks}`)
    averageChecks = averageChecks + checks

    // console.timeEnd('123')
}
let measureEnd = performance.now()


console.log(`Суммарное время выполнения (на 1024 массива): ${measureEnd - measureStart} ms`)
console.log(`Среднее количество операций: ${(averageComparisions / 1024).toFixed(5)}`)
console.log(`Среднее количество перебросов: ${(averageSwaps / 1024).toFixed(5)}`)
console.log(`Среднее количество сверок: ${(averageChecks / 1024).toFixed(5)}`)
console.log(`Среднее время выполнения: ${((measureEnd - measureStart) / 1024).toFixed(5)} ms`)


// Среднее количество операций 17-20