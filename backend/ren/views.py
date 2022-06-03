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
from .serializers import ArtSerializer

#<<<<<<<<<<<<<<<<<<<<<<<<< Below will be our views functions
# Create your views here.

# We want our first function to GET a list of artwork
# We will place our decorater over our function

@api_view(['GET']) 
@permission_classes([AllowAny]) # Allows any class with permissions
def list_art(request):
    art = Art.objects.all()
    serializer = ArtSerializer(art, many=True)
    return Response(serializer.data)
    

# We want our second function to return status's depending on certain endpoints. 

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated]) # Allows only authenticated members 
def user_art(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}"
    )
    if request.method == 'POST': # For Post request, return status response based on user permissions
        serializer = ArtSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET': # For GET requests, return with serializer data with artwork owned by user permissions
        artwork = Art.objects.filter(user_id=request.user.id)
        serializer = ArtSerializer(artwork, many=True)
        return Response(serializer.data)