FROM php:7.4-fpm-alpine

# Copy composer.lock and composer.json
COPY composer.lock composer.json /var/www/

# Set working directory
WORKDIR /var/www

# Install dependencies
RUN apk update \
    && apk add zip unzip libzip-dev git \
    && apk add --virtual build-deps gcc libffi libffi-dev musl-dev \
    && apk add postgresql \
    && apk add postgresql-dev \
    && apk add libgd libpng-dev libjpeg-turbo-dev freetype-dev alpine-sdk \
    && apk add php7-pgsql php7-gd \
    && echo "http://dl-cdn.alpinelinux.org/alpine/edge/testing" > /etc/apk/repositories \
   	&& echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories \
   	&& echo "http://dl-cdn.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories  \
    && apk add geos proj gdal binutils \
    && apk del build-deps

# Install extensions and composer
RUN docker-php-ext-install pdo_pgsql zip exif pcntl \
    && docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/ \
    && docker-php-ext-install gd \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Add user for laravel application
ARG APP_USER=www
RUN addgroup -S ${APP_USER} && adduser -S ${APP_USER} -G ${APP_USER}

# Copy existing application directory contents
COPY . /var/www

# Copy existing application directory permissions
COPY --chown=www:www . /var/www

# Change current user to www
USER www

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]

# run entrypoint.sh
ENTRYPOINT [ "/var/www/entrypoint.sh" ]