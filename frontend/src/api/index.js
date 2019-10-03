import axios from 'axios'

const getSchedules = async() => {
  try {
    let res = await axios.get("/api/schedules")
    return res.data.dates 
  } catch(e) {
    return e.data
  }
}

export { getSchedules }