# 🛒 Full Stack eCommerce Web Application

A full-featured eCommerce web application built with *ASP.NET Core (C#)* for the backend and *React.js* for the frontend. It includes user authentication, product CRUD operations, image handling, and modern state management using React Hooks and Context API.

---

## 📌 Features

### 🔒 Backend (ASP.NET Core)
- ✅ JWT Authentication  
- ✅ RESTful API with full CRUD (Products, Users, Categories)  
- ✅ Image Upload & File Handling  
- ✅ Clean Architecture: Controllers, Services, Repositories  
- ✅ Dependency Injection (DI)  
- ✅ NuGet for dependency management  
- ✅ CORS enabled for frontend-backend integration  

### 🌐 Frontend (React.js)
- ⚛ Functional Components with Hooks (useEffect, useContext, useReducer)  
- 🔁 Global State Management using Context API + Reducer  
- 🔐 User Authentication (Login/Register)  
- 🔄 Dynamic Routing via react-router-dom  
- 🖼 Product Image Preview & Upload  
- 📱 Responsive UI for all devices  
- 🚦 Error Handling & Loading Indicators  

---

## 🚀 Tech Stack

| Layer        | Technology                         |
|--------------|-------------------------------------|
| Backend      | ASP.NET Core Web API                |
| Auth         | JWT                                 |
| Frontend     | React.js                            |
| State        | Context API + useReducer            |
| Routing      | React Router DOM                    |
| Storage      | Local File System (Images)          |
| Tools        | NuGet, Visual Studio Code, Postman  |

---

## 📁 Project Structure


Backend/
│
├── Controllers/
├── Models/
├── DTOs/
├── Services/
├── Repositories/
├── Middleware/
└── appsettings.json

Frontend/
│
├── components/
├── context/
├── reducers/
├── pages/
└── utils/


---

## 🛠 Installation & Setup

### 🔧 Backend

bash
git clone https://github.com/your-username/ecommerce-app.git
cd ecommerce-app/backend

dotnet restore
dotnet build
dotnet run


### 🌐 Frontend

bash
cd ecommerce-app/frontend

npm install
npm start


---

## 🔐 Environment Variables

In appsettings.json or .env:

json
{
  "Jwt": {
    "Key": "your_secret_key_here"
  }
}


---

## 📦 NuGet Packages Used

bash
dotnet add package Microsoft.EntityFrameworkCore --version 9.0.0
dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 9.0.0
dotnet add package Microsoft.EntityFrameworkCore.Design --version 9.0.0
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 9.0.0
dotnet add package Microsoft.Extensions.Configuration.Json --version 9.0.0
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer --version 9.0.0


---

## 🌐 API Endpoints (Sample)

| Method | Endpoint                       | Description        |
|--------|--------------------------------|--------------------|
| POST   | /api/auth/login             | Login user         |
| GET    | /api/products               | List all products  |
| POST   | /api/products               | Add new product    |
| PUT    | /api/products/:id           | Update product     |
| DELETE | /api/products/:id           | Delete product     |
| GET    | /api/products/categories    | Get categories     |

---

## ✍ Author

*Kirti*  
CDAC Student | Aspiring Full-Stack Developer

---

## 📄 License

This project is open-source and available under the *MIT License*.
