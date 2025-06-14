let userName: string; // number, boolean
let userAge = 38;

// ...

userName = 'Max';
// userAge = '34';

function add(a: number, b = 5) {
  return a + b;
}

add(10);
// add('10');
add(10, 6);
// add(10, '6');

// for store a custom type


//let userRole: 'admin' | 'user' | 'guest'; // union type

type UserRole = 'admin' | 'user' | 'guest'; // custom type

function printUserRole(role: UserRole) {
  console.log(role);
  if (role === 'admin') {
    console.log('You have full access');

  }else {
    console.log('You have limited access');
  }
}

printUserRole('user')