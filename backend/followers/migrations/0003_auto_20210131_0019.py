# Generated by Django 3.1.5 on 2021-01-30 22:19

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('followers', '0002_auto_20210127_1319'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='follow',
            unique_together={('following_From', 'following_To')},
        ),
    ]