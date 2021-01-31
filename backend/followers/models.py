from django.db import models
from users.models import UserAccount

# Create your models here.


class Follow(models.Model):
    following_From = models.ForeignKey(
        UserAccount, on_delete=models.CASCADE, related_name='following_From')
    following_To = models.ForeignKey(
        UserAccount, on_delete=models.CASCADE, related_name='following_To')
    time = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('following_From', 'following_To')

    def __str__(self):
        return "%s %s" % (self.following_From.name, self.following_To.name)


# from django.db import models
# from users.models import UserAccount

# # Create your models here.


# class Follow(models.Model):
#     following_From = models.ForeignKey(
#         UserAccount, on_delete=models.CASCADE, related_name='followingFrom')
#     following_To = models.ForeignKey(
#         UserAccount, on_delete=models.CASCADE, related_name='followingTo')
#     time = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return "%s %s" % (self.following_From.name, self.following_To.name)
