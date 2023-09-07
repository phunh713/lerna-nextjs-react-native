import {useTodos} from 'shared';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const Todo = () => {
  const {data} = useTodos();
  useEffect(() => {
    console.log('calling api');
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(data => {
        console.log({data});
      })
      .catch(error => {
        console.log(error);
      });
    return () => {};
  }, []);

  return (
    <>
      {data?.slice(0, 10).map(item => (
        <View key={item.id}>
          <Text>
            id: {item.id} - title: {item.title}
          </Text>
        </View>
      ))}
    </>
  );
};

export default Todo;
