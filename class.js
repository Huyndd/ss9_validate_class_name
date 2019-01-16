var regexp = /^(C|A|P)[0-9]{4}(G|H|I|K|L|M)$/;

function invalidClassName(str) {
    regexp = /^(C|A|P)[0-9]{4}(G|H|I|K|L|M)$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}