from rest_framework import serializers
from .models import Project

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'ptype', 'title', 'year', 'user_id', 'price']
        depth = 1
