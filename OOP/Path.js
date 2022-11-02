class Path extends FileSystemEntry{
  #location;

  constructor(location) {
    this.#location = location;
  }

  getLocation() {
    return this.#location;
  }
}
