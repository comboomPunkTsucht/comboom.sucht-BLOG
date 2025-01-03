import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import 'expo-dev-client';
import { Colors } from '@/constants/Colors';
import { ThemedTouchableOpacity } from '@/components/ThemedTouchableOpacity';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  fade: true,
});

export default function App() {
  const router = useRouter()
  const [loaded] = useFonts({
    'Sans-Bold': require('@public/fonts/CaskaydiaCoveNerdFontPropo-Bold.ttf'),
    'Sans-BoldItalic': require('@public/fonts/CaskaydiaCoveNerdFontPropo-BoldItalic.ttf'),
    'Sans-ExtraLight': require('@public/fonts/CaskaydiaCoveNerdFontPropo-ExtraLight.ttf'),
    'Sans-ExtraLightItalic': require('@public/fonts/CaskaydiaCoveNerdFontPropo-ExtraLightItalic.ttf'),
    'Sans-Italic': require('@public/fonts/CaskaydiaCoveNerdFontPropo-Italic.ttf'),
    'Sans-Light': require('@public/fonts/CaskaydiaCoveNerdFontPropo-Light.ttf'),
    'Sans-LightItalic': require('@public/fonts/CaskaydiaCoveNerdFontPropo-LightItalic.ttf'),
    'Sans-Regular': require('@public/fonts/CaskaydiaCoveNerdFontPropo-Regular.ttf'),
    'Sans-SemiBold': require('@public/fonts/CaskaydiaCoveNerdFontPropo-SemiBold.ttf'),
    'Sans-SemiBoldItalic': require('@public/fonts/CaskaydiaCoveNerdFontPropo-SemiBoldItalic.ttf'),
    'Sans-SemiLight': require('@public/fonts/CaskaydiaCoveNerdFontPropo-SemiLight.ttf'),
    'Sans-SemiLightItalic': require('@public/fonts/CaskaydiaCoveNerdFontPropo-SemiLightItalic.ttf'),
    'Mono-Bold': require('@public/fonts/CaskaydiaCoveNerdFontMono-Bold.ttf'),
    'Mono-BoldItalic': require('@public/fonts/CaskaydiaCoveNerdFontMono-BoldItalic.ttf'),
    'Mono-ExtraLight': require('@public/fonts/CaskaydiaCoveNerdFontMono-ExtraLight.ttf'),
    'Mono-ExtraLightItalic': require('@public/fonts/CaskaydiaCoveNerdFontMono-ExtraLightItalic.ttf'),
    'Mono-Italic': require('@public/fonts/CaskaydiaCoveNerdFontMono-Italic.ttf'),
    'Mono-Light': require('@public/fonts/CaskaydiaCoveNerdFontMono-Light.ttf'),
    'Mono-LightItalic': require('@public/fonts/CaskaydiaCoveNerdFontMono-LightItalic.ttf'),
    'Mono-Regular': require('@public/fonts/CaskaydiaCoveNerdFontMono-Regular.ttf'),
    'Mono-SemiBold': require('@public/fonts/CaskaydiaCoveNerdFontMono-SemiBold.ttf'),
    'Mono-SemiBoldItalic': require('@public/fonts/CaskaydiaCoveNerdFontMono-SemiBoldItalic.ttf'),
    'Mono-SemiLight': require('@public/fonts/CaskaydiaCoveNerdFontMono-SemiLight.ttf'),
    'Mono-SemiLightItalic': require('@public/fonts/CaskaydiaCoveNerdFontMono-SemiLightItalic.ttf'),
    'Serif-Bold': require('@public/fonts/CaskaydiaCoveNerdFont-Bold.ttf'),
    'Serif-BoldItalic': require('@public/fonts/CaskaydiaCoveNerdFont-BoldItalic.ttf'),
    'Serif-ExtraLight': require('@public/fonts/CaskaydiaCoveNerdFont-ExtraLight.ttf'),
    'Serif-ExtraLightItalic': require('@public/fonts/CaskaydiaCoveNerdFont-ExtraLightItalic.ttf'),
    'Serif-Italic': require('@public/fonts/CaskaydiaCoveNerdFont-Italic.ttf'),
    'Serif-Light': require('@public/fonts/CaskaydiaCoveNerdFont-Light.ttf'),
    'Serif-LightItalic': require('@public/fonts/CaskaydiaCoveNerdFont-LightItalic.ttf'),
    'Serif-Regular': require('@public/fonts/CaskaydiaCoveNerdFont-Regular.ttf'),
    'Serif-SemiBold': require('@public/fonts/CaskaydiaCoveNerdFont-SemiBold.ttf'),
    'Serif-SemiBoldItalic': require('@public/fonts/CaskaydiaCoveNerdFont-SemiBoldItalic.ttf'),
    'Serif-SemiLight': require('@public/fonts/CaskaydiaCoveNerdFont-SemiLight.ttf'),
    'Serif-SemiLightItalic': require('@public/fonts/CaskaydiaCoveNerdFont-SemiLightItalic.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  return (
    <>
      <Stack>
        <Stack.Screen name="(pages)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={
          {
            headerTintColor: Colors.styles.foreground,
            headerBackButtonDisplayMode: 'minimal',
            headerStyle: {
              backgroundColor: Colors.styles.background,
            },
            headerLargeTitle: true,
            headerLargeTitleStyle: {
              fontFamily: 'Sans-Bold',
            },
            headerTitleStyle: {
              fontFamily: 'Sans-Bold',
            },
            title: '404 Not Found',
            headerBackTitle: 'Back',
            headerBackVisible: true,
            headerBackTitleStyle: {
              fontFamily: 'Sans-Bold',
            },
            headerRight: () => (
              <ThemedTouchableOpacity onPress={() => router.push('/')}>
                <ThemedText
                  type={'link'}
                  style={
                    {
                      paddingHorizontal: 5,
                      marginHorizontal: 5,
                    }
                  }
                >
                  Home
                </ThemedText>
              </ThemedTouchableOpacity>
            ),

          }
        } />
      </Stack>
      <StatusBar
        style="auto"
        animated={true}
        backgroundColor={Colors.styles.background}
        translucent={true}
      />
    </>
  );
}
