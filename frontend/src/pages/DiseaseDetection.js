import React, { useState, useRef } from 'react';
import { Box, Button, Card, CardContent, Typography, CircularProgress } from '@mui/material';
import Webcam from 'react-webcam';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const DiseaseDetection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cameraMode, setCameraMode] = useState(false);
  const webcamRef = useRef(null);
  const { t } = useTranslation();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setPrediction(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/detect', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setLoading(false);
    }
  };

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    setLoading(true);
    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const file = new File([blob], 'webcam.jpg', { type: 'image/jpeg' });
      
      const formData = new FormData();
      formData.append('image', file);

      const result = await axios.post('http://localhost:5000/detect', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(result.data);
    } catch (error) {
      console.error('Error processing webcam image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {t('diseaseDetection.title')}
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Button
          variant="contained"
          onClick={() => setCameraMode(!cameraMode)}
          sx={{ mr: 2 }}
        >
          {cameraMode ? t('diseaseDetection.switchToUpload') : t('diseaseDetection.switchToCamera')}
        </Button>
      </Box>

      {cameraMode ? (
        <Box sx={{ mb: 3 }}>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="100%"
            videoConstraints={{
              facingMode: 'environment',
            }}
          />
          <Button
            variant="contained"
            onClick={capture}
            sx={{ mt: 2 }}
            disabled={loading}
          >
            {t('diseaseDetection.capture')}
          </Button>
        </Box>
      ) : (
        <Box sx={{ mb: 3 }}>
          <input
            accept="image/*"
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="upload-input"
          />
          <label htmlFor="upload-input">
            <Button variant="contained" component="span" sx={{ mr: 2 }}>
              {t('diseaseDetection.chooseFile')}
            </Button>
          </label>
          <Button
            variant="contained"
            onClick={handleUpload}
            disabled={!selectedFile || loading}
          >
            {t('diseaseDetection.upload')}
          </Button>
          {selectedFile && (
            <Typography sx={{ mt: 2 }}>
              {t('diseaseDetection.selectedFile')}: {selectedFile.name}
            </Typography>
          )}
        </Box>
      )}

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
          <CircularProgress />
        </Box>
      )}

      {prediction && (
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {t('diseaseDetection.results')}
            </Typography>
            <Typography>
              {t('diseaseDetection.disease')}: {prediction.disease}
            </Typography>
            <Typography>
              {t('diseaseDetection.confidence')}: {prediction.confidence.toFixed(2)}%
            </Typography>
            <Typography>
              {t('diseaseDetection.symptoms')}: {prediction.symptoms}
            </Typography>
            <Typography>
              {t('diseaseDetection.treatment')}: {prediction.treatment}
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              {t('diseaseDetection.preventionTips')}:
            </Typography>
            <ul>
              {prediction.prevention_tips && prediction.prevention_tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default DiseaseDetection; 