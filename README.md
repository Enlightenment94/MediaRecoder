# Media Recorder

A web-based audio recording and playback application that demonstrates real-time audio streaming and processing capabilities.

## Overview

This project implements a web-based audio recording system that captures audio from the user's microphone, processes it in real-time, and allows for immediate playback. It showcases various web audio APIs and demonstrates how to handle audio streaming and transformation.

## Features

- Real-time audio recording from microphone
- Audio data transformation and processing
- Immediate playback of recorded audio
- Buffer management for continuous audio streaming
- Base64 encoding/decoding of audio data

## Project Structure

- `index.html` - Main application entry point
- `Recoder.js` - Handles audio recording functionality
- `Voice.js` - Manages audio playback and buffering
- `Pipe.js` - Handles data transformation (Base64 encoding/decoding)

## Components

### Recoder.js
The `Recoder` class manages audio recording using the MediaRecorder API. It:
- Captures audio from the user's microphone
- Processes audio chunks in real-time
- Provides start/stop functionality
- Handles data callbacks for processing

### Voice.js
The `AudioPlayer` class manages audio playback:
- Implements a buffer queue system
- Handles audio decoding and playback
- Manages audio context and source nodes
- Provides smooth playback of audio fragments

### Pipe.js
The `Pipe` class handles data transformation:
- Converts audio data to Base64 format
- Reverses Base64 encoding back to audio data
- Ensures data integrity during transformation

## Usage

1. Open `index.html` in a modern web browser
2. Grant microphone permissions when prompted
3. The application will automatically:
   - Start recording audio
   - Process the audio data
   - Play back the recorded audio after 5 seconds

## Technical Details

- Uses Web Audio API for audio processing
- Implements MediaRecorder API for audio capture
- Utilizes MediaSource Extensions for audio playback
- Supports WebM audio format with Opus codec

## Browser Compatibility

This application requires a modern web browser with support for:
- MediaRecorder API
- Web Audio API
- MediaSource Extensions
- Base64 encoding/decoding

## Security Considerations

- Requires user permission for microphone access
- Processes audio data locally in the browser
- No data is sent to external servers

## License

This project is open source and available for use under the MIT License. 