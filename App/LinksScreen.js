import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Image, Platform, TouchableOpacity} from 'react-native';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text style={styles.title}>{"\n"}</Text>
      <OptionButton
        icon="logo-github"
        label="Github"
        onPress={() => WebBrowser.openBrowserAsync('https://github.com/susieux')}
      />

      <OptionButton
        icon="logo-linkedin"
        label="Linkedin"
        onPress={() => WebBrowser.openBrowserAsync('https://www.linkedin.com/in/susiecs/')}
      />

      <OptionButton
        icon="ios-brush"
        label="p5.js Sketches (best viewed on a PC)"
        onPress={() => WebBrowser.openBrowserAsync('https://editor.p5js.org/meowscular/sketches')}
        isLastOption
      />

      <OptionButton
        icon="logo-twitch"
        label="Twitch"
        onPress={() => WebBrowser.openBrowserAsync('https://twitch.tv/flipscular')}
        isLastOption
      />
    

      <OptionButton
        icon="logo-twitter"
        label="Twitter"
        onPress={() => WebBrowser.openBrowserAsync('https://twitter.com/flipscular')}
        isLastOption
      />

      <OptionButton
        icon="ios-at"
        label="ctwpsusie@gmail.com"
      />

<View style={styles.container}>
<View style={styles.getStartedContainer}>
<Image source={require('../assets/png/me.jpg')} style={styles.welcomeImage2}/>
</View>
<Text style={styles.small}>Hope to hear from you soon!</Text>
</View>

    </ScrollView>

  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  body: {
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 0,
    textAlign: 'center',
  },
  welcomeImage2: {
    flex: 1,
    width: 400,
    height: 400,
    resizeMode: 'contain'
  },
  small: {
    fontSize: 13,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
