import * as WebBrowser from 'expo-web-browser';
import React,{ Component } from 'react';
import {
  Container, Header, Content, Button, Text
} from 'native-base';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

export default class HomeScreen extends Component {
  render(){
    return ( 
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
      }}>
        <View>
          <Text style={{fontSize: 52, color: 'grey', marginLeft: width * 0.33,}}>Apka</Text>
        </View>
        <View>
          <Text style={{fontSize: 12, fontStyle: "italic", color: '#d1d3d6', marginLeft: width * 0.3,marginRight: width * 0.3, marginTop: height * 0.05}}>'Read the best articles in the entire of the universe with one simple tap.' ~ Darth Vader also known as Anakin Skywalker</Text>
        </View>
        <View style={{marginLeft: width * 0.37, marginBottom: height * 0.2, marginTop: height*0.25}}>
        <Button bordered info onPress={() => {this.props.navigation.navigate('Articles')}}>
              <Text>Continue</Text>
        </Button>
        </View>
      </View>
    
    );
  }
}

HomeScreen.navigationOptions = {
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
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
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
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centerposition: {
    flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
   },
   logo: {
    height: 100, 
    backgroundColor: 'steelblue',
   }
  });