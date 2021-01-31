<?php

return [
'index' =>[
  'header' => 'Service Provider Profile Listing',
  'add_new' => 'Add New Plan',
  'table'=> [
    'full_name'=> 'Name',
    'gender' => 'Gender',
    'location' => 'Location',
    'verification_status' => 'Verification Status',
    'more' => 'More',
  ],
  'action'=>[
    'show' => 'Show',
    'change_status' => 'Mark As Verified',
    'change_status_unverify' => 'Mark As Unverified',
    'delete' => 'Delete',
  ]
],
  'create' => [
    'header' => 'Create Subscription Packages',
    'form_header' => 'Register Subscription Package',
    'package_name' => 'Package Name',
    'package_description' => 'Package Description',
    'package_price' => 'Package Price',
    'package_invoice_period' => 'Package Invoice Period',
    'package_invoice_interval'  => 'Package Invoice Interval',
    'package_trial_period' => 'Package Trial Period',
    'package_trial_interval' => 'Package Trial Interval',
    'package_sort_order' => 'Package Sort Order',
    'package_currency' => 'Package Currency',
    'package_category' => 'Package Category',
    'save' => 'Save Changes',
  ],

];
