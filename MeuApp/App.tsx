/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  Linking,
  Platform,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    async function requestUserPermission() {
      try {
        // Verifica se tem permissão
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          console.log('Autorização concedida:', authStatus);
          getFCMToken();
        } else {
          // Se não tiver permissão, mostra um alerta explicando por que precisamos da permissão
          Alert.alert(
            'Permissão de Notificação',
            'Para receber notificações importantes, precisamos da sua permissão. Deseja habilitar as notificações?',
            [
              {
                text: 'Não',
                style: 'cancel',
              },
              {
                text: 'Abrir Configurações',
                onPress: () => {
                  // Abre as configurações do app para o usuário habilitar manualmente
                  if (Platform.OS === 'ios') {
                    Linking.openSettings();
                  } else {
                    Linking.openSettings();
                  }
                },
              },
            ],
          );
        }
      } catch (error) {
        console.log('Erro ao solicitar permissão:', error);
      }
    }

    async function checkApplicationPermission() {
      const authorizationStatus = await messaging().requestPermission();

      if (authorizationStatus === messaging.AuthorizationStatus.NOT_DETERMINED) {
        // O usuário ainda não foi questionado sobre as permissões
        requestUserPermission();
      } else if (authorizationStatus === messaging.AuthorizationStatus.DENIED) {
        // O usuário negou as permissões
        Alert.alert(
          'Notificações Desativadas',
          'Para receber notificações, você precisa habilitar as permissões nas configurações do app.',
          [
            {
              text: 'Cancelar',
              style: 'cancel',
            },
            {
              text: 'Abrir Configurações',
              onPress: () => Linking.openSettings(),
            },
          ],
        );
      } else {
        // Permissão concedida
        getFCMToken();
      }
    }

    async function getFCMToken() {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log('Seu Token Firebase é:', fcmToken);
      }
    }

    // Verifica a permissão ao iniciar o app
    checkApplicationPermission();

    // Listener para mensagens em foreground
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('Mensagem recebida em primeiro plano:', remoteMessage);
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
