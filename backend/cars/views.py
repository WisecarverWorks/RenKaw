from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny # Classes 
from rest_framework.decorators import api_view, permission_classes #Dictates what type o http
from .models import Car
from .serializers import CarSerializer

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

# Ref when needed for my model
@api_view(['GET']) 
@permission_classes([AllowAny]) # Takes list as parameter, inside list we add any class that controls permissions. Guest access only. 
def get_all_cars(request):       # Takes all the artwork 
    cars = Car.objects.all()
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_cars(request):                # Can get all cars, will be using user properties 
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = CarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        cars = Car.objects.filter(user_id=request.user.id)
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)
