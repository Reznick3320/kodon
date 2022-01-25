To run:
1. Create virtualenv: virtualenv env
2. Activate virtualenv: source env/Scripts/activate or env\Scripts\activate(Windows) or source env/bin/activate(Linux)
3. Install dependencies: pip install -r requirements.txt
4. Create database: python manage.py makemigrations and python manage.py migrate
5. Go to .env.example. Remove '.example' from the name of the file and fill the variables.

Links to go:
 - http://127.0.0.1:8000/
 - http://127.0.0.1:8000/api/test-api/