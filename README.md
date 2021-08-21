# performance_react

## Pythonの準備

### ライブラリのインストール
```
$ pip install Django
$ pip install djangorestframework
$ pip install django-cors-headers
```

### サンプルAPIの骨子作成
```
$ mkdir sample_api
$ django-admin startproject restapi sample_api
$ cd sample_api/
$ django-admin startapp api
```

### DBのマイグレーション
```
$ python manage.py makemigrations
$ python manage.py migrate
```

### スーパーユーザの作成
```
$ python manage.py createsuperuser
```
### 起動
```
$ python manage.py runserver 8080
```
