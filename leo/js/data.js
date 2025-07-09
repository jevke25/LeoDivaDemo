// [LEO-DIVA-DATA] Replace with real API calls in production

// Demo attendees for each class
const demoAttendees = {
    'class1': [
        {
            name: 'Sarah Johnson',
            email: 'sarah.j@example.com',
            membership: 'premium',
            checkInTime: '07:45'
        },
        {
            name: 'Michael Chen',
            email: 'michael.c@example.com',
            membership: 'basic',
            checkInTime: '07:50'
        },
        {
            name: 'Emma Wilson',
            email: 'emma.w@example.com',
            membership: 'premium',
            checkInTime: '07:55'
        },
        {
            name: 'David Rodriguez',
            email: 'david.r@example.com',
            membership: 'basic',
            checkInTime: '08:00'
        }
    ],
    'class2': [
        {
            name: 'Ahmed Mahmoud',
            email: 'ahmed.m@example.com',
            membership: 'basic',
            checkInTime: '16:45'
        },
        {
            name: 'Lisa Thompson',
            email: 'lisa.t@example.com',
            membership: 'premium',
            checkInTime: '16:50'
        },
        {
            name: 'James Brown',
            email: 'james.b@example.com',
            membership: 'premium',
            checkInTime: '16:55'
        },
        {
            name: 'Maria Garcia',
            email: 'maria.g@example.com',
            membership: 'basic',
            checkInTime: '17:00'
        }
    ],
    'class3': [
        {
            name: 'Carlos Mendez',
            email: 'carlos.m@example.com',
            membership: 'premium',
            checkInTime: '18:45'
        },
        {
            name: 'Anna Kim',
            email: 'anna.k@example.com',
            membership: 'basic',
            checkInTime: '18:50'
        },
        {
            name: 'Robert Taylor',
            email: 'robert.t@example.com',
            membership: 'premium',
            checkInTime: '18:55'
        }
    ],
    'class4': [
        {
            name: 'Sophie Chen',
            email: 'sophie.c@example.com',
            membership: 'premium',
            checkInTime: '09:45'
        },
        {
            name: 'John Smith',
            email: 'john.s@example.com',
            membership: 'basic',
            checkInTime: '09:50'
        },
        {
            name: 'Rachel Green',
            email: 'rachel.g@example.com',
            membership: 'premium',
            checkInTime: '09:55'
        }
    ]
};

// Demo users
const demoUsers = {
    // Member accounts
    'client1@example.com': {
        password: '123456',
        role: 'member',
        name: 'Sarah Johnson',
        membership: 'premium',
        memberSince: '2022-01-15',
        bookings: ['class1', 'class3']
    },
    'client2@example.com': {
        password: '123456',
        role: 'member',
        name: 'Ahmed Mahmoud',
        membership: 'basic',
        memberSince: '2023-03-22',
        bookings: ['class2']
    },
    
    // Staff accounts
    'reception1@example.com': {
        password: '123456',
        role: 'staff',
        name: 'Emily Rodriguez',
        position: 'Reception Manager',
        permissions: ['view_classes', 'manage_bookings']
    },
    'reception2@example.com': {
        password: '123456',
        role: 'staff',
        name: 'Mohammed Ali',
        position: 'Receptionist',
        permissions: ['view_classes']
    }
};

// Demo classes
const demoClasses = {
    'class1': {
        id: 'class1',
        name: 'Morning Yoga',
        description: 'Start your day with a peaceful yoga session',
        trainer: 'Jessica Wong',
        time: '08:00 - 09:00',
        day: 'Mon, Wed, Fri',
        capacity: 15,
        booked: 4,
        level: 'Beginner'
    },
    'class2': {
        id: 'class2',
        name: 'HIIT Training',
        description: 'High intensity interval training for fat burning',
        trainer: 'Mike Johnson',
        time: '17:00 - 18:00',
        day: 'Tue, Thu',
        capacity: 20,
        booked: 4,
        level: 'Advanced'
    },
    'class3': {
        id: 'class3',
        name: 'Zumba Dance',
        description: 'Fun dance workout with Latin rhythms',
        trainer: 'Carlos Mendez',
        time: '19:00 - 20:00',
        day: 'Mon, Fri',
        capacity: 25,
        booked: 3,
        level: 'All Levels'
    },
    'class4': {
        id: 'class4',
        name: 'Pilates Reformer',
        description: 'Low-impact workout to strengthen core muscles',
        trainer: 'Sophie Chen',
        time: '10:00 - 11:00',
        day: 'Wed, Sat',
        capacity: 10,
        booked: 3,
        level: 'Intermediate'
    }
};
// [LEO-DIVA-DATA] Replace with real API calls in production

// Make demo data available globally
window.demoUsers = {
    // Member accounts
    'client1@example.com': {
        password: '123456',
        role: 'member',
        name: 'Sarah Johnson',
        membership: 'premium',
        memberSince: '2022-01-15',
        bookings: ['class1', 'class3']
    },
    'client2@example.com': {
        password: '123456',
        role: 'member',
        name: 'Ahmed Mahmoud',
        membership: 'basic',
        memberSince: '2023-03-22',
        bookings: ['class2']
    },
    
    // Staff accounts
    'reception1@example.com': {
        password: '123456',
        role: 'staff',
        name: 'Emily Rodriguez',
        position: 'Reception Manager',
        permissions: ['view_classes', 'manage_bookings']
    },
    'reception2@example.com': {
        password: '123456',
        role: 'staff',
        name: 'Mohammed Ali',
        position: 'Receptionist',
        permissions: ['view_classes']
    }
};

// Make other demo data available globally
window.demoClasses = demoClasses;
window.demoAttendees = demoAttendees;

window.demoPackages = [
    // ... (keep the rest of your demoPackages array)
];

// Helper functions
window.getTodaysClasses = function() {
    // In a real app, this would filter by actual day
    return Object.values(window.demoClasses);
};

window.getBookingsForUser = function(email) {
    const user = Object.values(window.demoUsers).find(u => u.email === email);
    if (!user || !user.bookings) return [];
    
    return user.bookings.map(bookingId => window.demoClasses[bookingId]);
};

// Demo membership packages
const demoPackages = [
    {
        id: 'basic',
        name: 'Basic Membership',
        price: 49,
        duration: 'month',
        features: [
            'Access to gym equipment',
            '2 group classes per week',
            'Locker access',
            'Open 6am-10pm'
        ]
    },
    {
        id: 'premium',
        name: 'Premium Membership',
        price: 89,
        duration: 'month',
        features: [
            'Unlimited group classes',
            'Access to premium equipment',
            '24/7 gym access',
            'Free locker',
            '1 free personal training session'
        ]
    },
    {
        id: 'elite',
        name: 'Elite Package',
        price: 149,
        duration: 'month',
        features: [
            'All premium benefits',
            '3 personal training sessions',
            'Nutrition consultation',
            'Spa access',
            'Priority booking'
        ]
    }
];

// Helper function to get classes for a day
function getTodaysClasses() {
    // In a real app, this would filter by actual day
    return Object.values(demoClasses);
}

// Helper function to get user bookings
function getUserBookings(userId) {
    const user = Object.values(demoUsers).find(u => u.email === userId);
    if (!user || !user.bookings) return [];

    return user.bookings.map(bookingId => demoClasses[bookingId]);
}



// [LEO-DIVA-API] This is where you would add real API integration
// For example:
// async function fetchClasses() {
//     const response = await fetch('https://api.leodiva.com/classes');
//     return await response.json();
// }