export class Kata {
  static validatePin(pin: string): boolean {
      const regex = /^(\d{4}|\d{6})$/;
      return regex.test(pin)
  }
}
