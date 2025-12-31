# 🧠 BrainStorm: Dynamic Quiz Application & Automation Suite

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Language](https://img.shields.io/badge/Language-HTML%20%7C%20CSS%20%7C%20JS%20%7C%20Java-blue)
![License](https://img.shields.io/badge/License-MIT-green)

A premium, interactive Quiz Application built with modern web technologies, featuring a robust Semantic Webdriver automation suite for end-to-end testing. This project demonstrates full-stack capabilities including front-end design, logic implementation, and automated quality assurance.

---

## 📑 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Automation & Testing](#-automation--testing)
- [Submission Guidelines](#-submission-guidelines)
- [Credits](#-credits)

---

## 📖 Project Overview
The **Dynamic Quiz Application** is a client-side single-page application (SPA) designed to test user knowledge across multiple domains (Science, History, Technology, General Knowledge). It features a countdown timer, dynamic question loading, and instant result analysis with visual charts.

The accompanying **Automation Suite** uses Selenium WebDriver to perform rigorous end-to-end testing, ensuring the application's reliability and stability.

---

## ✨ Key Features

### 🌐 Web Application
*   **Dynamic Question Engine**: Seamlessly loads questions based on selected Category and Difficulty.
*   **Time-Bound Challenges**: Integrated 15-second countdown timer per question to enhance engagement.
*   **Interactive UI/UX**: Built with **Glassmorphism** design principles for a premium, modern aesthetic.
*   **Result Analytics**: Comprehensive performance breakdown using **Chart.js** visualizations.
*   **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile devices.

### 🤖 Automation Suite
*   **Automated Workflow**: Full simulation of user journey from Landing Page to Result Analysis.
*   **Evidence Capture**: Automated screenshot generation at critical test steps.
*   **Log Generation**: Detailed console logs for execution tracking and debugging.

---

## 🛠 Technology Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3 | Structure and Glassmorphism Styling |
| **Logic** | JavaScript (ES6+) | State management, Timer, Quiz Logic |
| **Visualization** | Chart.js | Data visualization for result analysis |
| **Automation** | Java (JDK 11+) | Core language for test scripts |
| **Testing** | Selenium WebDriver | Browser automation framework |
| **Build Tool** | Maven | Dependency management for automation |

---

## 📂 Project Structure

```bash
Dynamic Quiz/
├── src/                    # Web Application Source Code
│   ├── index.html          # Main Application Entry Point
│   ├── style.css           # Premium CSS Stylesheets
│   └── script.js           # Core Application Logic
│
├── automation/             # Selenium Test Suite
│   ├── src/main/java/...   # Java Test Scripts (QuizAutomation.java)
│   ├── screenshots/        # Auto-generated Test Evidence
│   └── pom.xml             # Maven Configuration
│
└── README.md               # Project Documentation
```

---

## 🚀 Getting Started

### Prerequisites
*   A modern web browser (Google Chrome, Edge, Firefox).
*   **Optional**: Java JDK and an IDE (Eclipse/IntelliJ) for running automation.

### Running the Application
1.  Navigate to the `src` folder.
2.  Double-click **`index.html`**.
3.  The application will launch instantly in your default browser. No server setup required.

---

## 🧪 Automation & Testing

To verify the application integrity, run the included Selenium suite:

1.  Open **Eclipse IDE** (or IntelliJ IDEA).
2.  Import the `automation` folder as a **Maven Project**.
3.  Locate `QuizAutomation.java` in `src/main/java/com/dynamicquiz/automation`.
4.  Right-click and select **Run As > Java Application**.

The script will:
1.  Launch the browser.
2.  Execute the test scenario (Taking the quiz).
3.  Save screenshots to `automation/screenshots`.
4.  Print execution logs to the Console.

---

## 📝 Submission Guidelines

For evaluation/submission purposes, ensure the following artifacts are prepared:

1.  **Source Code**: The complete repository link.
2.  **Test Report**: Compile the generated **Screenshots** and **Console Logs** into a PDF.
3.  **Video Evidence**: A screen recording of the automation script executing successfully.

---

## 👨‍💻 Credits

**Developed by Sayak Mukherjee**  

---
*© 2025 Dynamic Quiz Project. All Rights Reserved.*
