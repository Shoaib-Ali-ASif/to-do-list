import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
  
  export class App {
  task = '';
  taskList: { id: number; task: string }[] = [];
  constructor() {
    const localItem = localStorage.getItem('MT');
    this.taskList = localItem ? JSON.parse(localItem) : [];
  }

  addTask() {
    if (this.task.trim() === '') {
      alert('Enter Task');
      return;
    }

    const newTask = {
      id: this.taskList.length + 1,
      task: this.task,
    };

    this.taskList.push(newTask);
    localStorage.setItem('MT', JSON.stringify(this.taskList));
    this.task = '';
  }

  deleteTask(taskId: number) {
    this.taskList = this.taskList.filter((item) => item.id !== taskId);
    localStorage.setItem('MT', JSON.stringify(this.taskList)); // ✅ update after delete
  }
}
