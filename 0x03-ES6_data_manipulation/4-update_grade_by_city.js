const updateStudentGradeByCity = (students, city, newGrades) => students.filter(
  (student) => student.location === city,
)
  .map((student) => {
    const gradeObj = newGrades.find((obj) => obj.studentId === student.id);
    if (gradeObj) {
      return { ...student, grade: gradeObj.grade };
    }
    return { ...student, grade: 'N/A' };
  });

export default updateStudentGradeByCity;
