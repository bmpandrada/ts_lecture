type FileSource = { type: 'file'; path: string };// --> type guard type: 'file'
const fileSource: FileSource = {
  type: 'file', // --> type guard type: 'file'
  path: 'some/path/to/file.csv',
};

type DBSource = { type: 'db', connectionUrl: string }; // --> type guard type: 'db'
const dbSource: DBSource = {
  type: 'db', // --> type guard type: 'db'
  connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;
// interface Source extends FileSource, DBSource {}

function isFile(source: Source) { // create a type guard firts as dry Code
  return source.type === 'file'; // is true if source is FileSource
}

function loadData(source: Source) {
  // if ('path' in source) {
  if (isFile(source)) { // apply type guard
    // source.path
    // source.path; => use that to open the file
    return;
  }
  // source.connectionUrl; => to reach out to database
}

class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
  if (entity instanceof User) {
    entity.join();
    return;
  }

  entity.scan();
}
