# 📘 Keploy Documentation Portal

A modern, responsive documentation website built using **Next.js App Router, MDX, and Tailwind CSS**, inspired by the official **Next.js Docs UI**, and customized specifically for **Keploy**.

This project demonstrates how to build a **production-grade documentation platform** with structured navigation, a dynamic Table of Contents, MDX content, and real-world documentation patterns.

---

## 🚀 Live Demo

🔗 Deployed on Vercel:  
https://keploy-project-submission.vercel.app/

---

## 🛠 Tech Stack

- **Next.js 14 (App Router)**
- **MDX** for documentation content
- **Tailwind CSS v4**
- **React**
- **Intersection Observer API**
- **Vercel** (Deployment)

---

## 🎯 Project Objectives

This project was built to:

- Replicate a **Next.js Docs–style documentation layout**
- Present **Keploy documentation clearly and professionally**
- Demonstrate **real-world frontend engineering skills**
- Fulfill all required documentation, navigation, and UI behaviors

---

## ✅ Features Implemented

### 1️⃣ Next.js Docs–Style Layout

✔ Three-column layout  
- **Left Sidebar** → Section navigation  
- **Center Content** → MDX documentation  
- **Right TOC** → “On this page” navigation  

✔ Fully responsive  
✔ Desktop-first documentation UX  

---

### 2️⃣ MDX-Powered Documentation

✔ Content written using **MDX**  
✔ Supports:
- Headings
- Lists
- Code blocks
- Custom React components inside markdown  

✔ Clean section IDs for anchor navigation  

---

### 3️⃣ Structured Documentation Sections

All required sections are fully implemented and visible:

1. **Integration Testing**
2. **How Keploy Works** (with architecture diagram)
3. **API Testing**
4. **Unit Testing**
5. **Installation**
6. **Go Quickstart**
7. **CLI Commands**
8. **Configuration**

✔ Each section includes:
- Proper headings
- Complete content
- Scroll-based navigation
- TOC integration  

---

### 4️⃣ Architecture Diagram Integration

✔ Custom `ArchitectureDiagram` React component  
✔ Visually explains how Keploy works  
✔ Fully responsive and scalable  
✔ Embedded directly inside MDX  

---

### 5️⃣ Callout Components

✔ Reusable `<Callout />` component  
✔ Used for:
- Important notes
- Best practices
- Warnings  

✔ Styled to match professional documentation tone  

---

### 6️⃣ Dynamic Right-Side TOC (On This Page)

✔ Scroll-aware Table of Contents  
✔ Automatically highlights the active section while scrolling  

✔ Implemented using:
- `IntersectionObserver`
- Smooth scrolling
- Next.js Docs–style active indicator  

✔ Always visible on desktop  

---

### 7️⃣ Smooth Anchor Navigation

✔ Clicking sidebar or TOC links:
- Smoothly scrolls to sections
- Highlights the active section  

✔ No page reloads  

---

### 8️⃣ Header Navigation

✔ Top navigation includes:
- Docs
- Products (dropdown)
- Solutions (dropdown)
- Blog
- GitHub  

✔ External links redirect to official Keploy resources  
✔ Search input for section navigation  

---

### 9️⃣ Footer (Next.js Docs Style)

✔ Footer styled to match **Next.js Docs**  
✔ Includes:
- Resources
- Community links
- Legal links
- Newsletter section  

✔ Fully responsive  
✔ Works correctly in light & dark modes  

---

### 🔟 Dark Mode Support

✔ Light / Dark mode toggle implemented  
✔ Entire site updates correctly:
- Background
- Text
- Callouts
- Code blocks
- Sidebar
- Header
- Footer  

✔ No unreadable text in dark mode  

---

### 1️⃣1️⃣ Accessibility & UX

✔ Semantic HTML  
✔ Readable typography  
✔ Proper contrast in both themes  
✔ Keyboard-friendly navigation  
✔ Optimized scrolling behavior  

---

### 1️⃣2️⃣ Deployment & CI/CD

✔ GitHub version control  
✔ Deployed on **Vercel**  
✔ Automatic redeploy on every push  
✔ Production-ready setup  

---

## 🧪 How to Run Locally

Clone the repository and start the development server:

```bash
git clone https://github.com/YOUR_USERNAME/keploy-docs.git
cd keploy-docs
npm install
npm run dev

