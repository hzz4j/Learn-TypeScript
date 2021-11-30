function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(3, 5, function (r) {
    console.log("Result is " + r);
});
