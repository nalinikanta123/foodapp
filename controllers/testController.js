const express = require('express');

const testController = (req, res) => {
  res.status(200).json({
    message: 'Test controller is working!'
  })
};

  module.exports = { testController};