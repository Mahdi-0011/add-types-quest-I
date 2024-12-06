import { user } from "../main";

export const averageAge = (allUsers: user[]) => {
	let allAges = 0;
	allUsers.forEach((u) => {
		allAges += u.age;
	});
	return allAges / allUsers.length;
};

export const averageNumberOfHobbies = (allUsers: user[]) => {
	let AllHobbies = 0;
	allUsers.forEach((u) => {
		AllHobbies += u.hobby.length;
	});
	return AllHobbies / allUsers.length;
};
