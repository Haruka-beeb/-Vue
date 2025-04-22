<template>
    <div class="weather-info">
      <h1>{{ $t('welcome') }}</h1>
      <p><strong>{{ $t('temperature') }}:</strong> 25°C</p>
      <p><strong>{{ $t('humidity') }}:</strong> 60%</p>
      <p><strong>{{ $t('windSpeed') }}:</strong> 15 km/h</p>
      <button @click="switchLanguage">{{ $t('switchToRussian') }}</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      switchLanguage() {
        const currentLocale = this.$i18n.locale;
        this.$i18n.locale = currentLocale === 'en' ? 'ru' : 'en';
      },
    },
  };
  </script>
  
  <style scoped>
  .weather-info {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
  }
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
