import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { point } from '@turf/helpers';
import destination from '@turf/destination';

const aaa = () => {
  const [elements, setElements] = useState<any[]>([]);
  const [south, setSouth] = useState<number | null>(null);
  const [west, setWest] = useState<number | null>(null);
  const [north, setNorth] = useState<number | null>(null);
  const [east, setEast] = useState<number | null>(null);

  const onRegionChangeComplete = (region: any) => {
    const center = point([region.longitude, region.latitude]);
    const verticalMeter = 111 * region.latitudeDelta / 2;
    const horizontalMeter = 111 * region.longitudeDelta / 2;
    const options = { units: 'kilometers' };
    const southDestination = destination(center, verticalMeter, 180, options);
    const westDestination = destination(center, horizontalMeter, -90, options);
    const northDestination = destination(center, verticalMeter, 0, options);
    const eastDestination = destination(center, horizontalMeter, 90, options);

    setSouth(southDestination.geometry.coordinates[1]);
    setWest(westDestination.geometry.coordinates[0]);
    setNorth(northDestination.geometry.coordinates[1]);
    setEast(eastDestination.geometry.coordinates[0]);
  };

  const fetchToilet = async () => {
    if (south === null || west === null || north === null || east === null) return;

    const body = `
      [out:json];
      (
          node
          [amenity=kindergarten]
          (${south},${west},${north},${east});
      );
      out;
    `;

    const options = {
      method: 'POST',
      body: body
    };

    console.log('====================================');
    console.log('fetchToilet', options);
    console.log('====================================');

    try {
      const response = await fetch('https://overpass-api.de/api/interpreter', options);
      const json = await response.json();
      setElements(json.elements);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        onRegionChangeComplete={onRegionChangeComplete}
        style={styles.mapView}
        initialRegion={{
            latitude: 35.681236,
            longitude: 139.767125,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
      >
        {elements.map((element) => (
          <Marker
            coordinate={{
              latitude: element.lat,
              longitude: element.lon,
            }}
            title={element.tags["name"] || "保育園"}
            key={"id_" + element.id}
          />
        ))}
      </MapView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={fetchToilet}
          style={styles.button}
        >
          <Text style={styles.buttonItem}>Getting nursery schools</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: .5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapView: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  button: {
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,235,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonItem: {
    textAlign: 'center',
  },
});

export default aaa;
