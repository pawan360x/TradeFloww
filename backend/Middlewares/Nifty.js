const axios = require("axios");

module.exports.Nifty = async () => {
    try {
        const res = await axios.get(
            "https://www.nseindia.com/api/marketStatus",
            {
                headers: {
                    "User-Agent": "Mozilla/5.0",
                    "Accept": "application/json",
                    "Referer": "https://www.nseindia.com/"
                }
            }
        );

        return res.data.marketState[0].last;

    } catch (err) {
        console.error("NSE ERROR:", err.message);
        return null;
    }
};