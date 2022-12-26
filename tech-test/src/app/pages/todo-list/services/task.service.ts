import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task.interface';
import { BehaviorSubject } from 'rxjs'
import { finalize } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public loading$: Observable<boolean> = this._loading$.asObservable();

  private _tasks$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([])
  public tasks$: Observable<Task[]> = this._tasks$.asObservable();

  constructor(private _http: HttpClient) { }

  fetchTasks(): void {
    this._loading$.next(true);
    this._http.get<Task[]>(`${environment.BASE_URL}/tasks`).pipe(
      finalize(() => this._loading$.next(false))
    ).subscribe(res => this._tasks$.next(res))
  }

  getTask(id: number): Observable<Task> {
    this._loading$.next(true);
    return this._http.get<Task>(`${environment.BASE_URL}/tasks/${id}`).pipe(
      finalize(() => this._loading$.next(false))
    )
  }

  createTask(task: Task): void {
    this._loading$.next(true);
    this._http.post<Task>(`${environment.BASE_URL}/tasks`, task).pipe(
      finalize(() => this._loading$.next(false))
    ).subscribe(res => this._tasks$.next(this._tasks$.getValue().concat([res])))
  }

  editTask(task: Task): void {
    this._loading$.next(true);
    this._http.patch<Task>(`${environment.BASE_URL}/tasks/${task.id}`, task).pipe(
      finalize(() => this._loading$.next(false))
    ).subscribe(res => {
      this._tasks$.next(this._tasks$.getValue().map(_task => _task.id === res.id ? res : _task))
    })
  }

  deleteTask(id: number): void {
    this._loading$.next(true);
    this._http.delete<Task>(`${environment.BASE_URL}/tasks/${id}`).pipe(
      finalize(() => this._loading$.next(false))
    ).subscribe(res => {
      this._tasks$.next(this._tasks$.getValue().filter(task => task.id !== res.id))
    })
  }

  markAsDone(id: number): void {
    this._loading$.next(true);
    const task = this._tasks$.getValue().find(_task => _task.id === id);
    task.done = new Date().toISOString().split('T')[0];
    this._http.patch<Task>(`${environment.BASE_URL}/tasks/${id}`, task).pipe(
      finalize(() => this._loading$.next(false))
    ).subscribe(res => {
      this._tasks$.next(this._tasks$.getValue().map(_task => _task.id === res.id ? res : _task))
    })
  }

  getNewTaskId(): number {
    return this._tasks$.value[this._tasks$.value.length - 1].id + 1
  }
}
