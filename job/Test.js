let numbers = [], strings = [], functions = [], objects = [], less = [], more= [];
let type;
function func(arr, assert) {
    if(assert == 'first')
    {
        for(let b=1; b<=arr.length; b++) {
            if(typeof arr[b-1] == 'number'){
                numbers.push(arr[b-1]);
            }
            else if(typeof arr[b-1] == 'string'){
                strings.push(arr[b-1]);
            }
            else if(typeof arr[b-1] == 'function'){
                functions.push(arr[b-1]);
            }
            if(typeof arr[b-1] == 'object'){
                objects.push(arr[b-1]);
            }
        }
        return console.log('Числла = ' + numbers + "\nСтроки = " + strings + "\nФункции = " + functions + '\nОбъекты = ' + objects);
    }
    if(assert == 'second'){
        type = typeof arr[0];
        if(type == 'number'){
            for (let i = 0, endI = arr.length - 1; i < endI; i++) {
                for (let j = 0, endJ = endI - i; j < endJ; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let swap = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = swap;
                    }
                }
            }
            console.log(arr);
            for(let i=0; i<arr.length; i++)
            {
                if(i >= Math.trunc(arr.length/2))
                    more.push(arr[i]);
                else
                    less.push(arr[i]);
            }
        }
        else if(type == 'string'){
            for (let i = 0, endI = arr.length - 1; i < endI; i++) {
                for (let j = 0, endJ = endI - i; j < endJ; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let swap = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = swap;
                    }
                }
            }

            for(let i=0; i<arr.length; i++)
            {
                if(i >= Math.trunc(arr.length/2))
                    more.push(arr[i]);
                else
                    less.push(arr[i]);
            }
        }
        else if(type == 'function'){
            return console.log('Неведомые значения');

        }
        if(type == 'object'){
            return console.log('Неведомые значения');
        }
        return console.log('more: ' + more + '\n' + 'less: ' + less);
    }
}
func(["123", "1", "Hello!", ""], 'second');
func([123, '123', '321', () => {}, 9000, {}, [11, 88555 ,99552]], "first");
