// ==========================================
// Factory Pattern
// ==========================================

function user(name, score = 0) {
    var obj = Object.create(userMethod);
    obj.name = name;
    obj.score = score;
    return obj;
}
var userMethod = {
    increaseScore() {
        return this.score++;
    },
}
function morderator(name, score = 0) {
    var obj = user(name, score = 0);
    Object.setPrototypeOf(obj, morderatorMethod);
    Object.setPrototypeOf(morderatorMethod, userMethod);
    obj.name = name;
    return obj;
}
var morderatorMethod = {
    returnSCore() {
        return this.score;
    }
}
function paidUser(name, score = 0, bonusScore) {
    var obj = user(name, score = 0);
    Object.setPrototypeOf(obj, paidUserMethod);
    Object.setPrototypeOf(paidUserMethod, userMethod);
    obj.score = score;
    obj.bonusScore = bonusScore;
    return obj;
}
var paidUserMethod = {
    increaseBalance() {
        return this.bonusScore++;
    }
}

// ==========================================
// 2. Pseudoclassical Pattern
// ==========================================


function user(name, score = 0) {
    this.name = name;
    this.score = score;
}
user.prototype.increaseScore = function () {
    return this.score++;
}

function morderator(name, score = 0) {
    user.call(this, name, score);
}
morderator.prototype.returnSCore = function () {
    return this.score;
}

Object.setPrototypeOf(moderator.prototype, user.prototype);
function paidUser(name, score = 0, bonusScore) {
    user.call(this, name, score);
    this.bonusScore = bonusScore;
}
paidUser.prototype.increaseBalance = function () {
    return this.bonusScore++;
}
Object.setPrototypeOf(paidUser.prototype, user.prototype);

// ==========================================
// 3. Classes Pattern
// ==========================================
class User {
    constructor(name, score = 0) {
        this.name = name;
        this.score = score;
    }
    increaseScore() {
        return this.score++;
    }
}
class Morderator extends User {
    constructor(name, score = 0) {
        super(name, score)
    }
    returnSCore() {
        return this.score;
    }
}
class PaidUser extends User {
    constructor(name, score = 0, bonusScore) {
        super(name, score);
        this.bonusScore = bonusScore;
    }
    increaseBalance() {
        return this.bonusScore++;
    }
}