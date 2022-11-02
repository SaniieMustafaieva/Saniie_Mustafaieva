class File extends Path {
  #size;
  #content;

  constructor(content, path) {
    super(path);
    this.#content = content;
    this.#size = content.size();
  }
  getContent() {
    return this.#content;
  }

  getSize() {
    return this.#size;
  }
}
