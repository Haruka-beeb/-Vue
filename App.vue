<template>
  <v-app>
    <!-- Основной контент -->
    <v-main>
      <v-container class="text-center">
        <!-- Заголовок -->
        <h1 class="mt-5 mb-5">Менеджер задач</h1>

        <!-- Форма добавления задачи -->
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-text-field
              v-model="newTask"
              label="Добавить новую задачу"
              outlined
              clearable
              @keydown.enter="addTask"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- Кнопка добавления задачи -->
        <v-btn color="primary" @click="addTask" :disabled="!newTask.trim()">Добавить</v-btn>

        <!-- Список задач -->
        <v-list class="mt-5">
          <v-list-item-group>
            <v-list-item v-for="(task, index) in tasks" :key="index">
              <v-list-item-action>
                <v-checkbox v-model="task.done"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  :class="{ 'text-decoration-line-through': task.done }"
                >
                  {{ task.text }}
                </v-list-item-title>
              </v-list-item-content>

              <!-- Кнопка удаления задачи -->
              <v-list-item-action>
                <v-btn icon color="red" @click="removeTask(index)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      newTask: "", // Поле для ввода новой задачи
      tasks: [],   // Массив задач
    };
  },
  methods: {
    // Добавление задачи
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ text: this.newTask, done: false });
        this.newTask = ""; // Очистка поля ввода
      }
    },
    // Удаление задачи
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },

  watch: {
  tasks: {
    handler(newTasks) {
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    },
    deep: true,
  },
},
mounted() {
  this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
},
};


</script>

<style scoped>
/* Общие стили */
.v-application {
  background-color: #f5f5f5 !important;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  font-weight: bold;
}

.v-text-field {
  max-width: 400px;
  margin: 0 auto;
}

.v-btn {
  margin-top: 10px;
  text-transform: none; /* Убираем заглавные буквы */
}

/* Стили для списка задач */
.v-list-item {
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.v-list-item__title {
  font-size: 1.1rem;
  color: #444;
}

.v-list-item__title.text-decoration-line-through {
  color: #999;
}

/* Иконка удаления */
.v-icon {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.v-icon:hover {
  transform: scale(1.2);
}
</style>