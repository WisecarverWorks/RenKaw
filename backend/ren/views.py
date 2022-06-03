# We want to import status to label our http status
from rest_framework import status

# We want to import Response to recieve label out http response
from rest_framework.response import Response

# We want to import IsAuthenticated, AllowAny # to allow any class permissions
from rest_framework.permissions import IsAuthenticated, AllowAny

# We want to import api_view decoder with permission classs
from rest_framework.decorators import api_view, permission_classes

# We want to import our model/s
from .models import Art

# We want to import serializers
#from .serializers import ArtSerializer
from django.shortcuts import render



#<<<<<<<<<<<<<<<<<<<<<<<<< Below will be our views functions
# Create your views here.