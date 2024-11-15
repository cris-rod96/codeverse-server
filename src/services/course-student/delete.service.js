import { CourseStudent, Course, User } from '../../database/index.database.js'

// Servicio para eliminar el registro de un estudiante en un curso
const deleteCourseStudent = async (courseId, studentId) => {
  // Verifica si el curso existe
  const course = await Course.findByPk(courseId)
  if (!course || course.isDeleted) {
    return {
      code: 404,
      message: 'Curso no encontrado o eliminado.',
    }
  }

  // Verifica si el estudiante existe y está activo
  const student = await User.findOne({
    where: { id: studentId, isActive: true, isDeleted: false },
  })
  if (!student) {
    return {
      code: 404,
      message: 'Estudiante no encontrado o no activo.',
    }
  }

  // Verifica si el registro CourseStudent existe
  const courseStudent = await CourseStudent.findOne({
    where: { CourseId: courseId, StudentId: studentId },
  })
  if (!courseStudent) {
    return {
      code: 404,
      message: 'El registro del estudiante en el curso no fue encontrado.',
    }
  }

  // Realiza la eliminación del registro
  await courseStudent.destroy()

  return {
    code: 200,
    message: 'Registro eliminado con éxito.',
  }
}

export default deleteCourseStudent
