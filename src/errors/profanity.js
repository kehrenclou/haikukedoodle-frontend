export class NoProfanityAllowedError extends Error {
  constructor(message) {
    super(message);
    this.name = "NoProfanityAllowedError";
    this.mesage = message;
  }
}
