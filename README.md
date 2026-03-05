# Fake News Detection Project

A full-stack application for detecting fake news using BERT-based machine learning model, Node.js backend, and React frontend.

## Project Overview

This project consists of three main components:
- **Backend**: Express.js server for handling API requests
- **Frontend**: React application with Vite for the user interface
- **ML Model**: Python-based BERT model for fake news classification

---

## Project Structure

```
Fake_News_Detection/
├── backend/                    # Node.js Express server
│   ├── package.json
│   ├── server.js
│   ├── controller/
│   │   └── predictController.js
│   ├── model/
│   │   └── predictModal.js
│   └── route/
│       └── predictRoute.js
├── Frontend/                   # React + Vite frontend
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── assets/
│   │   └── component/
│   │       ├── AnimatedBackground.jsx
│   │       ├── Loader.jsx
│   │       ├── News_Form.jsx
│   │       └── TypingText.jsx
│   └── public/
├── ml_model/                   # Python ML model
│   ├── train.py               # Model training script
│   ├── predict.py             # FastAPI prediction endpoint
│   └── model/                 # Trained model files
├── dataset/                    # News datasets
│   ├── Fake.csv
│   └── True.csv
└── README.md
```

---

## Prerequisites

Before you start, make sure you have the following installed on your system:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.8 or higher) - [Download](https://www.python.org/)
- **Git** (optional, for cloning the repo)
- **MongoDB** (if using database features)

---

## Installation Instructions

### 1. Clone or Extract the Project

```bash
git clone <repository-url>
cd Fake_News_Detection
```

---

## Backend Setup (Node.js)

### Step 1: Navigate to Backend Directory

```bash
cd backend
```

### Step 2: Install Backend Dependencies

```bash
npm install
```

**Backend Dependencies:**
- `express` (v5.2.1) - Web framework
- `cors` (v2.8.6) - Cross-Origin Resource Sharing
- `axios` (v1.13.6) - HTTP client
- `mongoose` (v9.2.4) - MongoDB ODM
- `cheerio` (v1.2.0) - HTML/XML parsing
- `jsdom` (v28.1.0) - JavaScript implementation of web standards
- `@mozilla/readability` (v0.6.0) - Content extraction

### Step 3: Configure Environment Variables (if needed)

Create a `.env` file in the `backend/` directory and add your configuration:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/fake-news-db
```

### Step 4: Run the Backend Server

**Development Mode (with auto-reload):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

The server will run on `http://localhost:5000`

---

## Frontend Setup (React + Vite)

### Step 1: Navigate to Frontend Directory

```bash
cd Frontend
```

### Step 2: Install Frontend Dependencies

```bash
npm install
```

**Frontend Dependencies:**
- `react` (v19.2.0) - React library
- `react-dom` (v19.2.0) - React DOM rendering
- `vite` (v7.3.1) - Build tool
- `axios` (v1.13.6) - HTTP client
- `tailwindcss` (v4.2.1) - CSS framework
- `@tailwindcss/vite` (v4.2.1) - Tailwind Vite plugin
- `framer-motion` (v12.35.0) - Animation library
- `gsap` (v3.14.2) - Animation library
- `react-hot-toast` (v2.6.0) - Toast notifications
- `react-icons` (v5.6.0) - Icon library

**Dev Dependencies:**
- `@vitejs/plugin-react` (v5.1.1) - Vite React plugin
- `eslint` (v9.39.1) - Code linter
- And other related dev tools

### Step 3: Run the Frontend Development Server

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (or another port if 5173 is in use)

### Step 4: Build for Production

```bash
npm run build
```

### Step 5: Preview Production Build

```bash
npm run preview
```

---

## ML Model Setup (Python)

### Step 1: Navigate to ML Model Directory

```bash
cd ml_model
```

### Step 2: Create a Python Virtual Environment (Recommended)

```bash
python -m venv venv
```

**Activate Virtual Environment:**
- **On Windows:**
  ```bash
  venv\Scripts\activate
  ```
- **On macOS/Linux:**
  ```bash
  source venv/bin/activate
  ```

### Step 3: Install Python Dependencies

```bash
pip install -r requirements.txt
```

**If `requirements.txt` doesn't exist, install manually:**

```bash
pip install pandas scikit-learn transformers datasets fastapi uvicorn torch
```

**Python Dependencies:**
- `pandas` - Data manipulation and analysis
- `scikit-learn` - Machine learning utilities
- `transformers` - BERT model and tokenizers
- `datasets` - Dataset processing
- `fastapi` - Fast web framework
- `uvicorn` - ASGI server
- `torch` - PyTorch library (required for transformers)

### Step 4: Train the Model (Optional)

If you need to retrain the model:

```bash
python train.py
```

### Step 5: Run the Prediction Server

```bash
python -m uvicorn predict:app --reload --port 8000
```

The ML model API will be available at `http://localhost:8000`

---

## Running the Complete Application

To run all three components simultaneously, open three separate terminals:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd Frontend
npm run dev
```

**Terminal 3 - ML Model:**
```bash
cd ml_model
# Activate virtual environment first (if on Windows)
# venv\Scripts\activate
python -m uvicorn predict:app --reload --port 8000
```

Then open your browser and navigate to `http://localhost:5173` to access the frontend.

---

## Configuration Files

### Backend
- `server.js` - Main server entry point
- `route/predictRoute.js` - API routes for predictions
- `controller/predictController.js` - Route controllers
- `model/predictModal.js` - Data models

### Frontend
- `vite.config.js` - Vite configuration
- `eslint.config.js` - ESLint configuration
- `App.jsx` - Main React component
- `index.html` - HTML entry point

### ML Model
- `train.py` - Script to train the BERT model
- `predict.py` - FastAPI application for predictions
- `model/` - Directory containing trained model files

---

## Troubleshooting

### Port Already in Use
If ports 5000, 5173, or 8000 are already in use, you can change them in:
- **Backend:** Modify `server.js` or set `PORT` in `.env`
- **Frontend:** Vite will automatically use the next available port
- **ML Model:** Add `--port XXXX` flag to the uvicorn command

### Virtual Environment Issues (Python)
- Make sure you're in the `ml_model` directory
- Ensure Python 3.8+ is installed
- Delete the `venv` folder and recreate it if issues persist

### Module Not Found Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- For Python: Ensure virtual environment is activated and all packages are installed

### Database Connection Issues
- Ensure MongoDB is running (if using database features)
- Verify `MONGODB_URI` in `.env` file

---

## API Endpoints

### Backend (Express)
- `POST /api/predict` - Submit news text for prediction

### ML Model (FastAPI)
- `POST /predict` - Predict if text is fake or real news

---

## Additional Notes

- Make sure all three services (Backend, Frontend, ML Model) are running for the application to work properly
- The ML Model uses a pre-trained BERT model for classification
- Frontend communicates with the Backend API to send news text for analysis
- Backend processes requests and may communicate with the ML Model for predictions

---

## License

This project is licensed under the ISC License.

---

## Support

For issues or questions, please contact the project maintainers or create an issue in the repository.
