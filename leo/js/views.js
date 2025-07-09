// View management
const views = {
        login: `
        <div class="login-container">
            <div class="card fade-in">
                <div class="nav-logo">
                    <img src="assets/logo.svg" alt="LEO Diva Logo">
                    <h1 data-i18n="appTitle">LEO Diva Gym</h1>
                </div>
                <h2 data-i18n="loginTitle">Welcome to LEO Diva</h2>
                <p data-i18n="loginSubtitle">Please sign in to continue</p>

                <form id="loginForm">
                    <div class="form-group">
                        <label for="email" data-i18n="emailLabel">Email Address</label>
                        <input type="email" id="email" class="form-control" data-i18n-placeholder="emailLabel" required>
                    </div>
                    <div class="form-group">
                        <label for="password" data-i18n="passwordLabel">Password</label>
                        <input type="password" id="password" class="form-control" data-i18n-placeholder="passwordLabel" required>
                    </div>
                    <button type="submit" class="btn btn-primary" data-i18n="loginButton">Sign In</button>      
                </form>

                <div class="text-center mt-3">
                    <a href="#" data-i18n="forgotPassword">Forgot Password?</a>
                    <p data-i18n="noAccount">Don't have an account? <a href="#" data-i18n="signUp">Sign Up</a></p>
                </div>
            </div>
        </div>
    `,
    
    memberDashboard: `
        <div class="slide-up">
            <div class="navbar">
                <div class="nav-logo">
                    <img src="assets/logo.png" alt="LEO Diva Logo">
                    <h1 data-i18n="appTitle">LEO Diva Gym</h1>
                </div>
                <div class="nav-menu">
                    <a href="#" class="nav-item active" onclick="navigateTo('memberDashboard')" data-i18n="upcomingClasses">Upcoming Classes</a>
                    <a href="#" class="nav-item" onclick="navigateTo('myBookings')" data-i18n="myBookings">My Bookings</a>
                    <a href="#" class="nav-item" onclick="navigateTo('membership')" data-i18n="membership">Membership</a>
                    <a href="#" class="nav-item" onclick="logout()" data-i18n="logout">Logout</a>
                </div>
            </div>
            
            <h2 data-i18n="upcomingClasses">Upcoming Classes</h2>
            <div id="classList" class="dashboard-grid">
                <!-- Classes will be loaded here -->
            </div>
        </div>
    `,
    
    staffDashboard: `
        <div class="slide-up">
            <div class="navbar">
                <div class="nav-logo">
                    <img src="assets/logo.png" alt="LEO Diva Logo">
                    <h1 data-i18n="appTitle">LEO Diva Gym</h1>
                </div>
                <div class="nav-menu">
                    <a href="#" class="nav-item active" onclick="navigateTo('staffDashboard')" data-i18n="upcomingClasses">Upcoming Classes</a>
                    <a href="#" class="nav-item" onclick="navigateTo('createBooking')" data-i18n="createBooking">Create Booking</a>
                    <a href="#" class="nav-item" onclick="logout()" data-i18n="logout">Logout</a>
                </div>
            </div>
            
            <h2 data-i18n="upcomingClasses">Upcoming Classes</h2>
            <div id="staffClassList">
                <!-- Classes will be loaded here with attendee functionality -->
            </div>
        </div>
    `,
    
    myBookings: `
        <div class="slide-up">
            <div class="navbar">
                <div class="nav-logo">
                    <img src="assets/logo.png" alt="LEO Diva Logo">
                    <h1 data-i18n="appTitle">LEO Diva Gym</h1>
                </div>
                <div class="nav-menu">
                    <a href="#" class="nav-item" onclick="navigateTo('memberDashboard')" data-i18n="upcomingClasses">Upcoming Classes</a>
                    <a href="#" class="nav-item active" onclick="navigateTo('myBookings')" data-i18n="myBookings">My Bookings</a>
                    <a href="#" class="nav-item" onclick="navigateTo('membership')" data-i18n="membership">Membership</a>
                    <a href="#" class="nav-item" onclick="logout()" data-i18n="logout">Logout</a>
                </div>
            </div>
            
            <h2 data-i18n="myBookings">My Bookings</h2>
            <div id="bookingList">
                <!-- Bookings will be loaded here -->
            </div>
        </div>
    `,
    
    membership: `
        <div class="slide-up">
            <div class="navbar">
                <div class="nav-logo">
                    <img src="assets/logo.png" alt="LEO Diva Logo">
                    <h1 data-i18n="appTitle">LEO Diva Gym</h1>
                </div>
                <div class="nav-menu">
                    <a href="#" class="nav-item" onclick="navigateTo('memberDashboard')" data-i18n="upcomingClasses">Upcoming Classes</a>
                    <a href="#" class="nav-item" onclick="navigateTo('myBookings')" data-i18n="myBookings">My Bookings</a>
                    <a href="#" class="nav-item active" onclick="navigateTo('membership')" data-i18n="membership">Membership</a>
                    <a href="#" class="nav-item" onclick="logout()" data-i18n="logout">Logout</a>
                </div>
            </div>
            
            <h2 data-i18n="membership">Membership</h2>
            <div class="dashboard-grid" id="membershipPackages">
                <!-- Packages will be loaded here -->
            </div>
        </div>
    `,
    
    createBooking: `
        <div class="slide-up">
            <div class="navbar">
                <div class="nav-logo">
                    <img src="assets/logo.png" alt="LEO Diva Logo">
                    <h1 data-i18n="appTitle">LEO Diva Gym</h1>
                </div>
                <div class="nav-menu">
                    <a href="#" class="nav-item" onclick="navigateTo('staffDashboard')" data-i18n="upcomingClasses">Upcoming Classes</a>
                    <a href="#" class="nav-item active" onclick="navigateTo('createBooking')" data-i18n="createBooking">Create Booking</a>
                    <a href="#" class="nav-item" onclick="logout()" data-i18n="logout">Logout</a>
                </div>
            </div>
            
            <h2 data-i18n="createBooking">Create Booking</h2>
            <div class="card">
                <form id="bookingForm">
                    <div class="form-group">
                        <label data-i18n="memberName">Member Name</label>
                        <input type="text" class="form-control" placeholder="Enter member name" required>
                    </div>
                    <div class="form-group">
                        <label data-i18n="className">Class Name</label>
                        <select class="form-control" required>
                            <option value="">Select a class</option>
                            <option value="class1">Morning Yoga</option>
                            <option value="class2">HIIT Training</option>
                            <option value="class3">Zumba Dance</option>
                            <option value="class4">Pilates Reformer</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label data-i18n="bookingDate">Booking Date</label>
                        <input type="date" class="form-control" required>
                    </div>
                    <button type="submit" class="btn btn-primary" data-i18n="createBooking">Create Booking</button>
                </form>
            </div>
        </div>
    `,
    
    paymentSuccess: `
        <div class="card zoom">
            <div class="text-center">
                <h2 data-i18n="paymentSuccess">Payment Successful!</h2>
                <p data-i18n="paymentSuccessMessage">Your payment has been processed successfully.</p>
                <img src="assets/qr-placeholder.png" alt="QR Code" style="max-width: 200px; margin: 20px auto;">
                <p data-i18n="scanAtReception">Please scan this code at reception</p>
                <button onclick="navigateTo('memberDashboard')" class="btn btn-accent" data-i18n="backToDashboard">Back to Dashboard</button>
            </div>
        </div>
    `,
    
    qrCode: `
        <div class="card zoom">
            <div class="text-center">
                <h2 data-i18n="qrCode">Your Booking QR Code</h2>
                <img src="assets/qr-placeholder.png" alt="QR Code" style="max-width: 200px; margin: 20px auto;">
                <p data-i18n="scanAtReception">Please scan this code at reception</p>
                <button onclick="navigateTo('memberDashboard')" class="btn btn-accent" data-i18n="backToDashboard">Back to Dashboard</button>
            </div>
        </div>
    `
};

