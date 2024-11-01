// Задание описано под решением

// =========== РЕШЕНИЕ ===========

type AnimalName = "cat" | "dog" | "bird";

enum AnimalStatus {
  Available = "available",
  NotAvailable = "not available",
}

interface Animal {
  animal: AnimalName;
  breed: string;
  sterilized?: string;
}

// DRY - extends
interface AnimalAvailableData extends Animal {
  location: string;
  age?: number;
}

interface AnimalAvailable {
  status: AnimalStatus.Available;
  data: AnimalAvailableData;
}

interface AnimalNotAvailableData {
  message: string;
  nextUpdateIn: Date;
}

interface AnimalNotAvailable {
  status: AnimalStatus.NotAvailable;
  data: AnimalNotAvailableData;
}

type AnimalDataResponse = AnimalAvailable | AnimalNotAvailable;

// type guard
function isAvailable(res: AnimalDataResponse): res is AnimalAvailable {
  if (res.status === AnimalStatus.Available) {
    return true;
  } else {
    return false;
  }
}

// Overload
function checkAnimalData(animalAvailable: AnimalAvailable): AnimalAvailableData;
function checkAnimalData(animalNotAvailable: AnimalNotAvailable): string;

function checkAnimalData(
  animal: AnimalDataResponse
): AnimalAvailableData | string {
  if (isAvailable(animal)) {
    return animal.data;
  } else {
    return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
  }
}

// =========== ЗАДАЧА ===========

// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }

// Response #1

// {
//     status: 'available',
//     data: {
//         animal: 'cat' | 'dog' | 'bird',
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }

// Response #2

// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }

// function checkAnimalData(animal) {
//   if ("available") {
//     // Заменить условие!
//     return animal.data;
//   } else {
//     return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
//   }
// }
