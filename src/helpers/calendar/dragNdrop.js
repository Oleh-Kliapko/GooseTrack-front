export const getColumnsCoordinates = () => {
    const toDoColumn = document.querySelector('.to-do');
    const inProgressColumn = document.querySelector('.in-progress');
    const doneColumn = document.querySelector('.done');
    return [
        {
        category: 'to-do',
        x: toDoColumn.getBoundingClientRect().top,
        y: toDoColumn.getBoundingClientRect().left,
        width: toDoColumn.getBoundingClientRect().width,
        height: toDoColumn.getBoundingClientRect().height
        },
        {
        category: 'in-progress',
        x: inProgressColumn.getBoundingClientRect().top,
        y: inProgressColumn.getBoundingClientRect().left,
        width: inProgressColumn.getBoundingClientRect().width,
        height: inProgressColumn.getBoundingClientRect().height
        },
        {
        category: 'done',
        x: doneColumn.getBoundingClientRect().top,
        y: doneColumn.getBoundingClientRect().left,
        width: doneColumn.getBoundingClientRect().width,
        height: doneColumn.getBoundingClientRect().height
        },
    ];
};

