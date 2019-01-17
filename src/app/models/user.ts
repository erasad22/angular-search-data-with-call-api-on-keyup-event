export class Data {
  count: string;
  next: string;
  previous: number;
  results: User[];

  static deserialise(attributes: any): Data {
    return <Data>attributes;
  }
}
export class User{
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: any[];
  starships: any[];
  vehicles: any[];
}