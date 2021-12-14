function add(a, b) {
    let firstNumber = a || 0; // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Logical_OR
    return a + b;
}

let arr = [1, 2, 3];
for(let field of arr) {
    console.log(field);
}

let res = add(2, 3);
console.log(res);

let larger = arr.map(item => item + 10);
console.log(larger);

window.addEventListener("DOMContentLoaded", (event) => {
    let button = document.querySelector('#changeTitle');
    console.log(button);
    button.addEventListener('click', function(e) {
        const myImage = document.querySelector('img');

        let myRequest = new Request('https://cataas.com/api/tags');

        fetch(myRequest)
        .then(function(response) {
            console.log(response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(function(response) {
            console.log(response)
        }).then(() => {
            let header = document.querySelector('h1');
            header.innerText = "Modifié en JS";
        });

    })
});