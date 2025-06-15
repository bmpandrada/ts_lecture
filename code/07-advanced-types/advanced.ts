type DataStore = {
  [prop: string]: number | boolean; // This allows any property with a string key to have a value of type number or boolean
};

let store: DataStore = {};  // Initialize an empty object that conforms to the DataStore type

// ...

store.id = 5;
store.isOpen = false;
`// store.name = 'Max';`

let roles = ['admin', 'guest', 'editor'] as const; // Using 'as const' makes the array readonly and infers the literal types of its elements
// roles.push('max');
const firstRole = roles[0];

const dataEntries = {
  entry1: 0.51,
  entry2: -1.23
} satisfies Record<string, number>; // The 'satisfies' operator ensures that the object conforms to the Record type with string keys and number values
// The 'satisfies' operator is used to check that the object matches the specified type without changing its type
// Record<string, number> is a TypeScript utility type that defines an object type with:

// ...

// dataEntries.entry3