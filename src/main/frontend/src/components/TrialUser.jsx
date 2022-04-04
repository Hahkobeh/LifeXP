export const login = async () =>{
    return{
        id: 1,
        username: "Johny",
        email: "johnyknox@gmail.com",
        tasks: [
            {
                taskId: "1",
                taskTitle: "Brush Teeth",
                taskDescription: "Brush my teeth before bed",
                taskStatus: "In Progress",
            },
            {
                taskId: "2",
                taskTitle: "Make Bed",
                taskDescription: "Make my bed",
                taskStatus: "In Progress",
            },
            {
                taskId: "3",
                taskTitle: "Finish CPSC 471",
                taskDescription: "Finish task to display tasks on website",
                taskStatus: "In Progress",
            },
            {
                taskId: "4",
                taskTitle: "Finish CPSC 471 Database",
                taskDescription: "Connect database to website",
                taskStatus: "Completed",
            }
        ],
    };
};