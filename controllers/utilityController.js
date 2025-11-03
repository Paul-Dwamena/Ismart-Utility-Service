const utilityService = require('../services/utilityService');
const { sendSuccess, sendError, ResponseCodes } = require("../utils/responseUtil");

class UtilityController {
    async testEndpoint(req, res) {
        try {
            const { param1, param2 } = req.body;
            // Simulate some processing
            const result = await utilityService.testServiceMethod(param1, param2);
            return sendSuccess(res, result, "Test endpoint successful");
        } catch (error) {
            return sendError(res, ResponseCodes.SERVER_ERROR, "Failed to process request", error.message);
        }
    }
}

module.exports = new UtilityController();
