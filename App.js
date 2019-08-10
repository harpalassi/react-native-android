import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Navigation, Card } from 'react-router-navigation';
import { NativeRouter, Link } from 'react-router-native';
import SideMenu from 'react-native-side-menu';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import Home from './components/Home';
import { FontAwesome } from '@expo/vector-icons';

export default class App extends Component {
  state = {
    isOpen: true
  };
  render = () => {
    return (
      <NativeRouter>
        <SideMenu
          menu={
            <View style={{ marginTop: 75 }}>
              <Link to="/" onPress={() => this.setState({ isOpen: false })}>
                <Text>Home</Text>
              </Link>
              <Link to="/PageOne" onPress={() => this.setState({ isOpen: false })}>
                <Text>PageOne</Text>
              </Link>
              <Link to="/PageTwo" onPress={() => this.setState({ isOpen: false })}>
                <Text>PageTwo</Text>
              </Link>
            </View>
          }
          isOpen={this.state.isOpen}
          menuPosition="right"
          onChange={isOpen => this.setState({ isOpen })}>
          <Navigation
            title="React Native"
            renderRightButton={() => (
              <FontAwesome
                name="bars"
                size={24}
                onPress={() => this.setState({ isOpen: !this.state.isOpen })}
              />
            )}>
            <Card exact path="/" component={Home} title="Home" />
            <Card path="/PageOne" component={PageOne} title="Page One" />
            <Card path="/PageTwo" component={PageTwo} title="Page Two" />
          </Navigation>
        </SideMenu>
      </NativeRouter>
    );
  };
}
