from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
import tensorflow as tf
import numpy as np
from PIL import Image
import io
import json

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Configure upload folder
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Allowed file extensions
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Load model and class indices once
MODEL_PATH = os.path.join(os.getcwd(), 'plant_disease_model.h5')
CLASS_INDICES_PATH = os.path.join(os.getcwd(), 'class_indices.json')
model = tf.keras.models.load_model(MODEL_PATH)
with open(CLASS_INDICES_PATH, 'r') as f:
    class_indices = json.load(f)
class_labels = {v: k for k, v in class_indices.items()}

@app.route('/detect', methods=['POST'])
def detect_disease():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400
    
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        
        # Load and preprocess image
        img = Image.open(file_path).convert('RGB')
        img = img.resize((224, 224))
        img_array = np.array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)
        predictions = model.predict(img_array)
        predicted_class = int(np.argmax(predictions, axis=1)[0])
        confidence = float(np.max(predictions) * 100)
        disease = class_labels[predicted_class]
        
        # Example recommendations (customize as needed)
        recommendations = [
            'Remove and destroy infected leaves',
            'Apply fungicide spray',
            'Improve air circulation around plants',
            'Water plants at the base to avoid wetting leaves'
        ]
        
        result = {
            'disease': disease,
            'confidence': confidence,
            'symptoms': 'Example symptoms for ' + disease,
            'treatment': 'Example treatment for ' + disease,
            'prevention_tips': recommendations
        }
        return jsonify(result)
    
    return jsonify({'error': 'Invalid file type'}), 400

@app.route('/api/diseases', methods=['GET'])
def get_diseases():
    # TODO: Return list of supported diseases
    return jsonify([
        {
            'name': 'Healthy',
            'description': 'No disease detected',
            'symptoms': 'Normal plant appearance',
            'treatment': 'Maintain current care routine'
        },
        {
            'name': 'Powdery Mildew',
            'description': 'Fungal disease affecting leaves',
            'symptoms': 'White powdery spots on leaves',
            'treatment': 'Apply fungicide and improve air circulation'
        }
    ])

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000) 