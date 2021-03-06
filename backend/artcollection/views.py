from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Art
from .serializers import ArtSerializer
# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_art(request):
    artwork = Art.objects.all()
    serializer = ArtSerializer(artwork, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_art(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = ArtSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        artwork = Art.objects.filter(user_id=request.user.id)
        serializer = ArtSerializer(artwork, many=True)
        return Response(serializer.data)
    
    # End
