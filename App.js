import React from 'react';
import { StyleSheet,
         Text,
         View,
         KeyboardAvoidingView,
         Platform,
         TextInput,
         ImageBackground,
       } from 'react-native';

import getImageForWeather from './utils/getImageForWeather';
import SearchInput from './components/SearchInput';

export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        location: '',
      };
    }
    handleUpdateLocation = city => {
      this.setState({
        location: city,
      });
    };
    componentDidMount() {
      this.handleUpdateLocation('San Francisco');
    }
  render() {
    const { location } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={getImageForWeather('Clear')}
          style={styles.image}
        >
        <View style={styles.contentContainer}>
          <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
          <Text style={styles.textStyle}>Sunshine</Text>
          <Text  style={[styles.smallText, styles.textStyle]} >27°c</Text>
          <SearchInput
            placeholder="Search any city"
            onSubmit={this.handleUpdateLocation}
          />
        </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'Roboto',
    color: 'white',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flexGrow:1,
    height:null,
    width:null,
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});
