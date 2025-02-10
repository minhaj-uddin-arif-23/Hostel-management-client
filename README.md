<div align="center">
  <img height="400" src="https://media.licdn.com/dms/image/v2/D562DAQGoCrUWWQGDzw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1739164761754?e=1739772000&v=beta&t=xsG6A4DznkId3H0N5dhyy0Tu47uIjNCaj1KbFnldZWU"  />
</div>

# 🏨 Hostel Management System  

🚀 **Hostel Management System** is a **full-stack web application** that helps **students and administrators** efficiently manage hostel services. This platform provides a **meal management system, user authentication, subscription-based meal plans, and payment integration** for a seamless experience.  

---

## 🌟 Features  

### **🛂 Admin & User Role Management**  
✅ Admin and Users have different permissions and functionalities.  
✅ **Admin:** Can **manage meals, approve meal requests, add rooms, view user profiles**, and handle other hostel-related services.  
✅ **User:** Can **browse meals, request meals, subscribe to meal plans, review meals, and manage their profiles**.  

### **🍽 Meal Management System**  
✅ Users can **browse meals** and view meals by **category**.  
✅ Advanced **search and filter** system allows users to filter meals **by price range**.  
✅ Users can **like and review meals**.  

### **📦 Subscription & Payment Integration**  
✅ Users must **subscribe** before requesting meals.  
✅ **Stripe Payment Gateway** is integrated for secure transactions.  
✅ Users can **view payment history** after subscription.  

### **📝 Meal Requests & Admin Control**  
✅ **Users:** Can **request meals** if they have an active subscription.  
✅ **Admin:** Can **approve or reject meal requests**.  
✅ **Upcoming Meals Section** – Admin can add upcoming meals.  

### **🛏 Room Management**  
✅ Admin can **add and manage hostel rooms**.  
✅ Users can view available rooms.  

### **📊 Profile & History**  
✅ **Admin & Users** can **view and update their profiles**.  
✅ Users can **see their requested meals and reviews**.  
✅ Users can **check their payment history**.  

---

## 🛠 Tech Stack  

### **Frontend**  
- **React.js** – Component-based UI framework  
- **React Router** – Client-side routing  
- **Tailwind CSS & DaisyUI** – Modern and responsive styling  
- **Framer Motion** – Smooth animations  
- **React Hook Form** – Efficient form handling  
- **SweetAlert2** – Elegant popups & alerts  

### **Backend**  
- **Node.js & Express.js** – API & server  
- **MongoDB** – NoSQL database  
- **Firebase Authentication** – Secure user authentication  
- **Stripe** – Payment gateway integration  

### **Other Tools & Libraries**  
- **JWT (JSON Web Token)** – Secure authentication  
- **Cookie Parser** – Handles authentication cookies  
- **Dotenv** – Manages environment variables  
- **CORS** – Enables secure API requests  
- **IMGBB API** – Image storage solution for meal images  

---

## 🚀 Installation  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/hostel-management-system.git
cd hostel-management-system
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**  

Create a `.env` file in the root directory and add:  

```sh
# Firebase Configuration
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_PROJECT_ID=your_firebase_project_id
VITE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_APP_ID=your_firebase_app_id

# Stripe Payment API Key
VITE_STRIPE_PK_KEY=your_stripe_public_key

# IMGBB API Key (for image uploads)
VITE_IMGBB_API_KEY=your_imgbb_api_key
```

⚠ **Make sure your `.env` file is included in `.gitignore` to keep it private**:  
```sh
echo ".env" >> .gitignore
```

### **4️⃣ Run the Development Server**  
```sh
npm run dev
```
The frontend will be accessible at `http://localhost:5173`.  

---

## 📂 Project Structure  

```
📦 hostel-management-system
 ┣ 📂 src
 ┃ ┣ 📂 components  # Reusable UI components
 ┃ ┣ 📂 pages       # Application pages
 ┃ ┣ 📂 hooks       # Custom React hooks
 ┃ ┣ 📂 utils       # Utility functions
 ┃ ┣ 📜 main.jsx    # Entry point
 ┃ ┣ 📜 App.jsx     # Main application component
 ┣ 📜 package.json  # Dependencies & scripts
 ┣ 📜 vite.config.js # Vite configuration
 ┣ 📜 .eslintrc.js   # ESLint configuration
 ┣ 📜 tailwind.config.js  # Tailwind CSS settings
 ┣ 📜 README.md     # Documentation
```

---

## 🚀 API Endpoints  

### **🔑 Authentication**  
| Method | Endpoint         | Description                 |
|--------|-----------------|-----------------------------|
| POST   | `/auth/register` | Register a new user        |
| POST   | `/auth/login`    | User login with JWT        |
| GET    | `/auth/logout`   | Logout user & clear session |

### **🍽 Meal Management**  
| Method | Endpoint        | Description                 |
|--------|----------------|-----------------------------|
| GET    | `/meals`       | Fetch all meals            |
| GET    | `/meals/:id`   | Get meal details           |
| POST   | `/meals`       | Admin: Add a new meal      |
| PATCH  | `/meals/:id`   | Admin: Update meal details |
| DELETE | `/meals/:id`   | Admin: Remove a meal       |

### **📦 Meal Requests**  
| Method | Endpoint        | Description                 |
|--------|----------------|-----------------------------|
| GET    | `/meal-requests` | Get all meal requests     |
| POST   | `/meal-requests` | User: Request a meal      |
| PATCH  | `/meal-requests/:id` | Admin: Approve/Reject request |

### **📝 Reviews**  
| Method | Endpoint        | Description                 |
|--------|----------------|-----------------------------|
| GET    | `/reviews`     | Get all reviews            |
| POST   | `/reviews`     | Add a new review           |
| PATCH  | `/reviews/:id` | Update a review           |
| DELETE | `/reviews/:id` | Remove a review           |

### **💳 Payments & Subscription**  
| Method | Endpoint        | Description                 |
|--------|----------------|-----------------------------|
| GET    | `/payments/history` | Get user payment history |
| POST   | `/payments`     | Process a new payment     |

---

## 🎨 UI Preview  

![Hostel Management System UI](https://your-image-url.com) <!-- Replace with an actual screenshot -->

---

## 🤝 Contributing  

We welcome contributions! 🎉  

### **How to Contribute:**  
1. **Fork the repository** 📌  
2. **Create a feature branch** (`git checkout -b feature-branch`)  
3. **Make your changes** and commit (`git commit -m "Add new feature"`)  
4. **Push your branch** (`git push origin feature-branch`)  
5. **Open a Pull Request** 🚀  

### **Contribution Guidelines:**  
✅ Follow the **code style** defined in `.eslintrc.js`.  
✅ Keep UI changes **responsive and accessible**.  
✅ Clearly **describe** your pull request.  
✅ Ensure **no sensitive data** is pushed (check `.env`).  

---
## Login this Admin account 
niloy@gmail.com
12345Aa!
 
## License  

This project is licensed under the **nextArif License**.  


## 🔗 Connect With Me  

- **GitHub**: https://github.com/minhaj-uddin-arif-23
- **Portfolio**: https://malicious-territory.surge.sh

Let me know if you need modifications! 🚀
