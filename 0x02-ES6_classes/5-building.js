export default class Building {
  constructor(sqft) {
    if (
      new.target !== Building && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw new Error('Class extending BUilding must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // getter method
  get sqft() {
    return this._sqft;
  }
}
