import httpClient from './httpClient';



//Doctor Search
export const searchDoctors = (location, specialty) =>
  httpClient.get('/api/doctors/search', { params: { location, specialty } });


//Symptom Checker
export const checkSymptoms = (symptoms) =>
  httpClient.post('/api/symptoms/check', { symptoms });

