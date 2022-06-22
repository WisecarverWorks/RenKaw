from rest_framework import serializers
from .models import Assessment 

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class AssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assessment
        fields = ['id', 'questions', 'date', 'assessment_id']
        depth = 1
        
    assessment_id = serializers.IntegerField(write_only=True)