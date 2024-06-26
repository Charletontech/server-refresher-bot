const axios = require('axios')
const home = async  (req, res) => {
    if (!req.headers['authorization']) {
        res.json({message:"access denied"})
        return
    } else {
        req.headers['authorization'] === process.env.TOKEN ? 
        refreshServer() :
        res.json({message: "wrong token provided"})
    }
    
    function refreshServer() {
        res.json({message:"BOT still running"})
        setInterval( async () => {
            var res = await axios.get('https://phoenixdigitalcrest.org/refresh')
            // console.log(res.data)
        },60 * 16 * 1000)
    }
   
}

module.exports = {home}
