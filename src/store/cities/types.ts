export interface City {
  id: number;
  name: string;
}

export interface CitiesState {
  loading: boolean;

  current: City;
  cities: City[];
}
