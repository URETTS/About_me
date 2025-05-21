#!/bin/bash

# 1. Сборка
echo "🔧 Сборка проекта..."
npm run build

# 2. Упаковка dist в архив
echo "📦 Архивируем dist..."
tar -czf dist.tar.gz dist

# 3. Удаляем старую версию на сервере
echo "🧹 Удаляем старую версию на сервере..."
ssh ubuntu@51.21.75.162 'rm -rf /home/ubuntu/dist /home/ubuntu/dist.tar.gz'

# 4. Загружаем архив на сервер
echo "🚀 Загружаем архив..."
scp dist.tar.gz ubuntu@51.21.75.162:/home/ubuntu/

# 5. Распаковываем архив на сервере
echo "📂 Распаковываем архив на сервере..."
ssh ubuntu@51.21.75.162 'tar -xzf /home/ubuntu/dist.tar.gz -C /home/ubuntu && rm /home/ubuntu/dist.tar.gz'

# 6. Удаляем архив локально
rm dist.tar.gz

echo "✅ Готово! Проект обновлён на сервере."
