<<<<<<< HEAD
# AI-Powered Plant Disease Detection System

A comprehensive system for detecting and classifying plant diseases using deep learning. The system supports both image upload and real-time camera input, providing detailed information about detected diseases, their symptoms, and treatment recommendations.

## Features

- Image upload and real-time camera input for disease detection
- Deep learning-based disease classification
- Multi-language support (English, Spanish, Hindi)
- Detailed disease information including symptoms and treatments
- Prevention tips and recommendations
- Mobile-responsive design
- User-friendly interface

## Tech Stack

- Frontend: React.js, Material-UI
- Backend: Python, Flask
- Deep Learning: TensorFlow
- Image Processing: OpenCV, Pillow
- Internationalization: i18next

## Setup Instructions

### Prerequisites

- Python 3.8 or higher
- Node.js 14 or higher
- npm or yarn

### Backend Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the backend server:
```bash
cd backend
python app.py
```

### Frontend Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Start the development server:
```bash
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Project Structure

```
.
├── backend/
│   ├── app.py              # Flask application
│   ├── models/             # Deep learning models
│   └── uploads/            # Temporary storage for uploaded images
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── i18n.js        # Internationalization config
│   │   └── App.js         # Main application
│   └── package.json       # Frontend dependencies
└── README.md              # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- PlantVillage dataset for disease classification
- TensorFlow team for the deep learning framework
- React and Material-UI communities for the frontend components 
=======
# plant_disease_detection
>>>>>>> origin/main
