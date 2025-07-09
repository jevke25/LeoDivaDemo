// Main application initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language buttons
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('lang-ar').addEventListener('click', () => setLanguage('ar'));
    // [LEO-DIVA-AUTH] Authentication handling

let currentUser = null;

function login(email, password) {
    // Access demoUsers from window object since it's defined in data.js
    if (window.demoUsers && window.demoUsers[email] && window.demoUsers[email].password === password) {
        currentUser = {
            email: email,
            ...window.demoUsers[email]
        };
        return true;
    }
    return false;
}

function logout() {
    currentUser = null;
    navigateTo('login');
}

function isAuthenticated() {
    return currentUser !== null;
}

function getCurrentUser() {
    return currentUser;
}

// Make functions available globally
window.login = login;
window.logout = logout;
window.isAuthenticated = isAuthenticated;
window.getCurrentUser = getCurrentUser;

// [LEO-DIVA-AUTH] This is where you would add real auth integration
// For example with Firebase:
// async function realLogin(email, password) {
//     try {
//         const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
//         currentUser = userCredential.user;
//         return true;
//     } catch (error) {
//         console.error("Login error:", error);
//         return false;
//     }
// }
    // Check authentication state
    if (isAuthenticated()) {
        const user = getCurrentUser();
        if (user.role === 'member') {
            navigateTo('memberDashboard');
        } else {
            navigateTo('staffDashboard');
        }
    } else {
        navigateTo('login');
    }
});

// Make functions available globally
window.navigateTo = navigateTo;
window.logout = logout;
window.bookClass = bookClass;
window.cancelBooking = cancelBooking;
window.viewAttendees = viewAttendees;
window.showQrCode = showQrCode;
window.processPayment = processPayment;