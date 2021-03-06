const Sequelize = require('sequelize')
const moment = require('moment-timezone')
const sequelize = new Sequelize('app-db', 'app-user', '12345', {
  host: 'set-sequelize-timezone-db',
  dialect: 'postgres'
})

const User = sequelize.define('user', {
  birthday: Sequelize.DATE
})

sequelize.sync({force: true})
  .then(() => {
    const userBirthday = moment()
    console.log('Time right now and time to put into datebase: ' + moment(userBirthday).format("YYYY-MM-DD HH:mm:ss.SSS Z (dddd, MMMM Do YYYY, h:mm:ss a Z)"))
    return User.create({
      birthday: userBirthday.toDate()
    })
  })
  .then(createdUser => {
    return User.findOne({
      where: { id: 1 }
    })
  })
  .then(pulledUser => {
    console.log('Time pulled from database: ' + moment(pulledUser.birthday).format("YYYY-MM-DD HH:mm:ss.SSS Z (dddd, MMMM Do YYYY, h:mm:ss a Z)"))
    process.exit()
  })
