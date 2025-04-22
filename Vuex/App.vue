<template>
  <div id="app">
    <header>
      <h1>Трекер чтения</h1>
    </header>
    <main>
      <section class="add-book-section">
        <AddBook />
      </section>
      <section class="book-list-section">
        <BookList />
      </section>
    </main>
  </div>
</template>

<script>
import AddBook from './components/AddBook.vue';
import BookList from './components/BookList.vue';

export default {
  components: { AddBook, BookList },
};
</script>

<style>
@import './assets/styles.css';


header {
  text-align: center;
  margin-bottom: 20px;
}


.add-book-section,
.book-list-section {
  margin-bottom: 30px;
}
</style>
