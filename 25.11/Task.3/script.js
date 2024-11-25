function findNumber() {
    let answerNumber = 23;
    while (true) {
        let num = +prompt('Sandy tap 0 den 100 deiin');

        if (num == answerNumber) {
            alert('Durys');
            break;
        } else if (num - answerNumber <= 5 && num - answerNumber >= 1) {
            alert('Сәл төмен');
        } else if (num - answerNumber >= -5 && num - answerNumber <= -1) {
            alert('Сәл жоғары');
        } else if (num > answerNumber) {
            alert('Жай төмен');
        } else if (num < answerNumber) {
            alert('Жай жоғары');
        } 
    } 
}

findNumber()