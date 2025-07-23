import psycopg2
import os

conn = psycopg2.connect(
    dbname=os.getenv("PGDATABASE", "your_db"),
    user=os.getenv("PGUSER", "your_user"),
    password=os.getenv("PGPASSWORD", "your_password"),
    host=os.getenv("PGHOST", "localhost"),
    port=os.getenv("PGPORT", "5432"),
)
cur = conn.cursor()
cur.execute("""
    SELECT table_schema, table_name
    FROM information_schema.tables
    WHERE table_type='BASE TABLE'
      AND table_schema NOT IN ('pg_catalog', 'information_schema')
    ORDER BY table_schema, table_name;
""")
tables = cur.fetchall()

for schema, table in tables:
    cur.execute("""
        SELECT column_name, data_type
        FROM information_schema.columns
        WHERE table_schema = %s AND table_name = %s
        ORDER BY column_name;
    """, (schema, table))
    columns = cur.fetchall()
    if columns:
        print(f"### {schema}_{table}")
        print(f"| Field Name | Data Type | Description |")
        print(f"|-------------|-----------|-------------|")
        for name, dtype in columns:
            print(f"| {name} | {dtype} | |")
        print()

cur.close()
conn.close()
