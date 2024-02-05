
# Reminder App Frontend

This reminder app is used to showcase my full-stack abilities. This application allows users to register an account, sign in, and create/delete/edit/complete Tasks. The purpose of this application is for users to organize the tasks they have to do. When a task is nearing its due date, it will get added to the "Upcoming Tasks" list. When a task is complete, it will be added to the "Completed Tasks" list. Otherwise, the task will be added to the generic "Task" list. When users want to edit a task a modal will pop up with a prefilled form of the edited task, users can make any changes they want and the changes will be represented when the user commits those changes.  


 

## TechStack Used

- Next.js/React Frontend with Axios calls to the backend
- BootStrap for frontend styling 
- react-datepicker used for datepicker functionality
- react-responsive-modal used for modal functionality
- Django with Django-rest-framework Backend 
- MySQL DB that will store user and task information
- JWT for authentication
- CORS for Resource Sharing 


## Installation Instructions
- Git Clone the Frontend and Backend Repo 
  
- Dependencies for Frontend :
    - react-datepicker
    - react-responsive-modal
    - bootstrap
    - react-bootstrap
    - axios
    - next
    - react
    - react-dom
- Dependencies for Backend:
    - django-rest-framework
    - cors
    - PyJWT for cookies and auth
    
## Architecture and Next Steps

For this project, I used a MVC architecture. The model is an SQL DB, specifically a MySQL DB. The view is strictly hosted on the front end and is user-facing. The controller (logic of the application) is on both the front end and the back end. Controller logic on the backend includes the register/sign-in logic through cookie delivery to the front end as well as the create/delete/edit/complete task functionality along with representing those changes in the Model and delivering all the tasks of a specific user to the front end. The Controller logic on the front end includes showing the login/register page or the Task page if the user is authenticated or not. Additionally, the front end includes logic to filter the Tasks into three categories. The first category is if the tasks are already completed, these tasks will get added to the "Completed Tasks" category. If the task due date is getting close to today's date then these tasks will get added to the "Upcoming Tasks" category. Finally, if a Task does not meet the requirements of the first two categories then the task will get added to the regular "Tasks" category. Additionally, the frontend includes logic to format the date in a specific format that the backend will accept. 

Next Steps for this project would be to have a more responsive front end. Right now it works for Desktop sizes. For future work, I will add a mobile view as well as a tablet view so users can comfortably use this application on any device. Additionally having a more robust form validation flow such as not letting users add a date in the past or an invalid date that does not follow the desired format will add value to the user experience. Also having some sort of email validation to not let users add emails that do not exist will be a plus, at this point, there is no email check and users can enter fake emails. This will also allow developers to implement reset password functionality which will send a reset link to the user's email. Furthermore having a user settings page on the front end will allow more control of the user's account. The final next step would be to implement some sort of routing feature on the front end. As the front end grows and additional pages are made the routing will allow the web application to behave like a typical website with back button functionality when users visit new pages, this was not needed for this version of the applications as there are not enough components/pages to make something like that worth it.   


## Screenshots

![image](https://github.com/BlazeSlavkovski/ReminderAppFrontend/assets/40073550/147d10f6-15ef-4c0f-8aa7-b8835c2e06a0)

![image](https://github.com/BlazeSlavkovski/ReminderAppFrontend/assets/40073550/7e58e299-45f9-4d86-800e-28a6e07984ba)

![image](https://github.com/BlazeSlavkovski/ReminderAppFrontend/assets/40073550/6699a716-f18b-40a8-9d46-8b528f5ed720)

![image](https://github.com/BlazeSlavkovski/ReminderAppFrontend/assets/40073550/73571141-1943-4694-8bd2-de7fa94b95fd)

![image](https://github.com/BlazeSlavkovski/ReminderAppFrontend/assets/40073550/becdde72-f9fb-4e1e-881d-ec34144309e2)

![image](https://github.com/BlazeSlavkovski/ReminderAppFrontend/assets/40073550/1a33d0de-c9de-49cd-9373-ef25ab65bb4c)

