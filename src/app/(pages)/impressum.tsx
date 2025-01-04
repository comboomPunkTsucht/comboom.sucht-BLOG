import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ExternalLink } from '@/components/ExternalLink';

export default function Impressum() {
  const emailaddress = 'aps.fabian@outlook.com';
  const phonenumber = '+4917645172171';
  const maintainer = 'Aps, Fabian';

  const Address = () => (
    <ThemedView>
      <ThemedText>{maintainer}</ThemedText>
      <ExternalLink
        href='https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland&ll=52.551673,13.558337'
      >
        <ThemedView style={{ flexDirection: 'column' }}>
          <ThemedText>Ludwig-Renn-Straße 33</ThemedText>
          <ThemedText>12679 Berlin</ThemedText>
          <ThemedText>Deutschland</ThemedText>
        </ThemedView>
      </ExternalLink>
    </ThemedView>

  );

  const Contact = () => (
    <ThemedView style={{ flexDirection: 'column' }}>
      <ThemedView style={{ flexDirection: 'row' }}>
        <ThemedText>Telefon: </ThemedText>
        <ExternalLink href={`tel:${phonenumber}`}>
          <ThemedText>{phonenumber}</ThemedText>
        </ExternalLink>
      </ThemedView>
      <ThemedView style={{ flexDirection: 'row' }}>
        <ThemedText>E-Mail: </ThemedText>
        <ExternalLink href={`mailto:${emailaddress}`}>
          <ThemedText>{emailaddress}</ThemedText>
        </ExternalLink>
      </ThemedView>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText type='title' style={styles.title}>Impressum</ThemedText>
      <ThemedText type='subtitle' style={styles.subtitle}>Angaben gemäß § 5 TMG:</ThemedText>
      <Address />

      <ThemedText type='subtitle' style={styles.subtitle}>Kontakt:</ThemedText>
      <Contact />

      <ThemedText type='subtitle' style={styles.subtitle}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</ThemedText>
      <Address />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginTop: 25,
    marginBottom: 20,
  },
  subtitle: {
    marginTop: 15,
    marginBottom: 10,
  },
});
