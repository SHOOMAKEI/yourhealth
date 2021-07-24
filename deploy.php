<?php
namespace Deployer;

require 'recipe/laravel.php';
require 'vendor/deployer/recipes/recipe/rsync.php';
// Config

set('application', 'afyacom');
set('deploy_path', '~/{{application}}');
set('repository', 'git@github.com:TMHS-TANZANIA/yourhealth.git');
set('default_stage', 'production');

set('ssh_multiplexing', true);

set('rsync_src', function () {
    return __DIR__;
});

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

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts

host('production')
    ->set('remote_user', 'tmhs')
    ->set('hostname', '198.199.91.107')
    ->set('deploy_path', '/home/tmhs/afyacom/production');

host('staging')
    ->set('remote_user', 'tmhs')
    ->set('hostname', '198.199.91.107')
    ->set('deploy_path', '/home/tmhs/afyacom/staging');


// Tasks

task('deploy:secrets', function () {
    file_put_contents(__DIR__ . '/.env', getenv('DOT_ENV'));
    upload('.env', get('deploy_path') . '/shared');
});

task('build:assets', function () {
    cd('{{release_path}}');
    run('npm run production');
});

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
    'artisan:migrate',      // |
    'deploy:symlink',
    'build:assets'
]);
