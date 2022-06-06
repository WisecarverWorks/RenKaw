from rest_framework import serializers
from .models import Member

#<<<<<<<< Imports 

# determine serializer class model

class MembersSerializer(serializers.ModelSerializer):

    class Meta:
        model: Member
        fields = ['id','user_id','memberId','firstName','lastName','city','street','zipcode','state']
        depth = 1 # This satisfies our member table
        #<<<<< We need a foriegn key for memberId