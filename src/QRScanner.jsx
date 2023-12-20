import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import tw from 'twrnc';
import { BarCodeScanner } from 'expo-barcode-scanner';

const QRScanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [scannedData, setScannedData] = useState({ type: '', data: '' });

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setScannedData({ type, data });
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={tw`flex-1 bg-black`}>
            <View style={styles.container}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && (
                    <ScrollView
                        contentContainerStyle={tw`bg-white p-4 mt-4 rounded`}
                        style={tw`flex-1`}
                    >
                        <Text style={tw`text-black`} selectable>
                            <Text style={tw`font-black`}>Copy the Data:</Text>{'\n'}
                            <View>
                                <Text>Type of Data is: {scannedData.type}</Text>
                                <Text>Data: <Text style={{textDecorationLine: 'underline'}} selectable>{scannedData.data}</Text></Text>
                            </View>
                        </Text>
                    </ScrollView>

                )}
                {scanned && (
                    <Button
                        title="Tap to Scan Again"
                        onPress={() => {
                            setScanned(false);
                            setScannedData('');
                        }}
                        style={tw`bg-blue-500 p-3 rounded items-center mt-4`}
                    />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default QRScanner;
