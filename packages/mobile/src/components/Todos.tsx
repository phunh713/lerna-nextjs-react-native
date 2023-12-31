import {useTodos} from 'common';
import React from 'react';
import {Text, View} from 'react-native';

const Welcome = () => {
  const {data} = useTodos();

  return data?.slice(0, 10).map(item => (
    <View key={item.id}>
      <Text>
        id: {item.id} - title: {item.title}
      </Text>
    </View>
  ));
};

export default Welcome;
