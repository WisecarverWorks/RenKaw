from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Artwork
from .serializers import ArtworkSerializer
# Create your views here.


@api_view(['GET','POST'])
@permission_classes([AllowAny])
def getArtwork(request):
    artwork = Artwork.objects.all()
    serializer = ArtworkSerializer(artwork, many=True)
    return Resonse(serializer.data)

@api_view(['GET','POST'])
@permission_classes(IsAuthenticated)
def getAllArtwork(request):
    print(
        'Artwork ', f"{request.artwork.id} {request.artwork.title} {request.artwork.price}")
    if request.method == 'POST':
        serializer = ArtworkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(artwork=request.artwork)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        artwork = Artwork.objects.filter(artwork_id=request.artwork.id)
        serializer = ArtworkSerializer(artwork, many=True)
        return Respons(serializer.data)