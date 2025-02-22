export class User {
  private _fullname: string
  private _email: string
  private _password: string

  constructor(fullname: string, email: string, password: string) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  // Fullname getter and setter
  get fullname(): string {
    return this._fullname
  }

  set fullname(value: string) {
    if (!value || value.trim().length === 0) {
      throw new Error('Fullname cannot be empty')
    }
    this._fullname = value.trim()
  }

  // Email getter and setter with validation
  get email(): string {
    return this._email
  }

  set email(value: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      throw new Error('Invalid email format')
    }
    this._email = value.toLowerCase()
  }

  // Password getter and setter
  get password(): string {
    return this._password
  }

  set password(value: string) {
    if (!value || value.length < 6) {
      throw new Error('Password must be at least 6 characters long')
    }
    this._password = value
  }

  // Method to create a User instance from JSON data
  static fromJson(json: any): User {
    return new User(json.fullname, json.email, json.password)
  }

  // Method to convert User instance to JSON
  toJson(): object {
    return {
      fullname: this.fullname,
      email: this.email,
      password: this.password,
    }
  }

  // Method to create a test user with random data
  static createTestUser(): User {
    const timestamp = new Date().getTime()
    return new User(
      `Test User ${timestamp}`,
      `test${timestamp}@example.com`,
      `Password${timestamp}`,
    )
  }
}
