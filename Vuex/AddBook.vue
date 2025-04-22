<template>
    <div class="add-book">
      <h2>Добавить книгу</h2>
      <form @submit.prevent="addBook" class="add-book-form">
        <div class="form-group">
          <label for="title">Название книги</label>
          <input
            id="title"
            v-model="title"
            type="text"
            placeholder="Введите название"
            required
          />
        </div>
        <div class="form-group">
          <label for="author">Автор</label>
          <input
            id="author"
            v-model="author"
            type="text"
            placeholder="Введите автора"
            required
          />
        </div>
        <div class="form-group">
          <label for="totalPages">Всего страниц</label>
          <input
            id="totalPages"
            v-model.number="totalPages"
            type="number"
            placeholder="Введите количество страниц"
            required
          />
        </div>
        <button type="submit">Добавить книгу</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        author: '',
        totalPages: null,
      };
    },
    methods: {
      addBook() {
        const newBook = {
          id: Date.now(),
          title: this.title,
          author: this.author,
          totalPages: this.totalPages,
          pagesRead: 0,
          progress: 0,
        };
        this.$store.dispatch('addBook', newBook);
        this.title = '';
        this.author = '';
        this.totalPages = null;
      },
    },
  };
  </script>
  
  <style scoped>
  .add-book-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }
  
  button {
    align-self: flex-start;
  }
  </style>
