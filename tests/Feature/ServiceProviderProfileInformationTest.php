<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ServiceProviderProfileInformationTest extends TestCase
{
    use RefreshDatabase;
    use DatabaseMigrations;
 
    public function testServiceProviderCanFillProfileInformation()
    {
        $user = User::factory()->create();

        $this->withoutExceptionHandling();
        
        $response = $this->actingAs($user)->get('/service_provider/profile_info');
        
    }
}
