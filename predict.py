import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing import image
import json
import sys

# Load model and class indices
def load_model_and_classes():
    model = tf.keras.models.load_model('plant_disease_model.h5')
    with open('class_indices.json', 'r') as f:
        class_indices = json.load(f)
    class_labels = {v: k for k, v in class_indices.items()}
    return model, class_labels

def predict(img_path, model, class_labels):
    img = image.load_img(img_path, target_size=(224, 224))
    img_array = image.img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    predictions = model.predict(img_array)
    predicted_class = np.argmax(predictions, axis=1)[0]
    return class_labels[predicted_class]

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python predict.py path_to_image.jpg")
        sys.exit(1)
    img_path = sys.argv[1]
    model, class_labels = load_model_and_classes()
    result = predict(img_path, model, class_labels)
    print(f"Predicted class: {result}") 