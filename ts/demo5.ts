interface Student {
  name: string;
  age: number;
  grade: number;
  height?: number;
  say():string;
}

interface Teacher extends Student {
  teach():string
}
const student = {
  name: '小明',
  age: 11,
  grade: 90,
  height:175,
  say() {
    return '11233'
  },
  teach() {
    return '老师'
  }
}

function getStudent(student:Student) {
  if (student.grade >= 90) {
    console.log(`${student.name}的成绩优秀`)
  } else {
    console.log(`${student.name}的成绩不行`)
  }
  student.height && console.log(`${student.name}的身高是${student.height}`)
}
function getTeacher(student:Teacher) {
  console.log(student.teach())
}
getStudent(student)
getTeacher(student)