import { Router } from 'express'
import { responseController } from '../../controllers/index.controllers.js'

const responseRouter = Router()

responseRouter.post('/', responseController.registerResponse)
responseRouter.get('/activity/:activity_id', responseController.getByActivity)
responseRouter.get('/student/:student_id', responseController.getByActivity)
responseRouter.get('/student-activity', responseController.getStudentByActivity)

export default responseRouter
