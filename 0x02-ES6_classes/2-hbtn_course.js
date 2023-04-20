export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = [];

    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (typeof length !== 'number' || length <= 0) {
      throw new TypeError('length must be a positive number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('students must be an array');
    }

    students.forEach((student) => {
      if (typeof student !== 'string') {
        throw new TypeError('each student must be a string');
      }
      this._students.push(student);
    });
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number' || length <= 0) {
      throw new TypeError('length must be a positive number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('students must be an array');
    }
    students.forEach((student) => {
      if (typeof student !== 'string') {
        throw new TypeError('each student must be a string');
      }
    });

    this._students = students;
  }
}
