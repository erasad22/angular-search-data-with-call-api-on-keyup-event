export class PlanetData {
  count: string;
  next: string;
  previous: number;
  results: Planet[];

  static deserialise(attributes: any): PlanetData {
    return <PlanetData>attributes;
  }
}
export class Planet{
  name: string;
  rotation_period: string;
  orbital_period:string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string;
}