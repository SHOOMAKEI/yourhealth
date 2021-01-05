<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
          return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'mobile_number' => $this->mobile_number,
            'profile_photo_path' => $this->profile_photo_path,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'settings' => $this->settings,
            'roles' => $this->rolesgetRoleNames(),
            'permissions' => $this->getAllPermissions(),
            'profile' => $this->profile
            
        ];
    }

}
