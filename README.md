# lab-springboot-dummy

The project template for building & test agile development.

![example workflow](https://github.com/rojarsmith/lab-springboot-dummy/actions/workflows/build.yml/badge.svg)

## Deploy

### Manual

```bash
## Remote side : ubuntu

mkdir /root/service/app/lab-springboot-dummy

## Local side : Windows

# Install Windows PowerShell from github, OpenJDK 11.x, Gradle 7.x, git.

# Generate ssh key and deploy to github.

git Clone git@github.com:rojarsmith/lab-springboot-dummy.git

gradle -b lab-springboot-dummy/build.gradle bootJar

cp lab-springboot-dummy/build/libs/* $ENV:TEMP
cp lab-springboot-dummy/ecosystem.config.js $ENV:TEMP

ls $ENV:TEMP/lab-springboot-dummy-0.0.1-SNAPSHOT.jar
ls $ENV:TEMP/ecosystem.config.js

# For auto script
# Example: C:\Users\ROJARS~1\AppData\Local\Temp\lab-springboot-dummy-0.0.1-SNAPSHOT.jar
$UPLOAD_NAME="$ENV:TEMP/lab-springboot-dummy-0.0.1-SNAPSHOT.jar"

sftp root@REMOTE_IP

cd /root/service/app/lab-springboot-dummy

# Example: C:\lab-springboot-dummy-0.0.1-SNAPSHOT.jar
put FILE_PATH_APP_JAR
put FILE_PATH_ECOSYSTEM_CONFIG

## Remote side : ubuntu

# Install OpenJDK 11.x, nvm, nodejs, PM2.

mv lab-springboot-dummy-0.0.1-SNAPSHOT.jar lab-springboot-dummy.jar

vi ecosystem.config.js

# Modify path & config
"args":[
  "-jar",
  "/root/service/app/lab-springboot-dummy/lab-springboot-dummy.jar",
  "--spring.config.location=/server-root/application-prod.properties"]

pm2 startOrRestart ecosystem.config.js

pm2 ls
```

### Auto

```bash
# Modify ecosystem.config.js

## Remote side : ubuntu

# Install OpenJDK 11.x, Gradle 7.x, nvm, pm2, git.

# Generate ssh key and deploy to github.

mkdir /root/service/app/lab-springboot-dummy

## Local side : Windows

# Install Windows PowerShell from github, nvm-windows, pm2, git.

# Generate ssh key and deploy to github.

# Move to the path of source code.

pm2 deploy ecosystem.config.js production setup

pm2 deploy ecosystem.config.js production
```

## Test service

```bash
# Result: hello TAG2
curl -w '\n' http://localhost:8080/test/hello
```

