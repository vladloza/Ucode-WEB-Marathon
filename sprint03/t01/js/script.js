String.prototype.removeDuplicates = function() {
    let removed = new Set(this.valueOf().split(' '));
    removed.delete(' ');
    return Array.from(removed).join(' ');
}