package com.meuapp;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

public class MyFirebaseMessagingService extends FirebaseMessagingService {
    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        super.onMessageReceived(remoteMessage);
        // Aqui você pode customizar como a notificação será exibida
    }

    @Override
    public void onNewToken(String token) {
        super.onNewToken(token);
        // Aqui você pode enviar o novo token para seu servidor
    }
} 