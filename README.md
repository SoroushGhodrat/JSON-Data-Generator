# JSON Data Generator

This is a React application built with TypeScript. It generates a JSON file with fake data, with a maximum of 100 entries.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. Clone the repository: `git clone <repository-url>`
2. Navigate into the cloned repository: `cd <repository-name>`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`

## Data Model

The application generates an array of data based on the following model:

```typescript
Data {
    _id: string;
    isAvailable: boolean;
    picture: string;
    age: number;
    first_name: string;
    last_name: string;
    gender: string;
    email: string;
    position: string;
    city: string;
}
```

## Features

- Generate fake JSON data
- Download the generated data as a JSON file
- Copy the generated data to clipboard
