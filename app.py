import gradio as gr
import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing import image
import json

# Load model and class indices once
model = tf.keras.models.load_model('plant_disease_model.h5')
with open('class_indices.json', 'r') as f:
    class_indices = json.load(f)
class_labels = {v: k for k, v in class_indices.items()}

def predict_image(img):
    img = image.array_to_img(img).resize((224, 224))
    img_array = image.img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    predictions = model.predict(img_array)
    predicted_class = np.argmax(predictions, axis=1)[0]
    return class_labels[predicted_class]

demo = gr.Interface(
    fn=predict_image,
    inputs=gr.Image(type="numpy", label="Upload a leaf image"),
    outputs=gr.Label(num_top_classes=1, label="Predicted Disease"),
    title="Plant Disease Classifier",
    description="Upload a plant leaf image to predict the disease."
)

if __name__ == "__main__":
    demo.launch() 