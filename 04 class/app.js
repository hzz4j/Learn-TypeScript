var Department = /** @class */ (function () {
    function Department(id, n) {
        this.id = id;
        this.n = n;
        this.employees = [];
    }
    Department.prototype.updateId = function () {
        // 不能更新
        this.id = 'xxx';
    };
    return Department;
}());
