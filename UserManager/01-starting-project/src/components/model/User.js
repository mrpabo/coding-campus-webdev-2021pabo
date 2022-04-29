export class User {
  constructor(username, age) {
    this.id = Math.random().toString();
    this.username = username;
    this.age = age;
  }
}
