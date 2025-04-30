const admin = require('firebase-admin');
const serviceAccount = require('./seu-arquivo-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const token = 'SEU_TOKEN_FCM'; // Token que aparecerá no console do app

const message = {
  notification: {
    title: 'Teste de Notificação',
    body: 'Esta é uma mensagem de teste!',
  },
  android: {
    priority: 'high',
    notification: {
      sound: 'default',
      priority: 'high',
      channelId: 'default_channel'
    }
  },
  token: token,
};

admin.messaging()
  .send(message)
  .then(response => {
    console.log('Mensagem enviada com sucesso:', response);
  })
  .catch(error => {
    console.log('Erro ao enviar mensagem:', error);
  }); 