var read = require('readline-sync');
var readline = require('readline-sync');
var prompt = require('prompt-sync');

module.exports = {
    input() {
        var readline = require('readline');
        var line = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        return line;
    },
    inputread() {
        var input = read.question("");
        return input;
    },


    // First Program = Replace String 

    Replace(username) {
        if (username.length > 3) {
            console.log("Hello " + username + ", How are you")
        }
        else {
            console.log("Enter username more than 3 letters");

        }
    },


    //Second Program = flip coin

    Flipcoin(num) {
        var tails = 0;
        var heads = 0;
        var j;
        for (j = 0; j < num; j++) {
            if (Math.random() < 0.5) {
                console.log("Tails");
                tails++;
            } else {
                console.log("Heads");
                heads++;
            }
        }
        var tailsperc = tails / num * 100;
        console.log("Tails percentage :" + tailsperc);
        var headsperc = heads / num * 100;
        console.log("Heads Percentage :" + headsperc);
    },


    //Third Program = Leap Year

    Leapyear(i) {
        if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
            console.log("Leap year :" + i)
        } else {
            console.log("Not a Leap year : " + i);
        }
    },


    //Forth Program = power of 2

    Power(r) {
        var power = 1;
        var j;
        if (r < 31) {
            for (j = 1; j < r; j++) {

                power = 2 * power;
                console.log(2 + "^" + j + " = " + power);
            }
        } else {
            console.log("Power is more than 31, Which is out range of Int");

        }
    },


    // Fifth Program = Harmonic Number

    Harmonic(value) {
        var i;
        var sum = 0;
        for (i = 1; i <= value; i++) {
            if (value != 0) {
                sum = sum + 1 / i;
            } else {
                console.log("Enter non-zero " + value);
            }

        }
        console.log("Sum of harmonic series : " + sum);
    },

    //Sixth Program = PrimeFactors

    Factors(numbers) {

        for (var k = 2; k * k <= numbers; k++) {
            while (numbers % k == 0) {
                console.log("Factors :" + k);
                numbers = numbers / k;

            }
        }
        if (numbers > 2) {
            console.log("Factors :" + numbers);

        }

    },

    //Seventh Program = Gambler

    Gambler1(stake, goal, bets) {

        var win = 0;
        var loss = 0;
        var num = 0;

        for (var i = 0; i < bets; i++) {
            var cash = stake;
            while (cash > 0 && cash < goal) {
                num++
                if (Math.random() < 0.5) {
                    cash++
                } else {
                    cash--
                }
            }
            if (cash == goal) {
                win++
            } else {
                loss++
            }


        }

        console.log("Win : " + win);
        console.log("Loss: " + loss);

        var win_per = 100 * (win / bets);
        console.log("Win Percentage : " + win_per);
        var loss_per = 100 * (loss / bets);
        console.log("Loss Percentage : " + loss_per);

    },

    // Eighth Program = Coupen number

    Coupen(number) {
        var max = 1000;
        var temp;

        for (var j = 0; j < number; j++) {
            temp = Math.round((Math.random() * max))
            //temp = temp | 1000

            console.log("Token Number :" + temp);



        }
    },

    //Ningth program = 2-D array

    Array(row, col) {
        var arr = []
        console.log("Elements");

        for (var i = 0; i < row; i++) {
            arr[i] = new Array(col);
            for (var j = 0; j < col; j++) {

                arr[i][j] = read.question("");
                console.log(arr[i][j]);

            }
        }
        for (var k = 0; k < row; k++) {
            console.log(arr[k])
        }
    },

    //Tenth Program = Triplet

    Triplet(m) {
        var k;
        var l;
        var count = 0;
        var arr = [];
        console.log("Elements");

        for (var j = 0; j < m; j++) {
            arr[j] = Number(read.question(""));
            console.log(arr[j]);

        }

        for (var j = 0; j < m - 2; j++) {

            k = j + 1;
            l = j + 2;

            if (arr[j] + arr[k] + arr[l] == 0) {
                console.log("Positions : " + j + " " + k + " " + l);
                count = count + 1;
            }
        }

        console.log("Total Counts : " + count);

    },

    //Eleventh Program = Distance

    Distance(first, second) {
        var k = ((first * first) + (second * second));
        var temp = Math.sqrt(k);
        console.log(temp);

    },

    //twelfth program = Permutation

    Permutation(string) {
        var r = reverse.string
        var l = r.length
        for (var k = 0; k < l; k++) {
            if (string != r) {
                console.log(r);

            }
            else {
                continue
            }
        }
        console.log(typeof string);
    },

    // Thirteen Program = Stopwatch

    StopWatch() {

        var k = parseInt(read.question("Press Enter 1 for start the time :"));
        if (k == 1) {
            var p = new Date();
            k = p.getUTCSeconds();
        } else {
            console.log("Wrong number!, Check your number for start time");
        }
        var y = parseInt(read.question("Press Enter for stop the time :"));
        if (y == 2) {
            var d = new Date();
            y = d.getUTCSeconds();
        } else {
            console.log("Wrong number!, Check your number for end time");

        }
        console.log("Elapsed time : " + (y - k));

    },

    //Quadratic Program

    Quadratic(a, b, c) {

        delta = ((b * b) - (4 * a * c));
        if (delta > 0) {
            var x1 = (-b + Math.sqrt(delta)) / (2 * a);
            var x2 = (-b - Math.sqrt(delta)) / (2 * a);
            console.log("Root 1 of x : " + x1);
            console.log("Root 2 of x : " + x2);
        }
        else {
            console.log("Roots are imaginary : ");

        }
    },
    // WindChill
    Wind(v, t) {
        if (t < 50 && (v < 120 && v > 3)) {
            var w = (35.74 + 0.6215 * t + (0.4275 * t - 35.75) * (Math.pow(v, 0.16)));
            console.log("Value of w : " + w);
        }
        else if (!v || 0 === v.length && !t || 0 === t.length) {
            console.log("Please enter the num");
        }
        else {
            console.log("Value is out of condition");
        }
        console.log(v);
        console.log(t);
    },

    //Anagram Program
    Anagram(string1, string2) {
        var val1 = string1;
        var val2 = string2;
        val1 = val1.toLowerCase()
        console.log("after lowercase :" + val1);
        val1 = val1.split('')
        console.log("after lowercase :" + val1);
        val1 = val1.sort()
        console.log("after sort :" + val1);
        val1 = val1.join('')
        console.log("after join :" + val1);
        val1 = val1.trim();
        console.log("after trim :" + val1);

        val2 = val2.toLowerCase().split('').sort().join('').trim();

        if (val1 === val2) {
            console.log("Yes Strings are Anagram");

        } else {
            console.log("Yes Strings are not Anagram");
        }
    },

    //primeNumbers Range Program

    Prime(from, upto) {
        var k = parseInt(from);
        var j = parseInt(upto);
        var i, t;

        if (k < j) {
            for (i = k; i <= j; i++) {
                var b = false;
                for (t = 2; t < i; t++) {

                    if (i % t == 0) {
                        b = true;
                        break;
                    }
                }
                if (b == false) {
                    console.log(i + " ");
                }
            }
        } else {
            console.log("Last number is less than starting number, Please Enter correct num");

        }
    },

    // 

    //Temperatur Conversion

    Temp() {

        var val = read.question("Enter Your Temperature in c/C or f/F: ")

        if (val === "c" || val === "C") {
            var a = parseInt(read.question("Enter Celsius Temperature : "))
            F = (a * (9 / 5) + 32);
            console.log("Celsius to Fahrenheit : " + F);
        }
        else if (val === "f" || val === "F") {
            var d = parseInt(read.question("Enter Fahrenheit Temperature : "))
            C = (d - 32) * (5 / 9);
            console.log("Fahrenheit to Celsius : " + C);
        }
        else {
            console.log("Please Enter correct Input");

        }

    },

    //monthlyPayment Program
    Payment(P, Y, R) {
        var n = 12 * Y;
        var r = R / (12 * 100);
        var payment = (P * r) / (1 - Math.pow((1 + r), -n))
        console.log("Payment : " + payment);

    },

    //Newton's Program

    Newton(c) {

        var t = c;
        var epsilon = 1e-15;
        while (Math.abs(t - (c / t)) > epsilon * t) {
            t = ((c / t) + t) / 2;
        }
        console.log("the square root of number is: " + t);





    },

    //CreateArray for Integer
    CreateArray(num) {
        var arr = [];
        for (var val = 0; val < num; val++) {
            arr[val] = read.questionInt("Enter your " + val + " Element : ");
            console.log(arr[val])
        }

        return arr;
    },

    //CreateArray for String
    CreateArray(num) {
        var arr1 = [];
        for (var val = 0; val < num; val++) {
            arr1[val] = read.question("Enter your " + val + " String : ");
            console.log(arr1[val])
        }

        return arr1;
    },


    //Bubble sort

    Bubble(arr) {
        var temp;
        for (var j = 0; j < arr.length; j++) {
            for (var k = 0; k < (arr.length - j - 1); k++) {
                if (arr[k] > arr[k + 1]) {
                    temp = arr[k];
                    arr[k] = arr[k + 1];
                    arr[k + 1] = temp;

                }
            }
        }
        return arr;
    },

    //Insertion Sorting

    Insertion(arr1) {
        var temp;
        for (var i = 0; i < arr1.length; i++) {
            for (var j = i; j > 0; j--) {
                if (arr1[j] < arr1[j - 1]) {
                    temp = arr1[j];
                    arr1[j] = arr1[j - 1];
                    arr1[j - 1] = temp;
                }
            }
        }
        return arr1;
    },

    //dayofweek

    dayofweek(d, m, y) {
        var y0 = y - Math.floor((14 - m) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0/100)) + Math.floor((y0/400));
        var m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
        var d0 = (d + x + Math.floor((31 * m0) / 12)) % (7);

        return d0;
    },



}
