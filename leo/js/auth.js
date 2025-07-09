let currentUser = null;

function login(email, password) {
    // [LEO-DIVA-AUTH] Replace with real authentication in production
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