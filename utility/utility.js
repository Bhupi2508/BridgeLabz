var read = require('readline-sync');
var readline = require('readline-sync');
var prompt = require('prompt-sync')
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



    //=====================================================================================

    // First Program = Replace String 
    /*  Desc :-
        @author   - Bhupendra
        @Program  - Replace String 
        @version  - 1.0
        @Date     - 21/02/2019

        User Input and Replace String Template “Hello <<UserName>>, How are you?”
        Username =  User Input 
    */

    replaceString(username) {
        //username is greater than 3 letters
        if (username.length > 3) {
            console.log("Hello " + username + ", How are you")
        }
        else {
            console.log("Enter username more than 3 letters");
        }
    },



    //=====================================================================================

    //Second Program = flip coin

    /*
        @author   - Bhupendra
        @Program  - Flipcoin 
        @version  - 1.0
        @Date     - 21/02/2019

        Flip Coin and print percentage of Heads and Tails
        num = User Input
        @varibale = tails, heads, j
    */

    flipCoin(num) {
        var tails = 0;
        var heads = 0;
        
        /*
         Use Random Function to get value between 0 and 1.
         @condition : If < 0.5 then tails or heads
        */
       if(num == parseInt(num)){
        for (var j = 0; j < num; j++) {
            if (Math.random() < 0.5) {
                console.log("Tails");
                tails++;
            } else {
                console.log("Heads");
                heads++;
            }
        }
    
        /*
        Print head percentage & tail percentage
       */
        var tailsperc = tails / num * 100;
        console.log("Tails percentage :" + tailsperc);
        var headsperc = heads / num * 100;
        console.log("Heads Percentage :" + headsperc);
    }else{
        console.log("Please Enter Integer");
        
    }
    },



    //=====================================================================================
    //Third Program = Leap Year

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Leap Year 
        @version  - 1.0
        @Date     - 21/02/2019

        i = User input
        then we use if loop for check the condition
    */

    Leapyear(i) {
        if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
            console.log("Leap year :" + i)
        } else {
            console.log("Not a Leap year : " + i);
        }
    },


    //=====================================================================================
    //Forth Program = power of 2

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Power of 2 
        @version  - 1.0
        @Date     - 21/02/2019

        This program takes a command-line argument N and prints a table of the 
        powers of 2 that are less than or equal to 2^N.
        r = User Input
    */

    Power(r) {
        var power = 1;
        var j;
        /*
         @Condition = Only works if 0 <= N < 31 since 2^31 overflows an int
         @Condition : repeat until i equals N
         */
        if (r < 31) {
            for (j = 1; j < r; j++) {

                power = 2 * power;
                console.log(2 + "^" + j + " = " + power);
            }
        } else {
            console.log("Power is more than 31, Which is out range of Int");

        }
    },



    //=====================================================================================
    // Fifth Program = Harmonic Number

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Harmonic Number 
        @version  - 1.0
        @Date     - 21/02/2019

        Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
        value = User Input
    */

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

    //=====================================================================================
    //Sixth Program = PrimeFactors

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Prime Factors 
        @version  - 1.0
        @Date     - 21/02/2019

        Computes the prime factorization of N using brute force.
        numbers = User Input
    */

    Factors(numbers) {

        //@condition : Traverse till i*i <= N instead of i <= N for efficiency.

        for (var k = 2; k * k <= numbers; k++) {
            while (numbers % k == 0) {
                console.log("Factors :" + k);
                numbers = numbers / k;

            }
        }
        //for the last element
        if (numbers > 2) {
            console.log("Factors :" + numbers);

        }

    },

    //=====================================================================================
    //Seventh Program = Gambler

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Gambler 
        @version  - 1.0
        @Date     - 22/02/2019

        Simulates a gambler who start with $stake and place fair $1 bets until he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number of times he/she wins and the number of bets he/she makes. Run the experiment N times, averages the results, and prints them out.
        Stake ,goal, bets = user Inputs
    */

    Gambler1(stake, goal, bets) {

        var win = 0;
        var loss = 0;
        var num = 0;

        for (var i = 0; i < bets; i++) {
            var cash = stake;
            /* When (goal > cash > 0).
                Play till the gambler is broke or has won
            */
            while (cash > 0 && cash < goal) {
                num++
                if (Math.random() < 0.5) {
                    cash++
                } else {
                    cash--
                }
            }
            // if cash == goal then count win otherwise count loss
            if (cash == goal) {
                win++
            } else {
                loss++
            }


        }

        console.log("Win : " + win);
        console.log("Loss: " + loss);
        /*
        Print the win percentage 
        print the loss percentage
        */
        var win_per = 100 * (win / bets);
        console.log("Win Percentage : " + win_per);
        var loss_per = 100 * (loss / bets);
        console.log("Loss Percentage : " + loss_per);

    },

    //=====================================================================================
    // Eighth Program = Coupen number

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Coupen Number 
        @version  - 1.0
        @Date     - 22/02/2019

        Given N distinct Coupon Numbers, how many random numbers do you need to generate distinct coupon number? This program simulates this random process.

        Number = UserInput
        Math.random condition is take random number from 0 to 1, 
        and multiply by max variable.
    */

    Coupen(number) {
        var max = 1000;
        var temp;

        for (var j = 0; j < number; j++) {
            temp = Math.round((Math.random() * max))
            //temp = temp | 1000

            console.log("Token Number :" + temp);



        }
    },

    //=====================================================================================
    //Ningth program = 2-D array

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - 2-D array 
        @version  - 1.0
        @Date     - 22/02/2019
    
        A library for reading in 2D arrays of integers, doubles, or booleans from standard input and printing them out to standard output.
        row and col = User Input,
        declare arr array
    */

    Array(row, col) {
        var arr = []
        console.log("Elements");

        for (var i = 0; i < row; i++) {
            arr[i] = new Array(col);
            for (var j = 0; j < col; j++) {

                //Take varibale from input

                arr[i][j] = read.question("");
            }
        }
        // print all the variable with row and col
        for (var k = 0; k < row; k++) {
            console.log(arr[k])
        }
    },

    //=====================================================================================
    //Tenth Program = Triplet

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Triplet 
        @version  - 1.0
        @Date     - 22/02/2019

        A program with cubic running time. Read in N integers and counts the   number of triples that sum to exactly 0.
        m = User Input,
        Declare arr array
     */


    Triplet(m) {
        var k;
        var l;
        var count = 0;
        var arr = [];
        console.log("Elements");

        for (var j = 0; j < m; j++) {
            arr[j] = Number(read.question(""));
        }

        for (var j = 0; j < m - 2; j++) {
            k = j + 1;
            l = j + 2;
            // distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0

            if (arr[j] + arr[k] + arr[l] == 0) {
                console.log("Positions : " + j + " " + k + " " + l);
                count = count + 1;
            }
        }

        console.log("Total Counts : " + count);

    },

    //=====================================================================================

    //Eleventh Program = Distance

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Distance 
        @version  - 1.0
        @Date     - 22/02/2019

        Fisrt = UserInput First value
        Second = UserInput Second Value
    */

    Distance(first, second) {
        // Formula = distance = sqrt(x*x + y*y)
        var k = ((first * first) + (second * second));
        var temp = Math.sqrt(k);
        console.log(temp);

    },

    //=====================================================================================
    //twelfth program = Permutation

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Permutation 
        @version  - 1.0
        @Date     - 23/02/2019

        String = UserInput
        Print all the permutations for given string
    */

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


    //=====================================================================================
    // Thirteen Program = Stopwatch

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Stopwatch 
        @version  - 1.0
        @Date     - 23/02/2019

        Write a Stopwatch Program for measuring the time that elapses between the start and end clicks.

    */

    StopWatch() {
        var p = new Date();
        var time = p.getUTCSeconds();
        return time;
    },

    //=====================================================================================
    //Fifteenth program = Quadratic Program

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Quadratic 
        @version  - 1.0
        @Date     - 24/02/2019

        find the roots of the equation a*x*x + b*x + c. Since the equation is x*x, hence there are 2 roots by using formula.
        a, b, c are the User Inputs
    */

    Quadratic(a, b, c) {

        delta = ((b * b) - (4 * a * c));
        if (delta > 0) {
            // Formula
            var x1 = (-b + Math.sqrt(delta)) / (2 * a);
            var x2 = (-b - Math.sqrt(delta)) / (2 * a);
            console.log("Root 1 of x : " + x1);
            console.log("Root 2 of x : " + x2);
        }
        else {
            console.log("Roots are imaginary : ");

        }
    },

    //=====================================================================================
    // Sixteenth Program = WindChill

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Windchill 
        @version  - 1.0
        @Date     - 24/02/2019

        WindChill.java that takes two double command-line arguments t and v and prints the wind chill. Use Math.pow(a, b) to compute ab. 
        Given the temperature t (in Fahrenheit) and the wind speed v (in miles per hour), the National Weather Service defines the effective temperature (the wind chill) to be.
        v & t are the User Inputs
    */

    Wind(v, t) {
        // t is larger than 50 in absolute value or if v is larger than 120 or less than 3
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





    //Algorithm Programs



    //=====================================================================================
    // First Program = Anagram Program

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Anagram 
        @version  - 1.0
        @Date     - 24/02/2019

        One string is an anagram of another if the second is simply a rearrangement of the first. For example, 'heart' and 'earth' are anagrams...
        Take 2 Strings as Input such abcd and dcba and Check for Anagrams.
    */


    Anagram(string1, string2) {
        var val1 = string1;
        var val2 = string2;
        // First Convert in lowercase
        val1 = val1.toLowerCase()
        console.log("after lowercase :" + val1);
        // Split the string
        val1 = val1.split('')
        console.log("after lowercase :" + val1);
        // String sorted
        val1 = val1.sort()
        console.log("after sort :" + val1);
        // Join all the values
        val1 = val1.join('')
        console.log("after join :" + val1);
        // Trim spaces
        val1 = val1.trim();
        console.log("after trim :" + val1);

        val2 = val2.toLowerCase().split('').sort().join('').trim();

        if (val1 === val2) {
            console.log("Yes Strings are Anagram");

        } else {
            console.log("Yes Strings are not Anagram");
        }
    },

    //Anagram for Integer

    Anagram1(j, k) {
        var val1 = j.toString();
        var val2 = k.toString();
        val1 = val1.toLowerCase().split('').sort().join('').trim();
        val2 = val2.toLowerCase().split('').sort().join('').trim();

        if (val1 == val2) {

            console.log("Anagram are : " + val1, val2);

        }
    },

    //=====================================================================================
    //Second Program = PrimeNumbers Range

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - PrimeNumber Range 
        @version  - 1.0
        @Date     - 24/02/2019

        from = UserInput from 
        upto = User Input upto
        Print all the prime numbers Between from and upto range
    */

    Prime(from, upto) {
        var k = parseInt(from);
        var j = parseInt(upto);
        var i, t, arr = [];

        if (k < j) {
            for (i = k; i <= j; i++) {
                var b = false;
                // Prime number condition
                for (t = 2; t < i; t++) {

                    if (i % t == 0) {
                        b = true;
                        break;
                    }
                }
                if (b == false) {
                    arr.push(i)
                }
            }
        } else {
            console.log("Last number is less than starting number, Please Enter correct num");

        }
        return arr;

    },

    //=====================================================================================
    //Palindrome

    Palindrome(str) {
        var str1 = parseInt(str)
        var len = str.length;
        var mid = Math.floor(len / 2);

        for (var i = 0; i < mid; i++) {
            if (str1[i] !== str1[len - 1 - i]) {
                return false;
            }
        }
        return true;
    },


    //=====================================================================================
    //Forth Program = Sorting and Dearching

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Sorting and Searching 
        @version  - 1.0
        @Date     - 25/02/2019
    */

    BinarySearch(arr, low, high, key) {
        var sort = this.Insertion(arr);
        console.log(sort);
        while (low <= high) {
            var mid = Math.floor((high + low) / 2);
            if (sort[mid] == key) {
                return mid;
                //check all the elements in right side
            } else if (key > sort[mid]) {
                low = mid + 1;

                //check all the elements in left side
            } else {
                high = mid - 1;
            }
        }
        //for invalid condition
        return -1;
    },

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

    Bubble(arr) {
        var temp;
        for (var j = 0; j < arr.length; j++) {
            for (var k = 0; k < (arr.length - j - 1); k++) {
                // if arr[k] > arr[k + 1], then Swapping 
                if (arr[k] > arr[k + 1]) {
                    temp = arr[k];
                    arr[k] = arr[k + 1];
                    arr[k + 1] = temp;

                }
            }
        }
        return arr;
    },

    //=====================================================================================
    //Fifth Program = Find a number

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Find a number 
        @version  - 1.0
        @Date     - 25/02/2019
        
        Takes a command-line argument N, asks you to think of a number between 0 and N-1, where N = 2^n, and always guesses the answer with n questions.
     */

    Findnumber(low, high) {
        var mid = low + Math.floor((high - low) / 2)

        if (low < high) {
            //if value is alternate one y one
            if (low == high - 1) {
                var c;
                c = readline.question("Is the number " + low + " if yes, press 'y'. Else Press 'n' : ")
                if (c == 'y')
                    return low;
                if (c == 'n')
                    return high;
            }
            c = readline.question("Is the number " + mid + "-" + high + " if yes, press 'y'. Else Press 'n' : ")
            if (c == 'y')
                //return the mid value
                mid = this.Findnumber(mid, high)
            if (c == 'n')
                //return the mid value
                mid = this.Findnumber(low, mid - 1)
        }
        return mid;
    },

    //=====================================================================================
    //Sixth Program = Search the word

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Search word from file 
        @version  - 1.0
        @Date     - 25/02/2019
    
        Read in a list of words from File. Then prompt the user to enter a word to search the list. The program reports if the search word is found in the list.
        word = User Input, Which you found
    */

    Binary(word) {
        // read the file from folder
        var file = require('fs');
        var f = file.readFileSync('/home/admin1/bhupi/file.txt', 'utf8');
        var arr = f.split(" ");
        if (arr.includes(word)) {
            console.log("Searching word " + word + " is there in file");
        }
        else {
            console.log("Searching word " + word + " is Not there in file");
        }
    },



    //=====================================================================================
    //CreateArray for Integer

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Create array 
        @version  - 1.0
        @Date     - 25/02/2019
    
        For Create Array Program
    */
    CreateArray(num) {
        var arr = [];
        for (var val = 0; val < num; val++) {
            arr[val] = read.questionInt("Enter your " + val + " Element : ");

        }

        return arr;
    },

    //CreateArray for String
    CreateArray1(num) {
        var arr1 = [];
        for (var val = 0; val < num; val++) {
            arr1[val] = read.question("Enter your " + val + " String : ");

        }

        return arr1;
    },

    //=====================================================================================
    //Seventh Program = Insertion Sorting

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Insertion sort 
        @version  - 1.0
        @Date     - 25/02/2019
    
        Reads in strings from standard input and prints them in sorted order.
        Uses insertion sort.
        arr = user Input string, call the main function and sort the array
    */

    Insertion(arr1) {
        var temp;
        for (var i = 0; i < arr1.length; i++) {
            for (var j = i; j > 0; j--) {
                // if arr1[j] < arr1[j - 1], then swapping
                if (arr1[j] < arr1[j - 1]) {
                    temp = arr1[j];
                    arr1[j] = arr1[j - 1];
                    arr1[j - 1] = temp;
                }
            }
        }
        return arr1;
    },

    //=====================================================================================
    //Eighth Program = Bubble sort

    /*
         Desc :-
         @author   - Bhupendra
         @Program  - PrimeNumber Range 
         @version  - 1.0
         @Date     - 25/02/2019
    
         Reads in integers prints them in sorted order using Bubble Sort
         arr = user Input, call the main function and sort the array
     */

    Bubble(arr) {
        var temp;
        for (var j = 0; j < arr.length; j++) {
            for (var k = 0; k < (arr.length - j - 1); k++) {
                // if arr[k] > arr[k + 1], then Swapping 
                if (arr[k] > arr[k + 1]) {
                    temp = arr[k];
                    arr[k] = arr[k + 1];
                    arr[k + 1] = temp;

                }
            }
        }
        return arr;
    },

    //=====================================================================================
    //Ninth Program = Merge Sort

    /*
       Desc :-
       @author   - Bhupendra
       @Program  - Merge sort 
       @version  - 1.0
       @Date     - 25/02/2019
    
       To Merge Sort an array, we divide it into two halves, sort the two halves independently, and then merge the results to sort the full array. To sort a[lo,hi),we use the following recursive strategy
    */

    mergeSort(arr) {

        if (arr.length === 1) {
            // return once we hit an array with a single item
            return arr
        }

        const mid = Math.floor(arr.length / 2)
        const left = arr.slice(0, mid)
        const right = arr.slice(mid)

        return this.merge(
            this.mergeSort(left),
            this.mergeSort(right)
        )
    },

    // compare the arrays item by item and return the concatenated result
    merge(left, right) {
        let result = []
        let indexLeft = 0
        let indexRight = 0

        while (indexLeft < left.length && indexRight < right.length) {
            if (left[indexLeft] < right[indexRight]) {
                result.push(left[indexLeft])
                indexLeft++
            } else {
                result.push(right[indexRight])
                indexRight++
            }
        }

        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))

    },

    //=====================================================================================
    //Tenth Program = Vending Machine

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Vending Machine
        @version  - 1.0
        @Date     - 26/02/2019
    
        There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be returned by Vending Machine. Write a Program to calculate the minimum number of Notes as well as the Notes to be returned by the Vending Machine as a Change.
        amount = User Input
        i & notes Initially set 0;
    */

    VendingMachine(amount, i, notes) {
        var arr = [1000, 500, 100, 50, 10, 5, 2, 1];

        //if amount and i is zero
        if (amount == 0 && i == arr.length) {
            console.log("Total no. of notes : " + notes);
            return;
        }
        //if amount greater than zero then print all the outcomes
        if (Math.floor(amount / arr[i]) > 0) {
            console.log(arr[i] + " notes is " + Math.floor(amount / arr[i]));
            notes = notes + Math.floor(amount / arr[i]);
            amount = amount % arr[i];
            this.VendingMachine(amount, i + 1, notes);
            return;
        }
        this.VendingMachine(amount, i + 1, notes)
    },


    //=====================================================================================
    //Eleventh Program = dayofweek

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Day of Week 
        @version  - 1.0
        @Date     - 26/02/2019
    
        Your program should take three command-line arguments: m (month), d (day), and y (year). For m use 1 for January, 2 for February, and so forth. For output print 0 for Sunday, 1 for Monday, 2 for Tuesday, and so forth. Use the following formulas, for the Gregorian calendar. 
        d, m, y take input from command line arguments
    */


    dayOfWeek(d, m, y) {
        var y0 = y - Math.floor((14 - m) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
        var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7;
        return d0;
    },

    //=====================================================================================
    //Twflth Program = Temperatur Conversion

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Temperature Conversion 
        @version  - 1.0
        @Date     - 26/02/2019
    
        Given the temperature in fahrenheit or celsius as input outputs the temperature in Celsius or viceversa using the formula.
        Take input in F or C and converts (F - C ) or (C - F)
     
    */

    Temp() {

        var val = read.question("Enter Your Temperature in c/C or f/F: ")

        // if temp in celsius and convert into fehrenheit
        if (val === "c" || val === "C") {
            var a = parseInt(read.question("Enter Celsius Temperature : "))
            F = (a * (9 / 5) + 32);
            console.log("Celsius to Fahrenheit : " + F);
        }
        // if temp in fehrenheit and convert into fehrenheit
        else if (val === "f" || val === "F") {
            var d = parseInt(read.question("Enter Fahrenheit Temperature : "))
            C = (d - 32) * (5 / 9);
            console.log("Fahrenheit to Celsius : " + C);
        }
        else {
            console.log("Please Enter correct Input");

        }

    },


    //=====================================================================================
    //Thirtheen Program = monthlyPayment Program

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Monthly Payment 
        @version  - 1.0
        @Date     - 26/02/2019
    
        MonthlyPayment that reads in three command-line arguments P, Y, and R and calculates the monthly payments you would have to make over Y years to pay off a P principal loan amount at R per cent interest compounded monthly
    */
    Payment(P, Y, R) {
        var n = 12 * Y;
        var r = R / (12 * 100);
        var payment = (P * r) / (1 - Math.pow((1 + r), -n))
        console.log("Payment : " + payment);

    },


    //=====================================================================================
    //Forteenth Program = Newton's Program

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - PrimeNumber Range 
        @version  - 1.0
        @Date     - 27/02/2019
    
        Function sqrt  to compute the square root of a nonnegative number c given in the input using Newton's method:
        c = User Input
    */

    Newton(c) {

        var t = c;
        var epsilon = 1e-15;
        while (Math.abs(t - (c / t)) > epsilon * t) {
            t = ((c / t) + t) / 2;
        }
        console.log("the square root of number is: " + t);

    },

    //=====================================================================================
    //Fifteenth Program = toBinary

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - ToBinary conversion 
        @version  - 1.0
        @Date     - 27/02/2019
    
        Take any number any convert into Binary form
        n = UserInput
    */

    toBinary(n) {
        var sum = 0;
        var arr = [];
        var i = 0;
        //Condition for Binary element
        while (n > 0) {
            arr[i] = n % 2;
            n = Math.floor(n / 2);
            i++
        }

        //Print the reverse order 
        for (var j = arr.length - 1; j >= 0; j--) {
            sum = sum + arr[j] + " ";
        }
        return sum
    },
}



