abstract class Girl {
  abstract skill()
}

class Waiter extends Girl {
  skill() {
    console.log('Waiter')
  }
}

class BaseTeacher extends Girl {
  skill() {
    console.log('BaseTeacher')
  }
}

class SeniorTeacher extends Girl {
  skill() {
    console.log('SeniorTeacher')
  }
}