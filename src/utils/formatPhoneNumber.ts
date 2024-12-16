export const formatPhoneNumber = (input: string): string => {
  // Удаляем все символы, кроме цифр, из входной строки
  let digitsOnly = input.replace(/\D/g, "");

  // Если номер не содержит цифр, возвращаем пустую строку
  if (digitsOnly.length === 0) {
    return "";
  }

  // Удаляем первую цифру 7, если она есть
  if (digitsOnly[0] === "7") {
    digitsOnly = digitsOnly.slice(1);
  }

  let formattedNumber = "+7";

  // Форматируем оставшиеся цифры, добавляя их в соответствии с маской
  for (let i = 0; i < digitsOnly.length; i++) {
    if (i === 1) {
      formattedNumber += ` (${digitsOnly[i]}`;
    } else if (i === 4) {
      formattedNumber += `${digitsOnly[i]})`;
    } else if (i === 7 || i === 9) {
      formattedNumber += ` ${digitsOnly[i]}`;
    } else if (i === 11) {
      formattedNumber += `-${digitsOnly[i]}`;
    } else {
      formattedNumber += digitsOnly[i];
    }
  }

  return formattedNumber;
};
