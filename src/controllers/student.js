const Student = require('../models/student');



    exports.createStudent = (req, res) => {

        const {
            fullName,
            Age,
            Gender,
            Address
        } = req.body;
        const _student = new Student({
            fullName,
            Age,
            Gender,
            Address,
        });

        _student.save((error, data) => {
            if (error) {
                res.status(400).json({
                    message: 'something wrong'
                });
            }
            if (data) {
                return res.status(201).json({
                    message: 'Student added successfully..!!!'
                });
            }
        });
}
