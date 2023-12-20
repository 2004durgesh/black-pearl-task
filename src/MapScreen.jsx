import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, reverseGeocodeAsync } from 'expo-location';
import tw from 'twrnc';
const MapScreen = () => {
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
    });
    const [address, setAddress] = useState({});
    useEffect(() => {
        const requestLocationPermission = async () => {
            const { status } = await requestForegroundPermissionsAsync();
            if (status === 'granted') {
                const { coords } = await getCurrentPositionAsync({});
                const { latitude, longitude } = coords;
                setLocation({ latitude, longitude });
            } else {
                // Location permission not granted, handle accordingly.
                console.log('Location permission not granted');
            }
        };

        requestLocationPermission();
    }, []);
    const getReverseGeocodingAsync = async (latitude, longitude) => {
        try {
            let location = await reverseGeocodeAsync({ latitude, longitude });
            return location[0];
            // The `location` object contains information about the reversed geocoding result
        } catch (error) {
            console.error('Error in reverse geocoding:', error);
        }
    };

    const showLocation = async () => {
        const reverseGeocodingResult = await getReverseGeocodingAsync(location.latitude, location.longitude);
        setAddress(reverseGeocodingResult);
        console.log(reverseGeocodingResult);
        const alertMessage = `Location Information:
  Latitude: ${location.latitude}
  Longitude: ${location.longitude}
  City: ${address.city || 'N/A'}
  Country: ${address.country || 'N/A'}
  Region: ${address.region || 'N/A'}
  District: ${address.district || 'N/A'}`;
        location && address && alert(alertMessage);;
    };

    return (
        <View style={tw`flex-1 bg-black h-full`}>
            <MapView
                style={tw`flex-1`}
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 1,
                    longitudeDelta: 1,
                }}
            >
                <Marker coordinate={location} title="Your Location" />
            </MapView>
            <TouchableOpacity
                onPress={showLocation}
                style={tw`bg-blue-500 p-3 rounded items-center mt-4`}
            >
                <Text style={tw`text-white font-bold text-lg`}>Show Location</Text>
            </TouchableOpacity>

        </View>
    );
};

export default MapScreen;
