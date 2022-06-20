const clickButton = () => {
    const isiButton = document.getElementById('textInput').value;
    let hasilButton;
    if (isiButton == 0) {
        hasilButton = 'invalid input';
        console.log(hasilButton);
    } else if (isiButton % 3 === 0 && isiButton % 5 === 0) {
    hasilButton = 'FizzBuzz!';
    console.log(hasilButton);
    } else if (isiButton % 3 === 0) {
        hasilButton = 'Fizz!';
        console.log(hasilButton);
    } else if (isiButton % 5 === 0) {
        hasilButton = 'Buzz!';
        console.log(hasilButton);
    } else {
        hasilButton = isiButton;
        console.log(hasilButton);
    }
    const p = document.createElement('p');
    p.innerHTML = hasilButton;
    document.body.appendChild(p);
}