
// Ang interface sa TypeScript (at sa ibang object-oriented programming languages) ay parang kontrata na nagsasabi kung ano ang dapat lamanin o 
// i-implement ng isang object o class — pero walang aktwal na code o logic sa loob.
// -interface mas preferred sa OOP at mas madaling i-extend.
// -type mas flexible (pwedeng union, intersection, etc.)
interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

interface AuthenticatableAdmin extends Authenticatable {
  role: 'admin' | 'superadmin';
}

class AuthenticatableUser implements Authenticatable {
  constructor(
    public userName: string,
    public email: string,
    public password: string
  ) {}

  login() {
    // ...
  }

  logout() {
    // ...
  }
}

// ...

function authenticate(user: Authenticatable) {
  user.login();
}

// type Authenticatable = {
//   role: string;
// }

let user: Authenticatable;

user = {
  email: 'test@example.com',
  password: 'abc1',
  login() {
    // reach out to a database, check credentials, create a session
  },
  logout() {
    // clear the session
  },
};





// hindi related pero part ng hasing
// Algorithm	Reason
// bcrypt	Built-in delay/slowness to prevent brute-force
// argon2	Most recommended today; secure and flexible
// scrypt	Secure and slow (good for password hashing)
// PBKDF2	Still used and supported in many systems