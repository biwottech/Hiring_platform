{
"name": "John Doe",
"email": "john.doe@example.com",
"password": "securePassword123",
"role": "job_seeker"
}
{
"name": "Jane Smith",
"email": "jane.smith@example.com",
"password": "anotherSecurePassword456",
"role": "recruiter"
}



 <VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /opt/bitnami/apache2/htdocs

    # Frontend Configuration
    <Directory /opt/bitnami/apache2/htdocs>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # Backend API Proxy
    ProxyPreserveHost On
    ProxyPass /api http://127.0.0.1:3000/
    ProxyPassReverse /api http://127.0.0.1:3000/
 

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
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
    ProxyPass "/api" http://127.0.0.1:3000/
    ProxyPassReverse "/api" http://127.0.0.1:3000/

    # Log files
    ErrorLog "/opt/bitnami/apache2/logs/error_log"
    CustomLog "/opt/bitnami/apache2/logs/access_log" combined
</VirtualHost>

# SSL Configuration (Bitnami cert tool will modify this file)
Include "/opt/bitnami/apache/conf/bitnami/bitnami-ssl.conf"





CREATE DATABASE hiring_platform;
CREATE USER kitheka WITH ENCRYPTED PASSWORD '9570';
GRANT ALL PRIVILEGES ON DATABASE hiring_platform TO kitheka;
\q

git config --global user.name "biwottech"
git config --global user.email "biwottech@gmail.com"



# Default Virtual Host configuration.

# Let Apache know we're behind a SSL reverse proxy
SetEnvIf X-Forwarded-Proto https HTTPS=on

<VirtualHost _default_:80>
  DocumentRoot "/opt/bitnami/apache/htdocs"
  <Directory "/opt/bitnami/apache/htdocs">
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
  </Directory>

  # Error Documents
  ErrorDocument 503 /503.html
</VirtualHost>
Include "/opt/bitnami/apache/conf/bitnami/bitnami-ssl.conf"

 

<VirtualHost *:443>
    ServerName client.vladsave.com
    SSLEngine on
    SSLCertificateFile "/opt/bitnami/apache/conf/client.vladsave.com.crt"
    SSLCertificateKeyFile "/opt/bitnami/apache/conf/client.vladsave.com.key"
    # Other directives here
</VirtualHost>

<VirtualHost *:443>
    ServerName server.vladsave.com
    ProxyPass / http://localhost:8000/
    ProxyPassReverse / http://localhost:8000/
    
    SSLEngine on
    SSLCertificateFile "/opt/bitnami/apache/conf/client.vladsave.com.crt"
    SSLCertificateKeyFile "/opt/bitnami/apache/conf/client.vladsave.com.key"
    # Other directives here
</VirtualHost>