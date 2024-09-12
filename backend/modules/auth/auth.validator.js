export const validate = (schema) => (req, res, next) => {
  try {

    schema.parse(req.body)
    next()

  } catch (err) {

    if(err.errors){
      console.log(err.errors)
      return res.status(400).json({
        success: false,
        errors: err.errors.map(e => ({
          path: e.path.join(', '),
          message: e.message
        }))
      })
    }
    next(err)
  }
}