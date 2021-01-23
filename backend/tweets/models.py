from django.db import models
from users.models import UserAccount

# Create your models here.


class Tweet(models.Model):
    user_Id = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    tweet = models.CharField(max_length=1200)
    img = models.CharField(max_length=750)
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user_Id.name
