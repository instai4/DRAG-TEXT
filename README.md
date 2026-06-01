# DRAG-TEXT

An interactive web experiment that allows users to interact with text as if it were a physical, draggable string of letters subject to physics simulation. The application's core structure, styling, and logic are cleanly modularized into standard HTML, CSS, and JS files.

## 🚀 Technologies Used

This project relies purely on native web technologies, ensuring maximum performance, broad compatibility, and zero external dependencies:

### 1. **HTML5**
* Provides the foundational structure.
* Cleanly separates concerns by loading external CSS and JS files without any heavy bundlers or build steps.

### 2. **Vanilla CSS3**
* Minimalist and self-contained styling.
* Hardware acceleration utilizes `will-change: transform` and CSS transforms for highly performant, jank-free rendering.
* Interactive cursors (`grab`, `grabbing`) for clear UX feedback.

### 3. **Vanilla JavaScript (ES6+)**
* The core logic is driven by modern Javascript features like block-scoping (`const`/`let`), Map objects, and arrow functions.
* **Physics Engine**: A custom-built 2D physics simulation utilizing Verlet integration (or similar spring/constraint logic). It calculates gravity, damping, elastic constraints between letters, and collision boundaries based on the window's dimensions.
* **Render Loop**: Driven by `requestAnimationFrame` for a smooth, consistent frame rate (capped to simulate around 120Hz logic steps) decoupled from the device's native refresh rate using an accumulator pattern.

### 4. **DOM & Pointer Events APIs**
* Manipulates the DOM directly by dynamically generating `<div>` elements for each letter.
* Replaces legacy mouse and touch events with the unified **Pointer Events API** (`pointerdown`, `pointermove`, `pointerup`, `pointercancel`). 
* Utilizes `setPointerCapture` to maintain reliable drag tracking even when the pointer moves outside the immediate bounds of a letter or the window.

### 5. **Internationalization API (`Intl.Segmenter`)**
* Uses native browser text segmentation (`Intl.Segmenter`) and custom algorithms for bidirectional (Bidi) text handling and classification.
* Ensures that strings are split into correctly ordered visual and interactive segments, honoring word breaks and character relationships regardless of the language direction.

## 💡 How it Works

1. **Initialization:** The script analyzes the target text, computes word segmentations, and calculates starting layouts based on the screen width.
2. **Simulation:** The text operates as a constrained chain. Pressing `F` enables gravity, causing the letters to fall and unravel based on spring-like constraints.
3. **Interaction:** Clicking and dragging any available letter interacts with the physics engine. The dragged element follows the pointer while adjacent elements stretch, pull, and bounce organically.
