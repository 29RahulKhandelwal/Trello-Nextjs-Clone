interface Board {
  columns: Map<TypedColumn, column>;
}

type TypedColumn = "todo" | "inprogress" | "done";

interface Coloumn {
  id: TypedColumn;
  todos: Todo[];
}

interface Todo {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypedColumn;
  image?: Image;
}

interface Image {
  buckedId: string;
  fileId: string;
}
