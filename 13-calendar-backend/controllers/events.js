const { response } = require('express');
const { generateJwt } = require('../helpers/jwt');
const Event = require('../models/Event');

const getEvents = async (req, res = response) => {
    try {
        const events = await Event.find({}).populate('user', 'name');
        return res.status(200).json({
            ok: true,
            events
        });
    } catch (e) {
        console.log(e);
        return res.json({
            ok: false,
            msg: "error getting event"
        });
    }
}

const createEvent = async (req, res = response) => {

    const event = new Event(req.body);

    try {
        event.user = req.uid;
        const eventSaved = await event.save();
        return res.status(200).json({
            ok: true,
            eventSaved,
            msg: "create event"
        });
    } catch (e) {
        console.log(e);
        return res.json({
            ok: false,
            msg: "error creating event"
        });
    }
}

const updateEvent = async (req, res = response) => {

    const uid = req.uid;
    const eventId = req.params.id;
    try {
        const event = await Event.findById(eventId);
        if (!event)
            return res.status(404).json({
                ok: false,
                msg: "error updating event"
            });

        if (event.user.toString() !== uid)
            return res.status(401).json({
                ok: false,
                msg: "error updating event, unauthorized"
            });

        const newEvent = {
            ...req.body,
            user: uid
        };

        const eventSaved = await Event.findByIdAndUpdate(eventId, newEvent, { new: true });


        return res.status(200).json({
            ok: true,
            eventSaved
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: "error updating event"
        });
    }
}

const deleteEvent = async (req, res = response) => {

    const uid = req.uid;
    const eventId = req.params.id;
    try {
        const event = await Event.findById(eventId);
        if (!event)
            return res.status(404).json({
                ok: false,
                msg: "error deleting event, event not found"
            });

        if (event.user.toString() !== uid)
            return res.status(401).json({
                ok: false,
                msg: "error deleting event, unauthorized"
            });

        const eventDeleted = await Event.findByIdAndDelete(eventId);

        if (eventDeleted)
            return res.status(200).json({
                ok: true
            });
        else
            return res.status(500).json({
                ok: false,
                msg: "error trying to delete event"
            });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: "error deleting event"
        });
    }
}


module.exports = { getEvents, createEvent, updateEvent, deleteEvent };