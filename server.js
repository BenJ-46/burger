const express = require('express')


app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())





app.listen(process.env.PORT || 3000)