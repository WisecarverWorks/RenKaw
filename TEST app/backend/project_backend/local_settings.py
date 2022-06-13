SECRET_KEY ='ASDF321WE!@#$t^yghtyru^&@#$%^&*fgtyhui*)_(*&^$efghuj'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
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