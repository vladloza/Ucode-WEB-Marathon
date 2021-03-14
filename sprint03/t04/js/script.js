let houseMixin = {
    wordReplace(str1, str2) {
        let desc = this.desc.split(' ');
        for(let i = 0; i < desc.length; i++)
            if(desc[i] === str1)
                desc[i] = str2;
        this.desc = desc.join(' ');
        return this;
    },
    wordInsertAfter(str1, str2) {
        let desc = this.desc.split(' ');
        for(let i = 0; i < desc.length; i++) {
            if(desc[i] === str1)
                desc.splice(i, 0, str2);
        }
        this.desc = desc.join(' ');
        return this;
    },
    wordDelete(str) {
        let desc = this.desc.split(' ');
        for(let i = 0; i < desc.length; i++) {
            if(desc[i] === str1)
                desc.splice(i, 1);
        }
        this.desc = desc.join(' ');
        return this;
    }, 
}