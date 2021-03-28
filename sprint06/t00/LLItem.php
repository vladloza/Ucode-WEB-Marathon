<?php
    class LLItem
    {
        public $data;
        public $next;
    
        public function __construct($value)
        {
            $this->data = $value;
            $this->next = NULL;
        }
    }
?>