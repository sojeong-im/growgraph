// Firebase Database Utilities
// Functions for saving form submissions to Firestore

/**
 * Save partnership inquiry to Firestore
 * @param {Object} formData - Form data from partnership form
 * @returns {Promise} - Firebase document reference
 */
async function savePartnershipInquiry(formData) {
    try {
        const db = window.firestoreDB;
        if (!db) {
            throw new Error('Firestore not initialized');
        }

        const inquiry = {
            name: formData.name,
            organization: formData.organization,
            phone: formData.phone,
            email: formData.email,
            inquiryType: formData.inquiryType,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'pending' // pending, contacted, completed
        };

        const docRef = await db.collection('partnerships').add(inquiry);
        console.log('✅ Partnership inquiry saved with ID:', docRef.id);
        return docRef;
    } catch (error) {
        console.error('❌ Error saving partnership inquiry:', error);
        throw error;
    }
}

/**
 * Save program application to Firestore
 * @param {Object} formData - Form data from program application
 * @returns {Promise} - Firebase document reference
 */
async function saveProgramApplication(formData) {
    try {
        const db = window.firestoreDB;
        if (!db) {
            throw new Error('Firestore not initialized');
        }

        const application = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            programType: formData.programType, // g-check, g-boost, etc.
            preferredDate: formData.preferredDate,
            concerns: formData.concerns,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'pending'
        };

        const docRef = await db.collection('applications').add(application);
        console.log('✅ Program application saved with ID:', docRef.id);
        return docRef;
    } catch (error) {
        console.error('❌ Error saving program application:', error);
        throw error;
    }
}

/**
 * Save diagnostic result to Firestore (optional - for analytics)
 * @param {Object} resultData - Diagnostic test results
 * @returns {Promise} - Firebase document reference
 */
async function saveDiagnosticResult(resultData) {
    try {
        const db = window.firestoreDB;
        if (!db) {
            throw new Error('Firestore not initialized');
        }

        const result = {
            type: resultData.type, // depression, burnout, stress, anxiety
            score: resultData.score,
            answers: resultData.answers,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        };

        const docRef = await db.collection('diagnostics').add(result);
        console.log('✅ Diagnostic result saved with ID:', docRef.id);
        return docRef;
    } catch (error) {
        console.error('❌ Error saving diagnostic result:', error);
        throw error;
    }
}

/**
 * User sign up with email/password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise} - Firebase user credential
 */
async function signUpUser(email, password) {
    try {
        const auth = window.firebaseAuth;
        if (!auth) {
            throw new Error('Firebase Auth not initialized');
        }

        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        console.log('✅ User created:', userCredential.user.uid);
        return userCredential;
    } catch (error) {
        console.error('❌ Error creating user:', error);
        throw error;
    }
}

/**
 * User login with email/password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise} - Firebase user credential
 */
async function loginUser(email, password) {
    try {
        const auth = window.firebaseAuth;
        if (!auth) {
            throw new Error('Firebase Auth not initialized');
        }

        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        console.log('✅ User logged in:', userCredential.user.uid);
        return userCredential;
    } catch (error) {
        console.error('❌ Error logging in:', error);
        throw error;
    }
}

/**
 * User logout
 * @returns {Promise}
 */
async function logoutUser() {
    try {
        const auth = window.firebaseAuth;
        if (!auth) {
            throw new Error('Firebase Auth not initialized');
        }

        await auth.signOut();
        console.log('✅ User logged out');
    } catch (error) {
        console.error('❌ Error logging out:', error);
        throw error;
    }
}

// Export functions to global scope
window.savePartnershipInquiry = savePartnershipInquiry;
window.saveProgramApplication = saveProgramApplication;
window.saveDiagnosticResult = saveDiagnosticResult;
window.signUpUser = signUpUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;
