import { Map, Marker, Overlay } from "pigeon-maps"

import useStyles from "./styles.js"

const MapElm = ({
  setCoordinates,
  setBounds,
  coordinates,
  places = [],
  setChildClicked,
  weatherData,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.mapContainer}>
      <Map
        defaultCenter={coordinates}
        defaultZoom={18}
        onBoundsChanged={({ center, bounds }) => {
          setCoordinates(center)
          setBounds(bounds)
        }}
      >
        {places?.map((place, i) => (
          <Marker
            key={i}
            payload={i}
            color={"#3f51b5"}
            width={50}
            anchor={[Number(place.latitude), Number(place.longitude)]}
            onClick={({ payload }) => setChildClicked(payload)}
          />
        ))}
        {weatherData?.list?.length &&
          weatherData.list?.map((data, i) => (
            <Overlay key={i} anchor={[data.coord.lat, data.coord.lon]}>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                width={70}
                height={70}
                alt={`weather${i}`}
              />
            </Overlay>
          ))}
      </Map>
    </div>
  )
}

export default MapElm
