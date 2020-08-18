const express = require('express');
const auth = require('basic-auth');

//async handler

  const asyncHandler = (functionToCallBack) => {
    return async(req, res, next) => {
      try {
        await functionToCallBack(req, res, next)
      } catch(error){
        res.status(500).send(error)
        console.log(error)
      }
    }
  }

//authentication middleware

  const authenticateUser = (req, res, next) => {
    
    next();
  }

  module.exports = { 
    asyncHandler,
    authenticateUser 
  }