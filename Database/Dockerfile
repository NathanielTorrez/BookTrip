FROM postgres:latest
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB temp
COPY schema.sql /docker-entrypoint-initdb.d/
