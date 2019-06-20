import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { withOrientation } from 'react-navigation';


export default class Article extends Component {
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        this.state = {
            articleTitle: params ? params.articleTitle : null,
            articleBody: params ? params.articleBody : null,
            articleAuthor: params ? params.articleAuthor : null,

        }
    }
    
    render() {
      return (
        <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>{this.state.articleTitle}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                {this.state.articleBody}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>- by {this.state.articleAuthor}</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
      );
    }
  }


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
  });