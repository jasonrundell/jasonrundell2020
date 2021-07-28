const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index
}

const generatePassword = ({
  passwordLength = 16,
  charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-=~`',
}) => {
  let retVal = ''
  for (var i = 0, n = charset.length; i < passwordLength; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n))
  }
  return retVal
}

export { onlyUnique, generatePassword }
