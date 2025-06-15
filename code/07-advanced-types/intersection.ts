type FileData = {
  path: string;
  content: string;
};

// or

interface FileData1 {
  path: string;
  content: string;
}
//-----
type DatabaseData = {
  connectionUrl: string;
  credentials: string;
}

// or

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

interface Status1 {
  isOpen: boolean;
  errorMessage?: string;
}
//----
type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;

// or

interface AccessedFileData1 extends FileData1, Status1 {}
interface AccessedDatabaseData1 extends DatabaseData, Status1 {}