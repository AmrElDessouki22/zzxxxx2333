export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
