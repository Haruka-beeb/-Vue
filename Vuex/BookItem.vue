<template>
    <li class="book-item">
      <div class="book-info">
        <div class="book-details">
          <strong>{{ book.title }}</strong>
          <span class="author">by {{ book.author }}</span>
        </div>
        <div class="book-stats">
          <span class="pages">{{ book.pagesRead }} / {{ book.totalPages }} страниц</span>
          <span class="progress">{{ book.progress }}%</span>
        </div>
      </div>
      <div class="book-actions">
        <input
          class="progress-input"
          type="number"
          v-model.number="pagesRead"
          :min="0"
          :max="book.totalPages"
          @change="onProgressChange"
        />
        <button @click="onDelete">Удалить</button>
      </div>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      book: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        pagesRead: this.book.pagesRead,
      };
    },
    methods: {
      onProgressChange() {
        this.$emit('update-progress', { id: this.book.id, pagesRead: this.pagesRead });
      },
      onDelete() {
        this.$emit('delete-book', this.book.id);
      },
    },
  };
  </script>
  
  <style scoped>
  .book-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    background-color: #9a8c98;
    border-radius: 8px;
  }
  
  .book-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .book-details {
    display: flex;
    flex-direction: column;
  }
  
  .author {
    font-size: 0.9em;
    color: #22223b;
  }
  
  .book-stats {
    display: flex;
    gap: 10px;
  }
  
  .pages {
    font-size: 0.9em;
    color: #22223b;
  }
  
  .progress {
    font-size: 0.9em;
    color: #4a4e69;
  }
  
  .book-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .progress-input {
    width: 80px;
    padding: 5px;
    border: 1px solid #9a8c98;
    border-radius: 4px;
  }
  
  button {
    background-color: #22223b;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #4a4e69;
  }
  </style>
