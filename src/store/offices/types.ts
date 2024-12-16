interface OfficeInfo {
  is_open: boolean;
  currentHour: number;
  today_schedule: { opening_hour: string; closing_hour: string };
  next_shift: { weekday: string; opens_at: string };
}

interface Schedule {
  weekday: string;
  work_hours: { opening_hour: string; closing_hour: string };
}
export interface Office {
  id: number;
  address_name: string;
  city: string;
  info: OfficeInfo;
  schedules: Schedule[];
}

export interface OfficeState {
  loading: boolean;

  offices: Office[];
}
