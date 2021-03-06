<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // // create permissions
        // Permission::firstOrCreate(['name' => 'edit articles']);
        // Permission::firstOrCreate(['name' => 'delete articles']);
        // Permission::firstOrCreate(['name' => 'publish articles']);
        // Permission::firstOrCreate(['name' => 'unpublish articles']);

        
        

        // // or may be done by chaining
        // Role::firstOrCreate(['name' => 'd'])->givePermissionTo(['publish articles', 'unpublish articles']);

        // Role::firstOrCreate(['name' => 'owner'])->givePermissionTo(Permission::all());

        Role::firstOrCreate(['name' => 'super-admin']);
        Role::firstOrCreate(['name' => 'service-provider']);
        Role::firstOrCreate(['name' => 'doctor']);
        Role::firstOrCreate(['name' => 'owner']);
        Role::firstOrCreate(['name' => 'admin']);
        Role::firstOrCreate(['name' => 'stuff']);
        Role::firstOrCreate(['name' => 'patient']);
        Role::firstOrCreate(['name' => 'verified-service-provider']);
        Role::firstOrCreate(['name' => 'unverified-service-provider']);
    }
}
