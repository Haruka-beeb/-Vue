<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Главная</router-link> |
      <router-link to="/add" class="nav-link">Добавить книгу</router-link>
    </nav>
    <router-view :books="books" @add-book="addBook" @toggle-read="toggleRead"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      books: [
        { id: 1, title: 'Фрэнсис Элиза Бёрнетт "Таинственный сад"', read: false },
        { id: 2, title: 'Михаил Лермонтов "Герой нашего времени"', read: true }
      ]
    }
  },
  methods: {
    addBook (title) {
      const newBook = {
        id: this.books.length + 1,
        title,
        read: false
      }
      this.books.push(newBook)
    },
    toggleRead (id) {
      const book = this.books.find((b) => b.id === id)
      if (book) {
        book.read = !book.read
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
  min-height: 100vh;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-link {
  font-size: 16px;
  color: #34495e;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #3498db;
}

.nav-link.router-link-active {
  color: #2ecc71;
  font-weight: bold;
}

.navbar span {
  color: #ccc;
}
</style>
