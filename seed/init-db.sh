#!/bin/bash
set -e

DB_NAME=adventureworks
DB_USER=adventureworks
DB_PASSWORD=adventureworks

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER $DB_USER with password '$DB_PASSWORD';
	CREATE DATABASE $DB_NAME;
	GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;
	\c $DB_NAME
	GRANT ALL ON SCHEMA public TO $DB_USER;
EOSQL

psql --username "$POSTGRES_USER" --dbname "$DB_NAME" --file /seed/install.sql