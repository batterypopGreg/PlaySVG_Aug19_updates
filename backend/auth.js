// AUTH: Route handlers for authorization

// Username and password hardcoded like in client app
// TODO: After experimentation phase, 100% change this!
const USERNAME = 'admin'
const PASSWORD = 'HDK39PL8'
const TOKEN = 'cb c2 12 b6 21 59 44 06 7d 6c'

const login = async (req, res) => {
    const { username, password } = req.body
    if (username === USERNAME && password === PASSWORD) {
        return res.status(200).json({ token: TOKEN })
    } else {
        return res.status(400).send('invalid')
    }
}

module.exports = {
    login
}