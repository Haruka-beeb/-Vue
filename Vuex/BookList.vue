<template>
    <div class="book-list">
      <h2>Список книг</h2>
      <ul class="book-list-items">
        <BookItem
          v-for="book in books"
          :key="book.id"
          :book="book"
          @update-progress="updateProgress"
          @delete-book="deleteBook"
        />
      </ul>
    </div>
  </template>
  
  <script>
  import BookItem from './BookItem.vue';
  
  export default {
    components: { BookItem },
    computed: {
      books() {
        return this.$store.getters.allBooks;
      },
    },
    methods: {
      updateProgress(payload) {
        this.$store.dispatch('updateProgress', payload);
      },
      deleteBook(id) {
        this.$store.dispatch('deleteBook', id);
      },
    },
  };
  </script>
  
  <style scoped>
  .book-list-items {
    padding: 0;
  }
  </style>
