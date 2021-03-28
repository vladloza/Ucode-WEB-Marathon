<?php
    class LList implements IteratorAggregate {
    public $first = NULL;
    private $last = null;
    private $count = 0;

    public function getLast(): LLItem
    {
        return $this->last;
    }

    public function getFirst(): LLItem
    {
        return $this->first;
    }

    public function add($value)
    {
        $item = new LLItem($value);
        if (!$this->first) {
            $this->last = $item;
            $this->first = $this->last;
        } else {
            $tmp = $this->first;
            while ($tmp) {
                if ($tmp->next)
                    $tmp = $tmp->next;
                else {
                    $tmp->next = $item;
                    break;
                }
            }
            $this->last->next = $item;
            $this->last = $item;
        }
        $this->count++;
    }

    public function addArr(array $array)
    {
        foreach ($array as $value) {
            $this->add($value);
        }
    }

    public function remove($value): bool
    {
        $tmp = $this->first;
        if ($tmp->data == $value) {
            if ($tmp->next)
                $this->first = $tmp->next;
            else $this->first = null;
        }

        while ($tmp->next) {
            if ($tmp->next->data == $value) {
                if ($tmp->next->next) 
                    $tmp->next = $tmp->next->next;
                else 
                    $tmp->next = NULL;
                return true;
            }
            $tmp = $tmp->next;
        }
        return false;
    }

    public function removeAll($value)
    {
        $check = true;
        while ($check) {
            $check = $this->remove($value);
        }
    }

    public function contains($value)
    {
        $tmp = $this->first;
        while ($tmp) {
            if ($tmp->data == $value) {
                return 1;
            }
            if ($tmp->next)
                $tmp = $tmp->next;
            else break;
        }
        return 0;
    }

    public function clear()
    {
        $this->first = null;
    }

    public function count(): int
    {
        return $this->count;
    }

    public function __toString(): string
    {
        return $this->toString();
    }

    public function toString()
    {
        $tmp = $this->first; 
        $arr = []; 
        while($tmp) { 
            array_push($arr, $tmp->data); 
            $tmp = $tmp->next; 
        } 
        echo(implode(', ', $arr));
    }

        public function getIterator() { 
            $current = $this->first; 
            $arr = []; 
            while($current) { 
                array_push($arr, $current->data); 
                $current = $current->next; 
            } 
            return new ArrayIterator($arr); 
        }
    }