function navigateTo(view) {
    const app = document.getElementById('app');
    app.innerHTML = views[view];
    
    // Initialize view-specific functionality
    switch(view) {
        case 'login':
            document.getElementById('loginForm').addEventListener('submit', handleLogin);
            break;
        case 'memberDashboard':
            loadMemberClasses();
            break;
        case 'staffDashboard':
            loadStaffClasses();
            break;
        case 'myBookings':
            loadUserBookings();
            break;
        case 'membership':
            loadMembershipPackages();
            break;
        case 'createBooking':
            document.getElementById('bookingForm').addEventListener('submit', handleCreateBooking);
            break;
    }
    
    // Update language text
    updateTextElements();
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (login(email, password)) {
        const user = getCurrentUser();
        if (user.role === 'member') {
            navigateTo('memberDashboard');
        } else {
            navigateTo('staffDashboard');
        }
    } else {
        alert('Invalid credentials. Try client1@example.com / 123456 or reception1@example.com / 123456');
    }
}

function handleCreateBooking(e) {
    e.preventDefault();
    alert('Booking created successfully (demo)');
    navigateTo('staffDashboard');
}

function loadMemberClasses() {
    const classList = document.getElementById('classList');
    const classes = getTodaysClasses();
    
    classList.innerHTML = classes.map(cls => `
        <div class="card schedule-item">
            <div>
                <h3>${cls.name}</h3>
                <p class="schedule-trainer">${t('classTrainer')}: ${cls.trainer}</p>
                <p class="schedule-time">${t('classTime')}: ${cls.time}</p>
                <p>${cls.description}</p>
            </div>
            <button class="btn btn-accent" onclick="bookClass('${cls.id}')" data-i18n="bookNow">Book Now</button>
        </div>
    `).join('');
}

