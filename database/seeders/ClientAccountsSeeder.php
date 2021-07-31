<?php

namespace Database\Seeders;

use App\Models\ClientProfile;
use App\Models\ClientTeam;
use App\Models\MembershipCategory;
use App\Models\PackageFeature;
use App\Models\PackageMemberRange;
use App\Models\PackagePlan;
use App\Models\PackageSubscription;
use App\Models\TeamPackageSubscription;
use App\Models\User;
use Database\Factories\ClientTeamFactory;
use Database\Factories\TeamPackageSubscriptionFactory;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class ClientAccountsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $memberships = MembershipCategory::factory(3)->state(new Sequence(
            ['name' => 'Individual'],
            ['name' => 'Cooperate'],
            ['name' => 'Family'],
        ))->create();

        $memberships->each(function ($membership) {

            if($membership->name == 'Individual')
            {
                $packages = PackagePlan::factory(2)->state(new Sequence(
                    ['name' => 'Bronze'],
                    ['name' => 'Bronze Plus']
                ))->create([
                    'membership_category_id' => $membership->id,
                    'has_price' => true,
                    'price' => 50000.00,
                    'has_member_range' => false,
                    'currency' => 'TZS'
                ]);


                $packages2 = PackagePlan::factory(2)->state(new Sequence(
                    ['name' => 'Tanzanite'],
                    ['name' => 'Tanzanite Plus']
                ))->has(PackageFeature::factory()->count(5), 'package_features')->create([
                    'membership_category_id' => $membership->id,
                    'has_price' => true,
                    'price' => 100000.00,
                    'has_member_range' => false,
                    'currency' => 'TZS'
                    ]);

                $packages3 = PackagePlan::factory(2)->state(new Sequence(
                    ['name' => 'Diamond'],
                    ['name' => 'Diamond Plus']
                ))->has(PackageFeature::factory()->count(5), 'package_features')->create([
                    'membership_category_id' => $membership->id,
                    'has_price' => true,
                    'price' => 150000.00,
                    'has_member_range' => false,
                    'currency' => 'TZS'
                    ]);

            }else{
                $packages = PackagePlan::factory(2)->state(new Sequence(
                    ['name' => 'Bronze'],
                    ['name' => 'Bronze Plus']
                ))->has(PackageFeature::factory()->count(5), 'package_features')
                    ->hasAttached(PackageMemberRange::factory()->count(5)
                        ->state(new Sequence(
                            ['min' => 1, 'max' => 20],
                            ['min' => 20, 'max' => 50],
                            ['min' => 50, 'max' => 100],
                            ['min' => 100, 'max' => 500],
                            ['min' => 500, 'max' => 1000],
                        )), ['currency' => 'TZS', 'price' => rand(50000, 1000000)],'package_member_ranges')
                    ->create([
                    'membership_category_id' => $membership->id,
                    'has_price' => false,
                    'price' => 0.00,
                    'has_member_range' => true,
                    'currency' => 'TZS'
                ]);


                $packages2 = PackagePlan::factory(2)->state(new Sequence(
                    ['name' => 'Tanzanite'],
                    ['name' => 'Tanzanite Plus']
                ))->has(PackageFeature::factory()->count(5), 'package_features')
                    ->hasAttached(PackageMemberRange::factory()->count(5)
                        ->state(new Sequence(
                            ['min' => 1, 'max' => 20],
                            ['min' => 20, 'max' => 50],
                            ['min' => 50, 'max' => 100],
                            ['min' => 100, 'max' => 500],
                            ['min' => 500, 'max' => 1000],
                        )), ['currency' => 'TZS', 'price' => rand(50000, 1000000)],'package_member_ranges')
                    ->create([
                    'membership_category_id' => $membership->id,
                    'has_price' => false,
                    'price' => 0.00,
                    'has_member_range' => true,
                    'currency' => 'TZS'
                    ]);

                $packages3 = PackagePlan::factory(2)->state(new Sequence(
                    ['name' => 'Diamond'],
                    ['name' => 'Diamond Plus']
                ))->has(PackageFeature::factory()->count(5), 'package_features')
                    ->hasAttached(PackageMemberRange::factory()->count(5)
                        ->state(new Sequence(
                            ['min' => 1, 'max' => 20],
                            ['min' => 20, 'max' => 50],
                            ['min' => 50, 'max' => 100],
                            ['min' => 100, 'max' => 500],
                            ['min' => 500, 'max' => 1000],
                        )), ['currency' => 'TZS', 'price' => rand(50000, 1000000)],'package_member_ranges')
                    ->create([
                    'membership_category_id' => $membership->id,
                    'has_price' => false,
                    'price' => 0.00,
                    'has_member_range' => true,
                    'currency' => 'TZS'
                    ]);

            }
        });



        $clients = ClientProfile::factory(50)
                ->state(new Sequence(
                    ['account_category_type' => 'individual'],
                    ['account_category_type' => 'family'],
                    ['account_category_type' => 'cooperate'],
                ))->for(User::factory()->create(), 'account')
             ->create();

        $clients->each(function ($client){
            User::find($client->user_id)->assignRole('patient');

            if($client->account_category_type == 'family'){
                ClientTeam::factory()
                    ->has(TeamPackageSubscription::factory()->count(1)
                        ->state(function (array $attributes, ClientTeam $team) {
                            return ['client_team_id' => $team->owner_id,
                                'package_plan_id' => PackagePlan::where('membership_category_id' ,MembershipCategory::where('name', 'Family')->first()->id)->first()->id];
                        }),'team_package_subscriptions')
                    ->create([
                    'owner_id' => $client->id,
                    'team_type' => 'family'
                ]);
            }

            if($client->account_category_type == 'cooperate'){
                ClientTeam::factory()
                    ->has(TeamPackageSubscription::factory()->count(1)
                        ->state(function (array $attributes, ClientTeam $team) {
                        return ['client_team_id' => $team->owner_id,
                            'package_plan_id' => PackagePlan::where('membership_category_id' ,MembershipCategory::where('name', 'Cooperate')->first()->id)->first()->id];
                    }),'team_package_subscriptions')
                    ->create([
                    'owner_id' => $client->id,
                    'team_type' => 'cooperate'
                ]);
            }

            if($client->account_category_type == 'individual'){
                PackageSubscription::factory()
                    ->create([
                        'package_plan_id' => PackagePlan::where('membership_category_id' ,MembershipCategory::where('name', 'Individual')->first()->id)->first()->id,
                        'user_id' => ClientProfile::find($client->id)->user_id,
                        'payer' => 'self'
                    ]);
            }

        });
    }
}
