import { Redirect } from 'expo-router';

export default function HomeScreen() {
  return <Redirect href={'/(auth)/login'} />;
//     <View style={styles.container}>
//       <Text>Hello world</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
}
