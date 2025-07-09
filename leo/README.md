# LEO Diva Gym Management System - Demo

## Overview
This is a demo version of the LEO Diva Gym Management System. It showcases a modern, responsive web application for gym management with multi-language support (English and Arabic).

## Features Demonstrated
- **Multi-language Support**: Switch between English (EN) and Arabic (AR)
- **User Authentication**: Demo login system with different user roles
- **Member Dashboard**: View classes, manage bookings, check membership
- **Staff Dashboard**: Create bookings, view attendees, manage classes
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Dark theme with smooth transitions

## Demo Credentials

### Member Accounts
- **Email**: client1@example.com
- **Password**: 123456
- **Role**: Premium Member

- **Email**: client2@example.com  
- **Password**: 123456
- **Role**: Basic Member

### Staff Accounts
- **Email**: reception1@example.com
- **Password**: 123456
- **Role**: Reception Manager

- **Email**: reception2@example.com
- **Password**: 123456
- **Role**: Receptionist

## How to Run
1. Open `index.html` in a web browser
2. Or serve the files using a local web server:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

## Demo Data
The application includes:
- 4 demo fitness classes (Yoga, HIIT, Zumba, Pilates)
- 3 membership packages (Basic, Premium, Elite)
- Sample bookings and user data

## Technical Notes
- Built with vanilla JavaScript, HTML5, and CSS3
- No external dependencies required
- Ready for integration with real backend APIs
- Includes placeholder comments for Firebase integration

## Customization
- Replace placeholder assets in `/assets/` folder
  - Replace `bg-texture.jpg` with your custom background image
  - Replace `logo.svg` with your gym logo
- Update branding colors in `css/styles.css`
- Add real API endpoints in `js/data.js`
- Integrate with authentication services in `js/auth.js`

## Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+ 