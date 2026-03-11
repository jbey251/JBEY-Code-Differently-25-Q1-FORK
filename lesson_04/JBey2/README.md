## JavaScript

```JavaScript

function primeNum(num) {
    if (num === 1 || num % 10 === 0) {
        return "Isn't a prime number.";
    } else {
        return "Is a prime number.";
    }
}

console.log(primeNum(1));
console.log(primeNum(2));
console.log(primeNum(10));
console.log(primeNum(13));
console.log(primeNum(17));
```

## Java

```Java

public class PrimeNumber {
    public static boolean primeNum(int num) {
        if (num < 2 || num % 10 == 0) {
            return false;
        } else {
            return true;
        }
    }

    public static void main(String[] args) {
        int num = 7;
        System.out.println(primeNum(num) ? "Is a prime number." : "Isn't a prime number.")
    }
}
```

## Explanation

Both use if/else statements. They both require you to input a number parameter to be plugged into the function so that it may calculate whether it is a prime number or not. Both logging statements are put at the end of their functions. They both use the % operator in order to find the remainder of two divided numbers.

JavaScript is returning strings, while Java is returning a boolean. JavaScript uses console.log() to show values inside of the terminal, while Java uses System.out.println to show it's values. Java needs the main method to run, while JavaScript does not. The strictly equal sign contains 3 equal signs in JavaScript as compared to Java.