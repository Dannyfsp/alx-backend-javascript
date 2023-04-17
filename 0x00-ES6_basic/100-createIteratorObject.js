export default function createIteratorObject(report) {
  const employees = [];
  // eslint-disable-next-line
    for (const dep of Object.keys(report.allEmployees)) {
    // eslint-disable-next-line
        for (const emp of report.allEmployees[dep]) {
      employees.push(emp);
    }
  }

  return employees;
}
