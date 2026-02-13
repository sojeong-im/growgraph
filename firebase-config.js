// Firebase Configuration
// GrowGraph Project Settings
// Project: growgraph-e515f
// Updated: 2026-02-07

const firebaseConfig = {
    apiKey: "AIzaSyAn25zq8Lwu38dBszbXyW4O1oa4XvDiqP8",
    authDomain: "growgraph-e515f.firebaseapp.com",
    projectId: "growgraph-e515f",
    storageBucket: "growgraph-e515f.firebasestorage.app",
    messagingSenderId: "1032255767936",
    appId: "1:1032255767936:web:26f6412fe41cf072a96d65",
    measurementId: "G-QVQ6JMPK4N"
};

// Initialize Firebase
function initializeFirebase() {
    try {
        // Initialize Firebase App
        const app = firebase.initializeApp(firebaseConfig);

        // Initialize Firestore
        const db = firebase.firestore();

        // Initialize Auth
        const auth = firebase.auth();

        // Export to window object for global access
        window.firebaseApp = app;
        window.firestoreDB = db;
        window.firebaseAuth = auth;

        console.log('✅ Firebase initialized successfully');
        console.log('📊 Firestore ready:', !!db);
        console.log('🔐 Auth ready:', !!auth);
        return true;
    } catch (error) {
        console.error('❌ Firebase initialization error:', error);
        return false;
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFirebase);
} else {
    initializeFirebase();
}
