from django.db import models
from django.contrib.auth.models import User

class Article(models.Model):
    author = models.CharField(max_length=100, blank=True, null=True)
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)
    url = models.URLField(max_length=1000)
    source = models.CharField(max_length=155)
    image = models.URLField(max_length=1000, blank=True, null=True)
    category = models.CharField(max_length=200, default='general')
    language = models.CharField(max_length=10, default='fr')
    country = models.CharField(max_length=100, default='fr')
    published_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.title} by {self.author.first_name} {self.author.last_name}'

    class Meta:
        ordering = ['-published_at']
        verbose_name = 'Article'
        verbose_name_plural = 'Articles'
        
