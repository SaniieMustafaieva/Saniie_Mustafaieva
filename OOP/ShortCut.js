class Shortcut extends Path {
  #reference;

  constructor(reference) {
    this.#reference = reference;
  }
  
  getReference() {
    return this.#reference;
  }
}
