const ResponseHelper = require('../helpers/ResponseHelper')
const RequestHelper = require('../helpers/RequestHelper')
const util = require('../utils')

exports.getMatchesHistory = async (req, res) => {
  try {
    const { faceitId } = req.params
    const clientId = await util.getEnv('FACEIT_KEY')
    const faceitBaseUrl = 'https://open.faceit.com/data/v4/players/'
    const response = await RequestHelper.get(
      `${faceitBaseUrl}${faceitId}/history?game=csgo&limit=5`,
      RequestHelper.bearerAuthHeader(clientId),
    )

    return ResponseHelper.successResponse(res, 'User retrieved', response)
  } catch (error) {
    return ResponseHelper.internalErrorResponse(res, error.message)
  }
}