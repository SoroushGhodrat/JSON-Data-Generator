import Data from '../declarations/models';
import {
  maleFirstNames,
  femaleFirstNames,
  lastNames,
  cities,
  positions,
  genders,
} from '../mocks/data';

export default function generateRandomData(count = 1): Array<Data> {
  const data = [];
  const ids = new Set();
  const names = new Set();
  while (data.length < count) {
    const id = Math.random().toString(36).substr(2, 9);
    if (ids.has(id)) continue;
    ids.add(id);

    const randomGender = genders[Math.floor(Math.random() * genders.length)];
    let randomFirstName, randomLastName;
    do {
      randomFirstName =
        randomGender === 'male'
          ? maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)]
          : femaleFirstNames[
              Math.floor(Math.random() * femaleFirstNames.length)
            ];
      randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    } while (names.has(`${randomFirstName} ${randomLastName}`));
    names.add(`${randomFirstName} ${randomLastName}`);

    const randomPosition =
      positions[Math.floor(Math.random() * positions.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];

    data.push({
      _id: id,
      first_name: randomFirstName,
      last_name: randomLastName,
      position: randomPosition,
      isAvailable: Math.random() < 0.5,
      gender: randomGender,
      age: Math.floor(Math.random() * (70 - 22 + 1)) + 22,
      picture: 'http://placehold.it/32x32',
      email: `${randomFirstName.toLowerCase()}.${randomLastName.toLowerCase()}@example.com`,
      city: randomCity,
    });
  }

  return data;
}
