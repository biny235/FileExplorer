const router = require('express').Router();
const path = require('path')

router.get('/', (req, res, next)=>{
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

router.post('/folders', (req, res, next)=>{
  
})

module.exports = router