from django.db import models
from tweets.models import Tweet
from users.models import UserAccount

# Create your models here.


class Comment(models.Model):
    user_Id = models.ForeignKey(
        UserAccount, on_delete=models.CASCADE, related_name='user_comments')
    tweet_Id = models.ForeignKey(
        Tweet, on_delete=models.CASCADE, related_name='comments')
    comment = models.CharField(max_length=5000)
    img = models.CharField(max_length=1000, default='', blank=True)
    time = models.DateTimeField(auto_now_add=True)


def __str__(self):
    return "%s %s %s" % (self.user_Id.name, self.tweet_Id.tweet, self.comment)
