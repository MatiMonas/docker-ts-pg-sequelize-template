# docker-ts-pg-sequelize-template

To make use of this template follow the steps below: 
1. Open Docker Desktop
2. Run ```yarn dev | npm run dev```
3. That's it.

----

## About the container

The container has postgres image as database and it also has the pg-admin image.

To log in to pg-admin go to localhost:80 and log in with the following account:

```
admin@admin.com
admin
```

The template is set up so that the database has persistent data, even when the container is restarted or closed.

It also has nodemon configured so that the api is restarted every time a file is saved.