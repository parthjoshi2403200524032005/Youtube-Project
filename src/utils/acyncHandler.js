const acyncHandler = (requestHandler) => {
  ;(req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
  }
}

export { acyncHandler }

// const acyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,res,next)

//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }
