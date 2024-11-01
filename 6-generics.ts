// Задание описано под решением

// =========== РЕШЕНИЕ ЗАДАЧА 1 ===========

interface PlayerData<Game extends string | number, Hours> {
  game: Game;
  hours: Hours;
  server: string;
}

interface Player3Server {
  total: number;
  inMenu: number;
}

const player1: PlayerData<string, number> = {
  game: "CS:GO",
  hours: 300,
  server: "basic",
};

const player2: PlayerData<number, string> = {
  game: 2048,
  hours: "300 h.",
  server: "arcade",
};

const player3: PlayerData<string, Player3Server> = {
  game: "Chess",
  hours: {
    total: 500,
    inMenu: 50,
  },
  server: "chess",
};

// =========== РЕШЕНИЕ ЗАДАЧА 2 ===========

interface AmountOfFigures {
  squares: number;
  circles: number;
  triangles: number;
  others: number;
}

// Еще вариант через enum, но нужно будет исходный массив data менять, а вдруг он из сервера летит?
type FigureName = "rect" | "triangle" | "line" | "circle";

interface FigureData {
  name: FigureName;
  data?: { [key: string]: number };
}

function calculateAmountOfFigures<T extends FigureData>(
  figure: T[]
): AmountOfFigures {
  const figuresCount: AmountOfFigures = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0,
  };

  figure.forEach((item) => {
    switch (item.name) {
      case "circle":
        figuresCount.circles++;
        break;

      case "rect":
        figuresCount.squares++;
        break;

      case "triangle":
        figuresCount.triangles++;
        break;

      default:
        figuresCount.others++;
        break;
    }
  });

  return figuresCount;
}

let data = [
  {
    name: "rect",
    data: { a: 5, b: 10 },
  },
  {
    name: "rect",
    data: { a: 6, b: 11 },
  },
  {
    name: "triangle",
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: "line",
    data: { l: 15 },
  },
  {
    name: "circle",
    data: { r: 10 },
  },
  {
    name: "circle",
    data: { r: 5 },
  },
  {
    name: "rect",
    data: { a: 15, b: 7 },
  },
  {
    name: "triangle",
  },
];

console.log(calculateAmountOfFigures(data as FigureData[]));

// =========== ЗАДАЧА ===========

// 1
// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

// const player1 = {
//   game: "CS:GO",
//   hours: 300,
//   server: "basic",
// };

// const player2 = {
//   game: 2048,
//   hours: "300 h.",
//   server: "arcade",
// };

// const player3 = {
//   game: "Chess",
//   hours: {
//     total: 500,
//     inMenu: 50,
//   },
//   server: "chess",
// };

// 2
// + Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// + Каждый объект может еще содержать дополнительные свойства в случайном виде
// + Свойство name может иметь только 4 варианта
// + Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// + Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

// interface AmountOfFigures {
//   squares: number;
//   circles: number;
//   triangles: number;
//   others: number;
// }

// function calculateAmountOfFigures(figure): AmountOfFigures {}

// const data = [
//   {
//     name: "rect",
//     data: { a: 5, b: 10 },
//   },
//   {
//     name: "rect",
//     data: { a: 6, b: 11 },
//   },
//   {
//     name: "triangle",
//     data: { a: 5, b: 10, c: 14 },
//   },
//   {
//     name: "line",
//     data: { l: 15 },
//   },
//   {
//     name: "circle",
//     data: { r: 10 },
//   },
//   {
//     name: "circle",
//     data: { r: 5 },
//   },
//   {
//     name: "rect",
//     data: { a: 15, b: 7 },
//   },
//   {
//     name: "triangle",
//   },
// ];

// console.log(calculateAmountOfFigures(data));
