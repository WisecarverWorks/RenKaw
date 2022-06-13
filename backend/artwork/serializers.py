from rest_framework import serializers
from .models import Artwork

class ArtworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artwork
        fields = ['types','title','price']
        depth = 1 