

class UtilityService {
    async testServiceMethod(param1, param2) {
        try {
            // Simulate a delay (like calling an external API or DB)
            await new Promise(resolve => setTimeout(resolve, 500));

            // Example logic
            const result = {
                param1,
                param2,
                concatenated: `${param1}-${param2}`,
                timestamp: new Date().toISOString()
            };

            return result;
        } catch (error) {
            throw new Error(`UtilityService error: ${error.message}`);
        }
    }
}

module.exports = new UtilityService();
