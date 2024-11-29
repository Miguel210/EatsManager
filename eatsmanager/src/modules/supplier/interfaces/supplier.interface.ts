export interface Obj {
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

export interface SupplierModel {
  id:       string 
  personId: string
  isActive: boolean
}