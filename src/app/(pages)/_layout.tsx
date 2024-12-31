import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { Platform } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import  MyDrawerContent from '@/components/ui/DrawerContent';

export default function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={MyDrawerContent}
        screenOptions={{
          //headerShown: false,
          //tabBarButton: HapticTab,
          headerTintColor: Colors.styles.foreground,
          headerBackButtonDisplayMode: 'minimal',
          headerTitleAllowFontScaling: true,
          headerStyle: {
            backgroundColor: Colors.styles.background,
            borderColor: Colors.gray,

          },
          headerTitleStyle: {
            fontFamily: 'Sans-Bold',
          },
          headerLeftContainerStyle: {

          },
          drawerInactiveBackgroundColor: Colors.styles.background,
          drawerActiveBackgroundColor: Colors.styles.selected_background,
          drawerInactiveTintColor: Colors.styles.foreground,
          drawerActiveTintColor: Colors.styles.selected_foreground,
          drawerLabelStyle: {
            fontFamily: 'Sans-Regular',
          },
          drawerAllowFontScaling: true,
          drawerStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
              backgroundColor: Colors.styles.background,

            },
            default: {
              backgroundColor: Colors.styles.background,
            },
          }),
          drawerHideStatusBarOnOpen: false,
          drawerIcon: ({ size, color}) => (<IconSymbol name='󰍜' size={32} color={color} style={{
              fontSize: size,
              lineHeight: size,
            }} />)
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: 'Home',
            headerTitle: 'Home',
            drawerIcon: ({ size, color }) => (<IconSymbol size={32} name="󱁍" color={color} style={{
              fontSize: size,
              lineHeight: size,
            }} />),
          }}
        />
        <Drawer.Screen
          name="aboutme"
          options={{
            title: 'About Me',
            headerTitle: 'About Me',
            drawerIcon: ({ size, color}) => (<IconSymbol size={32} name="" color={color} style={{
              fontSize: size,
              lineHeight: size,
            }} />),
          }}
        />
        <Drawer.Screen
          name="projects"
          options={{
            title: 'Projekte',
            headerTitle: 'Projekte',
            drawerIcon: ({ size, color}) => (<IconSymbol size={32} name="" color={color} style={{
              fontSize: size,
              lineHeight: size,
            }} />),
          }}
        />
        <Drawer.Screen
          name="lebenslauf"
          options={{
            title: 'Lebenslauf',
            headerTitle: 'Lebenslauf',
            drawerIcon: ({ size, color}) => (<IconSymbol size={32} name="󱪙" color={color} style={{
              fontSize: size,
              lineHeight: size,
            }} />),
          }}
        />
        <Drawer.Screen
          name="impressum"
          options={{
            title: 'Impressum',
            headerTitle: 'Impressum',
            drawerIcon: ({ size, color}) => (<IconSymbol size={32} name="󱪗" color={color} style={{
              fontSize: size,
              lineHeight: size,
            }} />),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
