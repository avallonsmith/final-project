set client_min_messages to warning;
-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;
create schema "public";
CREATE TABLE "memes" (
    "memeId" serial NOT NULL,
    "title" TEXT NOT NULL,
    "photoUrl" TEXT NOT NULL,
    CONSTRAINT "memes_pk" PRIMARY KEY ("memeId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "memeReactions" (
    "memeReactId" serial NOT NULL,
    "memeId" integer NOT NULL,
    "type" TEXT NOT NULL,
    CONSTRAINT "memeReactions_pk" PRIMARY KEY ("memeReactId")
) WITH (
  OIDS=FALSE
);
ALTER TABLE "memeReactions" ADD CONSTRAINT "memeReactions_fk0" FOREIGN KEY ("memeId") REFERENCES "memes"("memeId");
