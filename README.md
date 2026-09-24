# skiftare.github.io

Статический сайт Kirill Bratanov / Skiftare (GitHub Pages).

## Структура

```
index.html, experience.html, projects.html, contact.html,
artifacts.html, space.html     — страницы сайта (rustyle: публичная часть skiftare.dev)
styles.css, app.js             — тема (моно, белый) и переключатель RU/EN
artifacts/, artifact-*.html    — публичные артефакты (сертификаты/ссылки)
space/
  index → space.html
  seti/                        — сетевой тренажёр (статика Next.js, 253 вопроса)
  burn/                        — сжигатель трафика (joke-подсайт)
```

## Деплой

1. Поправил файлы → `git add -A && git commit -m "..." && git push`.
2. GitHub Pages: Settings → Pages → Source: Deploy from branch `main`, root.
3. Сайт: `https://skiftare.github.io/` (пространство: `/space.html`,
   тренажёр: `/space/seti/`, сжигатель: `/space/burn/`).

## Правила

- Без эмодзи, без ИИ-фраз. Живой русский, «ты».
- Пути на страницах — **относительные** (работают из любого подкаталога
  и под доменом). НЕ переключаться на абсолютные `/...`.
- Тренажёр (`space/seti/`) — статик-сборка с относительными путями
  (`_next/...`, `questions.json` без ведущего `/`). При обновлении
  архива: скопировать `network_quiz_v3/` → `space/seti/`, затем
  заменить «/_next/» → «_next/» и «fetch(`/questions.json`)» →
  «fetch(`questions.json`)», и поправить `url.pathname.endsWith('/questions.json')`
  в инлайн-враппере fetch (index.html). После правок — Playwright-проверка
  с запуском из подкаталога (см. историю skiftare-dev-site skills).
- Прогресс тренажёра и счётчик сжигателя — localStorage браузера,
  серверной синхронизации тут нет.