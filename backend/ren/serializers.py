# We want rest framework and model/s imported 
from rest_framework import serializers
from .models import Art


#<<<<<<<<<<<<<<<<<<<<<<<< Below we will create a serializer class
class ArtSerializer(serializers.ModelSerializer):
    # We are setting all pieces of art with these identifiers. 
    class Meta:
        model = Art
        fields = ['type','name','year','price']
        depth = 1 