import { AnySchema, mixed, object, string, date } from 'yup'
import { NextFunction, Response, Request } from 'express'
import { Weather, Season } from '../types'

export const schemaTravel = object({
  body: object({
    date: date().required('the date is required'),
    season: mixed<Weather>().oneOf(Object.values(Weather)).required('the weader is required'),
    weather: mixed<Season>().oneOf(Object.values(Season)).required('the weather is required'),
    amountPeople: string().required('the amount of people is required'),
    comment: string().min(5).max(255)
  })
})

export const validateBody = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    console.log('BODY***', req.body)
    await schema.validate({
      body: req.body
    })
    next()
  } catch (error: any) {
    res.status(404).json({
      ok: true,
      msg: error.errors.join(', ')
    })
  }
}

export default validateBody
