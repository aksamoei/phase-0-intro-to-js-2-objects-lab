// Write your solution in this file!
const employee = {
    name: "Jacob Mast",
    streetAddress: "Roysambu Drive",
}
// modifies original object non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let modifiedEmployee = {...employee};
    modifiedEmployee[key] = value;
    return modifiedEmployee;
}

//modifies original object destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

//deletes key non-destructively
function deleteFromEmployeeByKey(employee, key){
    const cloneEmployee = {...employee}
    delete cloneEmployee[key];
    return cloneEmployee;
}

//deletes key destructively
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}


