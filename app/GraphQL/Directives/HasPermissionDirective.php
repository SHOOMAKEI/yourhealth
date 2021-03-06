<?php

namespace App\GraphQL\Directives;

use App\Models\User;
use Closure;
use GraphQL\Type\Definition\ResolveInfo;
use Nuwave\Lighthouse\Exceptions\AuthorizationException;
use Nuwave\Lighthouse\Schema\Directives\BaseDirective;
use Nuwave\Lighthouse\Schema\Values\FieldValue;
use Nuwave\Lighthouse\Support\Contracts\FieldMiddleware;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class HasPermissionDirective extends BaseDirective implements FieldMiddleware
{
    public function handleField(FieldValue $fieldValue, Closure $next)
    {
        $resolver = $fieldValue->getResolver();


        return $next(
            $fieldValue->setResolver(
                    function ($root, array $args, GraphQLContext $context, ResolveInfo $resolveInfo) use ($resolver) {
                        $user = $context->user();
                        $role = $this->directiveArgValue('role');
    
                        
                        $this->authorize($user, $role);
                        
    
                        return $resolver($root, $args, $context, $resolveInfo);
                    }
                )
        );
    }

    protected function authorize(User $user, $role): void
    {
        if (! $user->hasPermissionTo($role)) {
            throw new AuthorizationException(
                "You are not authorized to access {$this->nodeName()}"
            );
        }
    }
}
