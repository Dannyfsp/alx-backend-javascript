export default class Building {
  constructor(sqft) {
    if (
      new.target !== Building && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw new Error('Class extending BUilding must overide evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
