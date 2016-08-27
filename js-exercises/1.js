function indexOf(arr,item)  
{     
    var j = -1, i = 0;
		if (!Array.isArray(arr)) return -2;
		for (i=0;i<arr.length; i++) {
	    if (arr[i] === item) {
        return i;
    	}
		}
		return j;   
}