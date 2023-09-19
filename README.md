
StarFly Interstellar Traveling Agent

<img src="https://github.com/SuwanSankaja/Portfolio/assets/86839778/88187251-7de7-4a54-9124-427ff4cfd429" width="200" height="300" align = "center"S>

DB DUMP IS ALSO IN HERE
For starting the app,

1. Install expo go app on mobile device.
2. run following commands.
3. npm install -- --legacy-peer-deps
4. npm start
5. scan the QR code through the mobile expo go app and start the app.

if there is an installation error,
1. delete node_modules file.
2. delete package-lock.json file.
3. run following commands.
4. npm cache clean --force
5. npm install -- --legacy-peer-deps
6. npm start
7. scan the QR code through the mobile expo go app and start the app.

For starting the backend,
1. go to the folder with .venv folder in terminal.
2. run following commands.
3. python -m venv .venv
4. .venv\Scripts\activate
5. pip install django
6. pip install djangorestframework
7. pip install mysqlclient
8. create a database named, rootcode and set password in database section of settings.py. also put your local ip in the ALLOWED_HOSTS list(IPv4 address).
9. python manage.py makemigrations
10. python manage.py migrate
11. python manage.py runserver IP:8000
    
