export function isAnagram(string1: string, string2: string) {
    let len1 = string1.length;
    let len2 = string2.length;
    if (string1.length !== string2.length) {
        return false;
    }

    const str1 = string1.split('').sort().join('');
    const str2 = string2.split('').sort().join('');
    if (str1 === str2) {
        return true;
    }
    return false;
}