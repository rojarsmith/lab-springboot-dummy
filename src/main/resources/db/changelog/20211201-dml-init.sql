--liquibase formatted sql
--changeset 20211201-dml-init context:dev
INSERT  INTO  member (username)   VALUES  ('User Name 1');

--changeset 20211201-dml-init-2 context:dev
INSERT  INTO  member (username)   VALUES  ('User Name 2');
