/*
create a function that acceps a string value and an object data and string key 
traverse the data and sort the data depending on the value 

where key is the key of data[i] 
and value is the value you are searching for 


USAGE:  import { filter } from "../"; //import the filter function
		wherever needed just invoke the function 
		i.e:
			filter('what your seaching for as string ', 'what you want sorted', data = { id: {...moredata}} )
RETURNS: 		
		array of the sorted data
*/
export function filter(value, key, data) {
	// Keep track of the so rted array
	const sorted = [];
	// traverse the data and look for key = alternatives
	for (let i = 0; i < Object.keys(data).length; i++) {
		// check what value it is
		if (data[i][key] === value) {
			// add that element to the array
			sorted.push(data[i]);
		}
	}
	return sorted;
}
