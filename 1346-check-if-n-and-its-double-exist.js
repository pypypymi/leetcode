/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i!==j){
                if(arr[i]/arr[j]==2 || (arr[i]==0 && arr[j]==0)){
                    return true
                }
            }
        }
    }
    return false
};
