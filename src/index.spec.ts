import { Person } from './app';

it('should create a person', () => {
  const person = new Person(1, 'John');
  expect(person.name).toBe('John');
});
