<?php

namespace App\Contracts\Repositories\Registration;

use App\Models\User;

interface RegistrationRepositoryInterface
{
    public function createUserAccount(ServiceProviderRegistrationRepositoryInterface $repository, array $request):User;
}
