export interface Currency {
  id: number;
  value: string;
  symbol: string;
  name: string;
}

export interface CurrencyState {
  loading: boolean;

  currencies: Currency[];
}
