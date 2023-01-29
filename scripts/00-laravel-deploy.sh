echo "Running composer"
composer install --no-dev --working-dir=/var/www/html


echo "npm install"
npm install 

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate --force
