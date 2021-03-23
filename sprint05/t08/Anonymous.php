<?php
function get_anonymous($name, $alias, $afiliation)
{
    return new class($name,$alias, $afiliation) {
        public function __construct($name, $alias, $afiliation)
        {
            $this->name = $name;
            $this->alias = $alias;
            $this->afiliation = $afiliation;
        }
        public function getName() {
            return $this->name;
        }
        public function getAlias() {
            return $this->alias;
        }
        public function getAffiliation() {
            return $this->afiliation;
        }
    };
}