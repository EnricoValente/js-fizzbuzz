// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".




let number = 1;

for(number = 1; number <= 100; number++){
    console.log('number', number);

    if(number % 15 == 0){
        console.log('number', 'FizzBuzz');
    }

    else if (number % 3 == 0) {
        console.log('number', 'Fizz');
    }

    else if (number % 5 == 0) {
        console.log('number', 'Buzz');
    }
}


