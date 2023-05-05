from django.contrib import admin
from news.models import Article


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'source', 'published_at')
    list_filter = ('published_at',)
    search_fields = ('title', 'description',)

admin.site.register(Article, ArticleAdmin)
