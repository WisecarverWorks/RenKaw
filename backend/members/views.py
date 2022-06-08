from django.shortcuts import render
from cars import serializers
from .models import Member
from .serializers import MembersSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes


# <<<<< DETERMINE IMPORTS >>>>>>
# Create your views here.

# << decorators allow our functions to use HTTP REQUESTS


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_members(members):
    members = Member.objects.all()
    serializer = MembersSerializer(members, ...)### HELP
    return Response(MembersSerializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
#@permission_classes({AllowAny})
def members(request):
    print(
        'Members ', f"{request.members.id} {request.memberId}")
    if request.method == 'POST':
        serializer = MembersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(member=request.member)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        members = Member.objects.filter(user_id=request.memberId)
        serializer = MembersSerializer(members, many=True)
        return Response(serializer.data)