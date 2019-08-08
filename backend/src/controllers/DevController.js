const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {

  /**
   * Create a new user
   * @param req
   * @param res
   * @returns {Promise<*|Promise<any>>}
   */
  async store(req, res){
    const {username} = req.body;

    /** verify if user exists */
    const userExists = await Dev.findOne({user: username});
    if(userExists){
      return res.json(userExists);
    }
    /** */
    const response = await axios.get(`https://api.github.com/users/${ username }`);
    /** */
    const {name, bio, avatar_url:avatar} = response.data;

    /** create user into database */
    const devData = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    });

    return res.json(devData);
  }
};