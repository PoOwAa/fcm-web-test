importScripts('/__/firebase/8.6.8/firebase-app.js');
importScripts('/__/firebase/8.6.8/firebase-messaging.js');
importScripts('/__/firebase/init.js');

const messaging = firebase.messaging();

async function backgroundNotification() {
    messaging.onBackgroundMessage( (payload) => {
        console.log('fcm background message', payload);

        const notificationTitle = 'SkyPark';
        const notificationOptions = {
            body: payload.data.default,
            icon: '/firebase-logo.png',
        };

        self.registration.showNotification(notificationTitle, notificationOptions);
    });
}

backgroundNotification();