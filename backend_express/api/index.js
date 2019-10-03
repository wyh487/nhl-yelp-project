const axios = require("axios")

const getTeams = async() =>{
  try{
    const res = axios.get(`https://statsapi.web.nhl.com/api/v1/teams`);
    return res.data
  } catch(e) {
    return {error: e.response.data}
  }
}

const getTeamsById = async(teamId) =>{
  try{
    const res =  await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}`);
    return res.data
  } catch(e) {
    return {err: e.response.data}
  }
}

const getSchedules = async() =>{
  try{
    const res = await axios.get(`https://statsapi.web.nhl.com/api/v1/schedule`);
    return res.data
  } catch(e) {
    return {error: e.response.data}
  }
}

module.exports = {getTeams, getTeamsById, getSchedules}
