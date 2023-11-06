import Data from '../declarations/models';
import { maleFirstNames, femaleFirstNames, lastNames, cities, positions, genders } from '../mocks/data';

export default function generateRandomData(count = 1): Array<Data> {
  const data = [];
  for (let i = 0; i < count; i++) {
    const randomGender = genders[Math.floor(Math.random() * genders.length)];
    const randomFirstName =
      randomGender === 'male'
        ? maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)]
        : femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];

    data.push({
      _id: Math.random().toString(36).substr(2, 9),
      isAvailable: Math.random() < 0.5,
      picture: 'http://placehold.it/32x32',
      age: Math.floor(Math.random() * (70 - 22 + 1)) + 22,
      first_name: randomFirstName,
      last_name: randomLastName,
      gender: randomGender,
      email: `${randomFirstName.toLowerCase()}.${randomLastName.toLowerCase()}@example.com`,
      position: randomPosition,
      city: randomCity,
    });
  }

  return data;
}
