# Generated by Django 4.0.5 on 2022-06-17 08:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('artwork', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='artwork',
            old_name='types',
            new_name='sets',
        ),
    ]
