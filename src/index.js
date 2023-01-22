module.exports = function check(str, bracketsConfig) {
  let shield = '\\';
  let bracketsArr = [];
  let string = str;

  if (+bracketsConfig[0][0]) {
    shield = ''
  }

  bracketsArr = bracketsConfig.map(item => item.join(shield));

  if (str.length % 2) {
    return false
  }

  for (i = 0; i < str.length / 2; i++) {
      bracketsArr.forEach(e => {
          let re = new RegExp(shield + e)
          string = string.replace(re, '')
      })
      if (!string) {
        return true
      }
  }

  return false
}