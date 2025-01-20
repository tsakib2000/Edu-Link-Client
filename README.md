# EduLink - Client

## Overview
This is the client-side implementation of the Collaborative Study Platform, a responsive and interactive web application to facilitate study session scheduling, resource sharing, and user management.

## Features of the Collaborative Study Platform

1. **Responsive Design**  
   - Fully responsive user interface that adapts seamlessly to mobile, tablet, and desktop devices.

2. **Role-Based Access Control**  
   - Separate dashboards and functionalities for students, tutors, and administrators.

3. **Secure Authentication**  
   - JWT-based authentication with email/password login and social login options using Google and GitHub.

4. **Study Session Management**  
   - Users can create, view, and book study sessions. Admins can approve or reject sessions with feedback.

5. **Material Sharing**  
   - Tutors can upload study materials, including images and Google Drive links, accessible only to booked students.

6. **Dynamic Notifications**  
   - Sweet alerts/toasts for all CRUD operations and authentication actions instead of default browser alerts.

7. **Pagination and Search**  
   - Pagination implemented for user tables and session lists, with backend search functionality for user management.

8. **Personal Notes Management**  
   - Students can create, update, and delete personal notes directly from their dashboards.

9. **Reviews and Ratings**  
   - Students can provide reviews and ratings for study sessions, enhancing transparency and quality.

10. **Environment Variables**  
   - Sensitive information, such as Firebase  credentials, is secured using environment variables.



## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-tsakib2000.git
   ```
2. Navigate to the client directory:
   ```bash
   cd client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and add Firebase configuration keys.
5. Run the website:
   ```bash
   npm run dev
   ```

## Important Info

### [Live link](https://edu-link-9f9f8.web.app/)
 
 ### Admin Email & password
 ```
 Email:isakib49@gmail.com
 Password: 123456
 ```

---