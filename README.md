# DigiTools

A high-performance, single-page digital marketplace interface built with React and Tailwind CSS. This project focuses on state-driven UI transitions, dynamic cart management, and coordinated smooth-scrolling logic.

---

### Tech Stack
* **Core:** React 18 (Vite)
* **Styling:** Tailwind CSS (Glassmorphism & Responsive Grids)
* **Notifications:** React-Toastify

---

### Features

1. **Dual-View System:** Uses a centralized `view` state in `App.jsx` to toggle between the **Product Gallery** and the **Checkout Cart** without page reloads or complex routing.

2. **Deferred Smooth-Scroll:** Implemented a custom `scrollToSection` utility in the Navbar. If a user is on the Cart page, the function triggers a view-switch back to the shop and uses a `setTimeout` to wait for the DOM to paint before executing `scrollIntoView`.

3. **Cart State Management:** - **Validation:** Prevents duplicate items using `.find()`.
   - **Persistence:** Dynamic calculations using `.reduce()` for real-time total updates.
   - **Feedback:** Event-driven "Toasts" for adding, removing, and clearing the cart.

4. **Sticky Navigation:** Uses `scroll-mt` offsets to ensure section headers are never hidden behind the fixed backdrop-blur navbar.

---

### Note: 
The live link may show a 'Dangerous Site' warning on some mobile browsers. This is a common GitHub Pages false positive for new deployments. The site is safe to proceed to, and the code is verified in the repository.


---

### Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx   # Scroll logic & View switching
│   ├── Products.jsx # Item grid & "Add to Cart" events
│   ├── Cart.jsx     # Checkout logic & Item removal
│   └── ...          # Banner, Stats, Pricing, Footer
├── App.jsx          # Root State (Cart & View)
└── main.jsx         # App Entry Point

"Note: The live link may show a 'Dangerous Site' warning on some mobile browsers. This is a common GitHub Pages false positive for new deployments. The site is safe to proceed to, and the code is verified in the repository."

Getting Started
Install Dependencies

Bash
npm install
Run Development Server

Bash
npm run dev
Build for Production

Bash
npm run build
Developed by Fahid