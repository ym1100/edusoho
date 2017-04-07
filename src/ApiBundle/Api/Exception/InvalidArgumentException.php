<?php

namespace ApiBundle\Api\Exception;

class InvalidArgumentException extends ApiException
{
    const HTTP_CODE = 422;

    const TYPE = 'INVALID_ARGUMENT';

    public function __construct($message = 'INVALID_ARGUMENT', $code = 9, \Exception $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}