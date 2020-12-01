const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const utils = require('./utils')

export default (function() {

  const nodeApp: any = express()

  nodeApp.use(bodyParser.urlencoded({ extended: false }))
  nodeApp.use(bodyParser.json())
  nodeApp.use(cors())

 
  // API VERSION ONE
  nodeApp.post("/api/v1/parse", function (req: any, res: any) {
    let data: any = req.body.data || {}
    const userInfo = utils.extractName(data, "v1")
    res.json({
      statusCode: 200,
      data: userInfo
    })
  })

// API VERSION TWO
  nodeApp.post("/api/v2/parse", function (req: any, res: any) {
    let data: any = req.body.data || {}
    const userInfo = utils.extractName(data, "v2")
    res.json({
      statusCode: 200,
      data: userInfo
    })
  })

  // APP LISTEN PORT 3000
  nodeApp.listen(3000, ()=> {
      console.log('express parser nodeApp started');
  })

})()