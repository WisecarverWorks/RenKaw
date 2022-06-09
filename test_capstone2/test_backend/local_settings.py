# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-9e+de3e9cw$wnngt7%sphlhvudjpv^$g9tp+$f(o@6)pog!)ho'

DATABASES = {
    'default': {
        'ENGINE': 'mysql.connector.django',
        'NAME': 'rennie_api_database',
        'USER': 'root',
        'PASSWORD': 'password',
        'HOST': '127.0.0.1',
        'PORT': '3306',
        'OPTIONS': {
            'autocommit': True
        }
    }
}