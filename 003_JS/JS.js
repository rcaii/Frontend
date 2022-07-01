// 1. 
function reverseNumber(n) {
    n = n + "";
    return n.split("").reverse().join("")
}

// console.log(reverseNumber(32243));

// 2. 
function isPalindrome(str) {
    var re = /[\W_]/g; // lower case and remove irrelevant char
    var lowerRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowerRegStr.split('').reverse().join('');

    return reverseStr === lowerRegStr;
}

// console.log(isPalindrome('dog'))
// console.log(isPalindrome('A man, a plan, a canal. Panama'))

// 3. 
function allCombinations(str) {
    let combinations = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length + 1; j++) {
            combinations.push(str.slice(i, j));
        }
    }
    return res = combinations.filter(element => {
        return element !== '';
    })
}

// console.log(allCombinations('dog'))

// 4.
function orderAlphabetical(str) {
    return str.split('').sort().join('');
}

// console.log(orderAlphabetical('webmaster'))

// 5. 
function capitalLetter(str) {
    var arr = str.split(' ');
    var resArr = [];

    for (var x = 0; x < arr.length; x++) {
        resArr.push(arr[x].charAt(0).toUpperCase() + arr[x].slice(1));
    }

    return resArr.join(' ')
}

// console.log(capitalLetter('the quick brown fox' ));

// 6. 
function findLongestWord(str) {
    var arr = str.match(/\w[a-z]{0,}/gi);
    var res = arr[0];

    for (var x = 1; x < arr.length; x++) {
        if (arr[x].length > res.length) {
            res = arr[x]
        }
    }

    return res;
}

// console.log(findLongestWord('Web Development Tutorial'));

// 7. ]
function numberOfVowels(str) {
    return count = str.match(/[aeiou]/gi).length;
}

// console.log(numberOfVowels('the quick brown fox'));

// 8.
function isPrime(n) {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i == 0) return false;
    }
    return n > 1;
}

// console.log(isPrime(3))
// console.log(isPrime(38))

// 9. 
function typeOfArg(x) {
    var dataType = [Object, Boolean, Function, Number, String, RegExp]

    if (typeof (x) == 'Object' || typeof (x) == 'Function') {
        for (var x = 0; x < dataType.length; x++) {
            if (x instanceof dataType[x]) {
                return dataType[x]
            }
        }
    }

    return typeof (x);
}

// console.log(typeOfArg(isPrime));

// 10. 
function generateIdentityMatrix(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i === j) {
                console.log(' 1 ');
            }
            else {
                console.log(' 0 ');
            }
        }
        console.log('----------');
    }
}

// console.log(generateIdentityMatrix(5))

//  11. 
function secondGreatestLowest(arr) {
    arr.sort(function (x, y) { return x - y });

    var uniqueArr = [arr[0]];
    var res = [];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] !== arr[i]) {
            uniqueArr.push(arr[i]);
        }
    }
    res.push(uniqueArr[1], uniqueArr[uniqueArr.length - 2]);
    return res.join(',');
}

// console.log(secondGreatestLowest([3,2,1,10,5,6,7,8]))

// 12.
function isPrefect(n) {
    var sum = 0;
    for (var i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }

    if (sum === n && sum !== 0) {
        console.log("Perfect Num!");
    }
    else {
        console.log("Not Perfect Num.");
    }
}

// isPrefect(8129)

