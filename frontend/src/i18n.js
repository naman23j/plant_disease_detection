import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      diseaseDetection: {
        title: 'Plant Disease Detection',
        chooseFile: 'Choose File',
        upload: 'Upload',
        selectedFile: 'Selected File',
        switchToCamera: 'Use Camera',
        switchToUpload: 'Upload Image',
        capture: 'Capture',
        results: 'Detection Results',
        disease: 'Disease',
        confidence: 'Confidence',
        symptoms: 'Symptoms',
        treatment: 'Treatment',
        preventionTips: 'Prevention Tips'
      },
      home: {
        title: 'Plant Disease Detection System',
        subtitle: 'Upload a plant image to detect potential diseases',
        uploadError: 'Please upload an image first',
        serverError: 'Failed to connect to the server',
        detecting: 'Detecting...',
        detectButton: 'Detect Disease',
        resultsTitle: 'Detection Results',
        rotateCropsTitle: 'Rotate Crops',
        rotateCropsText: 'Crop rotation helps prevent the buildup of disease-causing organisms in the soil.',
        inspectRegularlyTitle: 'Inspect Regularly',
        inspectRegularlyText: 'Check your plants often for early signs of disease and remove affected leaves promptly.',
        sunlightTitle: 'Ensure Good Sunlight',
        sunlightText: 'Most plants need plenty of sunlight to stay healthy and resist diseases.',
        waterBaseTitle: 'Water at the Base',
        waterBaseText: 'Water plants at the base to avoid wetting leaves, which can promote fungal growth.',
        faqTitle: 'Frequently Asked Questions',
        faqQ1: 'What types of plants are supported?',
        faqA1: 'The system currently supports common crops like tomato, potato, and more. We are expanding to include more plant types soon!',
        faqQ2: 'How accurate is the detection?',
        faqA2: 'The AI model is trained on thousands of images and achieves high accuracy, but results may vary depending on image quality and disease stage.',
        faqQ3: 'Is this service free for farmers?',
        faqA3: 'Yes! Our mission is to empower farmers with free, accessible plant health tools.',
        blogTitle: 'Plant Care Blog',
        blog1Title: 'How to Water Plants Effectively',
        blog1Text: 'Learn the best times and methods for watering to keep your plants healthy and disease-free.',
        blog2Title: 'Choosing the Right Fertilizer',
        blog2Text: 'Discover how to select and apply fertilizers for optimal plant growth and resilience.',
        blog3Title: 'Pruning for Plant Health',
        blog3Text: 'Find out how regular pruning can prevent disease and encourage strong, healthy plants.'
      },
      about: {
        title: 'About This Website',
        appName: 'Plant Disease Detection System',
        description: 'is an AI-powered web application designed to help farmers and gardeners quickly identify plant diseases from images. By leveraging advanced machine learning, the app provides instant feedback and actionable recommendations, helping users protect their crops and improve yields.',
        howItHelps: 'How It Helps Farmers',
        benefit1: 'Early detection of plant diseases to prevent crop loss',
        benefit2: 'Easy-to-use interface for quick diagnosis',
        benefit3: 'Personalized recommendations for treatment',
        benefit4: 'Supports sustainable and healthy farming practices'
      },
      contact: {
        title: 'Contact Us',
        intro: 'Have questions or feedback? Reach out to our team!',
        email: 'Email',
        phone: 'Phone',
        address: 'Address'
      }
    }
  },
  es: {
    translation: {
      diseaseDetection: {
        title: 'Detección de Enfermedades de Plantas',
        chooseFile: 'Seleccionar Archivo',
        upload: 'Subir',
        selectedFile: 'Archivo Seleccionado',
        switchToCamera: 'Usar Cámara',
        switchToUpload: 'Subir Imagen',
        capture: 'Capturar',
        results: 'Resultados de la Detección',
        disease: 'Enfermedad',
        confidence: 'Confianza',
        symptoms: 'Síntomas',
        treatment: 'Tratamiento',
        preventionTips: 'Consejos de Prevención'
      }
    }
  },
  hi: {
    translation: {
      diseaseDetection: {
        title: 'पौधे की बीमारी का पता लगाना',
        chooseFile: 'फ़ाइल चुनें',
        upload: 'अपलोड करें',
        selectedFile: 'चयनित फ़ाइल',
        switchToCamera: 'कैमरा का उपयोग करें',
        switchToUpload: 'छवि अपलोड करें',
        capture: 'कैप्चर करें',
        results: 'पता लगाने के परिणाम',
        disease: 'बीमारी',
        confidence: 'विश्वास',
        symptoms: 'लक्षण',
        treatment: 'उपचार',
        preventionTips: 'रोकथाम के टिप्स'
      }
    }
  },
  ta: {
    translation: {
      diseaseDetection: {
        title: 'தாவர நோய் கண்டறிதல்',
        chooseFile: 'கோப்பை தேர்ந்தெடுக்கவும்',
        upload: 'பதிவேற்றவும்',
        selectedFile: 'தேர்ந்தெடுக்கப்பட்ட கோப்பு',
        switchToCamera: 'கேமராவை பயன்படுத்தவும்',
        switchToUpload: 'படத்தை பதிவேற்றவும்',
        capture: 'பிடிக்கவும்',
        results: 'கண்டறிதல் முடிவுகள்',
        disease: 'நோய்',
        confidence: 'நம்பிக்கை',
        symptoms: 'அறிகுறிகள்',
        treatment: 'சிகிச்சை',
        preventionTips: 'தடுப்பு குறிப்புகள்'
      }
    }
  },
  te: {
    translation: {
      diseaseDetection: {
        title: 'సస్య రోగ నిర్ధారణ',
        chooseFile: 'ఫైల్ ఎంచుకోండి',
        upload: 'అప్‌లోడ్ చేయండి',
        selectedFile: 'ఎంచుకున్న ఫైల్',
        switchToCamera: 'కెమెరాను ఉపయోగించండి',
        switchToUpload: 'చిత్రాన్ని అప్‌లోడ్ చేయండి',
        capture: 'క్యాప్చర్ చేయండి',
        results: 'నిర్ధారణ ఫలితాలు',
        disease: 'రోగం',
        confidence: 'నమ్మకం',
        symptoms: 'లక్షణాలు',
        treatment: 'చికిత్స',
        preventionTips: 'నివారణ సూచనలు'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 