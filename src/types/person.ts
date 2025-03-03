export interface Person {
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    email: string;
    phone: string;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    location: {
      street: {
        number: number;
        name: string;
      };
      city: string;
      state: string;
      country: string;
      postcode: string | number;
    };
    dob: {
      date: string;
      age: number;
    };
    id: {
      name: string;
      value: string;
    };
}