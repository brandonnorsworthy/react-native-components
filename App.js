import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default function App() {
  const onPressLearnMore = () => {
    console.log('Learn more button pressed');
  };

  return (
    <View style={styles.container}>
      <Text>Updated text!</Text>
      <StatusBar style="auto" />
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#0087FE"
        accessibilityLabel="Learn more about this purple button"
      />
      <FlatList
        style={styles.flatList}
        data={DATA}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={item => item.id}
        ListFooterComponent={<Text> Footer</Text >}
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <ImageBackground
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    marginTop: 50,
  },
  flatList: {
    backgroundColor: '#fff',
    borderBlockColor: '#000',
    borderWidth: 5,
    padding: 0,
    height: 150,
    width: 200,
  },
  image: {
    width: 200,
    height: 50,
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  }
});
