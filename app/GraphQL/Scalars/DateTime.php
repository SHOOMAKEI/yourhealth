<?php

namespace App\GraphQL\Scalars;

use Carbon\Carbon;
use GraphQL\Type\Definition\ScalarType;

/**
 * Read more about scalars here http://webonyx.github.io/graphql-php/type-system/scalar-types/
 */
class DateTime extends ScalarType
{
    /**
     * Serializes an internal value to include in a response.
     *
     * @param  mixed  $value
     * @return mixed
     */
    public function serialize($value)
    {
        // Assuming the internal representation of the value is always correct
        return Carbon::createFromFormat('Y-m-d H:i:s', $value)->format('M j, Y G:ia');

        // TODO validate if it might be incorrect
    }

    /**
     * Parses an externally provided value (query variable) to use as an input
     *
     * @param  mixed  $value
     * @return mixed
     */
    public function parseValue($value)
    {
        return  Carbon::createFromFormat('Y-m-d H:i:s', $value)->format('F j, Y G:ia');
    }

    /**
     * Parses an externally provided literal value (hardcoded in GraphQL query) to use as an input.
     *
     * E.g.
     * {
     *   user(email: "user@example.com")
     * }
     *
     * @param  \GraphQL\Language\AST\Node  $valueNode
     * @param  mixed[]|null  $variables
     * @return mixed
     */
    public function parseLiteral($valueNode, ?array $variables = null)
    {
        // TODO implement validation

        return $valueNode->value;
    }
}
