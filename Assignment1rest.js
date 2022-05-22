//Assignment11...

<html>

<head>
    <title>Assignment 11</title>
</head>

<body>
    <h2>Reverse the Array</h2>

    <script>

        let num = [1, 4, 5, 7, 8, 9, 2];
        document.write("Array is:" + num + "<br>");

        let revNum = num.reverse();

        document.write("Reverse array is: " + revNum);
    </script>


</body>

</html>

//Assignment12...

<html>

<head>
    <title>Assignment 12</title>
</head>

<body>
    <h2>Longest Token</h2>

    <script>

        var str = window.prompt("Enter String: ");
        document.write("Given String is:" + str + "<br>");

        var newStr = str.replace(/[a,b]/g, '');

        document.write("New String is: " + newStr);
    </script>


</body>

</html>

//Assignment 14...

<html>

<head>
    <title>Assignment14</title>
</head>

<body>
    <h2>Array Containing Random Number</h2>

    <script>

        var arr = [1, 2, 3, 4, 5, 6, 8, 9, 100];
        var largest = arr[0];
        var smallest = arr[0];
        var len = arr.length;
        var evenCount = 0;
        var oddCount = 0;
        var sum = 0;

        for (var i = 0; i < len; i++) {


            if (largest < arr[i])
                largest = arr[i];


            if (smallest > arr[i])
                smallest = arr[i];


            if ((arr[i] % 2) == 0)
                evenCount++;
            else
                oddCount++;

            sum += arr[i];
        }

        avg = sum / len;

        document.write("Print Largest Number : " + largest + "<br>");
        document.write("Print Smallest Number : " + smallest + "<br>");

        if (evenCount > oddCount)
            document.write("Print Even Count : " + evenCount + "<br>");
        else
            document.write("Print Odd Count : " + oddCount + "<br>");

        document.write("Print Sum of Array :" + sum + "<br>");

        document.write("Print Average of Array : " + Math.round(avg));

    </script>


</body>

</html>

//Assignment 15...

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 15</title>
</head>

<body>
    <h1>Bubble Sort</h1>
    <div>
        <span id="originalArray"></span>
    </div>
    <div>
        <span id="sortedArray"></span>
    </div>
    <script>
        const arr = [12, 73, 67, 987, 432, 44, 12, 346, 23, 86, 87, 34, 72, 28, 192, 673, 865, 34, 22, 18];
        document.getElementById("originalArray").innerHTML = "Original Array :" + arr;
        document.getElementById("sortedArray").innerHTML = "Sorted Array :" + bblSort(arr);
        function bblSort(arr) {

            for (var i = 0; i < arr.length; i++) {

                // Last i elements are already in place  
                for (var j = 0; j < (arr.length - i - 1); j++) {
                    if (arr[j] > arr[j + 1]) {

                        // If the condition is true then swap them
                        var temp = arr[j]
                        arr[j] = arr[j + 1]
                        arr[j + 1] = temp
                    }
                }
            }
            return arr;
        }
    </script>
</body>

</html>

//Assignment 16...

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 16</title>
</head>

<body>
    <table id="myTable" border="1">
    </table>
    <form>
        <input type="button" onclick="createTable()" value="Create the table">
    </form>
    <script>
        function createTable() {
            rn = window.prompt("Input number of rows", 1);
            cn = window.prompt("Input number of columns", 1);

            for (var r = 0; r < parseInt(rn, 10); r++) {
                var x = document.getElementById('myTable').insertRow(r);
                for (var c = 0; c < parseInt(cn, 10); c++) {
                    var y = x.insertCell(c);
                    y.innerHTML = "Row-" + r + " Column-" + c;
                }
            }
        }
    </script>
</body>

</html>

//Assignment17...

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 17</title>
</head>

<body>
    <h2>Rotation of Array</h2>

    <script>

        var arr = [1, 2, 3, 4, 5, 6];
        var k = window.prompt("Enter value of k element: ");

        document.write(" Array is : " + arr + "<br>");

        for (var i = 0; i < k; i++) {

            var j, first;

            first = arr[0];

            for (j = 0; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr[j] = first;
        }

        document.write("Rotated Array : " + arr);

    </script>
</body>

</html>

//Assignment18...

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 18</title>
</head>

<body>
    <script>

        var word = window.prompt("Enter Text: ");
        document.write(" String is : " + word + "<br>");

        var result = pigIt(word);
        document.write(" Pig Latin text is : " + result);

        function pigIt(str) {

            let strArr = str.split(' ');
            let pigLatin = [];

            for (let word of strArr) {
                if ((/([a-zA-Z])/).test(word)) {
                    pigLatin.push(word.substring(1) + word[0] + "ay");
                } else {
                    pigLatin.push(word);
                }
            }

            return pigLatin.join(" ");
        }

    </script>
    </script>
</body>

</html>

//Assignment 19...

<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title> Assignment 19</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <h1>Calculator</h1>
    <table class="calculator">
        <tr>
            <td colspan="3"> <input class="display-box" type="text" id="result" disabled /> </td>

            <td> <input class="button" type="button" value="C" onclick="clearScreen()"
                    style="background-color: #fb0066;" /> </td>
        </tr>
        <tr>

            <td> <input class="button" type="button" value="1" onclick="display('1')" /> </td>
            <td> <input class="button" type="button" value="2" onclick="display('2')" /> </td>
            <td> <input class="button" type="button" value="3" onclick="display('3')" /> </td>
            <td> <input class="button" type="button" value="/" onclick="display('/')" /> </td>
        </tr>
        <tr>
            <td> <input class="button" type="button" value="4" onclick="display('4')" /> </td>
            <td> <input class="button" type="button" value="5" onclick="display('5')" /> </td>
            <td> <input class="button" type="button" value="6" onclick="display('6')" /> </td>
            <td> <input class="button" type="button" value="-" onclick="display('-')" /> </td>
        </tr>
        <tr>
            <td> <input class="button" type="button" value="7" onclick="display('7')" /> </td>
            <td> <input class="button" type="button" value="8" onclick="display('8')" /> </td>
            <td> <input class="button" type="button" value="9" onclick="display('9')" /> </td>
            <td> <input class="button" type="button" value="+" onclick="display('+')" /> </td>
        </tr>
        <tr>
            <td> <input class="button" type="button" value="." onclick="display('.')" /> </td>
            <td> <input class="button" type="button" value="0" onclick="display('0')" /> </td>

            <td> <input class="button" type="button" value="=" onclick="calculate()"
                    style="background-color: #fb0066;" /> </td>
            <td> <input class="button" type="button" value="*" onclick="display('*')" /> </td>
        </tr>
    </table>
    <script>
        // This function clear all the values
        function clearScreen() {
            document.getElementById("result").value = "";
        }

        // This function display values
        function display(value) {
            document.getElementById("result").value += value;
        }
        // This function evaluates the expression and return result
        function calculate() {
            var p = document.getElementById("result").value;
            var q = eval(p);
            document.getElementById("result").value = q;
        }
    </script>
</body>

</html>

