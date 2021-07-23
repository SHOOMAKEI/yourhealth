<?php

namespace Tests\Feature;

use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function testQueriesServiceCategory(): void
    {
//         $response = $this->graphQL(/** @lang GraphQL */ '
//         {
//             serviceCategory(id:1) {
//                 id
//                 name
//                 description
//             }
//         }
//         ')->assertJson([
//             'data' => [
//                 'serviceCategory' => [
//                     'id' => 1
//                 ]
//             ]
//         ]);
//     }

}
