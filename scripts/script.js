localStorage.setItem('unit_id', 'unit1'); // default value

function getUnitID(button_id) {
    // unit_number = button_id;
    localStorage.setItem('unit_id', button_id);
    localStorage.setItem('is_quiz', "false");
    // console.log(unit_number)
}
