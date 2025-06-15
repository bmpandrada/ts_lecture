//  unknown is a safer version of any.
// any lets you do anything with a value (not safe 😬).

// unknown means “I don’t know the type yet, so you must check before using it.”

function process(val: unknown) {
  if (
    typeof val === 'object' &&  // check if val is object
    !!val &&                    // make sure it's not null
    'log' in val &&             // check if it has a property named 'log'
    typeof val.log === 'function' // check if val.log is a function
  ) {
    val.log();
  }
}
