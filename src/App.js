import React, { useEffect, useState } from "react"
import { CssBaseline, Grid } from "@material-ui/core"

import Header from "./components/Header/Header"
import List from "./components/List/List"
import MapElm from "./components/Map/Map"
import Footer from "./components/Footer/Footer"
import { getPlacesData, getWeatherData } from "./api"

const App = () => {
  const [places, setPlaces] = useState([])
  const [weatherData, setWeatherData] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [type, setType] = useState("restaurants")
  const [rating, setRating] = useState("")
  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [coordinates, setCoordinates] = useState([53.5511, 9.9937])
  const [bounds, setBounds] = useState({ ne: [0, 0], sw: [0, 0] })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates([latitude, longitude])
      },
      (error) => {
        console.log(error)
      },
      { enableHighAccuracy: true }
    )
  }, [])

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating)
    setFilteredPlaces(filteredPlaces)
  }, [rating, places])

  useEffect(() => {
    if (bounds.sw.length && bounds.ne.length) {
      setIsLoading(true)
      getWeatherData(coordinates[0], coordinates[1]).then((data) =>
        setWeatherData(data)
      )
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0))
        setFilteredPlaces([])
        setIsLoading(false)
      })
    }
  }, [bounds, type, coordinates])

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <MapElm
            places={filteredPlaces.length ? filteredPlaces : places}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            setChildClicked={setChildClicked}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  )
}

export default App
