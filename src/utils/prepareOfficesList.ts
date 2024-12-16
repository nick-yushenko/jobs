import { Office } from "@/store/offices/types";
import { DropdownOption } from "@/ui/Dropdown";

const getTomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const daysOfWeek = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  const dayOfWeekIndex = tomorrow.getDay();

  return daysOfWeek[dayOfWeekIndex];
};

export const prepareOfficesList = (offices: Office[]): DropdownOption[] => {
  return offices.map(o => {
    let info;
    if (o.info.is_open)
      info = `(открыто до ${o.info.today_schedule.closing_hour})`;
    else {
      if (o.info.next_shift) info = o.info.next_shift.opens_at;
      else info = "(Закрыто)";
    }
    return {
      id: o.id,
      value: o.id,
      timeInfo: info,
      label: `${o.address_name}`,
      isOpened: o.info.is_open,
    };
  });
};
