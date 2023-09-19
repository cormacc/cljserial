-- Storage buckets

-- ... allow authenticated users to list the available buckets
create policy "Allow authenticated users to list buckets"
  on storage.buckets
  for select to authenticated using(true);


-- ... create a test bucket
insert into storage.buckets
            (id, name)
values
  ('test', 'test');

-- ... allow authenticated users to list contents of the 'test' bucket
create policy "Allow authenticated access to 'test' bucket"
  on storage.objects
  for select
    to authenticated
    using ( bucket_id = 'test' );


-- Test data
insert into public.devices
  (serial, hardware_rev, firmware_rev, bootloader_rev)
values
  (1, 1, '{13, 0, 18}', '{2, 0, 0}'),
  (96, 3, '{15, 4, 10}', '{2, 2, 0}');
