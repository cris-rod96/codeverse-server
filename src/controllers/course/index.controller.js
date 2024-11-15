import deleteCourse from './delete.controller.js'
import {
  getAllCourses,
  getAllDeletedCourses,
  getByTeacher,
  getByKey,
} from './list.controller.js'
import registerCourse from './register.controller.js'
import updateCourse from './update.controller.js'

export default {
  deleteCourse,
  getAllCourses,
  getAllDeletedCourses,
  getByTeacher,
  getByKey,
  registerCourse,
  updateCourse,
}
