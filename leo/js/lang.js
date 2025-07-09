// Language files structure
const translations = {
    en: {
        appTitle: "LEO Diva Gym",
        loginTitle: "Welcome to LEO Diva",
        loginSubtitle: "Please sign in to continue",
        emailLabel: "Email Address",
        passwordLabel: "Password",
        loginButton: "Sign In",
        forgotPassword: "Forgot Password?",
        noAccount: "Don't have an account?",
        signUp: "Sign Up",
        memberDashboard: "Member Dashboard",
        staffDashboard: "Staff Dashboard",
        upcomingClasses: "Upcoming Classes",
        myBookings: "My Bookings",
        membership: "Membership",
        bookNow: "Book Now",
        cancelBooking: "Cancel Booking",
        viewAttendees: "View Attendees",
        createBooking: "Create Booking",
        className: "Class Name",
        classTime: "Time",
        classTrainer: "Trainer",
        classCapacity: "Capacity",
        attendees: "Attendees",
        memberName: "Member Name",
        bookingDate: "Booking Date",
        actions: "Actions",
        paymentSuccess: "Payment Successful!",
        paymentSuccessMessage: "Your payment has been processed successfully.",
        backToDashboard: "Back to Dashboard",
        qrCode: "Your Booking QR Code",
        scanAtReception: "Please scan this code at reception",
        logout: "Logout",
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday"
    },
    ar: {
        appTitle: "ليو ديفا جيم",
        loginTitle: "مرحبًا بكم في ليو ديفا",
        loginSubtitle: "يرجى تسجيل الدخول للمتابعة",
        emailLabel: "البريد الإلكتروني",
        passwordLabel: "كلمة المرور",
        loginButton: "تسجيل الدخول",
        forgotPassword: "نسيت كلمة المرور؟",
        noAccount: "ليس لديك حساب؟",
        signUp: "اشتراك",
        memberDashboard: "لوحة العضو",
        staffDashboard: "لوحة الموظفين",
        upcomingClasses: "الفصول القادمة",
        myBookings: "حجوزاتي",
        membership: "العضوية",
        bookNow: "احجز الآن",
        cancelBooking: "إلغاء الحجز",
        viewAttendees: "عرض الحضور",
        createBooking: "إنشاء حجز",
        className: "اسم الفصل",
        classTime: "الوقت",
        classTrainer: "المدرب",
        classCapacity: "السعة",
        attendees: "الحضور",
        memberName: "اسم العضو",
        bookingDate: "تاريخ الحجز",
        actions: "إجراءات",
        paymentSuccess: "تم الدفع بنجاح!",
        paymentSuccessMessage: "تمت معالجة دفعتك بنجاح.",
        backToDashboard: "العودة إلى اللوحة",
        qrCode: "رمز الاستجابة السريعة للحجز",
        scanAtReception: "يرجى مسح هذا الرمز في الاستقبال",
        logout: "تسجيل الخروج",
        monday: "الاثنين",
        tuesday: "الثلاثاء",
        wednesday: "الأربعاء",
        thursday: "الخميس",
        friday: "الجمعة",
        saturday: "السبت",
        sunday: "الأحد"
    }
};

let currentLanguage = 'en';

function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        updateTextElements();
    }
}

function t(key) {
    return translations[currentLanguage][key] || key;
}

function updateTextElements() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
}

// Initialize language
setLanguage(currentLanguage);