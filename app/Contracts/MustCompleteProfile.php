<?php

namespace App\Contracts;

interface MustCompleteProfile
{
    /**
     * Determine if the user has complite their profile.
     *
     * @return bool
     */
    public function hasComplitedProfile();

    /**
     * Mark the given user's Profile as complite.
     *
     * @return bool
     */
    public function markProfileAsComplite();

    
    /**
     * Get the Profile State.
     *
     * @return string
     */
    public function getProfileState();

    /**
     * Update Profile State.
     *
     * @return string
     */
    public function updateProfileState();
}