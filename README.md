# newspaper


## Getting started

1. set up backend

```bash
cd backend
```
```bash
python3 -m venv newspaperenv
```

```bash
newspaperenv/bin/activate
```

```bash
pip intall -r requirements.txt
```

```bash
python3 manage.py migrate
```

```bash
python3 manage.py runserver
```

2. set up frontend

```bash
cd frontend
```

```bash
npm install
```

```bash
npm run dev
```


## thanks to tutorials
* [Let’s build a LIVE NEWS APP with Next.js 13 (TypeScript, StepZen, Tailwind, Dark Mode, GraphQL)](https://www.youtube.com/live/QcEY72FX9go?feature=share)
* [Modern CSS](https://ishadeed.com/article/rebuild-featured-news-modern-css/)

## Build with
* Next.js
* TypeScript
* Tailwindcss
* Django
* Graphene
* Container queries

# screenshot
![GraphQL](query.png)
![Article](article.png)
![Homepage Light](homepage.png)
![Homepage Dark](homepage-dark.png)