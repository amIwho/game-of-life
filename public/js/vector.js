export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static add(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }
}
