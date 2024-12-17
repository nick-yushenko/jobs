import {City} from "@/store/cities/types";

export interface Vacancy {
  id: number;
  vacancy_name: string;
  vacancy_url: string;
  city_id: number;
  city: City;
}

export interface VacanciesState {
  loading: boolean;

  vacancies: Vacancy[];
}
