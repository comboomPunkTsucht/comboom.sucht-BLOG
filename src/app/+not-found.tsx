import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { IconSymbol } from '@/components/ui/IconSymbol';
import ParallaxScrollView from '@/components/HomeParallaxScrollView';


const sadTexts = [
  "Oops! The page you're looking for doesn't exist.",
  "Sorry, we couldn't find the page you're looking for.",
  "The page you're trying to reach is lost in cyberspace.",
  "The page you're looking for has vanished into thin air.",
  "The page you're trying to access is nowhere to be found.",
  "Looks like this page took a wrong turn.",
  "Oh dear, it seems we've hit a dead end.",
  "This page seems to have gone on a vacation.",
  "It appears the page is playing hide and seek.",
  "The page seems to be off on an adventure.",
  "This page is feeling a bit camera shy.",
  "Oops! The page seems to be in stealth mode.",
  "Sorry, the page seems to be in incognito mode.",
  "The page might be on a coffee break.",
  "This page has gone incognito.",
  "Looks like this page is on a digital sabbatical.",
  "Sorry, it seems this page is off the grid.",
  "The page seems to have joined the witness protection program.",
  "Oops! It seems we've entered a no-page zone.",
  "Looks like this page has ghosted us.",
  "This page is practicing social distancing.",
  "Sorry, it seems the page has gone off the radar.",
  "The page is on a quest for the lost city of URLs.",
  "Oops! The page is taking a detour.",
  "Looks like this page is on a scenic route.",
  "This page is exploring uncharted territory.",
  "Sorry, the page is on an intergalactic adventure.",
  "The page is on a cosmic journey through cyberspace.",
  "Oops! It seems this page is in a parallel universe.",
  "Looks like this page is in stealth mode.",
  "This page is on a top-secret mission.",
  "Sorry, it seems this page is on a secret quest.",
  "The page is on a classified mission.",
  "Oops! The page is in ninja mode.",
  "Looks like this page is in witness protection.",
  "This page is incognito.",
  "Sorry, it seems this page is undercover.",
  "The page is on a covert operation.",
  "Oops! The page is on a stealth mission.",
  "Looks like this page is on a clandestine adventure.",
  "This page is in disguise.",
  "Sorry, it seems this page is on a classified quest.",
  "The page is on a hush-hush mission.",
  "Oops! The page is on a cloak-and-dagger operation.",
  "Looks like this page is on a furtive adventure.",
  "This page is on a need-to-know basis.",
  "Sorry, it seems this page is on a covert quest.",
  "The page is on a confidential mission.",
  "Oops! The page is on a sub-rosa operation.",
  "Looks like this page is on a surreptitious adventure.",
  "This page is on a down-low assignment.",
  "Sorry, it seems this page is on a classified quest.",
  "The page is on a hush-hush mission.",
  "Oops! The page is on a cloak-and-dagger operation.",
  "Looks like this page is on a furtive adventure.",
  "This page is on a need-to-know basis.",
  "Sorry, it seems this page is on a covert quest.",
  "The page is on a confidential mission.",
  "Oops! The page is on a sub-rosa operation.",
  "Looks like this page is on a surreptitious adventure.",
  "This page is on a down-low assignment.",
  "Sorry, it seems this page is on a covert quest.",
  "The page is on a confidential mission.",
  "Oops! The page is on a top-secret operation.",
  "Looks like this page is on a clandestine adventure.",
  "This page is in incognito mode.",
  "Sorry, it seems this page is on a secret quest.",
  "The page is on a classified mission.",
  "Oops! The page is on a stealth mission.",
  "Looks like this page is in witness protection.",
  "This page is incognito.",
  "Sorry, it seems this page is undercover.",
  "The page is on a covert operation.",
  "Oops! The page is on a stealth mission.",
  "Looks like this page is on a clandestine adventure.",
  "This page is in disguise.",
  "Sorry, it seems this page is on a classified quest.",
  "The page is on a hush-hush mission.",
  "Oops! The page is on a cloak-and-dagger operation.",
  "Looks like this page is on a furtive adventure.",
  "This page is on a need-to-know basis.",
  "Sorry, it seems this page is on a covert quest.",
  "The page is on a confidential mission.",
  "Oops! The page is on a sub-rosa operation.",
  "Looks like this page is on a surreptitious adventure.",
  "This page is on a down-low assignment.",
  "Sorry, it seems this page is on a classified quest.",
  "The page is on a hush-hush mission.",
  "Oops! The page is on a cloak-and-dagger operation.",
  "Looks like this page is on a furtive adventure.",
  "This page is on a need-to-know basis.",
  "Sorry, it seems this page is on a covert quest.",
  "The page is on a confidential mission.",
  "Oops! The page is on a sub-rosa operation.",
  "Looks like this page is on a surreptitious adventure.",
  "This page is on a down-low assignment.",
  "Sorry, it seems this page is on a covert quest.",
  "The page is on a confidential mission.",
  "Oops! The page is on a top-secret operation.",
  "Looks like this page is on a clandestine adventure.",
  "This page is in incognito mode.",
  "Sorry, it seems this page is on a secret quest.",
  "The page is on a classified mission.",
  "Oops! The page is on a stealth mission.",
  "Looks like this page is in witness protection.",
  "This page is incognito.",
  "Sorry, it seems this page is undercover.",
  "The page is on a covert operation.",
  "Oops! The page is on a stealth mission.",
  "Looks like this page is on a clandestine adventure.",
  "This page is in disguise.",
  "Sorry, it seems this page is on a classified quest.",
  "The page is on a hush-hush mission.",
  "Oops! The page is on a cloak-and-dagger operation.",
  "Looks like this page is on a furtive adventure.",
  "This page is on a need-to-know basis.",
  "Sorry, it seems this page is on a covert quest.",
  "The page is on a confidential mission.",
  "Oops! The page is on a sub-rosa operation.",
  "Looks like this page is on a surreptitious adventure.",
  "This page is on a down-low assignment.",
];

const getRandomSadText = () => {
  const randomIndex = Math.floor(Math.random() * sadTexts.length);
  return sadTexts[randomIndex];
};

export default function NotFoundScreen() {
  const randomSadText = getRandomSadText();
  return (
    <ParallaxScrollView
      headerBackgroundColor={Colors.styles.background}
      headerImage={
        <IconSymbol
          size={390}
          color={Colors.styles.text}
          name="󰇸"
          style={styles.headerImage}
        />
      }
      contentInsetAdjustmentBehavior='automatic'
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">404</ThemedText>
      </ThemedView>
      <ThemedView style={styles.subtitleContainer}>
        <ThemedText type='subtitle' >Not Found</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type='Mono-Regular' style={styles.stepContainer_text}>
          {randomSadText}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    flex: 1,
    alignSelf: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  subtitleContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  stepContainer_text: {
    textAlign: 'center',

  },
});
