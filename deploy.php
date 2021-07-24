<?php
namespace Deployer;

require 'recipe/laravel.php';
require 'vendor/deployer/recipes/recipe/rsync.php';
// Config

set('application', 'afyacom');
set('deploy_path', '~/{{application}}');
set('repository', 'yes');
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

host('198.199.91.107');
host('afyacom.co.tz');


// Tasks

task('deploy:secrets', function () {
    file_put_contents(__DIR__ . '/.env', getenv('DOT_ENV'));
    upload('.env', get('deploy_path') . '/shared');
});

task('build', function () {
    cd('{{release_path}}');
    run('npm run build');
});

after('deploy:failed', 'deploy:unlock');

