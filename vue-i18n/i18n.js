// src/i18n.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    welcome: 'Welcome to the Weather App!',
    temperature: 'Temperature',
    humidity: 'Humidity',
    windSpeed: 'Wind Speed',
    language: 'Language',
    switchToRussian: 'Switch to Russian',
  },
  ru: {
    welcome: 'Добро пожаловать в приложение Погоды!',
    temperature: 'Температура',
    humidity: 'Влажность',
    windSpeed: 'Скорость ветра',
    language: 'Язык',
    switchToRussian: 'Переключить на Английский',
  },
};

const i18n = new VueI18n({
  locale: 'ru', // язык по умолчанию
  fallbackLocale: 'en', // язык, который будет использоваться, если перевод отсутствует
  messages,
});

export default i18n;
