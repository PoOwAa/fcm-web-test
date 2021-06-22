const messaging = firebase.messaging();


async function getToken() {
    
    try {
        const token = await messaging.getToken({
            vapidKey: 'BPgqekszJ3DKObBZbNEyRXJF9Q8jeWd8JIw0YFqNJKzJqE631o3ZSd_27ctH5AlVepgBgrL55yUfD5nco9M0Ss8',
        });

        console.log(token);
    } catch(e) {
        console.error(e);
    }
}

async function listenNotification() {
    messaging.onBackgroundMessage( (payload) => {
        console.log('fcm background message', payload);

        const notificationTitle = 'Background message title';
        const notificationOptions = {
            body: 'Background message body.',
            icon: '/firebase-logo.png',
        };

        self.registration.showNotification(notificationTitle, notificationOptions);
    });
}

getToken();
listenNotification();