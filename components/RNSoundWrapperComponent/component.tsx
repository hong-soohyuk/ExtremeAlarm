// Import the react-native-sound module
import React from 'react';
import Sound from 'react-native-sound';
import {View, Button} from 'react-native';
import {sounds} from './Sounds';

const playSound = (soundPath: any) => {
  // If the audio is a 'require' then the second parameter must be the callback.
  const sound: Sound = new Sound(
    require('../../assets/sounds/rooster.mp3'),
    error => {
      if (error) {
        console.log(`failed to load the sound`, error);
        return;
      }

      // Play the sound with an onEnd callback
      sound.play(success => {
        if (success) {
          console.log('successfully finished playing');
          sound.release();
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    },
  );
};

const NativeSound = () => {
  Sound.setCategory('Playback', true);
  return (
    <View
      style={{
        marginTop: 32,
        paddingHorizontal: 24,
      }}>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={() => playSound(sounds.ROOSTER)}
      />
    </View>
  );
};

export default NativeSound;
