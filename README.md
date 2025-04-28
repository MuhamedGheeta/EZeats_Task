📱 EZeats Mobile App
A mobile application built using React Native CLI.
The project focuses on a basic yet essential flow including splash screen, authentication, order listing, and multi-language support.

✨ Features
1. Splash Screen
Displays a branded splash screen on app startup.
![splash](https://github.com/user-attachments/assets/721ed436-1a77-4001-a75e-1b495a4f377e)
Provides a smooth transition while the app loads.

2. Login with Phone Number
Allows users to log in using their mobile phone number.
Includes phone number input validation for better user experience.
![login](https://github.com/user-attachments/assets/1b81e2d8-a1ea-40e3-b7f1-a78825d4da86)

3. OTP Verification Screen
After submitting their phone number, users are directed to an OTP screen.
Users can input the received One-Time Password to verify their identity.
Handles incorrect or expired OTP cases gracefully.
![otp](https://github.com/user-attachments/assets/6bf80e6b-5436-4a62-9142-2d8eddce8a74)

4. Home Screen (Order Listing)
After successful authentication, users access the Home Screen.

Displays a list of orders with basic order information:

Order ID

Customer Name

Order Status
![home](https://github.com/user-attachments/assets/e79e9462-93e4-4645-9142-6ebb7746410e)
![order2](https://github.com/user-attachments/assets/de815d0d-e80f-4efe-b986-1ab7afd490f6)

5. Order Details Screen
Users can tap on an order to view full order details, including:

Ordered items

Customer address

Special notes

Delivery instructions
![details](https://github.com/user-attachments/assets/7898dc79-aad4-4b42-9552-9c9947d0caf1)


6. Language Selection Modal
A modal popup allows users to choose their preferred language.
![model](https://github.com/user-attachments/assets/2643d5e4-34d7-41d1-91ad-2b7593c35dbc)
Switching languages updates the app text dynamically across all screens.

Video demo: 
https://drive.google.com/file/d/1pfnPdd8fj_NP33qBLD3rsZ-jz7bkvFMH/view?usp=sharing

🛠️ Technology Stack
React Native CLI 

TypeScript 

React Navigation (for app navigation)

i18n-js / react-i18next (for language localization)

Native Modules (for splash screen handling )
