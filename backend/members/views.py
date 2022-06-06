from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

from .models import Member
from .serializers import MembersSerializer

# <<<<< DETERMINE IMPORTS >>>>>>
# Create your views here.

# << decorators allow our functions to use HTTP REQUESTS

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_members(request):
    members = Member.objects.all()
    serializer = MembersSerializer(members, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_members(request):
    print(
        'User ', f"{request.user.id} {request.user.memberId}")
    if request.method == 'POST':
        serializer = MembersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        creations = Member.objects.filter(user_id=request.user.id)
        serializer = MembersSerializer(creations, many=True)
        return Response(serializer.data)