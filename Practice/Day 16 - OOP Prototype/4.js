// # Object Creation

// User

// ## Create in all 4 formats

// - Using function to create object
// - Using Object.create
// - Using Pseudoclassical Way
// - Using Class

// * properties (data) -
//   name
//   id
//   password
//   noOfProjects
// * methods -
//   getUsername -> return username
//   getPassword -> returns password
//   getProjects -> return number of project
//   changeUsername -> returns old username
//   changePassword -> returns old password
//   incrementProject -> returns updated number of projects
//   decrementProject -> returns updated number of projects

function createUser(name, password, noOfProjects) {
    var user = {};
    user.name = name;
    var oldName = user.name;
    user.id = Date.now();
    user.password = password;
    user.noOfProjects = noOfProjects;
    user.getUsername = function () {
        return user.name
    };
    user.getPassword = function () {
        return user.password
    };
    user.userProjects = function () {
        return user.noOfProjects
    };
    user.changeUsername = function (newUsername) {
        var oldUsername = user.name;
        user.name = newUsername;
        return oldUsername;
    };
    user.changePassword = function (newPassword) {
        var oldPassword = user.password;
        user.password = newPassword;
        return oldPassword;
    };
    user.incrementProject = function () {
        return ++user.noOfProjects;
    };
    user.decrementProject = function () {
        return --user.noOfProjects;
    }

    return user;
}
// ==================================================================================================================
// ==================================================================================================================


function createUser(name, password, noOfProjects) {
    var user = Object.create(method);
    user.name = name;
    var oldName = user.name;
    user.id = Date.now();
    user.password = password;
    user.noOfProjects = noOfProjects;
    return user;
}

var methods = {
    getUsername() {
        return this.name;
    },

    getPassword() {
        return this.password;
    },
    userProjects() {
        return this.noOfProjects
    },
    changeUsername(newUsername) {
        var oldUsername = this.name;
        this.name = newUsername;
        return oldUsername;
    },
    changePassword(newPassword) {
        var oldPassword = this.password;
        this.password = newPassword;
        return oldPassword;
    },
    incrementProject() {
        return ++this.noOfProjects;
    },
    decrementProject() {
        return --this.noOfProjects;
    }
}

var sourav = createUser('sourav', 'newPassword', 10);




// ==================================================================================================================
// ==================================================================================================================


function CreateUser(name, password, noOfProjects) {
    this.name = name;
    this.id = Date.now();
    this.password = password;
    this.noOfProjects = noOfProjects;
}

CreateUser.prototype.getUsername = function () {
    return this.name
};
CreateUser.prototype.getPassword = function () {
    return this.password
};
CreateUser.prototype.userProjects = function () {
    return this.noOfProjects
};
CreateUser.prototype.changeUsername = function (newUsername) {
    var oldUsername = this.name;
    this.name = newUsername;
    return oldUsername;
}
CreateUser.prototype.changePassword = function (newPassword) {
    var oldPassword = this.password;
    this.password = newPassword;
    return oldPassword;
}
CreateUser.prototype.incrementProject = function () {
    return ++this.noOfProjects;
}
CreateUser.prototype.decrementProject = function () {
    return --this.noOfProjects;
}

var sourav = new CreateUser('sourav', 'souravPassword', 10);


// ==================================================================================================================
// ==================================================================================================================



class User {
    constructor(name, password, noOfProjects) {
        this.name = name;
        this.id = Date.now();
        this.password = password;
        this.noOfProjects = noOfProjects;
    }

    getUsername() {
        return this.name
    }
    getPassword() {
        return this.password
    }
    userProjects() {
        return this.noOfProjects
    }
    changeUsername(newUsername) {
        var oldUsername = this.name;
        this.name = newUsername;
        return oldUsername;
    }
    changePassword(newPassword) {
        var oldPassword = this.password;
        this.password = newPassword;
        return oldPassword;
    }
    incrementProject() {
        return ++this.noOfProjects;
    }
    decrementProject() {
        return --this.noOfProjects;
    }
}
var sourav = new User('sourav', 'souravPassword', 12)