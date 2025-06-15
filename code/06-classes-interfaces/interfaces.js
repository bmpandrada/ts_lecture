var AuthenticatableUser = /** @class */ (function () {
    function AuthenticatableUser(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    AuthenticatableUser.prototype.login = function () {
        // ...
    };
    AuthenticatableUser.prototype.logout = function () {
        // ...
    };
    return AuthenticatableUser;
}());
// ...
function authenticate(user) {
    user.login();
}
// type Authenticatable = {
//   role: string;
// }
var user;
user = {
    email: 'test@example.com',
    password: 'abc1',
    login: function () {
        // reach out to a database, check credentials, create a session
    },
    logout: function () {
        // clear the session
    },
};
