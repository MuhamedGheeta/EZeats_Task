📱 EZeats Mobile App
A mobile application built using React Native CLI.
The project focuses on a basic yet essential flow including splash screen, authentication, order listing, and multi-language support.

✨ Features
1. Splash Screen
Displays a branded splash screen on app startup.
(https://github.com/user-attachments/assets/7c50e191-4a5a-4acf-86c9-b6af103dbf04)

Provides a smooth transition while the app loads.

2. Login with Phone Number
Allows users to log in using their mobile phone number.

Includes phone number input validation for better user experience.

3. OTP Verification Screen
After submitting their phone number, users are directed to an OTP screen.

Users can input the received One-Time Password to verify their identity.

Handles incorrect or expired OTP cases gracefully.

4. Home Screen (Order Listing)
After successful authentication, users access the Home Screen.

Displays a list of orders with basic order information:

Order ID

Customer Name

Order Status

5. Order Details Screen
Users can tap on an order to view full order details, including:

Ordered items

Customer address

Special notes

Delivery instructions

6. Language Selection Modal
A modal popup allows users to choose their preferred language.

Switching languages updates the app text dynamically across all screens.

🛠️ Technology Stack
React Native CLI 

TypeScript 

React Navigation (for app navigation)

Context API (for state management such as authentication and language selection)

Axios (or Fetch API for API calls)

i18n-js / react-i18next (for language localization)

Native Modules (for splash screen handling if needed)
