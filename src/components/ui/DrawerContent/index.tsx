import { Colors } from "@/constants/Colors";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { Image, StyleSheet } from 'react-native';
import { ThemedTouchableOpacity } from "@/components/ThemedTouchableOpacity";
import { ExternalLink } from "@/components/ExternalLink";

export default function MyDrawerContent(props: any) {
    const today = new Date();
    const router = useRouter()

    return (
        <ThemedView style={{
            flex: 1,
            paddingBottom:20,
            paddingTop: 20,
        }}>
            <ThemedTouchableOpacity onPress={() => router.replace('/')}>
                <ThemedView>
                    <Image source={require('@public/images/icon.png')}style={styles.reactLogo}/>
                    <ThemedText type='title' style={{alignSelf: 'center',}}>comboom.sucht</ThemedText>
                    <ThemedText type='subtitle' style={{alignSelf: 'center',}}>The MGaming Group</ThemedText>
                </ThemedView>
            </ThemedTouchableOpacity>
            <DrawerContentScrollView {...props}
                scrollEnabled={false}
                contentContainerStyle={{
                    backgroundColor: Colors.styles.background,
                    paddingHorizontal: 16,
                    height: '100%',
                    gap: 1,
                }}
            >
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <ThemedView
                style={{
                    borderTopColor: Colors.gray,
                    borderTopWidth: 1,
                    paddingTop: 20,
                    paddingLeft: 20,
                    flexDirection: 'column',
                }}
            >
                <ThemedTouchableOpacity onPress={() => router.replace('/')}>
                    <ThemedText type={'Sans-SemiBold'} style={{
                        color: Colors.gray,
                    }}>
                        &copy; {today.getFullYear()} comboom.sucht
                    </ThemedText>
                </ThemedTouchableOpacity>
                <ThemedView style={{
                    flexDirection: 'row',
                    padding: 2,
                    gap:2,
                }}>
                    <ThemedTouchableOpacity onPress={() => router.replace('/')}>
                        <ThemedText type={'link'} style={{ color: Colors.styles.text, }}>comboom.sucht</ThemedText>
                    </ThemedTouchableOpacity>
                    <ThemedText type={'Sans-Regular'} style={{ color: Colors.styles.text, }}>|</ThemedText>
                    <ThemedTouchableOpacity onPress={() => router.replace('/impressum')}>
                        <ThemedText type={'link'} style={{ color: Colors.styles.text, }}>Impressum</ThemedText>
                    </ThemedTouchableOpacity>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    reactLogo: {
        height: 200.0,
        width: 200.0,
        padding: 32.0,
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'relative',
  }
});