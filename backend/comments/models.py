from django.db import models
from tweets.models import Tweet
from users.models import UserAccount

# Create your models here.


class Comment(models.Model):
    user_Id = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    tweet_Id = models.ForeignKey(Tweet, on_delete=models.CASCADE)
    comment = models.CharField(max_length=5000)
    img = models.CharField(max_length=1000)
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user_id.name
