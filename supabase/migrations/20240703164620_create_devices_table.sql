create table
devices (
serial integer not null primary key,
hardware_rev smallint not null,
-- replace _rev columns with links to tables with major, minor, patch and release date columns?
firmware_rev int array[3],
bootloader_rev int array[3],
created_at timestamptz default now()
);
