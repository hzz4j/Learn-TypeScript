function add(a, b, printResult, resultPhrase) {
    var result = a + b;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    return result;
}
var a = 5;
var b = 2.8;
var resultPhrase = "Result is ";
var showResult = true;
add(a, b, showResult, resultPhrase);
