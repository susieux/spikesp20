import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';
import BatchedBridge from 'react-native/Libraries/BatchedBridge/BatchedBridge';

export default function Demos() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* <View style={styles.welcomeContainer}>
        <Image source={require('../assets/png/bird.png')} style={styles.welcomeImage}/>
        </View> */}

        <View style={styles.getStartedContainer}>
        <Text style={styles.title}>{"\n"}</Text>
        <Image source={require('../assets/png/art.png')} style={styles.welcomeImage}/>

        <Text style={styles.body}>{"\n"}</Text> 
        <Image source={require('../assets/png/art3.png')} style={styles.welcomeImage2}/>

        <Text style={styles.body}>{"\n"}</Text> 
        <Image source={require('../assets/png/art4.png')} style={styles.welcomeImage3}/>

        <Text style={styles.body}>{"\n"}</Text> 
        <Image source={require('../assets/png/catgif.gif')} style={styles.welcomeImage2}/>

        {/* <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />

          <Text style={styles.title}>Welcome!{"\n"}</Text>
          <Text style={styles.body}>Susie here. This is an application about me.{"\n"}</Text> */}

          {/* <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>screens/HomeScreen.js</MonoText>
          </View> */}

          {/* <Text style={styles.body}>
            I'm currently a senior at UW-Madison studying Computer Science and also pursuing a certificate in Game Design.{"\n"}
          </Text>

          <Text style={styles.body}>
            My interests including playing sports, playing video games (RPG's and MOBA's), PC building, and taking long naps.{"\n"}
          </Text>

          <Text style={styles.small}>
            Feel free to use any of the other tabs below to navigate between pages.
          </Text>
        </View> */}
        </View>

        {/* <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>

      {/* <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>Feel free to use any of the other tabs below to navigate between pages.</Text>

        <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>navigation/BottomTabNavigator.js</MonoText>
        </View>
      </View> */}
    </View>
  );
}

Demos.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    flex: 1,
    width: 525,
    height: 525,
    resizeMode: 'contain'
  },
  welcomeImage2: {
    flex: 1,
    width: 350,
    height: 350,
    resizeMode: 'contain'
  },
  welcomeImage3: {
    flex: 1,
    width: 450,
    height: 450,
    resizeMode: 'contain'
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  body: {
    fontSize: 1,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 0,
    textAlign: 'center',
  },
  small: {
    fontSize: 13,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
