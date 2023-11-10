import Data from '../declarations/models';

// image and phone generate here. They do not use mocks data.
import {
  maleFirstNames,
  femaleFirstNames,
  lastNames,
  offices,
  positions,
  genders,
  frontendSkills,
  backendSkills,
  uiDesignerSkills,
  projectManagerSkills,
  fullstackSkills,
} from '../mocks/data';

export default function generateRandomData(count = 1): Array<Data> {
  const data = [];
  const names = new Set();
  while (data.length < count) {
    const id: string = crypto.randomUUID();
    // generate random gender
    const randomGender = genders[Math.floor(Math.random() * genders.length)];

    // generate a random unique first name and last name combination based on the gender
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

    // generate a random position
    const randomPosition =
      positions[Math.floor(Math.random() * positions.length)];

    // generate a random number of skills (between 5 and 30)
    const randomSkills: string[] = [];
    // generate a random number between 5 and 30
    const numSkills = Math.floor(Math.random() * (30 - 5 + 1)) + 5;
    let skillsArray: string[] = [];

    switch (randomPosition) {
      case 'frontend_developer':
        skillsArray = frontendSkills;
        break;
      case 'backend_developer':
        skillsArray = backendSkills;
        break;
      case 'ui_designer':
        skillsArray = uiDesignerSkills;
        break;
      case 'project_manager':
        skillsArray = projectManagerSkills;
        break;
      case 'fullstack_developer':
        skillsArray = fullstackSkills;
        break;
      default:
        throw new Error(`Invalid position: ${randomPosition}`);
    }

    while (randomSkills.length < numSkills) {
      const randomSkillIndex = Math.floor(Math.random() * skillsArray.length);
      if (!randomSkills.includes(skillsArray[randomSkillIndex])) {
        randomSkills.push(skillsArray[randomSkillIndex]);
      }
    }

    // generate a random office
    const randomOffice = offices[Math.floor(Math.random() * offices.length)];

    // generate a random phone number
    const randomPhone = Math.floor(10000000 + Math.random() * 90000000);

    // add all generated data to the data variable
    data.push({
      _id: id,
      first_name: randomFirstName,
      last_name: randomLastName,
      position: randomPosition,
      isAvailable: Math.random() < 0.5,
      gender: randomGender,
      age: Math.floor(Math.random() * (70 - 22 + 1)) + 22,
      image: 'http://placehold.it/32x32',
      email: `${randomFirstName.toLowerCase()}.${randomLastName.toLowerCase()}@example.com`,
      office: randomOffice,
      phone: randomPhone,
      skills: randomSkills,
    });
  }

  return data;
}
