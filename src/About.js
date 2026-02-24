import React from "react";

export default function About() {
  return (
    <div className="container my-5">

      <h1 className="text-center mb-5">About TextUtils</h1>

      <div className="card shadow-lg p-5">

        {/* Introduction */}
        <section className="mb-5">
          <h3>📌 Introduction</h3>
          <p>
            TextUtils is a powerful and easy-to-use text manipulation tool 
            built using React.js. It allows users to quickly modify and analyze 
            text with a clean and user-friendly interface.
          </p>
          <p>
            Whether you are a student, developer, content writer, or professional,
            TextUtils helps you format and manage text efficiently.
          </p>
        </section>

        <hr />

        {/* Features */}
        <section className="mb-5">
          <h3>🚀 Key Features</h3>
          <ul>
            <li>Convert text to UPPERCASE instantly</li>
            <li>Convert text to lowercase instantly</li>
            <li>Clear entire text with one click</li>
            <li>Responsive and fast performance</li>
            <li>Single Page Application (SPA)</li>
            <li>Clean and modern UI design</li>
          </ul>
        </section>

        <hr />

        {/* How It Works */}
        <section className="mb-5">
          <h3>⚙ How It Works</h3>
          <p>
            TextUtils uses React state management to store and update text dynamically.
            When a user clicks a button, the application processes the text and 
            updates the UI instantly without reloading the page.
          </p>
          <p>
            This makes the app fast and efficient compared to traditional websites.
          </p>
        </section>

        <hr />

        {/* Benefits */}
        <section className="mb-5">
          <h3>✅ Benefits of Using TextUtils</h3>
          <ul>
            <li>Saves time during text formatting</li>
            <li>Improves productivity</li>
            <li>Works instantly without page refresh</li>
            <li>Simple and beginner-friendly</li>
          </ul>
        </section>

        <hr />

        {/* Technologies Used */}
        <section className="mb-5">
          <h3>💻 Technologies Used</h3>
          <ul>
            <li>React.js (Frontend Library)</li>
            <li>JavaScript (Logic Handling)</li>
            <li>Bootstrap (Styling & Layout)</li>
            <li>React Router (Navigation)</li>
          </ul>
        </section>

        <hr />

        {/* Future Improvements */}
        <section className="mb-5">
          <h3>🔮 Future Improvements</h3>
          <ul>
            <li>Dark Mode Toggle</li>
            <li>Word Counter & Character Counter</li>
            <li>Text Copy to Clipboard</li>
            <li>Remove Extra Spaces</li>
            <li>Grammar Checking Feature</li>
          </ul>
        </section>

        <hr />

        {/* Developer Info */}
        <section className="mb-5">
          <h3>👨‍💻 Developer</h3>
          <p>
            This project is developed as a learning project to understand
            React fundamentals, state management, routing, and UI design.
          </p>
        </section>

        <hr />

        {/* FAQ */}
        <section>
          <h3>❓ Frequently Asked Questions</h3>
          <p><strong>Q1:</strong> Is TextUtils free to use?</p>
          <p>Yes, it is completely free.</p>

          <p><strong>Q2:</strong> Does it store my data?</p>
          <p>No, your text is processed locally in your browser.</p>

          <p><strong>Q3:</strong> Is it mobile responsive?</p>
          <p>Yes, it works on desktop, tablet, and mobile devices.</p>
        </section>

      </div>

    </div>
  );
}