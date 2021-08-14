const axios = require('axios')

const clientIdHeader = (clientId) => ({
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': clientId,
  },
})

const basicAuthHeader = (userName, password) => ({
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    Authorization:
      `Basic ${Buffer.from(`${userName}:${password}`).toString('base64')}`,
  },
})

const bearerAuthHeader = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

const clientIdBearerAuthHeader = (clientId, token) => ({
  headers: {
    'Client-ID': clientId,
    'content-type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${token}`,
  },
})

const get = async (url, config) => {
  const result = await axios.get(url, config)
  if (result?.data) {
    return result.data
  }
  return null
}

const post = async (url, body, config) => {
  const result = await axios.post(url, body, config)
  if (result?.data) {
    return result.data
  }
  return null
}

const put = async (url, body, config) => {
  const result = await axios.put(url, body, config)
  if (result?.data) {
    return result.data
  }
  return null
}
exports.basicAuthHeader = basicAuthHeader
exports.bearerAuthHeader = bearerAuthHeader
exports.clientIdBearerAuthHeader = clientIdBearerAuthHeader
exports.get = get
exports.clientIdHeader = clientIdHeader
exports.post = post
exports.put = put
