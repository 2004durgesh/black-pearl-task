# Project Documentation

## Overview

This React Native project consists of two main screens: `MapScreen` and `QRScanner`. The application utilizes various libraries and components to achieve functionality related to location services and QR code scanning.

## Screens

### MapScreen

The `MapScreen` displays a map centered around the user's current location. It features a marker at the user's coordinates and allows users to view detailed location information.

#### Location Information

- **Latitude:** User's latitude
- **Longitude:** User's longitude
- **City:** City information
- **Country:** Country information
- **Region:** Region information
- **District:** District information

#### Usage

1. Grant location permissions.
2. View the map with a marker at your location.
3. Press the "Show Location" button to display detailed information.

### QRScanner

The `QRScanner` screen allows users to scan QR codes using the device's camera. Upon scanning, it displays information about the scanned QR code.

#### Scanned Data Information

- **Type:** Type of QR code
- **Data:** Scanned data content

#### Usage

1. Grant camera permissions.
2. Scan QR codes using the device's camera.
3. View information about the scanned QR code.
4. Tap the "Tap to Scan Again" button to scan a new QR code.

## Project Structure


- /src
  - MapScreen.js
  - QRScanner.js
- App.js
- ...


## Installation

1. Clone the repository:

   bash
   git clone <repository-url>
   

2. Install dependencies:

   bash
   npm install
   

3. Run the application:

   bash
   npm start
   

## Screenshots

<!-- Placeholder for MapScreen Screenshot -->
![MapScreen](readme-assets\map.jpg)

<!-- Placeholder for QRScanner Screenshot -->
![QRScanner](readme-assets\qr.jpg)

## Video Demonstration

<video width="640" height="360" controls>
  <source src="readme-assets\video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
