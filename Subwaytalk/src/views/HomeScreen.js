import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default class HomeScreen extends Component {
  static navigatorStyle = {
    drawUnderTabBar: true
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={ this.onNextButtonPress.bind(this) }>
          <Text style={styles.button}>다음 화면</Text>
        </TouchableOpacity>
      </View>
    );
  }
  onNextButtonPress() {
    this.props.navigator.push({
      title: "More",
      screen: "subwayTalk.MessageScreen"
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    color: 'blue'
  }
});
