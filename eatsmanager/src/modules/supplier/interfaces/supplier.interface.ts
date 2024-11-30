export interface Obj {
  data: Data[];
}

export interface Data {
  id:     string;
  PersonId: string;
  isActive:   boolean;
  person: Person;
}

export interface Person {
  fullname:   string;
  typeperson: Typeperson;
  genderId: string
}

export interface Typeperson {
  description: string;
}

export interface SupplierModel {
  data: Data
}

export interface Dddd {
  fullname: string,
  description: string,
}