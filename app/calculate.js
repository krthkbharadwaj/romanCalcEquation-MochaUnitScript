/**
 * Module which takes three positive roman numerals as input and creates the equation
 */
exports.equation = function (first, second, third) {

    var arr = [];
    if (first == "" || second == "" || third == "" || first.includes('-') || second.includes('-') || third.includes('-')) {
        return "Please enter valid number";
    }
    /**
     * convert_numeric is function to convert the input roman numerals to numerics
     */
    var f = convert_numeric(first);
    var s = convert_numeric(second);
    var t = convert_numeric(third);

    arr.push(f); arr.push(s); arr.push(t);

    /**
     * parArr is the parent array which contains the key values pairs 
     * Keys are the numerics and values are Roman numerals - Used at the end to convert back to roman numerals 
     */
    var parArr = [];
    parArr[f] = first;
    parArr[s] = second;
    parArr[t] = third;

    var n = arr.length;

    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        var equ = [];
        var mul = [];
        var mu = 1;
        var leftS = 0;

        leftS = parseInt(arr[i]);
        for (var j = 0; j < arr.length; j++) {
            if (j != i) {
                /**
                 * sum & equ is used for Addition and Subtraction operations
                 */
                sum += parseInt(arr[j]);
                equ.push(arr[j]);
                
                /**
                 * Mu & Mul is used for Division and Multiplication operations 
                 */
                mu = mu * parseInt(arr[j]);
                mul.push(arr[j]);

            }
        }

        /**
         * Checking if the operations is addition & Subtraction
         * Else if condition is for Multiplication & Division
         * Inside the loop is for constructing the equation
         */
        if (leftS == sum) {
            var out = '';
            for (var k = 0; k < arr.length; k++) {
                if (k == 0) {
                    if (arr[1] > arr[0] && arr[1] > arr[2]) {
                        out += '-' + parArr[arr[k]];
                    } else {
                        out += parArr[arr[k]];
                    }
                } else if (k == 1 && (i == 0 || i == 1)) {
                    if (arr[1] > arr[0] && arr[1] > arr[2]) {
                        out += "+" + parArr[arr[k]] + "=";
                    } else {
                        out += "-" + parArr[arr[k]] + "=";
                    }
                } else if (k == 1 && i == 2) {
                    out += "+" + parArr[arr[k]] + "=";
                } else if (k == 2) {
                    out += parArr[arr[k]];
                }
            }
            var res = out;
            return res;
        }else if (leftS == mu) {
            var out = '';
            for (var k = 0; k < arr.length; k++) {
                if (k == 0) {
                    if (arr[1] > arr[0]) {
                        out += parArr[arr[1]];
                    } else {
                        out += parArr[arr[k]];
                    }
                } else if (k == 1 && i == 0) {
                    out += "/" + parArr[arr[k]] + "=";
                } else if (k == 1 && (i == 1 || i == 2)) {
                    if (arr[1] > arr[0]) {
                        out += "/" + parArr[arr[0]] + "=";
                    } else {
                        out += "*" + parArr[arr[k]] + "=";
                    }
                } else if (k == 2) {
                    out += parArr[arr[k]];
                }
            }
            var res = out;
            return res;
        }

    }
    return "Can not make mathematical operations with numbers provided";
};

/**
 * Below variables and functions are used for conversion of roman numerals to numerics and vice versa
 */
var rarr = new Array("M",
    "CM", "D", "CD", "CCC", "CC", "C", "XC", "L", "XL", "XXX", "XX", "X", "IX", "V", "IV", "III", "II", "I");

var narr = new Array(1000, 900, 500, 400, 300, 200, 100, 90, 50, 40, 30, 20, 10, 9, 5, 4, 3, 2, 1);

var warr = new Array("CMCM",
    "CMD",
    "CMCD", "CMC", "DD", "DCD", "CDCD", "CDC", "CCCC", "XCXC",
    "XCL", "XCXL", "XCX", "LL", "LXL", "XLXL", "XLX", "XXXX", "IXIX",
    "IXV", "IXIV", "IXI", "IVIV", "IVI", "IIII");

/**
 * Roman numerals to numerics conversion
 */
function convert_numeric(rom) {
    var roman = rom.replace(/ /g, "");
    roman = roman.toUpperCase();
    roman = roman.replace(/[^IVXLCDM]/g, "");

    if (roman.length == 0) { return; }
    var position = 0; var result = 0; var pp = -1;
    while (position < roman.length) {
        var p = getnextletter(roman, position);
        if (pp != 0) {
            if (narr[pp] < narr[p]) {
                return;
            }
        }
        if (p < 0)
            return "";
        position += rarr[p].length; result += narr[p]; pp = p;
    }
    return result;
}

function getnextletter(roman, position) {
    for (i = 0; i < warr.length; i++) {
        if (roman.indexOf(warr[i], position) == position) {
            return;
        }
    }
    for (i = 0; i < rarr.length; i++) {
        if (roman.indexOf(rarr[i], position) == position)
            return i;
    }
    return;
}
