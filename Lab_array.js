    let array = [];
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function random(A) {
        var i = 10;
        for (let j = 0; j < i; j++) {
            var value = getRandomIntInclusive(1, 50);
            A.push(value);
            console.log(value);
        }
    }
    random(array)
