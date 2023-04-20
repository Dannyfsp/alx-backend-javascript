export default class HolbertonClass {
  constructor(size, location) {
    this._size = typeof size === 'number' ? size : undefined;
    this._location = typeof location === 'string' ? location : undefined;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = typeof value === 'number' ? value : undefined;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = typeof value === 'string' ? value : undefined;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    } if (hint === 'string') {
      return this._location;
    }
    throw new TypeError(`Cannot convert object to ${hint}`);
  }
}
