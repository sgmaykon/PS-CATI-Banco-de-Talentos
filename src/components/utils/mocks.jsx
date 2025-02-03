

export const mockTasks = [
  {
    title: 'Task 1',
    text: 'This is the first task',
    date: '2026-01-01',
    isFinished: false,
  },
  {
    title: 'Task 2',
    text: 'This is the second task',
    date: '2022-01-02',
    isFinished: true,
  },
  {
    title: 'Task 3',
    text: 'This is the third task',
    date: '2022-01-03',
    isFinished: true,
  },
  {
    title: 'Task 4',
    text: 'This is the fourth task',
    date: '2022-01-04',
    isFinished: true,
  },
];
export const mockListas = [
  {
    title: 'To Do',
    tasks: [...mockTasks],
  },
  {
    title: 'To Do2',
    tasks: [...mockTasks],
  },
];