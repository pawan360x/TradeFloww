const axios = require("axios");

module.exports.getNifty = async (req,res) => {
    try {
        const result = await axios.get(
            "https://www.nseindia.com/api/marketStatus",
            {
                headers: {
                    "User-Agent": "Mozilla/5.0",
                    "Accept": "application/json",
                    "Referer": "https://www.nseindia.com/"
                }
            }
        );

        return res.json(result.data.marketState[0].last);

    } catch (err) {
        console.error("NSE ERROR:", err.message);
        return null;
    }
};
