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


const arenas = [
  'Scotiabank Arena',
  'Enterprise Center',
  'KeyBank Center',
  'Nationwide Arena'
]

const searchTeams = [
  {"ID":1,"Name":"Restaurants"},
  {"ID":2,"Name":"Bars"},
  {"ID":3,"Name":"Takeout"},
  {"ID":4,"Name":"Gas Stations"},
  {"ID":5,"Name":"Hotels and Motels"}
]

const googleKey = 'AIzaSyBbxm4_TWme1G15Ed0Ghmnayjnnj6mYptU';

const getGoogleSuggestions = async() => {
  let calls = []
  let terms = []
  arenas.forEach( a =>{
    searchTeams.forEach( s => {
      terms.push(`${s.Name} near ${a}`)
      calls.push(axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${s.Name} near ${a}&inputtype=textquery&fields=formatted_address,name,opening_hours&key=${googleKey}`))
    })
  })
  return axios.all(calls).then(data => {
    let res = {}
    data.forEach( (d, i) => 
      res[terms[i]] = d.data.candidates[0]
    )
    return res
  })
}

module.exports = {getTeams, getTeamsById, getSchedules, getGoogleSuggestions}
