// View management
const views = {
        login: `
        <div class="login-container fade-in">
            <div class="card login-card">
                <div class="login-logo">
                    <img src="assets/logo.svg" alt="LEO Diva Logo">
                </div>
                <h2 class="login-title" data-i18n="loginTitle">Welcome to LEO Diva</h2>
                <form id="loginForm">
                    <div class="form-group">
                        <label for="loginEmail" data-i18n="email">Email</label>
                        <input type="email" id="loginEmail" class="form-control" required autocomplete="username">
                    </div>
                    <div class="form-group">
                        <label for="loginPassword" data-i18n="password">Password</label>
                        <input type="password" id="loginPassword" class="form-control" required autocomplete="current-password">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block" data-i18n="login">Login</button>
                </form>
            </div>
        </div>
    `,
    
        memberDashboard: `
        <div class="fade-in">
            <div class="navbar">
                <div class="nav-logo">
                    <img src="assets/logo.svg" alt="LEO Diva Logo">
                    <h1 data-i18n="appTitle">LEO Diva</h1>
                </div>
                <div class="nav-menu">
                    <a href="#" class="nav-item active" onclick="navigateTo('memberDashboard')" data-i18n="upcomingClasses">Classes</a>
                    <a href="#" class="nav-item" onclick="navigateTo('myBookings')" data-i18n="myBookings">My Bookings</a>
                    <a href="#" class="nav-item" onclick="navigateTo('membership')" data-i18n="membership">Membership</a>
                    <a href="#" class="nav-item btn-ghost" onclick="logout()" data-i18n="logout">Logout</a>
                </div>
            </div>

            <div class="card">
                <h2 data-i18n="upcomingClasses">Today's Classes</h2>
                <p>Discover and book your next fitness session</p>
                <div id="classList" class="dashboard-grid">
                    <!-- Classes will be loaded here -->
                </div>
            </div>
        </div>
    `,
    
        staffDashboard: `
        <div class="fade-in">
            <div class="navbar">
                <div class="nav-logo">
                    <img src="assets/logo.svg" alt="LEO Diva Logo">
                    <h1 data-i18n="appTitle">LEO Diva</h1>
                </div>
                <div class="nav-menu">
                    <a href="#" class="nav-item active" onclick="navigateTo('staffDashboard')" data-i18n="upcomingClasses">Classes</a>
                    <a href="#" class="nav-item" onclick="navigateTo('createBooking')" data-i18n="createBooking">Create Booking</a>
                    <a href="#" class="nav-item btn-ghost" onclick="logout()" data-i18n="logout">Logout</a>
                </div>
            </div>

            <div class="card">
                <h2 data-i18n="upcomingClasses">Class Management</h2>
                <p>Manage classes and view attendee information</p>
                <div id="staffClassList" class="dashboard-grid">
                    <!-- Classes will be loaded here with attendee functionality -->
                </div>
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
    `,
    
    attendees: `
        <div class="fade-in">
            <div class="navbar">
                <div class="nav-logo">
                    <img src="assets/logo.svg" alt="LEO Diva Logo">
                    <h1 data-i18n="appTitle">LEO Diva</h1>
                </div>
                <div class="nav-menu">
                    <a href="#" class="nav-item" onclick="navigateTo('staffDashboard')" data-i18n="upcomingClasses">Classes</a>
                    <a href="#" class="nav-item" onclick="navigateTo('createBooking')" data-i18n="createBooking">Create Booking</a>
                    <a href="#" class="nav-item btn-ghost" onclick="logout()" data-i18n="logout">Logout</a>
                </div>
            </div>

            <div class="card">
                <div class="attendees-header">
                    <div class="attendees-title-section">
                        <h2 id="attendees-title" data-i18n="classAttendees">Class Attendees</h2>
                        <p id="attendees-subtitle" data-i18n="viewAndManageParticipants">View and manage class participants</p>
                    </div>
                </div>
                <div id="attendeesList" class="attendees-grid">
                    <!-- Attendees will be loaded here -->
                </div>
            </div>
        </div>
    `,
    

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
        case 'attendees':
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                loadAttendees();
            }, 100);
            break;
    }
    
    // Update language text
    updateTextElements();
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (login(email, password)) {
        const user = getCurrentUser();
        if (user.role === 'member') {
            navigateTo('memberDashboard');
        } else {
            navigateTo('staffDashboard');
        }
    } else {
        alert('Invalid credentials. Try reception@leo.com / 1234 or member@leo.com / 1234');
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
        <div class="card scale-in">
            <div class="schedule-info">
                <h3 class="schedule-title">${cls.name}</h3>
                <p class="schedule-trainer">${cls.trainer}</p>
                <p class="schedule-time">${cls.time} • ${cls.day}</p>
                <p>${cls.description}</p>
                <div class="schedule-capacity">
                    <span>${cls.booked}/${cls.capacity} booked</span>
                    <span>•</span>
                    <span>${cls.level}</span>
                </div>
            </div>
            <button class="btn btn-accent" onclick="bookClass('${cls.id}')" data-i18n="bookNow">
                <span>Book Now</span>
            </button>
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
    // Store the current class ID for the attendees view
    window.currentClassId = classId;
    navigateTo('attendees');
}

function showQrCode() {
    navigateTo('qrCode');
}

function processPayment(packageId) {
    navigateTo('paymentSuccess');
}




function loadAttendees() {
    const classId = window.currentClassId;
    const attendeesList = document.getElementById('attendeesList');
    const attendeesTitle = document.getElementById('attendees-title');
    const attendeesSubtitle = document.getElementById('attendees-subtitle');
    
    // Get class info
    const classInfo = demoClasses[classId];
    const attendees = demoAttendees[classId] || [];
    
    // Update header
    attendeesTitle.textContent = `${classInfo.name} - ${t('attendees')}`;
    attendeesSubtitle.textContent = `${attendees.length} ${t('participants')} • ${classInfo.time} • ${classInfo.day}`;
    
    if (attendees.length === 0) {
        attendeesList.innerHTML = `
            <div class="card text-center">
                <p data-i18n="noAttendeesFound">No attendees found for this class.</p>
            </div>
        `;
        return;
    }
    
    attendeesList.innerHTML = attendees.map((attendee, index) => `
        <div class="card attendee-card scale-in" style="animation-delay: ${index * 0.1}s">
            <div class="attendee-info">
                <div class="attendee-avatar">
                    <span>${attendee.name.charAt(0)}</span>
                </div>
                <div class="attendee-details">
                    <h4>${attendee.name}</h4>
                    <p class="attendee-email">${attendee.email}</p>
                    <div class="attendee-meta">
                        <span class="membership-badge ${attendee.membership}">${attendee.membership === 'premium' ? t('premiumMembership') : t('basicMembership')}</span>
                        <span class="check-in-time">${t('checkedIn')}: ${attendee.checkInTime}</span>
                    </div>
                </div>
            </div>
            <div class="attendee-actions">
                <button class="btn btn-ghost" onclick="viewAttendeeDetails('${attendee.email}')">
                    <span data-i18n="viewDetails">View Details</span>
                </button>
            </div>
        </div>
    `).join('');
}

function viewAttendeeDetails(email) {
    // In a real app, this would show detailed attendee information
    const viewingMessage = t('viewingDetailsFor').replace('{email}', email);
    const detailsMessage = t('detailsWouldShow');
    alert(`${viewingMessage}\n\n${detailsMessage}`);
}