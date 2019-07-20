from django.db import models

# Create your models here.
class User(models.Model):
    username = Charfield()
    game = models.ForeignKey('Game')

class Friend(models.Model):
    uid = models.ForeignKey('User', on_delete=models.CASCADE)
    friend = models.ForeignKey('User', on_delete=models.CASCADE)

class Game(models.Model):
    host = models.ForeignKey('User', on_delete=models.CASCADE)
    mode = IntField()
    time_limit = TimeField()
    center_point = Point()
    range = Distance()
    active = BooleanField()
