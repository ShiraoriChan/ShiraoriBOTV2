let handler = m => m

handler.before = function (m) {
  let user = global.DATABASE.data.users[m.sender]
        let role = (user.level <= 10) ? 'Beginner'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Kittel Town'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Black Woods'
          : ((user.level >= 30) && (user.level <= 70)) ? 'Farmount'
          : ((user.level >= 70) && (user.level <= 100)) ? 'Rosenvale'
          : ((user.level >= 130) && (user.level <= 150)) ? 'Amberhill'
          : ((user.level >= 150) && (user.level <= 170)) ? 'Master Fap'
          : ((user.level >= 170) && (user.level <= 200)) ? 'Master Woods'
          : 'Legend'
  user.role = role
  return true
}

module.exports = handler
