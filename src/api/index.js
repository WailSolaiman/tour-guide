import axios from "axios"

export const getPlacesData = async (type = "restaurants", sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        method: "GET",
        params: {
          bl_latitude: sw[0],
          tr_latitude: ne[0],
          bl_longitude: sw[1],
          tr_longitude: ne[1],
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        },
      }
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get(
        "https://community-open-weather-map.p.rapidapi.com/find",
        {
          params: { lat, lon: lng },
          headers: {
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          },
        }
      )

      return data
    }
  } catch (error) {
    console.log(error)
  }
}
