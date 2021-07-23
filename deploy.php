<?php
namespace Deployer;

require 'recipe/laravel.php';
require 'vendor/deployer/recipes/recipe/rsync.php';

// Project name
set('application', 'yourhealth');

// Project repository
set('repository', 'yes');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', false);

set('ssh_multiplexing', true); // Speed up deployment

set('rsync_src', function () {
    return __DIR__; // If your project isn't in the root, you'll need to change this.
});

// Configuring the rsync exclusions.
// You'll want to exclude anything that you don't want on the production server.
add('rsync', [
    'exclude' => [
        '.git',
        '/.env',
        '/storage/',
        '/vendor/',
        '/node_modules/',
        '.github',
        'deploy.php',
    ],
]);



// Shared files/dirs between deploys
add('shared_files', []);
add('shared_dirs', []);

// Writable dirs by web server
add('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('afyacom.co.tz') // Name of the server
->hostname('198.199.91.107') // Hostname or IP address
->stage('production') // Deployment stage (production, staging, etc)
->user('tmhs') // SSH user
->set('deploy_path', '/home/tmhs/afyacom/');

host('staging.afyacom.co.tz') // Name of the server
->hostname('198.199.91.107') // Hostname or IP address
->stage('staging') // Deployment stage (production, staging, etc)
->user('tmhs') // SSH user
->set('deploy_path', '/home/tmhs/afyacom/');

// Tasks

task('build', function () {
    run('cd {{release_path}} && build');
});

// Set up a deployer task to copy secrets to the server.
// Grabs the dotenv file from the github secret
task('deploy:secrets', function () {
    file_put_contents(__DIR__ . '/.env', getenv('DOT_ENV'));
    upload('.env', get('deploy_path') . '/shared');
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
desc('Deploy the application');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'rsync', // Deploy code & built assets
    'deploy:secrets', // Deploy secrets
    'deploy:shared',
    'deploy:vendors',
    'deploy:writable',
    'artisan:storage:link', // |
    'artisan:view:cache',   // |
    'artisan:config:cache', // | Laravel specific steps
    'artisan:optimize',     // |
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
]);
// Migrate database before symlink new release.

before('deploy:symlink', 'artisan:migrate');
