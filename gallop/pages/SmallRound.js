import React from 'react';

import { StyleSheet, Dimensions } from 'react-native';

import MapView, { Polyline, ProviderPropType } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 18.29487574717089;
const LONGITUDE = 99.50808725844814;
const LATITUDE_DELTA = 0.0150;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const COORDINATES = [
    { latitude: 18.29424478689534, longitude: 99.50803594551438 },
    { latitude: 18.294051241986992, longitude: 99.50311140961674 },
    { latitude: 18.293205753800272, longitude: 99.50076179444989 },
    { latitude: 18.29400030908045, longitude: 99.50713472325859 },

];

const COLORS = [
  '#7F0000',
  '#000000', // no color, creates a "long" gradient between the previous and next coordinate
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
          strokeColor="#1E90FF"
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
