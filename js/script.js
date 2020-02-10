let calcBar = document.getElementById('input')

let buttons = document.querySelector('.buttons')

function add(ary){
    let added = 0
    ary.forEach(function(element){
        added += Number(element);
    })

    return added;
}
function subtract(ary){
    let subtracted = ary[0] * 2;
    ary.forEach(function(element){
        subtracted -= Number(element);
    })

    return subtracted;
}
function multiply(ary){
    let mult = 1;
    ary.forEach(function(element){
        mult *= Number(element);
    })

    return mult;
}
function divide(ary){
    let divide = ary[0] ** 2;
    ary.forEach(function(element){
        divide /= Number(element);
    })

    return divide;
}

buttons.addEventListener('click', function(e)
{
    let equation = '';
    let nums = [];
    switch(e.target.textContent)
    {
        case '+':
            equation = '+'
            calcBar.textContent += '+';
            break;
        case '-':
            equation = '-'
            calcBar.textContent += '-';
            break;
        case '×':
            equation = '×';
            calcBar.textContent += 'x';
            break;
        case '÷':
            equation = '÷'
            calcBar.textContent += '÷';
            break;
        case '0':
            calcBar.textContent += '0'
            break;
        case '1':
            calcBar.textContent += '1'
            break;
        case '2':
            calcBar.textContent += '2'
            break;
        case '3':
            calcBar.textContent += '3'
            break;
        case '4':
            calcBar.textContent += '4'
            break;
        case '5':
            calcBar.textContent += '5'
            break;
        case '6':
            calcBar.textContent += '6'
            break;
        case '7':
            calcBar.textContent += '7'
            break;
        case '8':
            calcBar.textContent += '8'
            break;
        case '9':
            calcBar.textContent += '9'
            break;
        case '.':
            calcBar.textContent += '.'
            break;
        case 'C':
            calcBar.textContent = '';
            break;
        case '=':
            let split = calcBar.textContent.split('');
            split.forEach(function(element)
            {
                if (element == '+')
                {
                    nums = calcBar.textContent.split('+');
                    calcBar.textContent = add(nums);
                }
                else if(element == '-')
                {
                    nums = calcBar.textContent.split('-');
                    calcBar.textContent = subtract(nums);
                }
                else if(element == 'x'){
                    nums = calcBar.textContent.split('x')
                    calcBar.textContent = multiply(nums);
                }
                else if(element == '÷'){
                    nums = calcBar.textContent.split('÷')
                    calcBar.textContent = divide(nums)
                }
            })

    }
})