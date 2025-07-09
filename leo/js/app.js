// Main application initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language selector
    const langToggle = document.getElementById('lang-toggle');
    const langDropdown = document.getElementById('lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    // Toggle dropdown
    langToggle.addEventListener('click', () => {
        langDropdown.classList.toggle('show');
        langToggle.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('show');
            langToggle.classList.remove('active');
        }
    });
    
    // Language selection
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            setLanguage(lang);
            langDropdown.classList.remove('show');
            langToggle.classList.remove('active');
            
            // Update active state
            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });
    
    // Set initial active language
    const currentLang = localStorage.getItem('language') || 'en';
    const activeOption = document.querySelector(`[data-lang="${currentLang}"]`);
    if (activeOption) {
        activeOption.classList.add('active');
    }
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