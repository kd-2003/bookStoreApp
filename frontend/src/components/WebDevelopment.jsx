import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WebDevelopment = () => {
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeTab, setActiveTab] = useState({});

  const handleAccordionToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
    setActiveTab({});
  };

  const handleTabChange = (index, tab) => {
    setActiveTab({ ...activeTab, [index]: tab });
  };

  const modules = [
    {
      title: "HTML & CSS Basics",
      icon: "🏗️",
      description: "Learn the foundations of web development with HTML structure and CSS styling",
      theory: `HTML (HyperText Markup Language) is the foundation of all web pages. It provides the structure and semantic meaning to web content.

Key HTML Concepts:
• Tags: The building blocks of HTML (e.g., <h1>, <p>, <div>)
• Elements: Complete tags including opening, content, and closing tags
• Attributes: Additional information about elements (id, class, src, etc.)
• Forms: User input collection with <form>, <input>, <textarea>, <button>
• Semantic HTML: Using meaningful tags (<header>, <nav>, <article>, <footer>)

CSS (Cascading Style Sheets) handles the visual styling of HTML elements:
• Selectors: Target elements (ID, class, element, attribute selectors)
• Properties: Define appearance (color, background, font, size)
• Box Model: Margin, border, padding, and content spacing
• Flexbox: Modern layout with flexible containers and items
• Grid: Two-dimensional layout system for complex designs
• Responsive Design: Media queries for different screen sizes`,
      code: `<!-- HTML Structure -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>My Website</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav class="navbar">
      <a href="/">Home</a>
      <a href="about">About</a>
    </nav>
  </header>
  
  <main>
    <h1>Welcome to My Site</h1>
    <p>This is a paragraph.</p>
    
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <button type="submit">Submit</button>
    </form>
  </main>
  
  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
</body>
</html>

/* CSS Styling */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

header {
  background-color: #333;
  color: white;
  padding: 1rem;
}

.navbar {
  display: flex;
  gap: 2rem;
}

h1 {
  color: #333;
  margin: 2rem 0 1rem;
}

/* Flexbox Example */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

/* Grid Example */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }
  .grid {
    grid-template-columns: 1fr;
  }
}`,
      video: "https://www.youtube.com/watch?v=qz0aGYrrlhU"
    },
    {
      title: "JavaScript Essentials",
      icon: "⚡",
      description: "Master JavaScript fundamentals, DOM manipulation, and event handling",
      theory: `JavaScript is a versatile programming language that brings interactivity to web pages.

Core JavaScript Concepts:
• Variables: var, let, const for storing data
• Data Types: string, number, boolean, object, array, null, undefined
• Operators: Arithmetic, comparison, logical operators
• Control Flow: if/else, switch statements, loops (for, while, do-while)
• Functions: Reusable code blocks with parameters and return values
• Objects: Key-value pairs storing related data and methods
• Arrays: Ordered collections with methods (map, filter, reduce)

DOM (Document Object Model):
• Accessing elements: getElementById, querySelector, getElementsByClass
• Manipulating content: innerHTML, textContent, appendChild
• Modifying styles: classList, style property
• Event listeners: addEventListener for user interactions
• Event types: click, submit, change, keypress, mouseover

Async JavaScript:
• Callbacks: Functions passed as arguments
• Promises: Better callback handling with .then() and .catch()
• Async/Await: Modern syntax for asynchronous operations
• setTimeout/setInterval: Timing functions`,
      code: `// Variables and Data Types
let name = "John";
const age = 25;
let scores = [85, 90, 78];

// Functions
function greet(person) {
  return "Hello, " + person + "!";
}

const sum = (a, b) => a + b; // Arrow function

// DOM Manipulation
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  alert("Button clicked!");
});

// Changing HTML content
document.querySelector("h1").innerHTML = "New Title";

// Working with Arrays
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
let evens = numbers.filter(n => n % 2 === 0);

// Objects
const user = {
  name: "Alice",
  email: "alice@example.com",
  greet: function() {
    console.log("Hi, " + this.name);
  }
};

user.greet(); // Output: Hi, Alice

// Promises
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/Await
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.error(error);
  }
}`,
      video: "https://www.youtube.com/watch?v=PkZNo7MFNFg"
    },
    {
      title: "React.js Mastery",
      icon: "⚛️",
      description: "Build modern UIs with React components, hooks, and state management",
      theory: `React is a JavaScript library for building user interfaces with reusable components.

React Fundamentals:
• Components: Building blocks of React apps (Functional and Class components)
• JSX: JavaScript XML syntax to write HTML-like code in JavaScript
• Props: Pass data from parent to child components
• State: Manage component data that can change over time
• Rendering: React efficiently updates the DOM

Hooks (Modern React):
• useState: Manage state in functional components
• useEffect: Handle side effects (API calls, timers)
• useContext: Access and share global context data
• useReducer: Complex state management
• useCallback: Optimize function references
• useMemo: Optimize expensive computations

Component Lifecycle:
• Mounting: Component is added to DOM
• Updating: Props or state changes
• Unmounting: Component is removed from DOM

Best Practices:
• Keep components small and focused
• Use controlled components for forms
• Lift state up to parent components
• Avoid prop drilling with Context API
• Use React DevTools for debugging`,
      code: `// Functional Component with Hooks
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  // Run on component mount
  useEffect(() => {
    console.log("Component mounted");
    return () => console.log("Cleanup");
  }, []);

  // Run when count changes
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// Component with Props
function UserCard({ user }) {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// Form Handling
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

// Context API Example
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  const { theme } = useContext(ThemeContext);
  return <div className={theme}>Header</div>;
}

export default App;`,
      video: "https://www.youtube.com/watch?v=bMknfKXIFA8"
    },
    {
      title: "Node.js Backend",
      icon: "🖥️",
      description: "Build server-side applications with Node.js and Express.js",
      theory: `Node.js is a JavaScript runtime that allows you to run JavaScript outside the browser, typically on servers.

Node.js Fundamentals:
• Runtime: V8 engine executes JavaScript on the server
• Modules: Reusable code in separate files using require/import
• File System: Read and write files with fs module
• Events: Event-driven architecture with EventEmitter
• Streams: Handle large data efficiently

Express.js Framework:
• Routing: Define HTTP endpoints (GET, POST, PUT, DELETE)
• Middleware: Functions that process requests/responses
• Request/Response: Access data from client and send responses
• Error Handling: Graceful error management
• Authentication: JWT, sessions for user verification

Database Integration:
• MongoDB: NoSQL database with driver or ODM (Mongoose)
• SQL: Relational databases with adapters
• Connection Pooling: Manage multiple connections efficiently
• Query Optimization: Write efficient database queries

Best Practices:
• Use environment variables for configuration
• Implement proper error handling
• Use async/await for asynchronous operations
• Validate and sanitize user input
• Scale with clustering or load balancing`,
      code: `// Basic Express Server
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Route with parameters
app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: 'User ' + id });
});

// POST request
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  // Save to database
  res.status(201).json({ 
    message: 'User created',
    user: newUser 
  });
});

// PUT request
app.put('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  res.json({ 
    message: 'User updated',
    id: id,
    data: updatedData
  });
});

// DELETE request
app.delete('/api/users/:id', (req, res) => {
  res.json({ message: 'User deleted' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});

// MongoDB with Mongoose
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Create user
const newUser = new User({
  name: 'John',
  email: 'john@example.com'
});

newUser.save()
  .then(user => console.log('User saved', user))
  .catch(err => console.error(err));`,
      video: "https://www.youtube.com/watch?v=Oe421EPjeBE"
    },
    {
      title: "Database & SQL",
      icon: "🗄️",
      description: "Master database design, SQL queries, and NoSQL concepts",
      theory: `Databases store and manage data persistently. Understanding both SQL and NoSQL is crucial.

Relational Databases (SQL):
• Tables: Organize data in rows and columns
• Schemas: Define table structure with columns and data types
• Primary Keys: Unique identifiers for each row
• Foreign Keys: Establish relationships between tables
• Indexes: Speed up queries on frequently searched columns
• Normalization: Organize data to minimize redundancy

SQL Queries:
• SELECT: Retrieve data from tables
• INSERT: Add new records
• UPDATE: Modify existing records
• DELETE: Remove records
• JOIN: Combine data from multiple tables
• GROUP BY: Aggregate data
• ORDER BY: Sort results
• WHERE: Filter data with conditions

NoSQL Databases (MongoDB):
• Documents: JSON-like data structure (more flexible)
• Collections: Groups of documents (like tables)
• Flexible Schema: No predefined structure required
• BSON: Binary JSON format used by MongoDB
• Aggregation Pipeline: Advanced data processing

Database Best Practices:
• Design normalized schemas
• Use appropriate data types
• Create indexes on frequently queried fields
• Write efficient queries
• Backup data regularly
• Use transactions for data consistency`,
      code: `-- SQL Examples
-- Create Table
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  age INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Data
INSERT INTO users (name, email, age) 
VALUES ('John Doe', 'john@example.com', 28);

-- Select All
SELECT * FROM users;

-- Select Specific Columns with WHERE
SELECT name, email FROM users 
WHERE age > 25;

-- Update
UPDATE users 
SET age = 29 
WHERE id = 1;

-- Delete
DELETE FROM users 
WHERE id = 1;

-- JOIN Example
SELECT u.name, o.order_id, o.amount
FROM users u
JOIN orders o ON u.id = o.user_id;

-- GROUP BY
SELECT age, COUNT(*) as count
FROM users
GROUP BY age
ORDER BY count DESC;

// MongoDB Examples (JavaScript)
const mongoose = require('mongoose');

// Define Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  age: Number,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Create
const newUser = new User({
  name: 'Alice',
  email: 'alice@example.com',
  age: 25
});
await newUser.save();

// Read All
const allUsers = await User.find();

// Read with Filter
const users = await User.find({ age: { $gt: 25 } });

// Update
await User.updateOne(
  { _id: userId },
  { $set: { age: 30 } }
);

// Delete
await User.deleteOne({ _id: userId });

// Aggregation Pipeline
const result = await User.aggregate([
  { $match: { age: { $gt: 20 } } },
  { $group: { _id: '$age', count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]);`,
      video: "https://www.youtube.com/watch?v=HXV3zeQKqGY"
    },
    {
      title: "Deployment & DevOps",
      icon: "🚀",
      description: "Learn deployment strategies, hosting platforms, and DevOps practices",
      theory: `Deployment is the process of making your application accessible to users in a production environment.

Deployment Platforms:
• Vercel: Optimized for Next.js and static sites (best for frontend)
• Heroku: Platform-as-a-Service for full-stack applications
• AWS: Comprehensive cloud services (EC2, S3, RDS)
• DigitalOcean: VPS hosting with Droplets
• Netlify: Frontend hosting with CI/CD integration
• Railway: Modern platform for full-stack apps

Version Control with Git:
• Repository: Store code with version history
• Branches: Parallel development lines
• Commits: Save code changes with messages
• Pull Requests: Review code before merging
• Tags: Mark important releases

CI/CD (Continuous Integration/Continuous Deployment):
• Automated Testing: Run tests on each push
• Build Process: Compile and bundle code
• Staging: Test in production-like environment
• Deployment: Automatically push to production
• Monitoring: Track application health

Frontend Deployment:
• Build step: npm run build for optimization
• Static files: Serve pre-built HTML/CSS/JS
• CDN: Distribute content globally
• Caching: Local and browser caching strategies

Backend Deployment:
• Environment variables: Configuration separate from code
• Process management: Keep server running (PM2, systemd)
• Load balancing: Distribute traffic across servers
• Database setup: Create and connect to production database
• SSL/TLS: Secure communication with HTTPS`,
      code: `// Vercel Deployment (easiest for React)
// 1. Push code to GitHub
// 2. Sign up on vercel.com
// 3. Import repository → auto deploy!
// vercel.json config
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "env": {
    "REACT_APP_API_URL": "@api_url"
  }
}

// Heroku Deployment
// 1. Install Heroku CLI
// 2. heroku login
// 3. heroku create my-app
// 4. git push heroku main
// 5. heroku logs --tail

// Procfile (for Node.js)
web: npm start

// .env.production
NODE_ENV=production
DATABASE_URL=mongodb+srv://...
API_PORT=3000

// Docker Containerization
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

// docker-compose.yml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=mongodb://mongo:27017
    depends_on:
      - mongo
  mongo:
    image: mongo:5
    volumes:
      - mongo-data:/data/db
volumes:
  mongo-data:

// GitHub Actions CI/CD (.github/workflows/deploy.yml)
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm test
      - run: npm run build
      - name: Deploy to Vercel
        run: vercel --prod`,
      video: "https://www.youtube.com/watch?v=8aGhZQkoFbQ"
    }
  ];

  return (
    <div className="min-h-screen dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <button
          onClick={() => navigate('/courses')}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold mb-8 transition-colors"
        >
          ← Back to Courses
        </button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8 md:p-12"
        >
          <div className="flex items-start gap-6 md:gap-8">
            <div className="text-6xl">💻</div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Full Stack Development
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Web Development Full Course
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Frontend + Backend + Deployment. Learn to build complete web applications from scratch. Master HTML/CSS, JavaScript, React, Node.js, and databases.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Target Audience</p>
                  <p className="font-semibold text-gray-900 dark:text-white">Beginners to Intermediate</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                  <p className="font-semibold text-gray-900 dark:text-white">3-4 Months</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Difficulty</p>
                  <p className="font-semibold text-gray-900 dark:text-white">Beginner to Advanced</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95 text-lg">
            🎉 Start Learning Now
          </button>
        </motion.div>

        {/* Modules Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            📚 Module Timeline
          </h2>

          <div className="space-y-6">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  onClick={() => handleAccordionToggle(index)}
                  className={`
                    p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer
                    ${activeAccordion === index
                      ? 'bg-blue-50 dark:bg-slate-800 border-blue-500 dark:border-blue-500 shadow-lg'
                      : 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-400'
                    }
                  `}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{module.icon}</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {index + 1}. {module.title}
                        </h3>
                      </div>
                      <p className={`text-sm transition-all duration-300 ${
                        activeAccordion === index
                          ? 'text-gray-700 dark:text-gray-300 opacity-100'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {module.description}
                      </p>
                    </div>
                    <span className={`text-2xl ml-4 transition-transform duration-300 flex-shrink-0 ${
                      activeAccordion === index ? 'rotate-180' : ''
                    }`}>
                      ▼
                    </span>
                  </div>

                  {/* Expanded Content */}
                  {activeAccordion === index && (
                    <div className="mt-6 pt-6 border-t border-blue-200 dark:border-blue-500">
                      {/* Tab Navigation */}
                      <div className="flex gap-2 mb-4 border-b border-gray-200 dark:border-slate-700">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTabChange(index, 'theory');
                          }}
                          className={`px-4 py-2 font-semibold transition-all duration-200 ${
                            (activeTab[index] || 'theory') === 'theory'
                              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                          }`}
                        >
                          📘 Theory
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTabChange(index, 'code');
                          }}
                          className={`px-4 py-2 font-semibold transition-all duration-200 ${
                            activeTab[index] === 'code'
                              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                          }`}
                        >
                          💻 Code
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTabChange(index, 'video');
                          }}
                          className={`px-4 py-2 font-semibold transition-all duration-200 ${
                            activeTab[index] === 'video'
                              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                          }`}
                        >
                          🎥 Video
                        </button>
                      </div>

                      {/* Tab Content */}
                      <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                        {(activeTab[index] || 'theory') === 'theory' && (
                          <div className="max-h-96 overflow-y-auto">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                              Module Theory
                            </h4>
                            <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap space-y-3">
                              {module.theory.split('\n').map((line, i) => (
                                <div key={i}>{line}</div>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeTab[index] === 'code' && (
                          <div className="max-h-96 overflow-y-auto">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                              Code Examples
                            </h4>
                            <pre className="bg-gray-100 dark:bg-slate-800 p-3 rounded text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
                              <code>{module.code}</code>
                            </pre>
                          </div>
                        )}

                        {activeTab[index] === 'video' && (
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                              Video Lecture
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                              Watch the complete video tutorial for this module on YouTube.
                            </p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(module.video, '_blank');
                              }}
                              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-200 hover:shadow-lg active:scale-95 flex items-center gap-2"
                            >
                              🎥 Watch Video on YouTube
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            📈 Your Learning Path
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-700 p-4 rounded-lg text-center hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-2">{module.icon}</div>
                <p className="text-xs font-semibold text-gray-900 dark:text-white">
                  {module.title.split(' ')[0]}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Become a Web Developer?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Join thousands of learners mastering web development with our comprehensive course covering frontend, backend, and deployment.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95 text-lg">
            Enroll Now & Get Started! 🚀
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopment;