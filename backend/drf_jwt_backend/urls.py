"""drf_jwt_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('authentication.urls')),
    path('api/ren/', include('ren.urls')),

]

# Portfolio page with seperate folder to hold the component. 
# Ability to upload images to portfolio page.
# (2.5 points) As the seller, a separate business portfolio page to hold a bulletin board used for communication of new pieces of art is needed. 


# (5 points) As the seller, I want the ability to upload images of artwork for display on the bulletin/dashboard
# (5 points) As the seller, a separate business page to hold art collections by group, determined by the artist. 
# (5 points) As the seller, I want to input, change, and store data using react forms. 
# (7.5 points) As the seller, the ability to take assessments and store their results within the app is needed. These assessments must first be uploaded by the seller. 
# 
# (2.5 points) As the seller, the ability to retrieve all logs made during my use of the application is needed. 
# (7.5 points) As the seller, the ability to see client usage data displayed within the application itself using React-Apex Charts is needed.
# 
# (10 points) As a developer, I want to have an aesthetically pleasing and intuitive user interface/user experience (UI/UX) with all features of the application stylized. (CSS, Bootstrap, Material UI, etc.)
# 
# Bonus
# (5 points) As the seller, I want the ability to translate the current page to a different language (using React-i18next framework for internalization).  
# 
# (5 points) As the seller, the ability to journal, with spell-check, save and delete entries options is needed.
# (Rich Text editor package)