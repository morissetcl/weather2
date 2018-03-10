import React from 'react';
 import { StyleSheet, TextInput, View } from 'react-native';

  export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  handleChangeText = (text) => {
    this.setState({ text: text });
  }
  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;
    if (!text) return;
    onSubmit(text);
    this.setState({ text: '' });
  };
   render(){
     const { placeholder } = this.props;
     const { text } = this.state;

     return (
       <View style={styles.container}>
         <TextInput
           autoCorrect={false}
           value={text}
           placeholder={placeholder}
           placeholderTextColor="white"
           style={styles.textInput}
           clearButtonMode="always"
           underlineColorAndroid="transparent"
           onChangeText={this.handleChangeText}
           onSubmitEditing={this.handleSubmitEditing}
         />
       </View>
     );
   }
  }

const styles = StyleSheet.create({
 container: {
   height: 40,
   backgroundColor: '#666',
   marginTop: 20,
   marginHorizontal: 20,
   paddingHorizontal: 10,
   borderRadius: 5,
   width: 300,
 },
 textInput: {
   flex: 1,
   color: 'white',
 },
});
