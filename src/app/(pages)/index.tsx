import { Image, StyleSheet } from 'react-native';


import ParallaxScrollView from '@/components/HomeParallaxScrollView/index.ios';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={Colors.black}
      headerImage={
        <Image
          source={require('@public/images/icon.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText  type="title">comboom.sucht</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">The MGaming Group</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 390.0,
    width: 390.0,
    padding: 32.0,
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});
