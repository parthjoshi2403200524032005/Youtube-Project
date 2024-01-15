class ApiError extends error {
  constructor(
    statuscode,
    message = "Something went wrong",
    errors = [],
    Statck = ""
  ) {
    super(message)
    this.statuscode = statuscode
    this.data = null
    this.message = message
    this.errors = errors
    this.success = false

    if (Statck) {
      this.Statck = Statck
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

export { ApiError }
