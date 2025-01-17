import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Perform any initialization or asynchronous operations here.
    // Accessing 'count' after component mounts is safe.
    console.log('Count after mount:', count);
  }, []);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default MyComponent;