const express = require('express');
const router = express.Router();

// @route    GET api/contacts
// @desc     Get user contacts
// @access   Private

router.get('/', (req, res) => {
 res.send('get all user contacts');
});

// @route    POST api/contacts
// @desc     Add new Contact
// @access   Private

router.post('/', (req, res) => {
 res.send('Add new contact');
});


// @route    PUT api/contacts/:id
// @desc     Update Contact
// @access   Private

router.put('/:id', (req, res) => {
 res.send('Update contact');
});

// @route    DELETE api/contacts/:id
// @desc     Delete Contact
// @access   Private

router.delete('/:id', (req, res) => {
 res.send('Delete contact');
});

module.exports = router;