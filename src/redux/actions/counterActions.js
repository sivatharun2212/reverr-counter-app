
export const incrementCounter = () => ({
  type: 'INCREMENT_COUNTER',
});

export const decrementCounter = () => ({
  type: 'DECREMENT_COUNTER',
});

export const resetCounter = () => ({
  type: 'RESET_COUNTER',
});

export const setCounterValue = (value) => ({
  type: 'SET_COUNTER_VALUE',
  payload: value,
})
export const setCounterName = (value) => ({
  type: 'SET_COUNTER_NAME',
  payload: value,
})