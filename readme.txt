This is the date filter project.

-in this i have created the backend using express js and this lets you create json data 
and host on the local server.

to do that go to the backend folder , open new terminal , and type "npm run start"
make sure you are in the backend directory .
if not then type " cd backend"
now to access the json data in the local server paste this url in your browser

"https://localhost:3000/api/products"

the main benefit of creating your own backend is that you can manipulate the json data in whatever
way you want and then can practice various fetching and filtering techniques.

this will sharpen you logic towards these techniques which are extremely important in backend 
heavy web apps.

now since your backend is running fine lets go to the frontend folder

now here the open a new terminal and make sure you are in the frontend directory.

if suppose you are still in the backend directory the type 
cd ..
cd frontend

now type "npm run dev"

at local host 5173 yo can see the app running and the json data being fetched and shown and you can 
check the date filter by changing the values in the calendar.


important dependencies to install otherwise the app mau not work:

-npm i axios
-npm i react-date-range

you will have to import these into your App.jsx file:

=import axios from "axios";
-import "react-date-range/dist/styles.css";
-import "react-date-range/dist/theme/default.css";
-import { DateRangePicker } from "react-date-range";

