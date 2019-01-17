import { Week } from './week';

export const theProgram: Week[] = [
  {
    days: [
      {
        rest: 60,
        sets: [
          { index: 1, reps: 10 },
          { index: 2, reps: 12 },
          { index: 3, reps: 7 },
          { index: 4, reps: 7 },
          { index: 5, reps: 9, lowerBound: true },
        ]
      },
      {
        rest: 60,
        sets: [
          { index: 1, reps: 10 },
          { index: 2, reps: 12 },
          { index: 3, reps: 8 },
          { index: 4, reps: 8 },
          { index: 5, reps: 12, lowerBound: true },
        ]
      },
      {
        rest: 60,
        sets: [
          { index: 1, reps: 11 },
          { index: 2, reps: 15 },
          { index: 3, reps: 9 },
          { index: 4, reps: 9 },
          { index: 5, reps: 13, lowerBound: true },
        ]
      }
    ]
  },
  {
    days: [
      {
        rest: 60,
        sets: [
          { index: 1, reps: 14 },
          { index: 2, reps: 14 },
          { index: 3, reps: 10 },
          { index: 4, reps: 10 },
          { index: 5, reps: 15, lowerBound: true },
        ]
      },
      {
        rest: 90,
        sets: [
          { index: 1, reps: 14 },
          { index: 2, reps: 16 },
          { index: 3, reps: 12 },
          { index: 4, reps: 12 },
          { index: 5, reps: 17, lowerBound: true },
        ]
      },
      {
        rest: 120,
        sets: [
          { index: 1, reps: 16 },
          { index: 2, reps: 17 },
          { index: 3, reps: 14 },
          { index: 4, reps: 14 },
          { index: 5, reps: 20, lowerBound: true },
        ]
      }
    ]
  },
  {
    days: [
      {
        rest: 60,
        sets: [
          { index: 1, reps: 14 },
          { index: 2, reps: 18 },
          { index: 3, reps: 14 },
          { index: 4, reps: 14 },
          { index: 5, reps: 20, lowerBound: true },
        ]
      },
      {
        rest: 90,
        sets: [
          { index: 1, reps: 20 },
          { index: 2, reps: 25 },
          { index: 3, reps: 15 },
          { index: 4, reps: 15 },
          { index: 5, reps: 25, lowerBound: true },
        ]
      },
      {
        rest: 120,
        sets: [
          { index: 1, reps: 22 },
          { index: 2, reps: 30 },
          { index: 3, reps: 20 },
          { index: 4, reps: 20 },
          { index: 5, reps: 28, lowerBound: true },
        ]
      }
    ]
  },
  {
    days: [
      {
        rest: 60,
        sets: [
          { index: 1, reps: 21 },
          { index: 2, reps: 25 },
          { index: 3, reps: 21 },
          { index: 4, reps: 21 },
          { index: 5, reps: 32, lowerBound: true },
        ]
      },
      {
        rest: 90,
        sets: [
          { index: 1, reps: 25 },
          { index: 2, reps: 29 },
          { index: 3, reps: 25 },
          { index: 4, reps: 25 },
          { index: 5, reps: 36, lowerBound: true },
        ]
      },
      {
        rest: 120,
        sets: [
          { index: 1, reps: 29 },
          { index: 2, reps: 33 },
          { index: 3, reps: 29 },
          { index: 4, reps: 29 },
          { index: 5, reps: 40, lowerBound: true },
        ]
      }
    ]
  },
  {
    days: [
      {
        rest: 60,
        sets: [
          { index: 1, reps: 28 },
          { index: 2, reps: 35 },
          { index: 3, reps: 25 },
          { index: 4, reps: 22 },
          { index: 5, reps: 35, lowerBound: true },
        ]
      },
      {
        rest: 45,
        sets: [
          { index: 1, reps: 18 },
          { index: 2, reps: 18 },
          { index: 3, reps: 20 },
          { index: 4, reps: 20 },
          { index: 5, reps: 14 },
          { index: 6, reps: 14 },
          { index: 7, reps: 16 },
          { index: 8, reps: 40, lowerBound: true },
        ]
      },
      {
        rest: 45,
        sets: [
          { index: 1, reps: 18 },
          { index: 2, reps: 18 },
          { index: 3, reps: 20 },
          { index: 4, reps: 20 },
          { index: 5, reps: 17 },
          { index: 6, reps: 17 },
          { index: 7, reps: 20 },
          { index: 8, reps: 45, lowerBound: true },
        ]
      }
    ]
  },
  {
    days: [
      {
        rest: 60,
        sets: [
          { index: 1, reps: 40 },
          { index: 2, reps: 50 },
          { index: 3, reps: 25 },
          { index: 4, reps: 25 },
          { index: 5, reps: 50, lowerBound: true },
        ]
      },
      {
        rest: 45,
        sets: [
          { index: 1, reps: 20 },
          { index: 2, reps: 20 },
          { index: 3, reps: 23 },
          { index: 4, reps: 23 },
          { index: 5, reps: 20 },
          { index: 6, reps: 20 },
          { index: 7, reps: 18 },
          { index: 8, reps: 18 },
          { index: 9, reps: 53, lowerBound: true },
        ]
      },
      {
        rest: 45,
        sets: [
          { index: 1, reps: 22 },
          { index: 2, reps: 22 },
          { index: 3, reps: 30 },
          { index: 4, reps: 30 },
          { index: 5, reps: 25 },
          { index: 6, reps: 25 },
          { index: 7, reps: 18 },
          { index: 8, reps: 18 },
          { index: 9, reps: 55, lowerBound: true },
        ]
      }
    ]
  }
]
