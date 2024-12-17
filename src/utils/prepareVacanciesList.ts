import { DropdownOption } from "@/ui/Dropdown";
import {Vacancy} from "@/store/vacancies/types";

const getTomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const daysOfWeek = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  const dayOfWeekIndex = tomorrow.getDay();

  return daysOfWeek[dayOfWeekIndex];
};

export const prepareVacanciesList = (vacancies: Vacancy[]): DropdownOption[] => {
  return vacancies.map(o => {
    return {
      id: o.id,
      value: o.id,
      label: `${o.vacancy_name}`,
    };
  });
};
