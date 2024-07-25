let role :[string, string, number, number, boolean?] = ['admin', 'manager', 1, 3,];
role.push(true);
//role[1] = 10 //incorrect because we cannot define number to string type
role[1] = 'developer';
