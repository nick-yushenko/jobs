export enum customerTypes {
  buyer = 1,
  seller = 2,
}
export interface Employee {
  id?: string;
  phone: string;
  vacancy_id: number;
}

export interface EmployeeState {
  loading: boolean;
  success: boolean;
  data: Employee | undefined;
}
