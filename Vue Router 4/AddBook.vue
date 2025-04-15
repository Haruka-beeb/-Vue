<template>
  <div class="add-book">
    <h1>Добавить книгу</h1>
    <form @submit.prevent="addBook" class="book-form">
      <input
        v-model="newBookTitle"
        placeholder="Название книги"
        required
        class="book-input"
      />
      <button type="submit" class="add-button">Добавить</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newBookTitle: ''
    }
  },
  methods: {
    addBook () {
      this.$emit('add-book', this.newBookTitle)
      this.newBookTitle = ''
    }
  }
}
</script>

<style scoped>
.add-book {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h1 {
  font-size: 24px;
  color: #34495e;
  margin-bottom: 20px;
}

.book-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.book-input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;
}

.book-input:focus {
  border-color: #3498db;
}

.add-button {
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #3498db;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #2980b9;
}
</style>
