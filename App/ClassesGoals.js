import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';
import BatchedBridge from 'react-native/Libraries/BatchedBridge/BatchedBridge';

export default function ClassesGoals() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          {/* <Image
            source={
              __DEV__
                ? require('../assets/png/frog.png')
                : require('../assets/png/frog.png')
            }
            style={styles.welcomeImage}
          /> */}
        </View>

        <View style={styles.welcomeContainer}>
          {/* <DevelopmentModeNotice /> */}
          {/* </View> */}

          {/* <View style={styles.welcomeContainer}> */}
          <Text style={styles.title}>{"\n"}</Text>
          <Text style={styles.title}>UW-Madison Coursework{"\n"}</Text>
          <Text style={styles.subtitle}>CS Classes</Text>
          <Text style={styles.body}>
          {"\t"}COMP SCI402: Intro- Comp Sci to K-12{"\n"}
          {"\t"}COMP SCI435: Intro- Cryptography{"\n"}
          {"\t"}COMP SCI506: Software Engineering{"\n"}
          {"\t"}COMP SCI536: Intro- Prog Langs/Compilers{"\n"}
          {"\t"}COMP SCI540: Intro- Artifical Intelligence{"\n"}
          {"\t"}COMP SCI559: Computer Graphics{"\n"}
          {"\t"}COMP SCI577: Intro- Algorithms{"\n"}
        
          </Text>
          <Text style={styles.subtitle}>Game Design Classes</Text>
          <Text style={styles.body}>
          {"\t"}CURRIC 277: Videogames + Learning{"\n"}
          {"\t"}CURRIC 357:	Game Design I{"\n"}
          {"\t"}CURRIC 432: Game Design II{"\n"}
          {"\t"}ART 428: Digital Imaging Studio{"\n"}
          </Text>
          <Text style={styles.subtitle}>Skills/Software</Text>
          <Text style={styles.body}>
          {"\t"}Adobe Photoshop; Premiere; After Effects {"\n"}
          {"\t"}Gamemaker Studio 2; Piskel; iMovie; OBS {"\n"}
          {"\t"}HTML/CSS; Javascript; ReactJS; p5.js{"\n"}
          {"\t"}Java; Node.js; SQLite{"\n"}
          {"\t"}Git; VSCode; Eclipse; Windows/OSX/Linux {"\n"}
          {"\t"}Wordpress; Bootstrap {"\n"}
          </Text>

          {/* <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>screens/HomeScreen.js</MonoText>
          </View> */}
          </View>

          <View style={styles.endContainer}>
          <Text style={styles.small}>
          I'm interested in designing games, making cool art, and designing UI/UX.{"\n"}
          </Text>

          {/* <Text style={styles.small}>
            Feel free to use any of the other tabs below to navigate between pages.
          </Text> */}

        <Image source={require('../assets/png/frog.png')} style={styles.welcomeImage}/>
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

ClassesGoals.navigationOptions = {
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
    // alignItems: 'center',
  },
  endContainer: {
    alignItems: 'center',
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    
    // marginTop: 3,
    // marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 25,
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
  subtitle: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  body: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'justify',
  },
  small: {
    fontSize: 15,
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
