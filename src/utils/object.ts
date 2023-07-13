export const execlude = (object: any, fieldsToRemove: any[]) => {
	const newObject = JSON.parse(JSON.stringify(object)); //сереалізація
	fieldsToRemove.forEach((key) => {
		delete newObject[key]
	});

	return newObject;
}

export const set = (object: any, key: string, value: any) => {
	for (let objektKey in object) {
		
		if (typeof object[objektKey] === "object") {
			set(object[objektKey], key, value);
		}else{
			if( key === objektKey) {
				object[key] = value
			}
		}
	}
}