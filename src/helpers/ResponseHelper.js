
exports.successResponse = (res, msg, obj) => {
    if (obj) {
      return res.status(200).json({
        status: 1,
        message: msg,
        data: obj.data ? obj.data : obj,
      })
    }
    return res.status(200).json({
      status: 1,
      message: msg,
    })
  }
  
  exports.errorResponse = (res, msg, obj) => {
    if (obj) {
      return res.status(200).json({
        status: 0,
        error: msg,
        data: obj,
      })
    }
    return res.status(200).json({
      status: 0,
      error: msg,
    })
  }
  
  exports.internalErrorResponse = (res, msg) => {
    const data = {
      status: 0,
      message: msg,
    }
    return res.status(500).json(data)
  }
  
  exports.notFoundResponse = (res, msg) => {
    const data = {
      status: 0,
      message: msg,
    }
    return res.status(404).json(data)
  }
  
  exports.errorDataRequest = (res, msg, obj) => {
    const resData = {
      status: 0,
      message: msg,
      data: obj,
    }
    return res.status(400).json(resData)
  }
  
  exports.unauthorizedResponse = (res, msg) => {
    const data = {
      status: 0,
      message: msg,
    }
    return res.status(401).json(data)
  }
  
  exports.forbiddenResponse = (res, msg) => {
    const data = {
      status: 0,
      message: msg,
    }
    return res.status(403).json(data)
  }
  
  exports.deletedSuccessResponse = (res, msg) => {
    const data = {
      status: 1,
      message: msg,
    }
    return res.status(204).send(data)
  }
  