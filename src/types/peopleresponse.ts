export interface PersonResult {
    results: PersonResponse[];
    info: Info;
}

export interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}

export interface PersonResponse {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Dob;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface Street {
    number: number;
    name: string;
}

export interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: string;
}

export interface Dob {
    date: string;
    age: number;
}

export interface Id {
    name: string;
    value: string;
}