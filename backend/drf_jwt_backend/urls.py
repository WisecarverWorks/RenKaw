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
    path('api/members/', include('members.urls')), # Are these needed?
    path('api/artwork/', include('artwork.urls')), # Are these needed?
    path('api/cars/', include('cars.urls')),
    #path('api/artwork/', include('artwork.urls')), # This should give us the ability to create a fine endpoint
    #path('api/members/', include('members.urls')), # This should give us the ability to create a fine endpoint
]
