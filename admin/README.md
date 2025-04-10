# Recipe Admin Dashboard

This project is an admin dashboard built with React.js and styled using Tailwind CSS. It provides a user-friendly interface for managing credentials and navigating through different sections of the application.

## Project Structure

```
recipe
├── public
│   └── index.html          # Main HTML file for the React application
├── src
│   ├── components          # Contains reusable components
│   │   ├── Navbar.jsx      # Navigation bar component
│   │   ├── Sidebar.jsx     # Sidebar component
│   │   └── index.js        # Exports for Navbar and Sidebar
│   ├── pages               # Contains different pages of the dashboard
│   │   ├── Dashboard.jsx    # Main dashboard page
│   │   ├── Page1.jsx       # Secondary page 1
│   │   └── Page2.jsx       # Secondary page 2
│   ├── App.jsx             # Main application component with routing
│   ├── index.css           # Global styles and Tailwind CSS imports
│   └── index.js            # Entry point for the React application
├── package.json            # npm configuration file
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd recipe
   ```

2. **Install dependencies:**
   ```
   yarn install
   ```

3. **Run the application:**
   ```
   yarn start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the admin dashboard.

## Usage

- The dashboard includes a navigation bar and sidebar that are displayed on all pages.
- You can navigate between the main dashboard and secondary pages using the links provided in the Navbar and Sidebar.

## Technologies Used

- React.js
- Tailwind CSS
- React Router

## License

This project is licensed under the MIT License.