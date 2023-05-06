import requests

from django.conf import settings
from django.core.management.base import BaseCommand
from news.models import Article


class Command(BaseCommand):
    help = 'Fetches articles from the News API'

    def add_arguments(self, parser):
        parser.add_argument('--limit', type=int, default=100)

    def handle(self, *args, **options):
        limit = options['limit']
        url = 'http://api.mediastack.com/v1/news?access_key={}'.format(
            settings.MEDIASTACK_API_KEY)
        response = requests.get(url)
        print(response.status_code)
        print(response.json())
        articles = response.json()['data']
        for article in articles[:limit]:
            article_obj, created = Article.objects.get_or_create(
                title=article['title'],
                description=article['description'],
                source=article['source'],
                image=article['image'],
                country=article['country'],
                language=article['language'],
                author=article['author'],
                category=article['category'],
                url=article['url']
            )
            if created:
                article_obj.save()