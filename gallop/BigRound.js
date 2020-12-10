import React from 'react';
import { StyleSheet, Dimensions, Button } from 'react-native';

import MapView, { Polyline, ProviderPropType } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 18.29487574717089;
const LONGITUDE = 99.50808725844814;
const LATITUDE_DELTA = 0.0270;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const COORDINATES = [
    { latitude: 18.29487574717089, longitude: 99.50808725844814 },
    { latitude: 18.285544633293075, longitude: 99.51289377714562 },
    { latitude: 18.290475109774302, longitude: 99.49207983461508 },
    { latitude: 18.29316440146896, longitude: 99.50092039579081 },
    { latitude: 18.29430530049067, longitude: 99.50298033237544 },
    { latitude: 18.293897837416523, longitude: 99.5071002055447 },
];

const COLORS = [
  '#7F0000',
  '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
  '#B24112',
  '#E5845C',
  '#238C23',
  '#7F0000',
];

class GradientPolylines extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

  render() {
    return (
      <MapView
        provider={this.props.provider}
        style={styles.container}
        initialRegion={this.state.region}
      >
        <Polyline
          coordinates={COORDINATES}
          strokeColor="#4169E1"
          strokeColors={COLORS}
          strokeWidth={6}
        />
      </MapView>
    );
  }
}

GradientPolylines.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default GradientPolylines;
