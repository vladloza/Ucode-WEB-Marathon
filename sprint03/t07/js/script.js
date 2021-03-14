class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    add(value) {
        if(this.data === null)
            this.data = value;
            else if (this.next === null) {
                this.next = new LinkedList(value);
            }
            else {
                this.next.add(value);
            }
    }
    remove(value) {
        if(this.data === value) {
            if(this.next !== null) {
                this.data = this.next.data;
                this.next = this.next.next;
                this.remove(value);
            }
            else this.data = null;
        }
        else if (this.next !== null && this.next.data === value) {
            this.next = this.next.next;
            this.remove(value);
        }
        else if (this.next !== null && this.next.data != value) {
            this.next.remove(value);
        }
    }
    contains(value) {
        let temp = this;
        while(temp) {
            if(temp.data == value)
                return true;
            temp = temp.next;
        }
        return false;
    }
    [Symbol.iterator]() {
        return {
            current: this,
            next() {
                if (this.current === null || this.current.data === null) {
                    return {
                        done: true
                    }
                }
                else {
                    this.value = this.current.data
                    this.current = this.current.next;
                    return {
                        value: this.value,
                        done: false
                    }
                }
            }
        }
    }
    clear() {
        this.data = null;
        this.next = null;
    }
    count() {
        let count = 0; 
        let node = this.data;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
    log() {
        let temp = this;
        let str = '';
        while(temp) {
            if (temp.data !== null) {
                if (str.length !== 0) {
                    str += ", ";
                }
                str += temp.data;
            }
            temp = temp.next;
        }
        console.log(str);
    }

}
let createLinkedList = function (arr) {
    let result = new LinkedList(null);
    arr.forEach(function (item, i, arr) { result.add(item); });
    return result;
}


