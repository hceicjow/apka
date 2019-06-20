import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon, Body, Title, } from 'native-base';
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


export default class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles:[],
            apilink:'http://192.168.0.26:4000/'
        }
    }
    componentWillMount () {
         fetch(`${this.state.apilink}article`)
                 .then((res) => res.json())
                .then((resJson) => {
                   this.setState({
                       articles: resJson
                   });
              })
                  .catch((err)=>{
                      console.log(err);
               })
              }
    
    render() {
        const articlesList = this.state.articles.map((article, i) => {
            return(
                <ListItem key={article. _id} >
                    <Left>
                    <Text onPress={() => {
                        this.props.navigation.navigate('Article',{
                            articleTitle: article.article_title,
                            articleBody: article.article_body,
                            articleAuthor: article.article_author
                        })
                    }}>{article.article_title}</Text>
                    </Left>
                    <Right>
                    <Icon name="arrow-forward" />
                    </Right>
              </ListItem>
            )
        }) 
      return (
        <Container>
          <Content>
            <List>
              {articlesList}
             </List>
          </Content>
        </Container>
      );
    }
  }

Articles.navigationOptions = {
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
  });