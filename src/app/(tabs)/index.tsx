import { Image, StyleSheet, Platform } from 'react-native';


import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={Colors.black}
      headerImage={
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.reactLogo}
        />
      }
      fullHeight={390.0}
      heightMultiplier={1.0}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText  type="title">Fabian Aps</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">ITler/DJ/Producer aus Leidenschaft</ThemedText>
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
    padding:32.0,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});
