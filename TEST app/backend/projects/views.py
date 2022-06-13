from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Project
from .serializers import ProjectSerializer

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_projects(request):
    projects = Project.objects.all()
    serializer = projectserializer(projects, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def project_projects(request):
    print(
        'Project ', f"{request.Project.id} {request.Project.email} {request.Project.Projectname}")
    if request.method == 'POST':
        serializer = projectserializer(data=request.data)
        if serializer.is_valid():
            serializer.save(Project=request.Project)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        projects = Member.objects.filter(Project_id=request.Project.id)
        serializer = projectserializer(projects, many=True)
        return Response(serializer.data)
