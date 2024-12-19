export interface Obj {
  data: Data[];
}

export interface Data {
  id:     string;
  personId: string;
  isActive:   boolean;
  person: Person;
}

export interface Person {
  id: string;
  fullname:   string;
  typeperson: Typeperson;
  genderId: string
  isActive:   boolean;

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