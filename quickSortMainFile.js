let count_step = 1;  //счетчик шагов
let pivot;         //опорный элемент
let swapElOne;      //перестановочный лемент 1
let swapElTwo;      //перестановочный лемент 2

let arr = getArray();

let stop = false;


function getArray() {
    let arr = [];                     //записываем в этот массив рандомные числа

    let max = 15;                              // максимальная длина массива

    let rundomnumber;                     //случайное число

    while (arr.length < max) {

        rundomnumber = Math.floor(Math.random() * 100); //создадим случайное число

        if (arr.indexOf(rundomnumber) === -1) {         // проверим есть оно  у нас или нет
            arr.push(rundomnumber);         // записываем в массив т.к нету
        }
    }

    return arr.sort(function (a, b) {
        return b - a;
    });

}


function show(arr) {  //Вывод массива
    let out = '<table class="table table-bordered" id = "arr-table">';
    out += `<tr>`;
    for (let i = 0; i < arr.length; i++) {


        if (arr[i] === pivot) {
            out += `<td style="background-color:lightcoral">${arr[i]}</td>`;
            // pivot = "";
        } else if (arr[i] == swapElOne || arr[i] == swapElTwo) {
            out += `<td style="background-color:lightgreen">${arr[i]}</td>`;
            // swapElOne = "";
            // swapElTwo = "";
        } else {
            out += `<td >${arr[i]}</td>`;
        }
    }
    out += `</tr>`;
    out += `</table>`;

    $('.arr-output').append(out);

}


function swap(items, leftIndex, rightIndex) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;

    console.log("swap " + swapElOne + " and " + swapElTwo);

}


function showswap(a, b) {  //Показ таблиц
    let out = `Переставляем элементы: ${a} и ${b}<br>`
    $('.text-output').append(out);
    swapElOne = a;


    swapElTwo = b;

}

function showsink(a, b) {  //Показ таблиц
    let out = `Сравниваю элементы: ${a} и ${b}<br>`
    $('.text-output').append(out);
}

function choosePivotElement(a) {  //Показ таблиц
    let out = `Выбираем опорный элемент: ${a}<br>`
    $('.text-output').append(out);
}


function step() {
    let out = `Шаг ${count_step} :<br>`
    $('.text-output').append(out);
    count_step++;

}

function border() {  //Показ таблиц
    let out = `----------------------------------------<br>`
    $('.text-output').append(out);

}


function quickSort(items, left, right) {





    let index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);

        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    arr = items;
    return arr;
}



function partition(items, left, right) {
    pivot = items[Math.floor((right + left) / 2)]; //middle elemen
    let i = left, //left pointer
        j = right; //right pointer

    console.info(items.toString());
    console.log("ВЫбираем опорный элемент " + pivot)

    step();
    choosePivotElement(pivot);
    while (i <= j) {
        while (items[i] < pivot) {
            i++;       //2
        }
        while (items[j] > pivot) {
            j--;  //4
        }

        if (i <= j) {
            if (i == j) {
                step();
                let out = `Подмассив отсортирован<br>`
                $('.text-output').append(out);

            } else {
                step();
                // choosePivotElement(pivot);
                showsink(items[i], items[j]);
                showswap(items[i], items[j]);
                console.log(items)
                show(items);
                swap(items, i, j); //sawpping two elements
                show(arr);
            }
            i++;

            j--;
        }

        border();
    }
    return i;
}

function closeWindow() {

    window.close();
}

// $(document).ready(function(){
//     console.log("Before:", arr);
//     console.log("Sorted:", quickSort(arr,0,4));
// });