function loadStaffClasses() {
    const staffClassList = document.getElementById('staffClassList');
    const classes = getTodaysClasses();
    
    staffClassList.innerHTML = classes.map(cls => `
        <div class="card">
            <div class="schedule-item">
                <div>
                    <h3>${cls.name}</h3>
                    <p class="schedule-trainer">${t('classTrainer')}: ${cls.trainer}</p>
                    <p class="schedule-time">${t('classTime')}: ${cls.time}</p>
                    <p>${cls.booked}/${cls.capacity} ${t('attendees')}</p>
                </div>
                <button class="btn btn-accent" onclick="viewAttendees('${cls.id}')" data-i18n="viewAttendees">View Attendees</button>
            </div>
        </div>
    `).join('');
}

function loadUserBookings() {
    const bookingList = document.getElementById('bookingList');
    const user = getCurrentUser();
    const bookings = getBookingsForUser(user.email);
    
    if (bookings.length === 0) {
        bookingList.innerHTML = '<p>No bookings found.</p>';
        return;
    }
    
    bookingList.innerHTML = bookings.map(booking => `
        <div class="card schedule-item">
            <div>
                <h3>${booking.name}</h3>
                <p class="schedule-trainer">${t('classTrainer')}: ${booking.trainer}</p>
                <p class="schedule-time">${t('classTime')}: ${booking.time}</p>
                <p>${t('day')}: ${booking.day}</p>
            </div>
            <div>
                <button class="btn btn-outline" onclick="showQrCode('${booking.id}')">QR Code</button>
                <button class="btn btn-accent" onclick="cancelBooking('${booking.id}')" data-i18n="cancelBooking">Cancel Booking</button>
            </div>
        </div>
    `).join('');
}

function loadMembershipPackages() {
    const packagesContainer = document.getElementById('membershipPackages');
    
    packagesContainer.innerHTML = demoPackages.map(pkg => `
        <div class="card">
            <h3>${pkg.name}</h3>
            <h2>$${pkg.price}<small>/${pkg.duration}</small></h2>
            <ul>
                ${pkg.features.map(feat => `<li>${feat}</li>`).join('')}
            </ul>
            <button class="btn btn-accent" onclick="processPayment('${pkg.id}')">Upgrade Now</button>
        </div>
    `).join('');
}

// Demo functions
function bookClass(classId) {
    const user = getCurrentUser();
    if (!user.bookings) user.bookings = [];
    user.bookings.push(classId);
    alert('Class booked successfully!');
    navigateTo('qrCode');
}

function cancelBooking(classId) {
    const user = getCurrentUser();
    user.bookings = user.bookings.filter(id => id !== classId);
    alert('Booking canceled');
    loadUserBookings();
}

function viewAttendees(classId) {
    // In a real app, this would fetch actual attendees
    alert(`Showing demo attendees for class ${classId}`);
}

function showQrCode() {
    navigateTo('qrCode');
}

function processPayment(packageId) {
    navigateTo('paymentSuccess');
}