export const getGraphQlError = error => {
  return {
    error: true,
    message: error.toString().replace('Error: GraphQL error: ', '')
  }
}

export const validateFields = (validations, values, alert = 'Error trying to create the item') => {
  const messages = {}

  Object.keys(validations).forEach(field => {
    const { len, isEmpty } = validations[field]

    if (len && len.arg) {
      if (values[field].length !== len.arg) {
        messages[field] = {
          msg: len.msg
        }
      }
    }

    if (isEmpty) {
      if (values[field] === '' || !values[field]) {
        messages[field] = {
          msg: isEmpty.msg
        }
      }
    }
  })

  return Object.keys(messages).length > 0
    ? {
      error: true,
      alert,
      messages
    }
    : {
      error: false
    }
}
