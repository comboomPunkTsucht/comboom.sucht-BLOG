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
    <>
      <ThemedText>{maintainer}</ThemedText>
      <ExternalLink href='https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland&ll=52.551673,13.558337'>
        <ThemedText>Ludwig-Renn-Straße 33</ThemedText>
        <ThemedText>12679 Berlin, Deutschland</ThemedText>
      </ExternalLink>
    </>

  );

  const Email = () => (
    <ExternalLink href={`mailto:${emailaddress}`}>
      <ThemedText>{emailaddress}</ThemedText>
    </ExternalLink>
  );

  const Phone = () => (
    <ExternalLink href={`tel:${phonenumber}`}>
      <ThemedText>{phonenumber}</ThemedText>
    </ExternalLink>
  );

  const Contact = () => (
    <>
      <Phone />
      <Email />
    </>
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
