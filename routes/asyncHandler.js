const express = require('express');

//async handler

  const asyncHandler = (functionToCallBack) => {
    return async(req, res, next) => {
      try {
        await functionToCallBack(req, res, next)
      } catch(error){
        res.status(500).send(error)
      }
    }
  }

  module.exports = { asyncHandler }