// 13. 
function factors(n) {
    var res = [];
    for (var i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
        if (n % i === 0) {
            res.push(i);
            if (n / i !== i)
                res.push(n / i);
        }

    res.sort(function (x, y) {
        return x - y;
    });

    return res;
}

// console.log(factors(20))

// 14.
const amountToCoins = (n, arr) => {
    if (n === 0 || n < 0) return 0;

    return arr.reduce((acc, cur) => {
        while (n >= cur) {
            acc.push(cur);
            n -= cur;
        }
        return acc;
    }, []);
};

// console.log(amountToCoins(46,[25,10,5,2,1]))

// console.log(amountTocoins(46, [25, 10, 5, 2, 1]))

// 15.
function exp(b, n) {
    var res = 1;
    for (var i = 1; i <= n; i++) {
        res = b * res;
    }
    return res;
}

// console.log(exp(9, 9));

// 16.
function unique_char(str) {
    var unique = "";
    for (var x = 0; x < str.length; x++) {
        if (unique.indexOf(str.charAt(x)) == -1) {
            unique += str[x];
        }
    }
    return unique;
}
// console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

// 17.
function countOccurrence(str) {
    var res = {};
    str.replace(/\S/g, function (a) { res[a] = (isNaN(res[a]) ? 1 : res[a] + 1); });
    return res;
}

// console.log(countOccurrence("The quick brown fox jumps over the lazy dog"));

// 18.
function binarySearch(arr, n) {
    var midpos = Math.floor(arr.length / 2);

    if (arr[midpos] === n) {
        return midpos;
    }
    else if (arr.length === 1) {
        return null;
    }
    else if (arr[midpos] < n) {
        var arr1 = arr.slice(midpos + 1);
        var res = binarySearch(arr1, n);
        if (res === null) {
            return null;
        }
        else {
            return midpos + 1 + res;
        }
    }
    else {
        var arr2 = arr.slice(0, midpos);
        return binarySearch(arr2, n);
    }
}

// console.log(binarySearch([1, 2, 3, 5, 6, 7, 9], 2))

// 19
function returnLarger(arr, n) {
    return arr.filter(ele => ele > n);
}


// console.log(returnLarger([65, 16, 0, 6, 64, 1, 68], 16));

// 20
function makeId(l) {
    var res = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < l; i++) {
        res += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return res;
}

// console.log(makeId(7));

// 21 Not done
function findSubset(arr, s) {
    var res_set = [], res;

    for (var x = 0; x < Math.pow(2, arr.length); x++) {
        res = [];
        i = arr.length - 1;
        do {
            if ((x & (1 << i)) !== 0) {
                res.push(arr[i]);
            }
        } while (i--);

        if (res.length == s) {
            res_set.push(res);
        }
    }

    return res_set;
}

// console.log(findSubset([1,2,3],2))

// 22.
function countChar(str, letter) {
    var count = 0;
    for (var pos = 0; pos < str.length; pos++) {
        if (str.charAt(pos) == letter) {
            count += 1;
        }
    }
    return count;
}

// console.log(countChar('microsoft.com', 'o'))

// 23.
function findFirstNotRepeatedChar(str) {
    var arr = str.split(''), res = '', count = 0;

    for (var x = 0; x < arr.length; x++) {
        count = 0;

        for (var y = 0; y < arr.length; y++) {
            if (arr[x] === arr[y]) {
                count += 1;
            }
        }

        if (count < 2) {
            res = arr[x];
            break;
        }
    }
    return res;
}

// console.log(findFirstNotRepeatedChar('abacddbec' ))

// 24. 
function bubbleSort(arr) {
    var swap;
    var n = arr.length - 1;
    var res = arr;
    do {
        swap = false;
        for (var i = 0; i < n; i++) {
            if (res[i] < res[i + 1]) {
                var tmp = res[i];
                res[i] = res[i + 1];
                res[i + 1] = tmp;
                swap = true;
            }
        }
        n--;
    } while (swap);

    return res;
}

// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

// 25.
function longestCountryName(name) {
    return name.reduce(function (lname, curr) {
        return lname.length > curr.length ? lname : curr;
    }, "");
}

// console.log(longestCountryName(["Australia", "Germany", "United States of America"]))

// 26.
function longestSub(str) {
    const noRepeat = string => {
        let subStr = '';
        for (let l of string) {
            if (!~subStr.indexOf(l)) {
                subStr += l;
            }
            else break;
        }
        return subStr;
    };

    let subsArray = [];
    for (let i = 0; i < str.length; i++) {
        let sub = noRepeat(str.substring(i));
        subsArray.push(sub);
    }
    return subsArray.reduce((a, b) => {
        return a.length > b.length ? a : b;
    });
}

// console.log(longestSub("antra.co Inc"))
// console.log(longestSub("google.com"))

// 27.
function longestPalindrome(str) {

    var max_length = 0, res = '';

    for (var i = 0; i < str.length; i++) {
        var subStr = str.substr(i, str.length);

        for (var j = subStr.length; j >= 0; j--) {
            var sub_subStr = subStr.substr(0, j);
            if (sub_subStr.length <= 1)
                continue;

            if (isPalindrome(sub_subStr)) { // use question 2 function
                if (sub_subStr.length > max_length) {
                    max_length = sub_subStr.length;
                    res = sub_subStr;
                }
            }
        }
    }

    return res;
}

// console.log(longestPalindrome("bananas"))

// 28.
function fcallback(n) {
    console.log('Hello');
}

function test(id, f) {
    f(id);
}

// test('rcai', fcallback);

// 29.
function getFuntionName() {
    console.log(arguments.callee.name);
}

// getFuntionName();

// 30. myReduce
Array.prototype.myReduce = function (cb, initialValue) {
    // no initialValue, altomatically set to 0
    if (initialValue == undefined) var initialValue = 0;
    for (let index = 0; index < this.length; index++) {
        cb(initialValue = initialValue + this[index]);
    }
    return initialValue;
}

// function sum(arr) {
//     return arr.myReduce((acc, cur) => {
//         return acc + cur;
//     });
// }

// console.log(sum([1, 2, 3, 4, 5]));

