<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ServiceProviderProfileInformationTest extends TestCase
{
    // use RefreshDatabase;
    // use DatabaseMigrations;

    protected $seed = true;
 
//     public function testMutationsCreateAccount(): void
//     {
//         $response = $this->graphQL(/** @lang GraphQL */ '
//         mutation {
//             createAccount(
//                 input: {
//                     first_name: "Michael",
//                     middle_name: "M",
//                     last_name: "Assey",
//                     email: "rishaelibenson@gmail.com",
//                     mobile_number: "+255625933171",
//                     password: "#12Om4k31",
//                     password_confirmation: "#12Om4k31",
//                     account_category: "service-provider",
//                     account_category_type: "facility",
//                     ownership_type: "self",
//                     name:"omakei health center",
//                     vrn:"456789567890678",
//                     tin:"678567678789",
//                     provider_sub_level_id:"2",
//                     owner_first_name:"",
//                     owner_middle_name:"",
//                     owner_last_name:"",
//                     owner_mobile_number:"",
//                     owner_email:""
//                 }
                
//             )
//         }
//         ')->assertJson([
//             'data' => [
//                 'createAccount' => [
//                     'name' => "Michael M Omakei",
//                     'provider_profile' => [
//                         'email' => 'rishaelibenson@gmail.com'
//                     ],
//                 ]
//             ]
//         ]);
//     }

}
