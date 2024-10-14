// Есть код, который получает и обрабатывает данные. Имитируем JSON.
// Задача - полностью типизировать.

const currRate: string = "1.05";

const fetchCurr = (response: string): number => {
  const data: number = JSON.parse(response);
  return data;
};

function transferEurToUsd(
  available: boolean,
  amount: number,
  commission: number
): void {
  if (available) {
    let res: number = fetchCurr(currRate) * amount * commission;
    console.log(res);
    // Или запись в элемент на странице вместо консоли
  } else {
    console.log("Сейчас обмен недоступен");
  }
}

transferEurToUsd(true, 500, 1.05);

export {}; // https://stackoverflow.com/questions/35758584/cannot-redeclare-block-scoped-variable