

export const createTaskObject = (currentTask, formValues) => {
  return {
    _id: currentTask._id,
    title: formValues.title || '',
    start: formValues.start || '00:00',
    end: formValues.end || '00:00',
    priority: formValues.priority || 'low',
    date: currentTask.date,
    category: formValues.category || 'to-do'
  }
};

export const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + '...';
  }
};