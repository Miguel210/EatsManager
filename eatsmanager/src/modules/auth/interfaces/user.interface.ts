
export interface User {
  id:         string;
  fullname:   string;
  username:   string;
  isActive:   boolean;
  profileId:  string;
  typeperson: Typeperson;
}

export interface Typeperson {
  description: string;
}
