<template>
  <div class="home">
    <h1>Список книг</h1>
    <ul class="book-list">
      <li v-for="book in books" :key="book.id" class="book-item">
        <div class="book-info">
          <span :class="{ 'read': book.read }">
            {{ book.title }}
          </span>
          <small>{{ book.read ? 'Прочитано' : 'Не прочитано' }}</small>
        </div>
        <button @click="toggleRead(book.id)" class="mark-button">
          {{ book.read ? 'Отметить как непрочитанное' : 'Отметить как прочитанное' }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleRead (id) {
      this.$emit('toggle-read', id)
    }
  }
}
</script>

<style scoped>
.home {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 24px;
}

.book-list {
  list-style-type: none;
  padding: 0;
}

.book-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  border-bottom: 1px solid #eaeaea;
}

.book-item:last-child {
  border-bottom: none;
}

.book-info {
  display: flex;
  flex-direction: column;
}

.book-info span {
  font-size: 18px;
  font-weight: 500;
  color: #34495e;
}

.book-info small {
  font-size: 12px;
  color: #7f8c8d;
  margin-top: 4px;
}

.book-info .read {
  color: #2ecc71;
}

.mark-button {
  padding: 8px 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.mark-button:hover {
  background-color: #2980b9;
}
</style>
