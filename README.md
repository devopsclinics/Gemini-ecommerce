# Gemini-ecommerce
The Secure E-Commerce Platform is a robust and scalable web application built with modern technologies such as Node.js, MongoDB, Nginx, and Ansible. It features a product listing page, shopping cart functionality, user authentication, payment processing, and enhanced security measures such as HTTPS, firewall configurations, and Single Sign-On (SSO) integration. The platform leverages Jira for project management, Slack for team collaboration, and Ansible for automating server setup, user account management, and security tasks.
Prerequisites
Ensure the following are installed:

Node.js (v18 or later)
MongoDB
Nginx
Ansible
Git
Setting Up User Accounts with Ansible:
Use Ansible to create unique logins for each team member:
![image](https://github.com/user-attachments/assets/0c267a7f-a7be-499f-b747-8fbda086318e)
Step 4: Install Nginx Web Server with Ansible
![image](https://github.com/user-attachments/assets/951c6ef4-b77a-4972-8754-c17ae9604d80)
Ensure Nginx runs on boot using Ansible tasks within the role.
![image](https://github.com/user-attachments/assets/758e5bf1-09bf-4180-a5ab-b462802358c9)

Step 5: Install and Configure Database with Ansible
![image](https://github.com/user-attachments/assets/6127e9db-76bb-49d5-ba84-86aa5af4aa5a)

Secure the Database Server
Run security scripts using Ansible to set the admin password and remove test databases within the role.
![image](https://github.com/user-attachments/assets/032ac4ac-cd0f-4944-8366-082af7c9b9d8)

Step 6: Develop the Platform
To create a simple e-commerce website with product display, shopping cart functionality, and user authentication using HTML, CSS, JavaScript, Node.js, and MongoDB, here's a basic structure:
Frontend: HTML, CSS, and JavaScript will handle product display and cart interactions.
Backend: Node.js will serve API endpoints and manage authentication and cart operations. MongoDB will handle user data and cart storage.

![image](https://github.com/user-attachments/assets/ecb98bd9-c913-435a-a542-670412c1ed22)


Create a Product Listing Page
Design an HTML page to display products.
Implement Shopping Cart Functionality
Use JavaScript and Node.js to handle adding products to the cart and displaying the cart.
User Authentication
Implement user authentication using Node.js and MongoDB.
FRONTEND
![image](https://github.com/user-attachments/assets/21977329-a4fb-4c7a-95de-bfea187afa69)

STYLES>CSS
![image](https://github.com/user-attachments/assets/2042bed1-fb47-4aae-8f08-fb8894734e90)
![image](https://github.com/user-attachments/assets/95587c9f-1e7c-4ae5-8aa9-8a7eb79d43a1)
![image](https://github.com/user-attachments/assets/a425ef0e-14b2-433f-a41d-e0f994efc395)



Create All Script Acoording to the structure thne,
-Create a .env file in the root of your project:
![image](https://github.com/user-attachments/assets/7cfb4e14-efed-46dd-b560-172ca37a1593)
Install Dependencies
Make sure you install the required dependencies:
![image](https://github.com/user-attachments/assets/76b7ef27-6c61-4f6b-a107-e78e42ff10d9)

Start MongoDB: mongod
Run your server: node app.js
Open http://localhost:3000/ in your browser.





  
