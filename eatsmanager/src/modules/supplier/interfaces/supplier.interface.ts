export interface Supplier {
  data: Data[];
}

export interface Data {
  id:     string;
  person: Person;
}

export interface Person {
  fullname:   string;
  typeperson: Typeperson;
  isActive:   boolean;
}

export interface Typeperson {
  description: string;
}
