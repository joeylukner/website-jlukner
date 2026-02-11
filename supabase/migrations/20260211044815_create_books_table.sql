
  create table "public"."books" (
    "title" text,
    "author" text,
    "genre" integer not null
      );


grant delete on table "public"."books" to "anon";

grant insert on table "public"."books" to "anon";

grant references on table "public"."books" to "anon";

grant select on table "public"."books" to "anon";

grant trigger on table "public"."books" to "anon";

grant truncate on table "public"."books" to "anon";

grant update on table "public"."books" to "anon";

grant delete on table "public"."books" to "authenticated";

grant insert on table "public"."books" to "authenticated";

grant references on table "public"."books" to "authenticated";

grant select on table "public"."books" to "authenticated";

grant trigger on table "public"."books" to "authenticated";

grant truncate on table "public"."books" to "authenticated";

grant update on table "public"."books" to "authenticated";

grant delete on table "public"."books" to "service_role";

grant insert on table "public"."books" to "service_role";

grant references on table "public"."books" to "service_role";

grant select on table "public"."books" to "service_role";

grant trigger on table "public"."books" to "service_role";

grant truncate on table "public"."books" to "service_role";

grant update on table "public"."books" to "service_role";


