
/opt/bitnami/apache2/conf/bitnami/bitnami.conf


sudo rm -rf /opt/bitnami/apache2/htdocs/* && sudo cp -r dist/* /opt/bitnami/apache2/htdocs/



<VirtualHost *:80>
    DocumentRoot "/opt/bitnami/apache2/htdocs"
    <Directory "/opt/bitnami/apache2/htdocs">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted

        # React Router support: Rewrite all non-file/directory requests to index.html
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule ^ /index.html [L]
    </Directory>

    # Error Documents
    ErrorDocument 503 /503.html

    # Proxy to Backend (Node.js/Express)
    ProxyPass "/api" http://127.0.0.1:3000/
    ProxyPassReverse "/api" http://127.0.0.1:3000/

    # Log files
    ErrorLog "/opt/bitnami/apache2/logs/error_log"
    CustomLog "/opt/bitnami/apache2/logs/access_log" combined
</VirtualHost>



# Default Virtual Host configuration.

# Let Apache know we're behind an SSL reverse proxy
SetEnvIf X-Forwarded-Proto https HTTPS=on

# Frontend configuration (React Vite)
<VirtualHost *:80>
    DocumentRoot "/opt/bitnami/apache/htdocs"
    <Directory "/opt/bitnami/apache/htdocs">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted

        # React Router support: Rewrite all non-file/directory requests to index.html
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule ^ /index.html [L]
    </Directory>

    # Error Documents
    ErrorDocument 503 /503.html

    # Proxy to Backend (Node.js/Express)
    ProxyPass "/api" http://127.0.0.1:3000/api
    ProxyPassReverse "/api" http://127.0.0.1:3000/api

    # Log files
    ErrorLog "/opt/bitnami/apache2/logs/error_log"
    CustomLog "/opt/bitnami/apache2/logs/access_log" combined
</VirtualHost>

# SSL Configuration (Bitnami cert tool will modify this file)
Include "/opt/bitnami/apache/conf/bitnami/bitnami-ssl.conf"
 